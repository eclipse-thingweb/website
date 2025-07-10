import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFile,
    faHouse,
    faScrewdriverWrench,
    faLaptopCode,
    faDisplay,
    faMobile,
    faCubes,
    faQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default function ClientOnlyWorkflow() {
    return (
        <div className={styles.clientOnlyWorkflow}>
            <svg
                width="auto"
                height="auto"
                viewBox="0 0 137 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={clsx(styles.clientOnlyWorkflow__line, styles.line1)}
            >
                <path
                    d="M0 54.623L126 54.623C131.523 54.623 136 50.1458 136 44.623V0"
                    stroke="url(#paint0_linear_408_45)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_408_45"
                        x1="6.26369e-07"
                        y1="55"
                        x2="136"
                        y2="1.5459e-06"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#33B8A4" />
                        <stop offset="1" stopColor="#D65CAB" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                width="auto"
                height="auto"
                viewBox="0 0 43 205"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={clsx(styles.clientOnlyWorkflow__line, styles.line2)}
            >
                <path d="M1 0V194C1 199.523 5.47715 204 11 204H42.82" stroke="url(#paint0_linear_409_46)" />
                <defs>
                    <linearGradient
                        id="paint0_linear_409_46"
                        x1="1"
                        y1="0"
                        x2="43"
                        y2="204"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#D65CAB" />
                        <stop offset="1" stopColor="#33B8A4" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                width="auto"
                height="auto"
                viewBox="0 0 46 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={clsx(styles.clientOnlyWorkflow__line, styles.line3)}
            >
                <path d="M0 123H35C40.5228 123 45 118.523 45 113V0" stroke="url(#paint0_linear_410_47)" />
                <defs>
                    <linearGradient
                        id="paint0_linear_410_47"
                        x1="0"
                        y1="123"
                        x2="45"
                        y2="1.16229e-06"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#33B8A4" />
                        <stop offset="1" stopColor="#D65CAB" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                width="auto"
                height="auto"
                viewBox="0 0 45 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={clsx(styles.clientOnlyWorkflow__line, styles.line4)}
            >
                <path d="M0 1H34.5C40.0228 1 44.5 5.47715 44.5 11V43" stroke="url(#paint0_linear_411_48)" />
                <defs>
                    <linearGradient
                        id="paint0_linear_411_48"
                        x1="0"
                        y1="1"
                        x2="46.8393"
                        y2="4.44976"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#33B8A4" />
                        <stop offset="1" stopColor="#D65CAB" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                width="auto"
                height="auto"
                viewBox="0 0 120 121"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={clsx(styles.clientOnlyWorkflow__line, styles.line5)}
            >
                <path d="M1 121V11C1 5.47715 5.47715 1 11 1H119.5" stroke="url(#paint0_linear_412_49)" />
                <defs>
                    <linearGradient
                        id="paint0_linear_412_49"
                        x1="119"
                        y1="1"
                        x2="112.952"
                        y2="126.4"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#33B8A4" />
                        <stop offset="1" stopColor="#D65CAB" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                width="auto"
                height="auto"
                viewBox="0 0 46 122"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={clsx(styles.clientOnlyWorkflow__line, styles.line6)}
            >
                <path d="M0 1H35C40.5228 1 45 5.47715 45 11V122" stroke="url(#paint0_linear_413_50)" />
                <defs>
                    <linearGradient
                        id="paint0_linear_413_50"
                        x1="0"
                        y1="1"
                        x2="69.2799"
                        y2="105.976"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#33B8A4" />
                        <stop offset="1" stopColor="#D65CAB" />
                    </linearGradient>
                </defs>
            </svg>

            <div className={clsx(styles.clientOnlyWorkflow__item, styles.thing1)}>
                <FontAwesomeIcon icon={faQuestion} className={styles.icon} />
                <p className={styles.itemName}>Thing</p>
            </div>
            <div className={clsx(styles.clientOnlyWorkflow__item, styles.thing2)}>
                <FontAwesomeIcon icon={faQuestion} className={styles.icon} />
                <p className={styles.itemName}>Thing</p>
            </div>
            <div className={clsx(styles.clientOnlyWorkflow__item, styles.td)}>
                <FontAwesomeIcon icon={faFile} className={styles.icon} />
                <p className={styles.itemName}>TD</p>
            </div>
            <div className={clsx(styles.clientOnlyWorkflow__item, styles.tm)}>
                <FontAwesomeIcon icon={faFile} className={styles.icon} />
                <p className={styles.itemName}>TM</p>
            </div>
            <div className={clsx(styles.clientOnlyWorkflow__item, styles.domus)}>
                <FontAwesomeIcon icon={faHouse} className={styles.icon} />
                <p className={styles.itemName}>Domus TDD</p>
            </div>
            <div className={clsx(styles.clientOnlyWorkflow__item, styles.tools)}>
                <FontAwesomeIcon icon={faScrewdriverWrench} className={styles.icon} />
                <p className={styles.itemName}>TD Tools</p>
            </div>
            <div className={clsx(styles.clientOnlyWorkflow__item, styles.playground)}>
                <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
                <p className={styles.itemName}>Playground</p>
            </div>
            <div className={clsx(styles.clientOnlyWorkflow__item, styles.nodeWot)}>
                <FontAwesomeIcon icon={faDisplay} className={styles.icon} />
                <p className={styles.itemName}>node-wot</p>
            </div>
            <div className={clsx(styles.clientOnlyWorkflow__item, styles.dartWot)}>
                <FontAwesomeIcon icon={faMobile} className={styles.icon} />
                <p className={styles.itemName}>dart_wot</p>
            </div>
            <div className={clsx(styles.clientOnlyWorkflow__item, styles.nodeRed)}>
                <FontAwesomeIcon icon={faCubes} className={styles.icon} />
                <p className={styles.itemName}>Node-RED</p>
            </div>
        </div>
    );
}
