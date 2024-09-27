import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function ServicesPage() {
  return (
    <Layout title="Service">
      <main className={styles.services}>
        <div className={clsx('container', styles.pageWrapper)}>
          <h1 className={clsx('hero-title', styles.services__title)}>Services for <span className={'text-highlight'}>W3C WoT</span> Developers</h1>
          <p>Eclipse Thingweb provides services to support Web of Things developers. These services are listed below.</p>

          <div className={clsx(styles.playground, styles.section)}>
            <h2 className={clsx('hero-title', styles.title)}>Thing Description <span className={'text-highlight'}>Playground</span></h2>
            <p>Playground is a tool to validate TDs and manipulate them for usage in other tools. You can do validation to check conformance, generate Open API and Async API documents, add or remove default values, visualize TDs and find spelling mistakes in TDs.</p>

            <ul className={styles.playground__links}>
              <li>
                <a href="https://playground.thingweb.io" target="_blank">
                  Online Tool
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </li>
              <li>
                <a href="https://github.com/eclipse-thingweb/playground" target="_blank">
                  Github Repository
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </li>
            </ul>
          </div>

          <div className={clsx(styles.interactiveThings, styles.section)}>
            <h2 className={clsx('hero-title', styles.title)}>Web-based <span className={'text-highlight'}>Interactions</span> with Things</h2>
            <p>Playground is a tool to validate TDs and manipulate them for usage in other tools. You can do validation to check conformance, generate Open API and Async API documents, add or remove default values, visualize TDs and find spelling mistakes in TDs.</p>

            <ul className={styles.interactiveThings__links}>
              <li>
                <a href="http://plugfest.thingweb.io/webui/" target="_blank">Browserified node-wot</a>
                : You can try interacting with different Things using this simple interface. Note that this is just a demo page to showcase the
                <a href="https://github.com/eclipse-thingweb/node-wot/tree/master/packages/browser-bundle" target="_blank"> Browserified node-wot</a>
              </li>
              <li>
                <a href="https://github.com/danielpeintner/wot-fxui" target="_blank">WoT-FXUI</a>
                : JavaFX-based UI to interact with Things.
                <ul>
                  <li>
                    See
                    <a href="https://github.com/danielpeintner/wot-fxui" target="_blank"> running Web-UI instance </a>
                    in browser without any plugin
                  </li>
                  <li>
                    <a href="https://github.com/danielpeintner/wot-fxui" target="_blank">GitHub Repository</a>
                  </li>
                  <li>
                    Possible as a local desktop application or as an Android/iOS app
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={clsx(styles.onlineThings, styles.section)}>
            <h2 className={clsx('hero-title', styles.title)}><span className={'text-highlight'}>Online</span> Things for Testing</h2>

            <p>Eclipse Thingweb hosts Things that can be interacted with over the public Internet. You can use them to test your WoT applications.
            Note: we also offer the <a href='test-things' target='_blank'>test-things</a> repository with a collection of IoT device simulators that can be used for testing and exploration purposes of different protocols and other Web of Things mechanisms.</p>

            <p>All of them require no security mechanism to be communicated with and have same behavior from CoAP or HTTP endpoints. Below are small explanations on what they can be used for:</p>

            <ul className={styles.onlineThings__links}>
              <li>
                <span>Counter:</span> It has a count property that can be read or observed and can be incremented or decremented via separate actions. It is also possible to reset the count value, obtain when the last change occurred, subscribe to a change in the count value or get the count value as an image. TDs:
                <ul>
                  <li>
                    HTTP:
                    <a href="http://plugfest.thingweb.io:8083/counter" target="_blank">http://plugfest.thingweb.io:8083/counter</a>
                  </li>
                  <li>
                    CoAP: coap://plugfest.thingweb.io:5683/counter
                  </li>
                </ul>
              </li>

              <li>
                <span>TestThing:</span> This Thing exists primarily for testing different data schemas and payload formats. It also has events attached to affordances that notify when a value changes. TDs:
                <ul>
                  <li>
                    HTTP:
                    <a href="http://plugfest.thingweb.io:8083/testthing" target="_blank">http://plugfest.thingweb.io:8083/testthing</a>
                  </li>
                  <li>
                    CoAP: coap://plugfest.thingweb.io:5683/testthing
                  </li>
                </ul>
              </li>

              <li>
                <span>Smart Coffee Machine:</span> This is a simulation of a coffee machine that also has a simple user interface that displays the values of properties. In addition to proving a real life device example, it can be used for testing uriVariables. You can ask it to brew different coffees and monitor the available resource level. TDs:
                <ul>
                  <li>
                    HTTP:
                    <a href="http://plugfest.thingweb.io:8083/smart-coffee-machine" target="_blank">http://plugfest.thingweb.io:8083/smart-coffee-machine</a>
                  </li>
                  <li>
                    CoAP: coap://plugfest.thingweb.io:5683/smart-coffee-machine
                  </li>
                </ul>
              </li>

              <li>
                <span>Presence Sensor:</span> It mocks the detection of a person by firing an event every 5 seconds. Events are published via MQTT. TD:
                <ul>
                  <li>
                    <a href="https://zion.vaimee.com/things/urn:uuid:0a028f8e-8a91-4aaf-a346-9a48d440fd7c" target="_blank">https://zion.vaimee.com/things/urn:uuid:0a028f8e-8a91-4aaf-a346-9a48d440fd7c</a>
                  </li>
                </ul>
              </li>

              <li>
                <span>Smart Clock:</span> It simply has a property affordance for the time. However, it runs 60 times faster than real-time to allow time-based decisions that can be easily tested. The interactions are possible via CoAP. TD:
                <ul>
                  <li>
                    <a href="https://zion.vaimee.com/things/urn:uuid:913cf8cb-3687-4d98-8d2f-f6f27cfc7162" target="_blank">https://zion.vaimee.com/things/urn:uuid:913cf8cb-3687-4d98-8d2f-f6f27cfc7162</a>
                  </li>
                </ul>
              </li>

              <li>
                <span>Simple Coffee Machine:</span> This is a simpler simulation of the coffee machine above. The interactions are possible via HTTP. TD:
                <ul>
                  <li>
                    <a href="https://zion.vaimee.com/things/urn:uuid:7ba2bca0-a7f6-47b3-bdce-498caa33bbaf" target="_blank">https://zion.vaimee.com/things/urn:uuid:7ba2bca0-a7f6-47b3-bdce-498caa33bbaf</a>
                  </li>
                </ul>
              </li>
            </ul>

            <p>Additionally, Counter and Smart Coffee Machine offer simple UIs that reflect their state:</p>

            <ul className={styles.onlineThings__links}>
              <li>
                <a href="http://plugfest.thingweb.io/examples/smart-coffee-machine.html" target="_blank">Smart Coffee Machine</a>
              </li>
              <li>
                <a href="http://plugfest.thingweb.io/examples/counter.html" target="_blank">Counter</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}