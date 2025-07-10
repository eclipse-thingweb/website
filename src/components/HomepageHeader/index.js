import React, { useRef, useEffect } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HomepageHeader({ setAdopterCount }) {
    const adoptersListRef = useRef(null);
    const { colorMode } = useColorMode();

    useEffect(() => {
        /** Function to load adopters list and update count **/
        async function loadAdopters() {
            const adoptersList = adoptersListRef.current;

            // Clear existing adopters
            while (adoptersList.lastElementChild) {
                adoptersList.removeChild(adoptersList.lastElementChild);
            }

            // Load new adopters list based on color mode
            try {
                await eclipseFdnAdopters.getList({
                    project_id: "iot.thingweb",
                    selector: ".scroller",
                    ul_classes: "adopters",
                    logo_white: colorMode === "dark" ? true : false,
                });
            } catch (error) {
                console.error("Error loading adopters list", error);
            }

            const adoptersContainer = document.querySelector(".adopters-scroller");
            const config = { childList: true };

            /**
             * Check for changes in the adopters list container to update the adopter count
             * as well as duplicating the adopters list for the scroller effect
             */
            const observer = new MutationObserver(() => {
                const adopters = document.querySelector(".adopters");
                const adoptersList = Array.from(document.querySelectorAll(".adopters li"));

                setAdopterCount(adoptersList.length); // Update the adopter count

                adoptersList.forEach((adopter) => {
                    const duplicatedAdopter = adopter.cloneNode(true);
                    duplicatedAdopter.setAttribute("aria-hidden", "true");
                    adopters.appendChild(duplicatedAdopter);
                });

                observer.disconnect();
            });

            if (adoptersContainer) {
                observer.observe(adoptersContainer, config);
            }
        }

        loadAdopters(); // Call function to load adopters on color mode change
    }, [colorMode]);

    return (
        <header className={styles.headerHero}>
            <div className={clsx("container", styles.headerContainer)}>
                <div className={styles.heroBanner}>
                    <h1 className={clsx("hero-title", styles.heroBanner__title)}>
                        Thingweb: The <span className={"text-highlight"}>Future of IoT</span> Development
                    </h1>
                    <p className={clsx("hero-subheader", styles.heroBanner__subheader)}>
                        Leverage web standards for faster development and better interoperability.
                    </p>
                    <div className={styles.bannerCta}>
                        <a className="btn btn-primary" href="/docs/Introduction">
                            Get Started
                            <FontAwesomeIcon icon={faCode} className="icon" />
                        </a>

                        <a className="btn btn-primary btn-outline" href="#vp-section">
                            Learn More
                            <FontAwesomeIcon icon={faArrowRight} className="icon" />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.adoptersContainer}>
                <div className="container">
                    <p>Adopted by</p>
                    <div
                        className={"scroller adopters-scroller"}
                        data-direction="left"
                        data-speed="fast"
                        ref={adoptersListRef}
                    ></div>
                </div>
            </div>

            <div className={styles.gridBackground}>
                <svg width="auto" height="auto" viewBox="0 0 1440 1861" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M59.5 1860V-0.00390625M1019.5 1860.01V0M539.5 1860.01V0M299.5 1860.01V0M1259.5 1860.01V0.00390625M779.5 1860.01V0.00390625M179.5 1860.01V0M1139.5 1860.01V0.00390625M659.5 1860.01V0.00390625M419.5 1860.01V0.00390625M1379.5 1860.02V0.0078125M899.5 1860.02V0.0078125M119.5 1860.01V0M1079.5 1860.01V0.00390625M599.5 1860.01V0.00390625M359.5 1860.01V0.00390625M1319.5 1860.02V0.0078125M839.5 1860.02V0.0078125M239.5 1860.01V0.00390625M1199.5 1860.02V0.0078125M719.5 1860.02V0.0078125M479.5 1860.02V0.0078125M959.5 1860.02V0.0117188M0 59.5179H1440M0 419.518H1440M0 239.518H1440M0 599.518H1440M0 179.518H1440M0 539.518H1440M0 359.518H1440M0 719.518H1440M0 119.518H1440M0 480.018H1440M0 299.518H1440M0 659.518H1440M0 779.518H1440M0 959.518H1440M0 1139.52H1440M0 1559.51H1440M0 1379.52H1440M0 1799.51H1440M0 899.518H1440M0 1079.52H1440M0 1499.51H1440M0 1319.52H1440M0 1739.51H1440M0 839.518H1440M0 1019.52H1440M0 1259.52H1440M0 1679.51H1440M0 1199.52H1440M0 1619.51H1440M0 1439.52H1440"
                        stroke="#33B8A4"
                        strokeWidth="1"
                    />
                </svg>
            </div>
        </header>
    );
}
