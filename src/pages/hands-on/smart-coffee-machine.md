# Smart coffee machine and node-wot API usage

## Introduction

This article is a tutorial which considers a fictional smart coffee machine in order to demonstrate the capabilities of Web of Things (WoT) and the usage of node-wot API. In the world of Web of Thing properties, actions and events provided by a Thing are called Property Affordances, Action Affordances and Event Affordances, respectively. The difference of each becomes clear as we proceed the tutorial. So, we imagine a smart coffee machine which provides the following Property Affordances:

* allAvailableResources - that is a current level of all available resources (i.e. water, milk, chocolate and coffee beans) given as an integer percentage for each particular resource. This data is read-only and is obtained from the machine’s sensors but can also be set manually via the availableResourceLevel property (next one) in case the sensors are broken.
* availableResourceLevel - that is a current level of a particular resource, which should be specified as a query string (called uriVariables in node-wot). This data is obtained from the previous property (allAvailableResources). The difference is in usage of uriVariables and that this property is also writable, so that it can be used to override the values of allAvailableResources.
* possibleDrinks - a read-only list of possible drinks in general. Doesn’t depend on the available resources.
* servedCounter - the total number of served beverages. This property is writable. The data is obtained from the machine but can also be set manually (thus, writable). The case for that is explained below.
* maintenanceNeeded - a boolean value showing whether the machine needs a maintenance. The property is observable, which means in WoT that a user can get notified every time the value of this property changes. Automatically set to true when the servedCounter property exceeds 1000.
* schedules - a read-only array containing scheduled tasks, i.e. a task which should be performed according to a specific schedule.

The idea behind servedCounter and maintenanceNeeded is that, every time servedCounter exceeds 1000 the maintenanceNeeded flag is set to true. And since this value is observable a “maintainer” gets notified, who then comes and performs the maintenance of the machine, and afterwards sets the servedCounter and maintenanceNeeded to 0 and false, respectively.

The smart coffee machine has also the following Action Affordances:

* makeDrink - make a drink from the list of possible beverages. Accepts drink id, size and quantity as uriVariables. Brews one medium americano if no uriVariables are specified.
* setSchedule - add a scheduled task to the schedules property. Accepts drink id, size, quantity, time and mode as body of a request (i.e. a request payload). Assumes one medium americano if not specified, but time and mode are mandatory fields. Notice that, even though the schedules property is read-only, it’s being modified through the setSchedule action. That’s the same principle as creating setters for private properties in object-oriented programming languages.

Finally, the coffee machine has the following Event Affordances:

* outOfResource - an out-of-resource event. Emitted when the available resource level is not sufficient for a desired drink.

## Expose the Thing

Two main functionalities of node-wot is creating a WoT Thing and interacting with another WoT Thing. These functionalities can also be combined to have a Thing interacting with other Things. Creating a WoT Thing is called exposing or producing a Thing. In order to expose our smart coffee machine we need to invoke produce method of the WoT object. It takes a Thing Description (TD) as the only parameter. Note that, this TD can be set only partially. The full TD will then be produced by the produce method, assuming default data for non-specified TD terms and creating default protocol bindings (HTTP and CoAP). This produced TD can then be used by other Things or clients to interact with the Thing.

```js
WoT.produce({
    title: 'Smart-Coffee-Machine',
    description: `A smart coffee machine with a range of capabilities.`,
    support: 'git://github.com/eclipse-thingweb/node-wot.git',
    '@context': [
        'https://www.w3.org/2019/wot/td/v1',
    ],
    properties: {
        allAvailableResources: {
            ...
        },
        availableResourceLevel: {
            ...
        },
        possibleDrinks: {
            ...
        },
        servedCounter: {
            ...
        },
        maintenanceNeeded: {
            ...
        },
        schedules: {
            ...
        }
    },
    actions: {
        makeDrink: {
            ...
        },
        setSchedule: {
            ...
        }
    },
    events: {
        outOfResource: {
            ...
        }
    }
})
```

