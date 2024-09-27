import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function CommunitySection() {
  const scrollerAdoptersRef = useRef(null);
  const statsContainerRef = useRef(null);

  useEffect(() => {

    const statsContainer = statsContainerRef.current;

    if (statsContainer) {

      const statsItems = document.querySelectorAll('#stats-number');
      let interval = 2500;
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
                target.dataset.count = 'false'
                let startValue = 0;
                let endValue = parseInt(target.getAttribute('data-val'));
                let duration = Math.floor(interval / endValue);

                let counter = setInterval(() => {
                  startValue++;
                  target.textContent = startValue;

                  if (startValue === endValue) {

                    if (endValue >= 50) {
                      target.textContent = endValue + "+";
                    }
                    clearInterval(counter);
                  }
                }, duration);
              }
            }
          })
        }, appearOptions);

      statsItems.forEach(item => {
        startCounter.observe(item);
      });
    }


    const scrollerAdopters = scrollerAdoptersRef.current;

    if (scrollerAdopters) {
      const scrollerContent = Array.from(scrollerAdopters.children);

      scrollerContent.forEach(adopter => {
        const duplicatedAdopter = adopter.cloneNode(true);
        duplicatedAdopter.setAttribute('aria-hidden', 'true');
        scrollerAdopters.appendChild(duplicatedAdopter);
      })
    }
  }, []);


  return (
    <section className={styles.communitySection}>
      <div className={clsx('container', 'section-wrapper')}>
        <h2 className={clsx('hero-title', styles.communitySection__title)}>Join the Thingweb <span className={'text-highlight'}>Community</span></h2>

        <div className={styles.communitySection__stats} ref={statsContainerRef}>
          <div className={styles.stat}>
            <h3 className={clsx(styles.stat__number, 'hero-title')} id='stats-number' data-val="120" data-count="true">0</h3>
            <p className={styles.stat__description}>Discord Members</p>
          </div>

          <div className={styles.stat}>
            <h3 className={clsx(styles.stat__number, 'hero-title')} id='stats-number' data-val="50" data-count="true">0</h3>
            <p className={styles.stat__description}>GitHub Contributors</p>
          </div>

          <div className={styles.stat}>
            <h3 className={clsx(styles.stat__number, 'hero-title')} id='stats-number' data-val="10" data-count="true">0</h3>
            <p className={styles.stat__description}>Adopters</p>
          </div>
        </div>

        <div className={'scroller'} data-direction="left" data-speed="slow">
          <div className={styles.adopters} id='scroller-adopters' ref={scrollerAdoptersRef}>
            <h3 className={styles.adopters__logo}>BRAND</h3>
            <h3 className={styles.adopters__logo}>BRAND</h3>
            <h3 className={styles.adopters__logo}>BRAND</h3>
            <h3 className={styles.adopters__logo}>BRAND</h3>
            <h3 className={styles.adopters__logo}>BRAND</h3>
            <h3 className={styles.adopters__logo}>BRAND</h3>
          </div>
        </div>

        <div className={styles.communitySection__cta}>
          <a className={clsx('btn btn-primary', styles.btn)} href='https://github.com/eclipse-thingweb/website' target='_blank'>
            Contribute and Provide Feedback
            <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
          </a>
          <a className={clsx('btn btn-primary btn-outline', styles.btn)} href='https://discord.gg/WfRyazju' target='_blank'>
            Chat with our Community
            <FontAwesomeIcon icon={faDiscord} className={styles.btn__icon} />
          </a>
        </div>
      </div>

      <div className={styles.gridBackground}>
        <svg width="1440" height="auto" viewBox="0 0 1440 1861" xmlns="http://www.w3.org/2000/svg">
          <path d="M59.5 1860V-0.00390625M1019.5 1860.01V0M539.5 1860.01V0M299.5 1860.01V0M1259.5 1860.01V0.00390625M779.5 1860.01V0.00390625M179.5 1860.01V0M1139.5 1860.01V0.00390625M659.5 1860.01V0.00390625M419.5 1860.01V0.00390625M1379.5 1860.02V0.0078125M899.5 1860.02V0.0078125M119.5 1860.01V0M1079.5 1860.01V0.00390625M599.5 1860.01V0.00390625M359.5 1860.01V0.00390625M1319.5 1860.02V0.0078125M839.5 1860.02V0.0078125M239.5 1860.01V0.00390625M1199.5 1860.02V0.0078125M719.5 1860.02V0.0078125M479.5 1860.02V0.0078125M959.5 1860.02V0.0117188M0 59.5179H1440M0 419.518H1440M0 239.518H1440M0 599.518H1440M0 179.518H1440M0 539.518H1440M0 359.518H1440M0 719.518H1440M0 119.518H1440M0 480.018H1440M0 299.518H1440M0 659.518H1440M0 779.518H1440M0 959.518H1440M0 1139.52H1440M0 1559.51H1440M0 1379.52H1440M0 1799.51H1440M0 899.518H1440M0 1079.52H1440M0 1499.51H1440M0 1319.52H1440M0 1739.51H1440M0 839.518H1440M0 1019.52H1440M0 1259.52H1440M0 1679.51H1440M0 1199.52H1440M0 1619.51H1440M0 1439.52H1440" stroke="#33B8A4" strokeWidth="1" />
        </svg>
      </div>
    </section>

  );
}