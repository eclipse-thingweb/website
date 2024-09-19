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
        <svg width="100%" height="auto" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio>
          <path d="M44.0004 0L44 900M89 0L88.9996 900M134 0L134 900M179 0L179 900M224 0L224 900M269 0L269 900M314 0L313.999 900M359 0L358.999 900M404 0L403.999 900M449 0L448.999 900M0.000439405 43.9999H900M0.000439405 88.9999H900M0.000439405 134H900M0.000439405 180H900M0.000439405 224H900M0.000439405 269H900M0.000439405 314H900M0.000439405 359H900M0.000439405 404H900M0.000439405 449H900M0 494H899.999M0 539H899.999M0 584H899.999M0 630H899.999M0 674H899.999M0 719H899.999M0 764H899.999M0 809H899.999M0 854H899.999M494 0L494 900M539 0L539 900M584 0L584 900M629 0L629 900M674 0L674 900M719 0L719 900M764 0L763.999 900M809 0L808.999 900M854 0L853.999 900" stroke="#33b8a4" stroke-width="1" />
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