The full script is available at node-wot GitHub repository. Note that, all affordances (i.e. property, action and event) should be added withing the produce method.

After producing the Thing, we need to initialize the properties and all required handlers. This is done by chaining .then method after WoT.produce(). Property initialization looks as follows.

```js
.then((thing) => {
    // Initialize the property values
    allAvailableResources = {
        water: readFromSensor("water"),
        milk: readFromSensor("milk"),
        chocolate: readFromSensor("chocolate"),
        coffeeBeans: readFromSensor("coffeeBeans"),
    };
    possibleDrinks = ["espresso", "americano", "cappuccino", "latte", "hotChocolate", "hotWater"];
    maintenanceNeeded = false;
    schedules = [];
    thing.setPropertyReadHandler("allAvailableResources", async () => allAvailableResources);
    thing.setPropertyReadHandler("possibleDrinks", async () => possibleDrinks);
    thing.setPropertyReadHandler("maintenanceNeeded", async () => maintenanceNeeded);
    thing.setPropertyReadHandler("schedules", async () => schedules);
```

In case a property needs a write handler, we can set the according propertyWriteHandler. See an example below.

```js
    // set write handler for servedCounter property,
    // raising maintenanceNeeded flag when the value exceeds 1000 drinks
    thing.setPropertyWriteHandler("servedCounter", async (val) => {
        servedCounter = await val.value();
        if (servedCounter > 1000) {
            maintenanceNeeded = true;
            // Notify a "maintainer" when the value has changed
            // (the notify function here simply logs a message to the console)
            notify(
                "admin@coffeeMachine.com",
                `maintenanceNeeded property has changed, new value is: ${servedCounter}`
            );
        }
    });
```

And then we are ready to initialize its value.

```js
    servedCounter = readFromSensor("servedCounter");
```

We also want to override write and read handlers for availableResourceLevel property, since we need to utilize uriVariables.

```js
	thing.setPropertyWriteHandler("availableResourceLevel", async (val, options) => {
		// Check if uriVariables are provided
		if (options && typeof options === "object" && "uriVariables" in options) {
			const uriVariables = options.uriVariables;
			if ("id" in uriVariables) {
				const id = uriVariables.id;
				allAvailableResources[id] = await val.value();
				return;
			}
		}
		throw Error("Please specify id variable as uriVariables.");
	});
	
	thing.setPropertyReadHandler("availableResourceLevel", async (options) => {
		// Check if uriVariables are provided
		if (options && typeof options === "object" && "uriVariables" in options) {
			const uriVariables = options.uriVariables;
			if ("id" in uriVariables) {
				const id = uriVariables.id;
				return allAvailableResources[id];
			}
		}
		throw Error("Please specify id variable as uriVariables.");
	});
```

As it has already been mentioned, maintenanceNeeded property is observable, meaning we can could get notified when its value changes. For that, we need to provide a callback for the observeProperty method.

Done with the Property Affordances! Now we need to set up action handlers, which proceed when another Thing or client invokes the action.

