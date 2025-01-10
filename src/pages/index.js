import React, { useState } from 'react';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import VpSection from '@site/src/components/VpSection';
import WorkflowsSection from '@site/src/components/WorkflowsSection';
import ToolsSection from '@site/src/components/ToolsSection';
import ServicesSection from '@site/src/components/ServicesSection';
import CommunitySection from '@site/src/components/CommunitySection';
// import FeedbackPrompt from '@site/src/components/FeedbackPrompt';

export default function HomePage() {
  const [adopterCount, setAdopterCount] = useState(0);
  
  return (
    <Layout>
      {/* <FeedbackPrompt /> */}
      <HomepageHeader setAdopterCount={setAdopterCount} />
      <main>
        <VpSection />
        <WorkflowsSection />
        <ToolsSection />
        <ServicesSection />
        <CommunitySection adopterCount={adopterCount} />
      </main>
    </Layout>
  );
}