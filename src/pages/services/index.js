import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function ServicesPage() {
  return (
    <Layout title="Service">
      <main className={styles.services}>
        <div className={clsx('container', styles.pageWrapper)}>
          <h1 className={clsx('hero-title', styles.services__title)}>Services for <span className={'text-highlight'}>W3C WoT</span> Developers</h1>
          <p className={clsx('subheader', styles.services__subheader)}>Eclipse Thingweb provides services to support Web of Things developers. These services are listed below.</p>


        </div>
      </main>
    </Layout>
  );
}