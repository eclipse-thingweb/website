---
sidebar_position: 2
title: Exposed Thing with node-wot as Dependency
description: In this document, we aim to introduce how to use the node-wot libraries to implement an Exposed Thing.
---
# Exposed Thing with node-wot as Dependency

## Introduction

In this document, we aim to introduce how to use the node-wot libraries to implement an Exposed Thing. Differently from the Thingweb Hands-on, here we will show to use TypeScript along with node-wot as an npm dependency rather than cloning a GitHub repository. The aim is to establish an easy-to-understand and reusable template that can be used to implement any Exposed Thing. Some devices that use this template can be found here.

Using TypeScript gives type safety and the separation of source and build directories. Using node-wot as an npm dependency allows faster installation and also being able to install only what is needed for the given project. For example, this way one can install only the CoAP binding if the device will only communicate with CoAP.

The source files can be found at the examples folder of node-wot. You should modify this code to match your needs.

## Code Structure

The structure can be seen in two parts:

* index.js that is run with npm run start where the different protocol bindings and parameters such as a TD directory address is added. In this file one would expect to see no device specific libraries or logic. For example, if you are moving a robot from left to right, a handler for this action should not be present. Once the index.js is set up, there should not be any need to edit this file, the work should continue in the src folder.

* src folder is where the TypeScript sources are found. Upon running npm run build the contents of this folder will be transcompiled into JavaScript and will be found in dist folder. The TypeScript file src/base.ts is where the actual logic of the Exposed Thing is. In this file, we add the TD, different interaction affordances, handlers and TD registration.

We can thus summarize it like:

* index.js: Starting point of the Exposed Thing, analogous to index.html of websites. This is also common practice for npm packages.
* src folder: Logic of the Exposed Thing in TypeScript source format
* dist folder: Transcompiled logic of the Exposed Thing in JavaScript source format that is used by index.js
* package.json: npm dependencies of the Exposed Thing project. Here you will find the different protocol bindings.

## Code Explanation

Here, we will explain what every (or most!) of the lines do. If you just want to use it, skip to What to change and get running.

### package.json

* devDependencies (lines 12-17): These are the dependencies that will be used during development time. Most importantly, wot-typescript-definitions is needed in order for TypeScript to understand what is WoT, ExposedThing etc.

```js
{
    ...
    "devDependencies": {
        "typescript": "3.3.1",
        // highlight-next-line
        "wot-typescript-definitions": "0.8.0-SNAPSHOT.22", //update this accordingly
        "@types/node": "11.9.4",
        "tslint": "5.12.1"
    }
    ...
}
```

* dependencies (lines 18-23): These are dependencies that will be used in development and runtime. Here you will put the bindings that are required. @node-wot/core is always needed so that functions like produce(), start() are available. We also use the request library for registration of the TD to a directory via HTTP and the ajv for validation of inputs with the DataSchema of the TD. Below is an example with the HTTP binding, but you can change it to CoAP or MQTT or anything else that node-wot supports.

```js
{  
  ...
  "dependencies": {
    "@node-wot/binding-http": "0.8.0", //update this accordingly
    // highlight-next-line
    "@node-wot/core": "0.8.0", //update this accordingly
    "request": "2.88.0",
    "ajv": "^6.10.2"
  }
  ...
}
```

* scripts (lines 25-30): These are the scripts that are used to build, run and clean the repository. Other than the clean script, they are cross-platform, i.e. can run on Linux, macOS or Windows.

* others: You can also change your package name, description, author, license etc. and adapt to your needs.

### index.js

index.js is the entry point of the script. Here we create and add the necessary servers such as HTTP, CoAP or MQTT to the servient and then start it. Upon start, a WoT object will be created and passed to the base.ts (or base.js when transcompiled) where the actual device implementation is.

* WotDevice = require("./dist/base.js").WotDevice (line 2) links to the actual device implementation. In case you change base.ts with another name, you should adapt this line.
* const TD_DIRECTORY = "" (line 9) specifies the TD directory URI. You can comment it out to remove the registration function.
* Servient = require("@node-wot/core").Servient (line 12) and var servient = new Servient(); (line 25) are responsible for creating a servient. Then different servers (bindings) can be added before starting it. A servient can even contain multiple exposed things.
* Bindings: Lines 14-16, 19-21 and 27-29 does linking, creating and adding of different bindings to the servient, respectively. If you want to change the bindings, you can comment them out. For each binding, the package.json file should be also changed and npm install should be run to ensure that the dependencies are installed. A change on the bindings should not cause any change in the base.ts file.
* Starting the servient (lines 31-33): After starting the servient, which does nothing without any ExposedThing, exposed thing(s) should be added. As you can see in line 32, this is where we make the reference to the WoTDevice created in the second line. You can add more than one WoTDevice (could be called anything). node-wot puts multiple ExposedThings under one servient differentiating them by their names. Thus, one can have http://localhost:8080/counter/ and http://localhost:8080/mywotdevice/ served from the servient.

