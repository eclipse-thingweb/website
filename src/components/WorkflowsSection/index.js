import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import ClientOnlyWorkflow from '@site/src/components/ClientOnlyWorkflow';
import SDKWorkflow from '@site/src/components/SDKWorkflow';

export default function WorkflowsSection() {

    useEffect(() => {

        /** Hiding or showing a specific workflow **/
        const simpleWorkflowInput = document.getElementById('sw-btn');
        const homogenousWorkflowInput = document.getElementById('hw-btn');
        const professionalWorkflowInput = document.getElementById('pw-btn');
        const progressBarLeft = document.getElementById('progress-bar-left');
        const progressBarRight = document.getElementById('progress-bar-right');

        const workflows = document.querySelectorAll('#workflow');


        simpleWorkflowInput.addEventListener('change', () => {
            progressBarLeft.dataset.show = 'false';
            progressBarRight.dataset.show = 'false';
            workflows.forEach(workflow => {
                workflow.dataset.workflow = 'simple';
            })
        });

        homogenousWorkflowInput.addEventListener('change', () => {
            progressBarLeft.dataset.show = 'true';
            progressBarRight.dataset.show = 'false';
            workflows.forEach(workflow => {
                workflow.dataset.workflow = 'homogeneous';
            })
        });

        professionalWorkflowInput.addEventListener('change', () => {
            progressBarLeft.dataset.show = 'true';
            progressBarRight.dataset.show = 'true';
            workflows.forEach(workflow => {
                workflow.dataset.workflow = 'professional';
            })
        });
    }, []);

    return (
        <section className={styles.workflowsSection}>
            <div className={clsx('container', 'section-wrapper')}>
                <div className={styles.workflowsSection__buttons}>
                    <input type="radio" id="sw-btn" className={styles.workflowBtn} name="workflow-btn" value="sw" defaultChecked />
                    <div className={clsx(styles.progressBar, styles.barLeft)} data-show="false" id='progress-bar-left'></div>
                    <input type="radio" id="hw-btn" className={styles.workflowBtn} name="workflow-btn" value="hw" />
                    <div className={clsx(styles.progressBar, styles.barRight)} data-show="false" id='progress-bar-right'></div>
                    <input type="radio" id="pw-btn" className={styles.workflowBtn} name="workflow-btn" value="pw" />
                </div>

                <div className={styles.workflowsSection__workflows}>
                    <div className={styles.workflowsWrapper}>
                        <div className={clsx(styles.workflow, styles.simpleW)} id='workflow' data-workflow="simple">
                            <div className={styles.workflow__illustration}>
                                <ClientOnlyWorkflow />
                            </div>
                            <div className={styles.workflow__content}>
                                <h1 className={styles.title}>Client-Only</h1>
                                <p className={styles.description}>Start small and get an off-the-shelf IoT device.</p>
                                <ul className={styles.benefits}>
                                    <li className={styles.benefit}><FontAwesomeIcon icon={faThumbsUp} className={styles.icon} /><span className={styles.highlight}>Standardized Interface:</span> Interact with different device types and brands through a single, fixed interface.</li>
                                    <li className={styles.benefit}><FontAwesomeIcon icon={faThumbsUp} className={styles.icon} /><span className={styles.highlight}>Low Integration Barrier:</span> Quickly enables cross-manufacturer device connectivity without redesigning device protocols.</li>
                                </ul>
                            </div>
                        </div>

                        <div className={clsx(styles.workflow, styles.homogeneousW)} id='workflow' data-workflow="simple">
                            <div className={styles.workflow__illustration}>
                                <SDKWorkflow />
                            </div>
                            <div className={styles.workflow__content}>
                                <h1 className={styles.title}>SDK</h1>
                                <p className={styles.description}>Integrate Thingweb components into your IoT application and be open to scale.</p>
                                <ul className={styles.benefits}>
                                    <li className={styles.benefit}><FontAwesomeIcon icon={faThumbsUp} className={styles.icon} /><span className={styles.highlight}>Structured Interactions:</span> WoT transforms devices into documented APIs, making it easier for newcomers.</li>
                                    <li className={styles.benefit}><FontAwesomeIcon icon={faThumbsUp} className={styles.icon} /><span className={styles.highlight}>Enhanced Accessibility:</span> Simplifies device control for broader audiences, allowing third parties to interface with devices seamlessly.
                                    </li>
                                    <li className={styles.benefit}><FontAwesomeIcon icon={faThumbsUp} className={styles.icon} /><span className={styles.highlight}>Built in security:</span> Use web tested access control policies and security protocols out of the box.</li>
                                    <li className={styles.benefit}><FontAwesomeIcon icon={faThumbsUp} className={styles.icon} /><span className={styles.highlight}>Out of the box:</span> Decisions are taken for you, (protocol, best practices, documentation, security)</li>
                                </ul>
                            </div>
                        </div>

                        <div className={clsx(styles.workflow, styles.professionalW)} id='workflow' data-workflow="simple">
                            <div className={styles.workflow__illustration}>

                            </div>
                            <div className={styles.workflow__content}>
                                <h1 className={styles.title}>Platform</h1>
                                <p className={styles.description}>Easily manage a fleet of heterogeneous devices and orchestrate applications at scale.</p>
                                <ul className={styles.benefits}>
                                    <li className={styles.benefit}><FontAwesomeIcon icon={faThumbsUp} className={styles.icon} /><span className={styles.highlight}>Scalability:</span> Supports complex setups with distributed devices and extensive device fleets.</li>
                                    <li className={styles.benefit}><FontAwesomeIcon icon={faThumbsUp} className={styles.icon} /><span className={styles.highlight}>Ready to use microservices and fleet management:</span> Efficiently handle a wide range of devices using Thingweb’s microservices for scalability and organization.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}