import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import ClientOnlyWorkflow from '@site/src/components/ClientOnlyWorkflow';
import HomogeneousWorkflow from '@site/src/components/HomogeneousWorkflow';

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
                                <ul>
                                    <li className={styles.description}><FontAwesomeIcon icon={faWifi} className={styles.icon} />Ipsum nam nisl viverra semper sit sed.</li>
                                    <li className={styles.description}><FontAwesomeIcon icon={faThumbsUp} className={styles.icon} />Ipsum nam nisl viverra semper sit sed.</li>
                                </ul>
                            </div>
                        </div>

                        <div className={clsx(styles.workflow, styles.homogeneousW)} id='workflow' data-workflow="simple">
                            <div className={styles.workflow__illustration}>
                                <HomogeneousWorkflow />
                            </div>
                            <div className={styles.workflow__content}>
                                <h1 className={styles.title}>Homogenous</h1>
                                <p className={styles.description}>Integrate Thingweb components into your IoT application and be open to scale.</p>
                                <ul>
                                    <li className={styles.description}><FontAwesomeIcon icon={faWifi} className={styles.icon} />Ipsum nam nisl viverra semper sit sed.</li>
                                    <li className={styles.description}><FontAwesomeIcon icon={faThumbsUp} className={styles.icon} />Ipsum nam nisl viverra semper sit sed.</li>
                                </ul>
                            </div>
                        </div>

                        <div className={clsx(styles.workflow, styles.professionalW)} id='workflow' data-workflow="simple">
                            <div className={styles.workflow__illustration}>

                            </div>
                            <div className={styles.workflow__content}>
                                <h1 className={styles.title}>Orchestration</h1>
                                <p className={styles.description}>Easily manage a fleet of heterogeneous devices and orchestrate applications at scale.</p>
                                <ul>
                                    <li className={styles.description}><FontAwesomeIcon icon={faWifi} className={styles.icon} />Ipsum nam nisl viverra semper sit sed.</li>
                                    <li className={styles.description}><FontAwesomeIcon icon={faThumbsUp} className={styles.icon} />Ipsum nam nisl viverra semper sit sed.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}