import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function CommunitySection() {
    const scrollerAdoptersRef = useRef(null);

    useEffect(() => {
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

            <div className={styles.communitySection__stats}>
              <div className={styles.stat}>
                <h3 className={clsx(styles.stat__number, 'hero-title')}>120+</h3>
                <p className={styles.stat__description}>Discord Members</p>
              </div>

              <div className={styles.stat}>
                <h3 className={clsx(styles.stat__number, 'hero-title')}>50+</h3>
                <p className={styles.stat__description}>GitHub Contributors</p>
              </div>

              <div className={styles.stat}>
                <h3 className={clsx(styles.stat__number, 'hero-title')}>X</h3>
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
        </section>
    );
}