---
sidebar_position: 1
---
# Principles in a Nutshell

The Web of Things (WoT) tackles IoT fragmentation by extending standardized web technologies. It simplifies IoT application development, promoting flexibility and interoperability. WoT preserves existing IoT standards, ensuring reuse, and provides an adaptable, abstract architecture based on real-world use cases across domains. In essence, WoT paves the way for seamless IoT integration by defining an information model capable of describing Things and Services and how to interact with them. This information model is called the Thing Description (TD) and it is a JSON-LD document that describes the Thing and its capabilities, including its network services (APIs), its network interactions, and security requirements. The TD is the cornerstone of the Web of Things architecture and it is the main abstraction that node-wot uses to implement its functionalities. Every Thing has the following capabilities or "affordances":

* **Properties:** a property is a value that can be read, written or observed. For example, a temperature sensor can have a property that represents the current temperature.
* **Actions:** an action is an operation that can be invoked. For example, a light bulb can have an action that turns it on or off.
* **Events:** an event is a notification. For example, a motion sensor can send an event when it detects motion.

For further information please refer to the official W3C Web of Things website.
