import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function VpSection() {
    return (
        <header className='container'>
        <div className={styles.heroBanner}>
          <h1 className={clsx('hero-title', styles.heroBanner__title)}>Thingweb: The <span className={'text-highlight'}>Future of IoT</span> Development</h1>
          <p className={clsx('hero-subheader', styles.heroBanner__subheader)}>Leverage web standards for faster development and better interoperability.</p>
          <div className={styles.bannerCta}>
            <a className='btn btn-primary' href='/docs/intro'>
              Get Started
              <FontAwesomeIcon icon={faCode} className='icon' />
            </a>

            <a className='btn btn-primary btn-outline' href='#vp-section'>
              Learn More
              <FontAwesomeIcon icon={faArrowRight} className='icon' />
            </a>
          </div>
        </div>
      </header>
    );
}