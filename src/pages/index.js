import React from 'react';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import VpSection from '@site/src/components/VpSection';
import WorkflowsSection from '@site/src/components/WorkflowsSection';
import ToolsSection from '@site/src/components/ToolsSection';
import ServicesSection from '@site/src/components/ServicesSection';
import CommunitySection from '@site/src/components/CommunitySection';
import FeedbackPrompt from '../components/FeedbackPrompt';

export default function HomePage() {
  return (
    <Layout>
      <FeedbackPrompt />
      <HomepageHeader />
      <main>
        <VpSection />
        <WorkflowsSection />
        <ToolsSection />
        <ServicesSection />
        <CommunitySection />
      </main>
    </Layout>
  );
}