### base.ts

This is where the logic of the ExposedThing is implemented and its TD can be seen.

* WoT object: The WoT object allows the use of methods such as produce() which are used with a servient. As it can be seen, in base.ts there is no link to a servient that is created in the index.js file and used to pass a WoT object. Similar to the CLI, this file relies on the WoT object which is defined using the wot-typescript-definitions in line 15.
* Request and TD registration: request is a very simple library for HTTP requests. In this script, we use it to send an HTTP POST request to a TD directory with its TD as the payload. When the ExposedThing is exposed, in line 102 the register method is called with its TD. Lines 107-122 implement the registration methods to the given TD Directory address. We wait 10 seconds before trying again, which recursively calls itself, meaning that every 10 seconds it will try to register its TD. If the TD_DIRECTORY is not defined in index.js this method will not be executed.
* JSON Schema Validation: We use ajv for JSON Schema validation, which is to this date the fastest and the most up-to-date JSON Schema validation library in npm. You can use it in the handlers of action invokes or property writes in order to validate the data sent by the Consumer. In order to use ajv, we include it in line 19 and instantiate in line 20. How it can be used is seen in line 182 where an invalid data is responded with “Invalid input” error.
* WoTDevice class: WoTDevice gets the WoT object from the servient and TD Directory address for its constructor. It has attributes thing, deviceWoT and td. thing is instantiated as a result of the produce() method in lines 88-91. td is available from an ExposedThing using the getThingDescription() method. To avoid multiple calls to this method, we save it as the td attribute. deviceWoT attribute is assigned from the WoT argument passed in the constructor is used for instantiating everything. Once the constructor gets an ExposedThing, methods for initializing different interaction affordances are called, such as initializeProperties().
* Thing Description: WoT.produce() takes as TD as argument and returns an ExposedThing. In this script, we use a TD with 1 property, 1 action and 1 event in order to demonstrate scripting for all interaction affordances. They are all named myX with X being an Interaction Affordance like property, action or event.
* Property Declarations (line 77): Here we add all needed properties as class members. Because we have one property "myProperty", we add a corresponding private member myProperty
* initializeProperties() method (line 164): This method exists in order to cleanly separate where the property handlers are created versus where they are assigned to properties. In this method, we define the properties of the WotDevice as class members, set their initial values and assign their corresponding read and write handlers.
* In line 166, we assign private class member myProperty the initial value "".
    * In line 167, we set the corresponding readPropertyHandler by assigning the corresponding myPropertyReadHandler, defined in line 124, as its callback.
* If the property is writable, we similarly call the method setPropertyWriteHandler and assign the myPropertyWriteHandler method as its callback
* initilizeActions() method (line 171): This method exists in order to cleanly separate where the action handlers are created versus where they are assigned to actions. For an action with input data, the input validation would also happen here. By assigning to invoke handler to this.myActionHandler, we call a specific action invoke handler that can be easily encapsulated, allowing easy reusability.
* Line 95: We do not call add an initialization method for events, because events do not need handlers and can be emitted from anywhere (see myActionHandler method for an example)
* myPropertyReadHandler() (line 124): This is read-handler that can be called from any setPropertyReadHandler. The logic of reading, like reading a GPIO pin, should happen here. The value of the property will be then returned in return this.myProperty. Use of async-await allows easier programming of asynchronous operations happening inside a property handler.
* myPropertyWriteHandler() (line 129): This is write-handler that can be called from any setPropertyWriteHandler. The logic of writing, like assigning the input data to the corresponding variable, should happen here. This is where you also should call the emitPropertyChange method to signal that there is a change to your property if needed. Use of async-await allows easier programming of asynchronous operations happening inside a property handler.
* myActionHandler() (line 134): This is action invoke handler that can be called from any setActionHandler. The logic of the action handling, like rotating a robot arm, should happen here. The result of the action will be then returned in return outputData. Note that there should be no outputData returned if the action has no output member. Also, we demonstrate how to emit an event in line 148. Use of async-await allows easier programming of asynchronous operations happening inside an action handler.

## What to change and get running

If you don’t need to understand everything in the code, just make sure you do the following at least before installing, building and running:

