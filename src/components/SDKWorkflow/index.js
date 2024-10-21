import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faTemperatureHalf, faFile, faLaptopCode, faDisplay, faMobile, faCubes, faTablet } from '@fortawesome/free-solid-svg-icons'

export default function SDKWorkflow() {
    return (
        <div className={styles.SDKWorkflow}>
            <div className={clsx(styles.SDKWorkflow__item, styles.thing1)}>
                <FontAwesomeIcon icon={faLightbulb} className={styles.icon} />
                <p>Thing</p>
            </div>
            <div className={clsx(styles.SDKWorkflow__item, styles.thing2)}>
                <FontAwesomeIcon icon={faTemperatureHalf} className={styles.icon} />
                <p>Thing</p>
            </div>
            <div className={clsx(styles.SDKWorkflow__item, styles.td)}>
                <FontAwesomeIcon icon={faFile} className={styles.icon} />
                <p>TD</p>
            </div>
            <div className={clsx(styles.SDKWorkflow__item, styles.tm)}>
                <FontAwesomeIcon icon={faFile} className={styles.icon} />
                <p>TM</p>
            </div>
            <div className={clsx(styles.SDKWorkflow__item, styles.nodeWot)}>
                <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
                <p>node-wot</p>
            </div>
            <div className={clsx(styles.SDKWorkflow__item, styles.dartWot)}>
                <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
                <p>dart_wot</p>
            </div>
            <div className={clsx(styles.SDKWorkflow__item, styles.nodeRed)}>
                <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
                <p>Node-RED</p>
            </div>
            <div className={clsx(styles.SDKWorkflow__item, styles.desktop)}>
                <FontAwesomeIcon icon={faDisplay} className={styles.icon} />
                <p>Browser</p>
            </div>
            <div className={clsx(styles.SDKWorkflow__item, styles.phone)}>
                <FontAwesomeIcon icon={faMobile} className={styles.icon} />
                <p>Mobile</p>
            </div>
            <div className={clsx(styles.SDKWorkflow__item, styles.tablet)}>
                <FontAwesomeIcon icon={faTablet} className={styles.icon} />
                <p>Mobile</p>
            </div>
        </div>
    );
}