```js
    // Set up a handler for makeDrink action
    thing.setActionHandler("makeDrink", async (_params, options) => {
        // Default values
        let drinkId = "americano";
        let size = "m";
        let quantity = 1;
        // Size quantifiers
        const sizeQuantifiers = { s: 0.1, m: 0.2, l: 0.3 };
        // Drink recipes showing the amount of a resource consumed for a particular drink
        const drinkRecipes = {
            espresso: {
                water: 1,
                milk: 0,
                chocolate: 0,
                coffeeBeans: 2,
            },
            americano: {
                water: 2,
                milk: 0,
                chocolate: 0,
                coffeeBeans: 2,
            },
            cappuccino: {
                water: 1,
                milk: 1,
                chocolate: 0,
                coffeeBeans: 2,
            },
            latte: {
                water: 1,
                milk: 2,
                chocolate: 0,
                coffeeBeans: 2,
            },
            hotChocolate: {
                water: 0,
                milk: 0,
                chocolate: 1,
                coffeeBeans: 0,
            },
            hotWater: {
                water: 1,
                milk: 0,
                chocolate: 0,
                coffeeBeans: 0,
            },
        };
        // Check if uriVariables are provided
        if (options && typeof options === "object" && "uriVariables" in options) {
            const uriVariables = options.uriVariables;
            drinkId = "drinkId" in uriVariables ? uriVariables.drinkId : drinkId;
            size = "size" in uriVariables ? uriVariables.size : size;
            quantity = "quantity" in uriVariables ? uriVariables.quantity : quantity;
        }
        // Calculate the new level of resources
        const newResources = Object.assign({}, allAvailableResources);
        newResources.water -= Math.ceil(quantity * sizeQuantifiers[size] * drinkRecipes[drinkId].water);
        newResources.milk -= Math.ceil(quantity * sizeQuantifiers[size] * drinkRecipes[drinkId].milk);
        newResources.chocolate -= Math.ceil(quantity * sizeQuantifiers[size] * drinkRecipes[drinkId].chocolate);
        newResources.coffeeBeans -= Math.ceil(quantity * sizeQuantifiers[size] * drinkRecipes[drinkId].coffeeBeans);
        // Check if the amount of available resources is sufficient to make a drink
        for (const resource in newResources) {
            if (newResources[resource] <= 0) {
                return new Promise((resolve, reject) => {
                    thing.emitEvent("outOfResource", `Low level of ${resource}: ${newResources[resource]}%`);
                    return { result: false, message: `${resource} level is not sufficient` };
                });
            }
        }
        // Now store the new level of allAvailableResources
        allAvailableResources = newResources;
        servedCounter = servedCounter + quantity;
        // Finally deliver the drink
        return { result: true, message: `Your ${drinkId} is in progress!` };
    });
```

Notice, how in case of insufficient resources the outOfResource event is emitted. Note also that uriVariables is being passed into options variable as a second argument of the handler. The first argument params contains a request body (i.e. payload of a request).

Another handler is for setSchedule action.

 ```js
    // Set up a handler for setSchedule action
    thing.setActionHandler("setSchedule", async (params, options) => {
        const paramsp = await params.value(); //  : any = await Helpers.parseInteractionOutput(params);
        // Check if uriVariables are provided
        if (paramsp && typeof paramsp === "object" && "time" in paramsp && "mode" in paramsp) {
            // Use default values if not provided
            paramsp.drinkId = "drinkId" in paramsp ? paramsp.drinkId : "americano";
            paramsp.size = "size" in paramsp ? paramsp.size : "m";
            paramsp.quantity = "quantity" in paramsp ? paramsp.quantity : 1;
            // Now add a new schedule
            schedules.push(paramsp);
            return { result: true, message: `Your schedule has been set!` };
        }
        return new Promise((resolve, reject) => {
            resolve({ result: false, message: `Please provide all the required parameters: time and mode.` });
        });
    });
```

As mentioned above, here we use the payload of a request, therefore we utilize the params variable.

Done with the Action Affordances! Now our final affordances, that is Event Affordances. We can specify a handler for an event, which then gets executed whenever the event is emitted. In node-wot this process is called “subscribing” for an event. Although it is possible to create event handlers in the producer Thing, usually it is done on the client side. So, the producer (server) only emits a particular event and the client is responsible for handling it. Below in the client part we will cover this process.

Now, finally, expose the Thing!

```js
    // Finally expose the thing
    thing.expose().then(() => {
        console.info(`${thing.getThingDescription().title} ready`);
    });
    console.log(`Produced ${thing.getThingDescription().title}`);
```

## Consume the Thing

So far we are done with the “producer” Thing and now our smart coffee machine can be interacted via any HTTP or CoAP client (default protocol bindings as mentioned above). The produced Thing Description is available at http://127.0.0.1:8080/smart-coffee-machine for HTTP and coap://127.0.0.1:5683/smart-coffee-machine for CoAP. By default, in HTTP binding the GET method is used for reading properties, PUT for writing and POST for invoking actions. So, for example the value of allAvailableResources property can be read as:

