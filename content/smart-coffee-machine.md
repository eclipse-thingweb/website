# Smart coffee machine and node-wot API usage

This article is a tutorial which considers a fictional smart coffee machine in order to demonstrate the capabilities of Web of Things (WoT) and the usage of [node-wot API](https://github.com/eclipse/thingweb.node-wot).
In the world of Web of Thing properties, actions and events provided by a Thing are called Property Affordances, Action Affordances and Event Affordances, respectively.
The difference of each becomes clear as we proceed the tutorial.
So, we imagine a smart coffee machine which provides the following Property Affordances:

- `allAvailableResources` - that is a current level of all available resources (i.e. water, milk, chocolate and coffee beans) given as an integer percentage for each particular resource.
This data is read-only and is obtained from the machine's sensors but can also be set manually via the `availableResourceLevel` property (next one) in case the sensors are broken.
- `availableResourceLevel` - that is a current level of a particular resource, which should be specified as a query string (called `uriVariables` in node-wot).
This data is obtained from the previous property (`allAvailableResources`).
The difference is in usage of `uriVariables` and that this property is also writable, so that it can be used to override the values of `allAvailableResources`.
- `possibleDrinks` - a read-only list of possible drinks in general.
Doesn't depend on the available resources.
- `servedCounter` - the total number of served beverages.
This property is writable.
The data is obtained from the machine but can also be set manually (thus, writable).
The case for that is explained below.
- `maintenanceNeeded` - a boolean value showing whether the machine needs a maintenance.
The property is observable, which means in WoT that a user can get notified every time the value of this property changes.
Automatically set to true when the `servedCounter` property exceeds 1000.
- `schedules` - a read-only array containing scheduled tasks, i.e. a task which should be performed according to a specific schedule.

The idea behind `servedCounter` and `maintenanceNeeded` is that, every time `servedCounter` exceeds 1000 the `maintenanceNeeded` flag is set to true.
And since this value is observable a "maintainer" gets notified, who then comes and performs the maintenance of the machine, and afterwards sets the `servedCounter` and `maintenanceNeeded` to 0 and false, respectively.

The smart coffee machine has also the following Action Affordances:

- `makeDrink` - make a drink from the list of possible beverages.
Accepts drink id, size and quantity as `uriVariables`.
Brews one medium americano if no `uriVariables` are specified.
- `setSchedule` - add a scheduled task to the `schedules` property. Accepts drink id, size, quantity, time and mode as body of a request (i.e. a request payload).
Assumes one medium americano if not specified, but time and mode are mandatory fields.
Notice that, even though the `schedules` property is read-only, it's being modified through the `setSchedule` action.
That's the same principle as creating setters for private properties in object-oriented programming languages.

Finally, the coffee machine has the following Event Affordances:

- `outOfResource` - an out-of-resource event.
Emitted when the available resource level is not sufficient for a desired drink.


## Expose the Thing

Two main functionalities of node-wot is creating a WoT Thing and interacting with another WoT Thing.
These functionalities can also be combined to have a Thing interacting with other Things.
Creating a WoT Thing is called exposing or producing a Thing.
In order to expose our smart coffee machine we need to invoke `produce` method of the WoT object.
It takes a Thing Description (TD) as the only parameter.
Note that, this TD can be set only partially.
The full TD will then be produced by the `produce` method, assuming [default data](https://www.w3.org/TR/wot-thing-description/#sec-default-values) for non-specified TD terms and creating default protocol bindings (HTTP and CoAP).
This produced TD can then be used by other Things or clients to interact with the Thing.

{{< highlight js "linenos=table" >}}
WoT.produce({
    title: 'Smart-Coffee-Machine',
    description: `A smart coffee machine with a range of capabilities.`,
    support: 'git://github.com/eclipse/thingweb.node-wot.git',
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
{{< / highlight >}}

The full script is available at [node-wot GitHub repository](https://github.com/eclipse/thingweb.node-wot/blob/master/packages/examples/src/scripts/coffee-machine.ts).
Note that, all affordances (i.e. property, action and event) should be added withing the `produce` method.

After exposing the Thing, we need to initialize the properties and all required handlers.
This is done by chaining `.then` method after `WoT.produce()`.
Property initialization looks as follows.

{{< highlight js "linenos=table" >}}
.then( (thing) => {
    thing.writeProperty('allAvailableResources', {
        water: readFromSensor('water'),
        milk: readFromSensor('milk'),
        chocolate: readFromSensor('chocolate'),
        coffeeBeans: readFromSensor('coffeeBeans'),
    });
    thing.writeProperty('possibleDrinks', ['espresso', 'americano', 'cappuccino', 'latte', 'hotChocolate', 'hotWater']);
    thing.writeProperty('maintenanceNeeded', false);
    thing.writeProperty('schedules', []);
{{< / highlight >}}

In case a property needs a special handler when writing its value, we first need to override its `propertyWriteHandler`.
See an example below.

{{< highlight js "linenos=table" >}}
    // Override a write handler for servedCounter property,
    // raising maintenanceNeeded flag when the value exceeds 1000 drinks
    thing.setPropertyWriteHandler('servedCounter', (val) => {
        return new Promise((resolve, reject) => {
            resolve(val);
            if (val > 1000) {
                thing.writeProperty('maintenanceNeeded', true);
            }
        });
    });
{{< / highlight >}}

And then we are ready to initialize its value.

{{< highlight js "linenos=table" >}}
    thing.writeProperty('servedCounter', readFromSensor('servedCounter'));
{{< / highlight >}}

We also want to override write and read handlers for `availableResourceLevel` property, since we need to utilize `uriVariables`.

{{< highlight js "linenos=table" >}}
    thing.setPropertyWriteHandler('availableResourceLevel', (val, options) => {

        // Check if uriVariables are provided
        if (options && typeof options === 'object' && 'uriVariables' in options) {
            const uriVariables: any = options['uriVariables'];
            if ('id' in uriVariables) {
                return thing.readProperty('allAvailableResources').then((resources) => {
                    const id = uriVariables['id'];
                    resources[id] = val;
                    return thing.writeProperty('allAvailableResources', resources);
                });
            }
        }
        return new Promise((resolve, reject) => {
            resolve('Please specify id variable as uriVariables.');
        });
    });

    thing.setPropertyReadHandler('availableResourceLevel', (options) => {

        // Check if uriVariables are provided
        if (options && typeof options === 'object' && 'uriVariables' in options) {
            const uriVariables: any = options['uriVariables'];
            if ('id' in uriVariables) {
                return thing.readProperty('allAvailableResources').then((resources) => {
                    const id = uriVariables['id'];
                    return new Promise((resolve, reject) => {
                        resolve(resources[id]);
                    });
                });
            }
        }
        return new Promise((resolve, reject) => {
            resolve('Please specify id variable as uriVariables.');
        });
    });
{{< / highlight >}}

As it has already been mentioned, `maintenanceNeeded` property is observable, meaning we can get notified when its value changes.
For that, we need to provide a callback for the `observeProperty` method.

{{< highlight js "linenos=table" >}}
    thing.observeProperty('maintenanceNeeded', (data) => {
        
        // Notify a "maintainer" when the value has changed
        // (the notify function here simply logs a message to the console)
        notify('admin@coffeeMachine.com', `maintenanceNeeded property has changed, new value is: ${data}`);
    });
{{< / highlight >}}

Done with the Property Affordances!
Now we need to set up action handlers, which proceed when another Thing or client invokes the action.

{{< highlight js "linenos=table" >}}
 // Set up a handler for makeDrink action
    thing.setActionHandler('makeDrink', (params, options) => {

        // Default values
        let drinkId = 'americano';
        let size = 'm';
        let quantity = 1;
        
        // Size quantifiers
        const sizeQuantifiers: any = {'s': 0.1, 'm': 0.2, 'l': 0.3};
        
        // Drink recipes showing the amount of a resource consumed for a particular drink
        const drinkRecipes: any = {
            'espresso': { ... },
            'americano': { ... },
            'cappuccino': { ... },
            'latte': { ... },
            'hotChocolate': { ... },
            'hotWater': { ... },
        }

        // Check if uriVariables are provided
        if (options && typeof options === 'object' && 'uriVariables' in options) {
            const uriVariables: any = options['uriVariables'];
            drinkId = ('drinkId' in uriVariables) ? uriVariables['drinkId'] : drinkId;
            size = ('size' in uriVariables) ? uriVariables['size'] : size;
            quantity = ('quantity' in uriVariables) ? uriVariables['quantity'] : quantity;
        }

        // Read the current level of allAvailableResources
        return thing.readProperty('allAvailableResources').then((resources) => {
            
            // Calculate the new level of resources
            let newResources = Object.assign({}, resources);
            newResources['water'] -= Math.ceil(quantity * sizeQuantifiers[size] * drinkRecipes[drinkId]['water']);
            newResources['milk'] -= Math.ceil(quantity * sizeQuantifiers[size] * drinkRecipes[drinkId]['milk']);
            newResources['chocolate'] -= Math.ceil(quantity * sizeQuantifiers[size] * drinkRecipes[drinkId]['chocolate']);
            newResources['coffeeBeans'] -= Math.ceil(quantity * sizeQuantifiers[size] * drinkRecipes[drinkId]['coffeeBeans']);

            // Check if the amount of available resources is sufficient to make a drink
            for (let resource in newResources) {
                if (newResources[resource] <= 0) {
                    return new Promise((resolve, reject) => {
                        thing.emitEvent('outOfResource', `Low level of ${resource}: ${resources[resource]}%`);
                        resolve({result: false, message: `${resource} level is not sufficient`});
                    });
                }
            }

            // Now store the new level of allAvailableResources
            return thing.writeProperty('allAvailableResources', newResources).then(() => {
                return thing.readProperty('servedCounter').then((counter) => {
                    return new Promise((resolve, reject) => {
                        thing.writeProperty('servedCounter', counter + quantity);

                        // Finally deliver the drink
                        resolve({result: true, message: `Your ${drinkId} is in progress!`});
                    });
                });
            });
        });
    });
{{< / highlight >}}

Notice, how in case of insufficient resources the `outOfResource` event is emitted.
Note also that `uriVariables` is being passed into options variable as a second argument of the handler.
The first argument `params` contains a request body (i.e. payload of a request).

Another handler is for `setSchedule` action.

{{< highlight js "linenos=table" >}}
    // Set up a handler for setSchedule action
    thing.setActionHandler('setSchedule', (params, options) => {

        // Check if uriVariables are provided
        if (params && typeof params === 'object' && 'time' in params && 'mode' in params) {

            // Use default values if not provided
            params['drinkId'] = ('drinkId' in params) ? params['drinkId'] : 'americano';
            params['size'] = ('size' in params) ? params['size'] : 'm';
            params['quantity'] = ('quantity' in params) ? params['quantity'] : 1;

            // Now read the schedules property, add a new schedule to it and then rewrite the schedules property
            return thing.readProperty('schedules').then((schedules) => {
                schedules.push(params);
                return thing.writeProperty('schedules', schedules).then(() => {
                    return new Promise((resolve, reject) => {
                        resolve({result: true, message: `Your schedule has been set!`});
                    });
                });
            });

        }
        return new Promise((resolve, reject) => {
            resolve({result: false, message: `Please provide all the required parameters: time and mode.`});
        });
    });
{{< / highlight >}}

As mentioned above, here we use the payload of a request, therefore we utilize the `params` variable.

Done with the Action Affordances!
Now our final affordances, that is Event Affordances.
We can specify a handler for an event, which then gets executed whenever the event is emitted.
In node-wot this process is called "subscribing" for an event.

{{< highlight js "linenos=table" >}}
    // Set up a handler for outOfResource event
    thing.subscribeEvent('outOfResource', (data) => {

        // Notify an "admin" when the event is emitted
        // (the notify function here simply logs a message to the console)
        notify('admin@coffeeMachine.com', `outOfResource event: ${data}`);
    });
{{< / highlight >}}

Finally, expose the Thing!

{{< highlight js "linenos=table" >}}
    // Expose the Thing and log a message to the console
    thing.expose().then( () => { console.info(`${thing.getThingDescription().title} ready`); } ); 
    console.log(`Produced ${thing.getThingDescription().title}`);
{{< / highlight >}}

## Consume the Thing

So far we are done with the "producer" Thing and now our smart coffee machine can be interacted via any HTTP or CoAP client (default protocol bindings as mentioned above).
The produced Thing Description is available at http://127.0.0.1:8080/Smart-Coffee-Machine for HTTP and coap://127.0.0.1:5683/Smart-Coffee-Machine for CoAP.
By default, in HTTP binding the GET method is used for reading properties, PUT for writing and POST for invoking actions.
So, for example the value of `allAvailableResources` property can be read as:

{{< highlight http "linenos=table" >}}
GET /Smart-Coffee-Machine/properties/allAvailableResources HTTP/1.1
Host: 127.0.0.1:8080
{{< / highlight >}}

The value of `availableResourceLevel` property can be set as:

{{< highlight http "linenos=table" >}}
PUT /Smart-Coffee-Machine/properties/availableResourceLevel?id=water HTTP/1.1
Host: 127.0.0.1:8080
Content-Type: application/json
{{< / highlight >}}

And `makeDrink` and `setSchedule` actions can be invoked as:

{{< highlight http "linenos=table" >}}
POST /Smart-Coffee-Machine/actions/makeDrink?drinkId=hotChocolate&size=s&quantity=5 HTTP/1.1
Host: 127.0.0.1:8080
{{< / highlight >}}

{{< highlight http "linenos=table" >}}
POST /Smart-Coffee-Machine/actions/setSchedule HTTP/1.1
Host: 127.0.0.1:8080
Content-Type: application/json

{
	"drinkId": "latte",
	"size": "m",
	"quantity": 2,
	"time": "10:15",
	"mode": "everyday"
}
{{< / highlight >}}

As we already mentioned, note that one uses query string and the other one uses a payload.

We can also create a consumer Thing (i.e. a client) for our smart coffee machine using the node-wot API.
In order to create a consumer Thing, we need to invoke `fetch` method of the WoTHelpers object giving it an exposed Thing Description as the only parameter, and then invoke `consume` method of the WoT object as follows.

{{< highlight js "linenos=table" >}}
// We could also use CoAP here
WoTHelpers.fetch("http://127.0.0.1:8080/Smart-Coffee-Machine").then(async (td) => {

    try {
        let thing = await WoT.consume(td);
        log('Thing Description:', td);

    } catch (err) {
        console.error('Script error:', err);
    }

});
{{< / highlight >}}

The full "client" script is available at [node-wot GitHub repository](https://github.com/eclipse/thingweb.node-wot/blob/master/packages/examples/src/scripts/coffee-machine-client.ts).
Notice that, we are awaiting asynchronous functions to complete before proceeding, which is quite logical here.
Remember that we need the `async` keyword in the outer function in order to use `await` inside the function.
We could also chain the asynchronous `consume` method with other methods using `.then`.
But let's stick with `async/await` for our example.
A property can be read using `thing.readProperty` method.

{{< highlight js "linenos=table" >}}
        // Read property allAvailableResources
        let allAvailableResources = await thing.readProperty('allAvailableResources');
        log('allAvailableResources value is:', allAvailableResources);
});
{{< / highlight >}}

A property can be written using `thing.writeProperty` method.

{{< highlight js "linenos=table" >}}
        // Now let's change water level to 80
        await thing.writeProperty('availableResourceLevel', 80, {'uriVariables': {'id': 'water'}});
});
{{< / highlight >}}

Notice on usage of `uriVariables` here.
In the same manner they can be used when reading properties which utilize `uriVariables`.

{{< highlight js "linenos=table" >}}
        // And see that the water level has changed
        let waterLevel = await thing.readProperty('availableResourceLevel', {'uriVariables': {'id': 'water'}});
        log('waterLevel value after change is:', waterLevel);
});
{{< / highlight >}}

It's also possible to set a client-side handler for observable properties.

{{< highlight js "linenos=table" >}}
        thing.observeProperty('maintenanceNeeded', (data) => {
            log('maintenanceNeeded property has changed! New value is:', data);
        });
});
{{< / highlight >}}