* package.json:
    * Change package.json to include the bindings you want, e.g. add "@node-wot/binding-coap": "0.8.0", to dependencies.
    * Change npm related information such as name, version etc.
* index.js:
    * Add the required bindings in index.js in 3 locations:
        * CoapServer = require("@node-wot/binding-coap").CoapServer (line 15)
        <!--* var coapServer = new CoapServer({port: 5683}); (line 20)-->
        * servient.addServer(coapServer); (line 28)
    * Change or remove the TD_DIRECTORY value in index.js (line 9)
* base.ts:
* Change the TD passed to this.WoT.produce() method in line 28
* Add member variables that will act as properties, like in line 78
* Write a property-read-handler for different properties, like in line 124
* Write a property-write-handler for different properties, like in line 131
* Write an action-invoke-handler for different actions, like in line 144
* Decide when to emit events and adapt listenToMyEvent() in line 162 if needed
* Adapt initializeProperties of line 171:
    * Assign the starting value for each property
    * Set the Read Property handler for each property by adapting line 125 for you property.
* Adapt initializeActions() of line 178:
    * set an Action Handler for each action you have, like in lines 180-190. You can use ajv for input validation.

If you don’t need to understand everything in the code, just make sure you do the following at least before installing, building and running:

* package.json:
    * Change package.json to include the bindings you want, e.g. add "@node-wot/binding-coap": "0.8.0", to dependencies.
    * Change npm related information such as name, version etc.
* index.js:
    * Add the required bindings in index.js in 3 locations:
        * CoapServer = require("@node-wot/binding-coap").CoapServer (line 15)
        <!--* var coapServer = new CoapServer({port: 5683}); (line 20)-->
        * servient.addServer(coapServer); (line 28)
    * Change or remove the TD_DIRECTORY value in index.js (line 9)
* base.ts:
* Change the TD passed to this.WoT.produce() method in line 28
* Add member variables that will act as properties, like in line 78
* Write a property-read-handler for different properties, like in line 124
* Write a property-write-handler for different properties, like in line 131
* Write an action-invoke-handler for different actions, like in line 144
* Decide when to emit events and adapt listenToMyEvent() in line 162 if needed
* Adapt initializeProperties of line 171:
    * Assign the starting value for each property
    * Set the Read Property handler for each property by adapting line 125 for you property.
* Adapt initializeActions() of line 178:
    * set an Action Handler for each action you have, like in lines 180-190. You can use ajv for input validation.

## Installation and Running

* Get the latest node.js:

```bash
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt-get install -y nodejs
```

You will need to change 10.x to a newer version if needed

* To install dependencies: npm install
* To build (transcompiling Typescript to JavaScript): npm run build
* To run the code: npm run start

### Change from Version 0.7.X to 0.8.X for Exposed Things

Version 0.8.X handles properties and interaction inputs differently than previous versions. Below is the list of changes:

* Properties are not handled internally by node-wot anymore. Property handlers need to read and write to variables or class members that are explicitly defined in the code for the Exposed Things
* The value of interaction inputs cannot be accessed directly. WoT.InteractionInput objects have a member function value() that returns a promise that will resolve to the value of the input when available. You can either use input.value().then(...) or await input.value() in an async function.

### Change from Version 0.6.X to 0.7.X for Exposed Things

Resulting from the discussions in the Scripting API, the API has changed on 28.10.2019. This was a rather big change that also resulted changes in node-wot. Below is a list of changes:

* You need to pass a full TD (but without forms) as argument to the produce() method. Before only non interaction information were passed.
* You cannot do myExposedThing.td and have to pass through myExposedThing.getThingDescription()
* WoTFactory is replaced by WoT in wot-typescript-definitions. You thus see WoT.produce() instead of thingFactory.produce()
* Since you pass a whole TD to produce() method, you don’t need addProperty, addAction and addEvent.
* Instead of this.thing.events[myEvent].emit(myPayload); there is this.thing.emitEvent(myEvent,myPayload);
* You have to use setActionHandler whereas before you could assign the handler in the addAction like addAction(name,metadata,handler).
* Since you cannot pass the initial value for a property with addProperty, you have to do a writeProperty(myInitialValue) at some point.
* You cannot change the TD of an ExposedThing, i.e. you cannot do thing.id="thingweb:io:example".

You can see a git diff [here](https://github.com/tum-esi/wot-sys/commit/6cef8530b3317d98c2a7dea389c92ba2786be892#diff-0d33955cb472f41f07397fc2687c6425R10)
