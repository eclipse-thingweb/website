import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faArrowRight, faLaptopCode, faScrewdriverWrench, faHouse } from '@fortawesome/free-solid-svg-icons'

export default function ToolsSection() {
    return (
        <section className={styles.toolsSection}>
          <div className={clsx('container', 'section-wrapper')}>

            <h2 className={clsx('hero-title', styles.toolsSection__title)}>Powerful <span className={'text-highlight'}>Tools</span> To Drive Your IoT Development</h2>

            <p className={clsx('subheader', styles.toolsSection__subheader)}>Convallis tellus tincidunt consequat nunc. Semper pretium ac amet nibh.
              Suspendisse adipiscing convallis libero tristique auctor ultricies ut ullamcorper tincidunt. Ipsum nam nisl viverra semper sit. </p>

            <div className={styles.toolsSection__tools}>
              <div className={clsx(styles.tool, styles.nodeWot)}>
                <div className={styles.tool__img}></div>
                <FontAwesomeIcon icon={faCode} className={styles.tool__icon} />
                <h3 className={styles.tool__title}>node-wot</h3>
                <p className={styles.tool__description}>Convallis tellus tincidunt consequat nunc. Semper pretium ac amet nibh. </p>
                <div className={styles.tool__btnContainer}>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='#' target='_blank'>
                    node-wot
                    <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
                  </a>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='#' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
                  </a>
                </div>
              </div>

              <div className={clsx(styles.tool, styles.playground)}>
                <div className={styles.tool__img}></div>
                <FontAwesomeIcon icon={faLaptopCode} className={styles.tool__icon} />
                <h3 className={styles.tool__title}>td playground</h3>
                <p className={styles.tool__description}>Convallis tellus tincidunt consequat nunc. Semper pretium ac amet nibh. </p>
                <div className={styles.tool__btnContainer}>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='https://playground.thingweb.io' target='_blank'>
                    td playground
                    <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
                  </a>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='https://github.com/eclipse-thingweb/playground' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
                  </a>
                </div>
              </div>

              <div className={clsx(styles.tool, styles.dartWot)}>
                <div className={styles.tool__img}></div>
                <FontAwesomeIcon icon={faCode} className={styles.tool__icon} />
                <h3 className={styles.tool__title}>dart-wot</h3>
                <p className={styles.tool__description}>Convallis tellus tincidunt consequat nunc. Semper pretium ac amet nibh. </p>
                <div className={styles.tool__btnContainer}>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='https://pub.dev/packages/dart_wot' target='_blank'>
                    dart-wot
                    <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
                  </a>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='https://github.com/eclipse-thingweb/dart_wot' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
                  </a>
                </div>
              </div>

              <div className={clsx(styles.tool, styles.tdTools)}>
                <div className={styles.tool__img}></div>
                <FontAwesomeIcon icon={faScrewdriverWrench} className={styles.tool__icon} />
                <h3 className={styles.tool__title}>td tools</h3>
                <p className={styles.tool__description}>Convallis tellus tincidunt consequat nunc. Semper pretium ac amet nibh. </p>
                <div className={styles.tool__btnContainer}>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='#' target='_blank'>
                    td tools
                    <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
                  </a>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='#' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
                  </a>
                </div>
              </div>

              <div className={clsx(styles.tool, styles.domusTdd)}>
                <div className={styles.tool__img}></div>
                <FontAwesomeIcon icon={faHouse} className={styles.tool__icon} />
                <h3 className={styles.tool__title}>domus-tdd</h3>
                <p className={styles.tool__description}>Convallis tellus tincidunt consequat nunc. Semper pretium ac amet nibh. </p>
                <div className={styles.tool__btnContainer}>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='https://github.com/eclipse-thingweb/domus-tdd-api' target='_blank'>
                    domus-tdd
                    <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
                  </a>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='https://github.com/eclipse-thingweb/domus-tdd-api' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}