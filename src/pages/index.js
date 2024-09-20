import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import VpSection from '@site/src/components/VpSection';
import ToolsSection from '@site/src/components/ToolsSection';
import ServicesSection from '@site/src/components/ServicesSection';
import CommunitySection from '@site/src/components/CommunitySection';
import styles from './index.module.scss';

export default function HomePage() {
  return (
    <Layout title="Home">

      <div className={styles.gridBackground}>
        <svg width="100%" height="auto" viewBox="0 0 1709 1709" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.0004 0V854M89 0V854M134 0V854M179 0V854M224 0V854M269 0V854M314 0V854M359 0V854M404 0V854M449 0V854M0.000439405 43.9999H854M0.000439405 88.9999H854M0.000439405 134H854M0.000439405 180H854M0.000439405 224H854M0.000439405 269H854M0.000439405 314H854M0.000439405 359H854M0.000439405 404H854M0.000439405 449H853.999M0 494H853.999M0 539H853.999M0 584H853.999M0 630H853.999M0 674L853.999 674.5M0 719H853.999M0 764H853.999M0 809H853.999M0 854H853.999V449M494 0V854M539 0V854M584 0V854M629 0V854M674 0V854M719 0V854M764 0V854M809 0V854M854 0L853.999 449" stroke="#33B8A4" stroke-width="1" />
          <path d="M898 0V854M943 0V854M988 0V854M1033 0V854M1078 0V854M1123 0V854M1168 0V854M1213 0V854M1258 0V854M1303 0V854M854 43.9999H1708M854 88.9999H1708M854 134H1708M854 180H1708M854 224H1708M854 269H1708M854 314H1708M854 359H1708M854 404H1708M854 449H1708M854 494H1708M854 539H1708M854 584H1708M854 630H1708M854 674L1708 674.5M854 719H1708M854 764H1708M854 809H1708M854 854H1708V449M1348 0V854M1393 0V854M1438 0V854M1483 0V854M1528 0V854M1573 0V854M1618 0V854M1663 0V854M1708 0L1708 449" stroke="#33B8A4" stroke-width="1" />
          <path d="M898 854V1708M943 854V1708M988 854V1708M1033 854V1708M1078 854V1708M1123 854V1708M1168 854V1708M1213 854V1708M1258 854V1708M1303 854V1708M854 898H1708M854 943H1708M854 988H1708M854 1034H1708M854 1078H1708M854 1123H1708M854 1168H1708M854 1213H1708M854 1258H1708M854 1303H1708M854 1348H1708M854 1393H1708M854 1438H1708M854 1484H1708M854 1528L1708 1528.5M854 1573H1708M854 1618H1708M854 1663H1708M854 1708H1708V1303M1348 854V1708M1393 854V1708M1438 854V1708M1483 854V1708M1528 854V1708M1573 854V1708M1618 854V1708M1663 854V1708M1708 854L1708 1303" stroke="#33B8A4" stroke-width="1" />
          <path d="M44.0004 854V1708M89 854V1708M134 854V1708M179 854V1708M224 854V1708M269 854V1708M314 854V1708M359 854V1708M404 854V1708M449 854V1708M0.000439405 898H854M0.000439405 943H854M0.000439405 988H854M0.000439405 1034H854M0.000439405 1078H854M0.000439405 1123H854M0.000439405 1168H854M0.000439405 1213H854M0.000439405 1258H854M0.000439405 1303H853.999M0 1348H853.999M0 1393H853.999M0 1438H853.999M0 1484H853.999M0 1528L853.999 1528.5M0 1573H853.999M0 1618H853.999M0 1663H853.999M0 1708H853.999V1303M494 854V1708M539 854V1708M584 854V1708M629 854V1708M674 854V1708M719 854V1708M764 854V1708M809 854V1708M854 854L853.999 1303" stroke="#33B8A4" stroke-width="1" />
        </svg>
      </div>

      <HomepageHeader />

      <main>
        <VpSection />
        <ToolsSection />
        <ServicesSection />
        <CommunitySection />
      </main>
    </Layout>
  );
}