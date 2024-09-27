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
    <Layout>

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