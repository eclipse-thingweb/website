---
sidebar_position: 1
title: Services
slug: /
---
# Services for W3C WoT Developers

Eclipse Thingweb provides services to support Web of Things developers. These services are listed below.

## Thing Description Playground

Playground is a tool to validate TDs and manipulate them for usage in other tools. You can do validation to check conformance, generate Open API and Async API documents, add or remove default values, visualize TDs and find spelling mistakes in TDs.

* [Online Tool](https://playground.thingweb.io)
* [GitHub Repository](https://github.com/eclipse-thingweb/playground)

## Web-based Interactions with Things

Using the tools below, you can interact with different WoT Things over your browser.

* [Browserified node-wot](http://plugfest.thingweb.io/webui/): You can try interacting with different Things using this simple interface. Note that this is just a demo page to showcase the [browser bundle of node-wot](https://github.com/eclipse-thingweb/node-wot/tree/master/packages/browser-bundle).
* [WoT-FXUI](https://github.com/danielpeintner/wot-fxui): JavaFX-based UI to interact with Things (runnable as Web application, local desktop application or as an Android/iOS app).

## Online Things for Testing

Eclipse Thingweb hosts Things that can be interacted with over the public Internet. You can use them to test your WoT applications.
Note: we also offer the [test-things](https://github.com/eclipse-thingweb/test-things/) repository with a collection of IoT device simulators that can be used for testing and exploration purposes of different protocols and other Web of Things mechanisms.

All of them require no security mechanism to be communicated with and have same behavior from CoAP or HTTP endpoints. Below are small explanations on what they can be used for:

* Counter: It has a count property that can be read or observed and can be incremented or decremented via separate actions. It is also possible to reset the count value, obtain when the last change occurred, subscribe to a change in the count value or get the count value as an image. TDs:

  * HTTP: [http://plugfest.thingweb.io:8083/counter](http://plugfest.thingweb.io:8083/counter)
  * CoAP: coap://plugfest.thingweb.io:5683/counter

* TestThing: This Thing exists primarily for testing different data schemas and payload formats. It also has events attached to affordances that notify when a value changes. TDs:

  * HTTP: [http://plugfest.thingweb.io/http-data-schema-thing](http://plugfest.thingweb.io/http-data-schema-thing)
  * CoAP: coap://plugfest.thingweb.io:5683/testthing

* Smart Coffee Machine: This is a simulation of a coffee machine that also has a simple user interface that displays the values of properties. In addition to proving a real life device example, it can be used for testing uriVariables. You can ask it to brew different coffees and monitor the available resource level. TDs:

  * HTTP: [http://plugfest.thingweb.io:8083/smart-coffee-machine](http://plugfest.thingweb.io:8083/smart-coffee-machine)
  * CoAP: coap://plugfest.thingweb.io:5683/smart-coffee-machine

* Presence Sensor: It mocks the detection of a person by firing an event every 5 seconds. Events are published via MQTT.

  * TD: [https://zion.vaimee.com/things/urn:uuid:0a028f8e-8a91-4aaf-a346-9a48d440fd7c](https://zion.vaimee.com/things/urn:uuid:0a028f8e-8a91-4aaf-a346-9a48d440fd7c)

* Smart Clock: It simply has a property affordance for the time. However, it runs 60 times faster than real-time to allow time-based decisions that can be easily tested. The interactions are possible via CoAP.

  * TD: [https://zion.vaimee.com/things/urn:uuid:913cf8cb-3687-4d98-8d2f-f6f27cfc7162](https://zion.vaimee.com/things/urn:uuid:913cf8cb-3687-4d98-8d2f-f6f27cfc7162)

* Simple Coffee Machine: This is a simpler simulation of the coffee machine above. The interactions are possible via HTTP.

  * TD: [https://zion.vaimee.com/things/urn:uuid:7ba2bca0-a7f6-47b3-bdce-498caa33bbaf](https://zion.vaimee.com/things/urn:uuid:7ba2bca0-a7f6-47b3-bdce-498caa33bbaf)

Additionally, Counter and Smart Coffee Machine offer simple UIs that reflect their state:

* [Smart Coffee Machine](http://plugfest.thingweb.io/examples/smart-coffee-machine.html)
* [Counter](http://plugfest.thingweb.io/examples/counter.html)