```bash
GET /smart-coffee-machine/properties/allAvailableResources HTTP/1.1
Host: 127.0.0.1:8080
```

The value of availableResourceLevel property can be set as:

```bash
PUT /smart-coffee-machine/properties/availableResourceLevel?id=water HTTP/1.1
Host: 127.0.0.1:8080
Content-Type: application/json
```

And makeDrink and setSchedule actions can be invoked as:

```bash
POST /smart-coffee-machine/actions/makeDrink?drinkId=hotChocolate&size=s&quantity=5 HTTP/1.1
Host: 127.0.0.1:8080

POST /smart-coffee-machine/actions/setSchedule HTTP/1.1
Host: 127.0.0.1:8080
Content-Type: application/json

{
	"drinkId": "latte",
	"size": "m",
	"quantity": 2,
	"time": "10:15",
	"mode": "everyday"
}
```

As we already mentioned, note that one uses query string and the other one uses a payload.

We can also create a consumer Thing (i.e. a client) for our smart coffee machine using the node-wot API. In order to create a consumer Thing, we need to invoke fetch method of the WoTHelpers object giving it an exposed Thing Description as the only parameter, and then invoke consume method of the WoT object as follows.

```js
// We could also use CoAP here
WoTHelpers.fetch("http://127.0.0.1:8080/smart-coffee-machine").then(async (td) => {

    try {
        let thing = await WoT.consume(td);
        log('Thing Description:', td);

    } catch (err) {
        console.error('Script error:', err);
    }

});
```

The full “client” script is available at node-wot GitHub repository. Notice that, we are awaiting asynchronous functions to complete before proceeding, which is quite logical here. Remember that we need the async keyword in the outer function in order to use await inside the function. We could also chain the asynchronous consume method with other methods using .then. But let’s stick with async/await for our example. A property can be read using thing.readProperty method.

```js
        // Read property allAvailableResources
        let allAvailableResources = await (await thing.readProperty("allAvailableResources")).value();
        log("allAvailableResources value is:", allAvailableResources);
});
```

A property can be written using thing.writeProperty method.

```js
        // Now let's change water level to 80
        await thing.writeProperty("availableResourceLevel", 80, { uriVariables: { id: "water" } });
});
```

Notice on usage of uriVariables here. In the same manner they can be used when reading properties which utilize uriVariables.

```js
        // And see that the water level has changed
        const waterLevel = await (
            await thing.readProperty("availableResourceLevel", { uriVariables: { id: "water" } })
        ).value();
        log("waterLevel value after change is:", waterLevel);
});
```

It’s also possible to set a client-side handler for observable properties.

```js
        thing.observeProperty("maintenanceNeeded", async (data) => {
            log("maintenanceNeeded property has changed! New value is:", await data.value());
        });
});
```

Notice that, here we don’t need to await for a function to complete, since observing a property is a persistent action.

We can invoke an action using thing.invokeAction method.

```js
        // Now let's make 3 cups of latte!
        const makeCoffee = await thing.invokeAction("makeDrink", undefined, {
            uriVariables: { drinkId: "latte", size: "l", quantity: 3 },
        });
        const makeCoffeep = await makeCoffee.value();
        if (makeCoffeep.result) {
            log("Enjoy your drink!", makeCoffeep);
        } else {
            log("Failed making your drink:", makeCoffeep);
        }
```

Notice on usage of uriVariables here. They are passed as a third argument, whereas the second one is the payload of a request. This can be well noted on invoking of setSchedule action.

```js
        // Let's add a scheduled task
        const scheduledTask = await thing.invokeAction("setSchedule", {
            drinkId: "espresso",
            size: "m",
            quantity: 2,
            time: "10:00",
            mode: "everyday",
        });
        const scheduledTaskp = await scheduledTask.value();
        log(scheduledTaskp.message, scheduledTaskp);
        // See how it has been added to the schedules property
        const schedules = await (await thing.readProperty("schedules")).value();
        log("schedules value: ", schedules);
```

