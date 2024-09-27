# WoT - Introduction & Raspberry Pi Setup

This document aims to introduce the Web of Things (WoT) as building blocks for applications based on the IoT devices. As a growing area, IoT services and application have a huge potential. From home automation to smart-grid passing by industrial manufacturers, IoT is gaining popularity as a potential solution to address their need. Several technologies can be used to build an IoT application mainly because of the specific constraints of the devices. This creates interoperability challenges for communication between devices. WoT offers an approach to expose and consume IoT resources as web resources.

WoT is an initiative by the W3C to apply on the IoT device the same principles as for the existing web resources across the Internet. The main idea behind WoT is exposing virtual or physical devices as a resource with a description of its capabilities. That resource can then be accessed from a browser or another device in the same manner as a web page. WoT is not a proposition for a new communication protocol between devices, it uses existing protocols to communicate with the devices according to their communication capabilities. It presents a set of architectural and programming patterns for building interoperable devices based on the following three fundamentals:

* Uniform Resource Identifier (URI) for identifying devices and their descriptions
* A wide variety of existing protocols for accessing the devices
* A description of the description as metadata used both for interoperability and presentability purposes

## WoT Architecture

The central component of the WoT architecture is “WoT Servient” which is functional virtual device. A Servient extends the IoT physical devices by providing standard access and control capabilities to the devices.

A Servient provides a protocol agnostic runtime for the application using the resource model. Servient application uses this resource model which enables interoperability with other Servients and users that are using multiple bindings. Servient may act at the same time as a client and a server according to the applications' behavior. The resources associated to a Servient instance are described in a Thing description. It uses JSON-LD to make this description readable by both humans and machines. Such a description enhances the machine to machine communication and makes the Things ready for the Semantic Web.

A Servient instance can run on multiple platforms at different layer of the IoT network. It can be deployed inside the IoT device itself in condition to have a minimum processing power. It may also be deployed inside a smart hub or edge node to adapt legacy devices to the architecture. This adaptation role can also be provided by a Servient deployed on the cloud. Last but not least, Servient instances can be accessed as web resources by a smartphone and web browsers.

# Setup the Raspberry Pi Zero W

We assume that the Raspberry Pi used is a freshly installed one with Debian. First, it needs to be configured for a network connection. Second, the environment needs to be configured mainly by installing Node.js and a few other dependencies. Finally, things-web needs to be installed on the system.

## Network configuration

Insert the SD card into your card reader and create the two following files as illustrated in the image below:

wpa_supplicant.conf: is the file that is used to configure your WiFi on the command line. This file must contain the following configuration where ###### is your WiFi password:

```bash
country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
  ssid="IoT-testbed-2.4"
  psk="#########"
  key_mgmt=WPA-PSK
  proto=RSN
  pairwise=CCMP
  group=CCMP
  auth_alg=OPEN
}
```

## Installing Node.js

Ideally, Node.js 10 should be installed. It works also with Node.js 8 but Node.js 10 is highly recommended. To install the Node.js version 10, make sure that the right architecture is used. Below the commands for the Raspberry Pi Zero W:

```bash
wot@node-wot:~$ wget https://nodejs.org/dist/v10.15.0/node-v10.15.0-linux-armv6l.tar.xz
wot@node-wot:~$ sudo mkdir /usr/local/lib/nodejs
wot@node-wot:~$ sudo tar -xJvf node-v10.15.0-linux-armv6l.tar.xz -C /usr/local/lib/nodejs
wot@node-wot:~$ sudo mv /usr/local/lib/nodejs/node-v10.15.0-linux-armv6l /usr/local/lib/nodejs/node-v10.15.0
wot@node-wot:~$ nano ~/.profile
```

Inside the ~/.profile, add the following:

```bash
export NODEJS_HOME=/usr/local/lib/nodejs/node-v10.15.0/bin
export PATH=$NODEJS_HOME:$PATH
```

```bash
wot@node-wot:~$ . ~/.profile
wot@node-wot:~$ node -v
wot@node-wot:~$ npm version
```

## Cloning the repository

The reference implementation of the Web of Things is published in GitHub as node-wot project at GitHub. The project is part of the Eclipse Foundation. Use the command below to clone the repository on your local system:

```bash
wot@node-wot:~$ sudo apt install git
wot@node-wot:~$ git clone https://github.com/eclipse-thingweb/node-wot
```

## Installation

The installation process is composed of mainly two steps. The first step installs the Node.js dependences. The second step installs and builds the node-wot project.

### Installing the packages
Node-wot requires dependencies such as Typescript, lerna, etc. By running the command below, those dependencies are installed:

```bash
wot@node-wot:~$ cd node-wot
wot@node-wot:~$ npm install
```

### Building the libraries

As the node-wot project is mainly developed using Typescript, tsc command needs to be executed to trans-compile that code to JavaScript. The command below builds the project and its packages:

```bash
wot@node-wot:~$ npm run build
```

### Running the example Servient

Run the command below to expose a “server” Servient:

```bash
wot@node-wot:~$ node packages/cli/dist/cli.js examples/scripts/counter.js
```

