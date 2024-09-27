import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function HandsOnPage() {
  return (
    <Layout title="Hands-On">
      <main className={styles.handsOn}>
        <div className={clsx('container', styles.pageWrapper)}>
          <h1 className={clsx('hero-title', styles.handsOn__title)}>Web of Things - <span className={'text-highlight'}>Hands-On</span></h1>
          <p className={clsx('subheader', styles.handsOn__subheader)}>This section aims to provide hands-on information about the Web of Things (WoT) in general and the technologies developed in this area. For more information please visit the following sub-pages: </p>

          <div className={styles.handsOn__links}>

            <a className={styles.link} href='/hands-on/intro-raspberry'>
              <div className={styles.link__icon}>
                <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.icon} />
              </div>
              <h3 className={styles.link__title}>Introduction and Raspberry Pi Setup</h3>
              <p className={styles.link__description}>This document aims to introduce the Web of Things (WoT) as building blocks for applications based on the IoT devices.</p>
            </a>

            <a className={styles.link} href='/hands-on/exposed-thing'>
              <div className={styles.link__icon}>
                <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.icon} />
              </div>
              <h3 className={styles.link__title}>Exposed Thing with node-wot as Dependency</h3>
              <p className={styles.link__description}>In this document, we aim to introduce how to use the node-wot libraries to implement an Exposed Thing.</p>
            </a>

            <a className={styles.link} href='/hands-on/smart-coffee-machine'>
              <div className={styles.link__icon}>
                <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.icon} />
              </div>
              <h3 className={styles.link__title}>Smart coffee machine and node-wot API usage</h3>
              <p className={styles.link__description}>This article is a tutorial which considers a fictional smart coffee machine in order to demonstrate the capabilities of Web of Things (WoT) and the usage of node-wot API.</p>
            </a>

          </div>
        </div>
      </main>
    </Layout>
  );
}