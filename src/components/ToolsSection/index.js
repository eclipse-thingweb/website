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

        <h2 className={clsx('hero-title', 'section-title', styles.toolsSection__title)}>Powerful <span className={'text-highlight'}>Tools</span> To Drive Your IoT Development</h2>

        <p className={clsx('section-subheader', styles.toolsSection__subheader)}>Thingweb has the components you need to interact with your devices, tools to design Thing Descriptions and services to manage your devices. Pick what you need, use as you see fit. </p>


        <div className={styles.toolsSection__tools}>

          {/* node-wot */}
          <div className={clsx(styles.tool, styles.nodeWot)}>
            <div className={styles.tool__img}></div>
            <FontAwesomeIcon icon={faCode} className={styles.tool__icon} />
            <h3 className={styles.tool__title}>node wot</h3>
            <p className={styles.tool__description}>A fast and extensible framework to connect any device with your browser and backend applications.</p>
            <div className={styles.tool__btnContainer}>
              <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='/docs/category/node-wot'>
                node wot
                <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
              </a>
              <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='https://github.com/eclipse-thingweb/node-wot'>
                <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
              </a>
            </div>
          </div>

          {/* td-code */}
          <div className={clsx(styles.tool, styles.tdCode)}>
            <div className={styles.tool__img}></div>
            <FontAwesomeIcon icon={faCode} className={styles.tool__icon} />
            <h3 className={styles.tool__title}>td code</h3>
            <p className={styles.tool__description}>VS Code extension for validating and designing W3C Thing Descriptions and Thing Models.</p>
            <div className={styles.tool__btnContainer}>
              <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='https://marketplace.visualstudio.com/items?itemName=arces-wot.td-code'>
                td code
                <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
              </a>
              <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='https://github.com/eclipse-thingweb/td-code'>
                <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
              </a>
            </div>
          </div>

          {/* dart-wot */}
          <div className={clsx(styles.tool, styles.dartWot)}>
            <div className={styles.tool__img}></div>
            <FontAwesomeIcon icon={faCode} className={styles.tool__icon} />
            <h3 className={styles.tool__title}>dart wot</h3>
            <p className={styles.tool__description}>Framework to build Web of Things applications in Dart and Flutter.</p>
            <div className={styles.tool__btnContainer}>
              <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='https://github.com/eclipse-thingweb/dart_wot'>
                dart wot
                <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
              </a>
              <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='https://github.com/eclipse-thingweb/dart_wot'>
                <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
              </a>
            </div>
          </div>

          {/* wam */}
          <div className={clsx(styles.tool, styles.wam)}>
            <div className={styles.tool__img}></div>
            <FontAwesomeIcon icon={faLaptopCode} className={styles.tool__icon} />
            <h3 className={styles.tool__title}>wam</h3>
            <p className={styles.tool__description}>WoT Application Manager - a CLI to quickly build a Web of Things application.</p>
            <div className={styles.tool__btnContainer}>
              <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='https://github.com/eclipse-thingweb/wam'>
                wam
                <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
              </a>
              <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='https://github.com/eclipse-thingweb/wam'>
                <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
              </a>
            </div>
          </div>

          {/* playground */}
          <div className={clsx(styles.tool, styles.playground)}>
            <div className={styles.tool__img}></div>
            <FontAwesomeIcon icon={faLaptopCode} className={styles.tool__icon} />
            <h3 className={styles.tool__title}>td playground</h3>
            <p className={styles.tool__description}>Browser application for validating and designing W3C Thing Descriptions and Thing Models.</p>
            <div className={styles.tool__btnContainer}>
              <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='https://playground.thingweb.io'>
                td playground
                <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
              </a>
              <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='https://github.com/eclipse-thingweb/playground'>
                <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
              </a>
            </div>
          </div>

          {/* domus-tdd */}
          <div className={clsx(styles.tool, styles.domusTdd)}>
            <div className={styles.tool__img}></div>
            <FontAwesomeIcon icon={faHouse} className={styles.tool__icon} />
            <h3 className={styles.tool__title}>domus tdd</h3>
            <p className={styles.tool__description}>Semantic storage for device metadata based on W3C Thing Description information model.</p>
            <div className={styles.tool__btnContainer}>
              <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='https://github.com/eclipse-thingweb/domus-tdd-api'>
                domus tdd
                <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
              </a>
              <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='https://github.com/eclipse-thingweb/domus-tdd-api'>
                <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
              </a>
            </div>
          </div>

          {/* td-tools */}
          <div className={clsx(styles.tool, styles.tdTools)}>
            <div className={styles.tool__img}></div>
            <FontAwesomeIcon icon={faScrewdriverWrench} className={styles.tool__icon} />
            <h3 className={styles.tool__title}>td tools</h3>
            <p className={styles.tool__description}>Utility libraries for W3C Thing Descriptions and Thing Models.</p>
            <div className={styles.tool__btnContainer}>
              <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='https://github.com/eclipse-thingweb/td-tools'>
                td tools
                <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
              </a>
              <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='https://github.com/eclipse-thingweb/td-tools'>
                <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}