You can access the Thing Description generated at http://localhost:8080/counter.

## Thing Description

The Thing Description (TD) is one major element of the web of Things approach. It is a JSON or JSON-LD object that describes a Thing. As illustrated below, it describes aspects such as name, description, list of accessible properties and list of available actions.

### Properties

The property section describes interesting information about the exposed property as illustrated below. It offers also the “href” that defines the URI that the client can use to access this property as a resource.

### Actions

The actions section describe the actions exposed by the Thing. They enable a client to remotely invoke the function associated to this action. Like for the properties, the actions expose an “href” URI that can be used to invoke those actions as illustrated below:

### Standard description

The full list of the elements that can be used in a TD is available in the W3C document at https://www.w3.org/TR/wot-thing-description/.

Once you create a Servient using the reference implementation, a TD respecting the standard is automatically generated for your exposed Thing. The next section describes how to create a Servient and access its TD.

## A Servient

Web of Things programming model is based on the notion of “Servient”. A Servient is a program developed using the WoT Scripting API and can behave at the same time as a server and a client. For example, a Servient can be a client for a field device (light bulb) and server for the mobile application that is used to control that device.

### Servient’s structure

As previously stated, a Servient can be both a client and a server. The structure of a Servient varies depending on the target behavior. However, it is centered on the Thing Description. To expose a new Thing (server mode), you need first to create the Thing by passing some metadata to the Scripting API as illustrated below:

```js
WoT.produce({
    title: "counter",
    description: "counter example Thing",
    "@context": "https://www.w3.org/2019/wot/td/v1",
    properties: {
        count: {
            type: "integer",
            description: "current counter value",
            observable: true,
            readOnly: true,
        }
    },
    actions: {
        increment: {
            description: "Incrementing counter value",
            uriVariables: {
                step: { type: "integer", minimum: 1, maximum: 250 },
            },
        }
    }
})
    .then((thing) => {
        console.log("Produced " + thing.getThingDescription().title);

        // init property values
		    // ...
        // set property handlers
		    // ...
        // set action handlers
		    // ...

        // expose the thing
        thing.expose().then(() => {
            console.info(thing.getThingDescription().title + " ready");
        });
    })
    .catch((e) => {
        console.log(e);
    });
```

This code initiates the creation of a Thing named “counter” with its interactions and adds metadata such as context to that Thing.

This will create the property, so it can be exposed and accessed both using the Scripting API and using a binding (by default, the HTTP, and CoAP bindings are used to expose Things on node-wot).

Once your run the Servient, the exposed property will be accessible at http://localhost:8080/counter/properties/count as illustrated below:

Before we expose properties/actions/events, we need to add handlers (e.g., an action handler is added as described below).

```js
thing.setActionHandler("increment", async (params, options) => {
  let step = 1;
  if (options && typeof options === "object" && "uriVariables" in options) {
    if ("step" in options.uriVariables) {
    const uriVariables = options.uriVariables as Record<string, unknown>;
    step = uriVariables.step as number;
  }
}
const newValue = count + step;
console.log("Incrementing count from " + count + " to " + newValue + " (with step " + step + ")");
count = newValue;
return undefined;
});
```

Within an action, you can retrieve properties by accessing its local variable (i.e., count in handler above).

The full counter example is available in the repository under examples/scripts/counter.js.

## Client Mode

Node-wot allows you also to consume existing Things exposed using the WoT. Assume that we have our counter example running on a machine, we can create a “client” to communicate with that counter.

First step is to create the Thing that we are willing to consume. For that, we use the exposed Thing descriptor to create that “client” Thing as illustrated below:

```js
WoTHelpers.fetch("http://localhost:8080/counter")
  .then(async (td) => {
      // using await for serial execution (note 'async' in then() of fetch())
      try {
          const thing = await WoT.consume(td);
          console.info("=== TD ===");
          console.info(td);
    // ...
      } catch (err) {
          console.error("Script error:", err);
      }
  })
  .catch((err) => {
      console.error("Fetch error:", err);
  });
```

The created Thing enables access to all the properties and actions exposed by the “server” Thing. They can be accessed as described below:

```js
// read property #1
const read1 = await thing.readProperty("count");
console.log("count value is", await read1.value());

// increment property #1 (without step)
await thing.invokeAction("increment");
const inc1 = await thing.readProperty("count");
console.info("count value after increment #1 is", await inc1.value());
```

Modifying those properties by invoking the actions result on modifications on the “server” Thing. The full client example is available in the repository at examples/scripts/counter-client.js, which can be run using the same cli.js but with the --clientonly flag:

```bash
wot@node-wot:~$ node packages/cli/dist/cli.js examples/scripts/counter.js --clientonly
```

## Conclusion

WoT presents an interesting approach to build IoT applications. Its adoption by the industry will be a significant step towards fighting the risk of fragmentation that may limit the development of IoT applications. The Scripting API provides a way to substantially increase the interoperability.

References
1. https://www.w3.org/TR/wot-architecture/
2. https://github.com/w3c/wot