Notice that, here we don't need to await for a function to complete, since observing a property is a persistent action.

We can invoke an action using `thing.invokeAction` method.

{{< highlight js "linenos=table" >}}
        // Now let's make 3 cups of latte!
        let makeCoffee = await thing.invokeAction('makeDrink', undefined, {'uriVariables': {'drinkId': 'latte', 'size': 'l', 'quantity': 3}});
        if (makeCoffee['result']) {
            log('Enjoy your drink!', makeCoffee);
        } else {
            log('Failed making your drink:', makeCoffee);
        } 
{{< / highlight >}}

Notice on usage of `uriVariables` here.
They are passed as a third argument, whereas the second one is the payload of a request.
This can be well noted on invoking of `setSchedule` action.

{{< highlight js "linenos=table" >}}
        // Let's add a scheduled task
        let scheduledTask = await thing.invokeAction('setSchedule', {
            'drinkId': 'espresso',
            'size': 'm',
            'quantity': 2,
            'time': '10:00',
            'mode': 'everyday'
        });
        log(scheduledTask['message'], scheduledTask);
{{< / highlight >}}

It's also possible to set a client-side handler for events.

{{< highlight js "linenos=table" >}}
        thing.subscribeEvent('outOfResource', (data) => {
            log('outOfResource event:', data);
        });
{{< / highlight >}}

Again, here we don't need to await for a function to complete, since subscribing for an event is a persistent action.
