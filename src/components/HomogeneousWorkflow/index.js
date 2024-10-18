import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faTemperatureHalf, faFile, faHouse, faScrewdriverWrench, faLaptopCode, faDisplay, faMobile, faCubes } from '@fortawesome/free-solid-svg-icons'

export default function HomogeneousWorkflow() {
    return (
        <div className={styles.homogeneousWorkflow}>
            <div className={clsx(styles.homogeneousWorkflow__item, styles.lightbulb)}>
                <FontAwesomeIcon icon={faLightbulb} className={styles.icon} />
                <p>Thing</p>
            </div>
            <div className={clsx(styles.homogeneousWorkflow__item, styles.termometer)}>
                <FontAwesomeIcon icon={faTemperatureHalf} className={styles.icon} />
                <p>Thing</p>
            </div>
            <div className={clsx(styles.homogeneousWorkflow__item, styles.td)}>
                <FontAwesomeIcon icon={faFile} className={styles.icon} />
                <p>TD</p>
            </div>
            <div className={clsx(styles.homogeneousWorkflow__item, styles.tm)}>
                <FontAwesomeIcon icon={faFile} className={styles.icon} />
                <p>TM</p>
            </div>
            <div className={clsx(styles.homogeneousWorkflow__item, styles.domus)}>
                <FontAwesomeIcon icon={faHouse} className={styles.icon} />
                <p>Domus TDD</p>
            </div>
            <div className={clsx(styles.homogeneousWorkflow__item, styles.tools)}>
                <FontAwesomeIcon icon={faScrewdriverWrench} className={styles.icon} />
                <p>TD Tools</p>
            </div>
            <div className={clsx(styles.homogeneousWorkflow__item, styles.playground)}>
                <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
                <p>Playground</p>
            </div>
            <div className={clsx(styles.homogeneousWorkflow__item, styles.nodeWot)}>
                <FontAwesomeIcon icon={faDisplay} className={styles.icon} />
                <p>node-wot</p>
            </div>
            <div className={clsx(styles.homogeneousWorkflow__item, styles.dartWot)}>
                <FontAwesomeIcon icon={faMobile} className={styles.icon} />
                <p>dart_wot</p>
            </div>
            <div className={clsx(styles.homogeneousWorkflow__item, styles.nodeRed)}>
                <FontAwesomeIcon icon={faCubes} className={styles.icon} />
                <p>Node-RED</p>
            </div>
        </div>
    );
}