As it is already mentioned above, we also want a client to subscribe for events emitted from the producer Thing.

```js
        // Let's set up a handler for outOfResource event
        thing.subscribeEvent("outOfResource", async (data) => {
            // Here we are simply logging the message when the event is emitted
            // But, of course, could have a much more sophisticated handler
            log("outOfResource event:", await data.value());
        });
```

Again, here we don’t need to await for a function to complete, since subscribing for an event is a persistent action.

Running scripts from node-wot repository
As it is mentioned above, these example scripts are available at node-wot GitHub repository. In order to run them do the following:

```bash
# 1. Clone the repo
git clone https://github.com/eclipse-thingweb/node-wot
# 2. cd to the project's root directory
cd node-wot
# 3. Install dependencies 
npm install
# 4. Build the project
npm run build
```

Now you can run the scripts as follows:

```bash
# 1. Run the producer Thing ("server")
node packages/cli/dist/cli.js examples/scripts/smart-coffee-machine.js
# 2. Run the consumer Thing ("client")
node packages/cli/dist/cli.js examples/scripts/smart-coffee-machine-client.js --clientonly
```

If you want to add your own example scripts be sure to follow the workflow.

In case you want to just consume a Thing you can use a tool like the Browsified node-wot. It allows you to interact with Things right from your browser. There is a deployed smart coffee machine producer Thing at http://plugfest.thingweb.io:8083/smart-coffee-machine that you can consume. You can also see its property values in real-time at http://plugfest.thingweb.io/examples/smart-coffee-machine.html.

## Smart coffee machine and oAuth 2.0

Currently, node-wot supports different security schemas. In the example above we have used the NoSecurityScheme, as it is assumed by default if no security scheme is explicitly used. Node-wot also supports oAuth 2.0, so let’s extend this tutorial with the same coffee machine having oAuth 2.0 authorization.

Extend the Thing Description within the produce method with the following lines (add id, securityDefinitions and security):

```js
    title: ...
    id: 'urn:dev:wot:example:smart-coffee-machine',
    ...
    securityDefinitions: {
        oauth2_sc: {
            scheme: 'oauth2',
            flow: 'client_credentials',
            token: 'https://127.0.0.1:3000/token',
            scopes: [
                'limited',
            ],
        },
    },
    security: [
        'oauth2_sc',
    ],
    properties: {
        ...
```

Now if we run the producer and the consumer Things as before that will fail. The reason is simple - the client is not authorized. Let’s fix it.

We need an additional configuration file which will contain the appropriate credentials. The configuration file contains the following and is available as smart-coffee-machine-client.conf.json:

```js
{
    "http": {
        "allowSelfSigned": true
    },
    "credentials": {
        "urn:dev:wot:example:smart-coffee-machine": {
            "clientId" : "node-wot",
            "clientSecret": "isgreat!"
        }
    }
}
```

The first setting allows self-signed certificates, which is okay for testing and development purposes. The other setting provides the credentials in a form of “Thing id - credentials” pair. We will be using the oAuth 2.0 test server which is equipped with node-wot, and it expects exactly these clientId and clientSecret.

Now run the test oAuth server:

```bash
# 1. From the project's root directory run
cd packages/examples/src/security/oauth
# 2. Run the oAuth 2.0 test server
npm run server
```

You should see a message saying listening. Now in a different terminal run the coffee machine producer Thing as usual:

```bash
# 1. From the project's root directory
node packages/cli/dist/cli.js examples/scripts/smart-coffee-machine-oauth.js
```

Finally, from the third terminal run the coffee machine consumer Thing providing it with the configuration file we have created:

```bash
# 1. From the project's root directory
node packages/cli/dist/cli.js -f examples/scripts/smart-coffee-machine-client.conf.json examples/scripts/smart-coffee-machine-client.js --clientonly
```

Now the client interacts with the smart coffee machine as before since it is authorized by the oAuth server.