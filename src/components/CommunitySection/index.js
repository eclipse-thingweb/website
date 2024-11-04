import React, { useRef, useEffect, useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';

export default function CommunitySection() {
  const statsContainerRef = useRef(null);
  const adoptersListRef = useRef(null);
  const [adopterCount, setAdopterCount] = useState(0); // New state for adopter count
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
          logo_white: colorMode === 'dark' ? true : false,
        });
      } catch (error) {
        console.error('Error loading adopters list', error);
      }

      const adoptersContainer = document.querySelector('.adopters-container');
      const config = { childList: true };

      /**
       * Check for changes in the adopters list container to update the adopter count
       * as well as duplicating the adopters list for the scroller effect
       */
      const observer = new MutationObserver(() => {
        const adopters = document.querySelector('.adopters');
        const adoptersList = Array.from(document.querySelectorAll('.adopters li'));

        setAdopterCount(adoptersList.length); // Update the adopter count

        adoptersList.forEach(adopter => {
          const duplicatedAdopter = adopter.cloneNode(true);
          duplicatedAdopter.setAttribute('aria-hidden', 'true');
          adopters.appendChild(duplicatedAdopter);
        });

        observer.disconnect();
      })

      if (adoptersContainer) {
        observer.observe(adoptersContainer, config);
      }
    }

    loadAdopters(); // Call function to load adopters on color mode change
  }, [colorMode]);

  useEffect(() => {
    /** Stats counter animation **/
    const statsContainer = statsContainerRef.current;

    if (statsContainer) {
      const statsItems = document.querySelectorAll('#stats-number');
      //Making sure the animation will run again when the adopter count updates
      statsItems.forEach(item => {
        item.dataset.count = 'true';
      });
      
      let interval = 2000;
      const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -160px 0px"
      };

      const startCounter = new IntersectionObserver(
        function (entries) {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              return;
            } else {
              let target = entry.target;
              let count = target.dataset.count;

              if (count === 'true') {
                target.dataset.count = 'false';
                let startValue = 0;
                let endValue = parseInt(target.getAttribute('data-val'));
                let duration = Math.floor(interval / endValue);

                let counter = setInterval(() => {
                  target.textContent = startValue;

                  if (startValue === endValue) {
                    if (endValue >= 30) {
                      target.textContent = endValue + "+";
                    }
                    clearInterval(counter);
                  }

                  startValue++;

                }, duration);
              }
            }
          })
        }, appearOptions);

      statsItems.forEach(item => {
        startCounter.observe(item);
      });
    }
  }, [adopterCount]); // Run this effect when adopter count updates

  return (
    <section className={styles.communitySection}>
      <div className={clsx('container', 'section-wrapper')}>
        <h2 className={clsx('hero-title', 'section-title', styles.communitySection__title)}>Join the Thingweb <span className={'text-highlight'}>Community</span></h2>

        <div className={styles.communitySection__stats} ref={statsContainerRef}>
          <div className={styles.stat}>
            <h3 className={clsx(styles.stat__number, 'hero-title')} id='stats-number' data-val="130" data-count="true">0</h3>
            <p className={styles.stat__description}>Discord Members</p>
          </div>

          <div className={styles.stat}>
            <h3 className={clsx(styles.stat__number, 'hero-title')} id='stats-number' data-val="30" data-count="true">0</h3>
            <p className={styles.stat__description}>GitHub Contributors</p>
          </div>

          <div className={styles.stat}>
            <h3 className={clsx(styles.stat__number, 'hero-title')} id='stats-number' data-val={adopterCount} data-count="true">0</h3>
            <p className={styles.stat__description}>Adopters</p>
          </div>
        </div>

        <div className={'scroller adopters-container'} data-direction="left" data-speed="fast" ref={adoptersListRef}>
        </div>

        <div className={styles.communitySection__cta}>
          <a className={clsx('btn btn-primary', styles.btn)} href='https://github.com/eclipse-thingweb/website?tab=readme-ov-file#adopters'>
            Add your Organization
            <FontAwesomeIcon icon={faCloudUpload} className={styles.btn__icon} />
          </a>
          <a className={clsx('btn btn-primary btn-outline', styles.btn)} href='https://discord.gg/WfRyazju'>
            Chat with our Community
            <FontAwesomeIcon icon={faDiscord} className={styles.btn__icon} />
          </a>
        </div>
      </div>

      <div className={styles.gridBackground}>
        <svg width="auto" height="auto" viewBox="0 0 1440 1861" xmlns="http://www.w3.org/2000/svg">
          <path d="M59.5 1860V-0.00390625M1019.5 1860.01V0M539.5 1860.01V0M299.5 1860.01V0M1259.5 1860.01V0.00390625M779.5 1860.01V0.00390625M179.5 1860.01V0M1139.5 1860.01V0.00390625M659.5 1860.01V0.00390625M419.5 1860.01V0.00390625M1379.5 1860.02V0.0078125M899.5 1860.02V0.0078125M119.5 1860.01V0M1079.5 1860.01V0.00390625M599.5 1860.01V0.00390625M359.5 1860.01V0.00390625M1319.5 1860.02V0.0078125M839.5 1860.02V0.0078125M239.5 1860.01V0.00390625M1199.5 1860.02V0.0078125M719.5 1860.02V0.0078125M479.5 1860.02V0.0078125M959.5 1860.02V0.0117188M0 59.5179H1440M0 419.518H1440M0 239.518H1440M0 599.518H1440M0 179.518H1440M0 539.518H1440M0 359.518H1440M0 719.518H1440M0 119.518H1440M0 480.018H1440M0 299.518H1440M0 659.518H1440M0 779.518H1440M0 959.518H1440M0 1139.52H1440M0 1559.51H1440M0 1379.52H1440M0 1799.51H1440M0 899.518H1440M0 1079.52H1440M0 1499.51H1440M0 1319.52H1440M0 1739.51H1440M0 839.518H1440M0 1019.52H1440M0 1259.52H1440M0 1679.51H1440M0 1199.52H1440M0 1619.51H1440M0 1439.52H1440" stroke="#33B8A4" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}