// // HubCards.js
// import React from 'react';
// import HubCard from './HubCard'; // Ensure the HubCard component is imported
// import './HubCards.css'; // Ensure the CSS file is imported

// export default function HubCards() {
//   return (
//     <div className="hub-container">
//       <HubCard
//         title="Data Hub"
//         description="Collect Data, Enrich & Analyse the tags generated."
//         link="/data-hub/"
//         buttonLabel="Explore"
//         additionalButtonLabel="Enrich"
//         additionalButtonLink="/data-hub/enrich"
//         iconSrc="https://d1r1e7xjkfj7nz.cloudfront.net/DataHub2x.png"
//       />
//       <HubCard
//         title="Customer Hub"
//         description="Build custom segment, configure recommendation, manage campaigns."
//         link="/Content-Manager/"
//         buttonLabel="Experience"
//         additionalButtonLabel="Metrics"
//         additionalButtonLink="/Content-Manager"
//         iconSrc="https://d1r1e7xjkfj7nz.cloudfront.net/Users2x.png"
//       />
//       <HubCard
//         title="Automation Hub"
//         description="One shot learning, build custom workflows, no-code automation."
//         comingSoon={true}
//         iconSrc="https://d1r1e7xjkfj7nz.cloudfront.net/AutomationHub2x.png"
//       />
//       <HubCard
//         title="Optimization Hub"
//         description="Create custom metrics, reports, experiment & analyze."
//         comingSoon={true}
//         iconSrc="https://d1r1e7xjkfj7nz.cloudfront.net/OptimizationHub2x.png"
//       />
//     </div>
//   );
// }

import React from 'react';
import HubCard from './HubCard'; // Ensure the HubCard component is imported
import './HubCards.css'; // Ensure the CSS file is imported
import HubCard1 from './HubCard1'; // Ensure the HubCard component is imported

export default function HubCards() {
  return (
    <div className="hub-container">
      <HubCard
        title="Data Hub"
        description="Collect Data, Enrich & Analyse the tags generated."
        link="https://idp-support.vue.ai/Data-set"
        buttonLabel="Dataset Manager"
        additionalButtonLabel="Document Manager"
        additionalButtonLink="https://idp-support.vue.ai/Document-Manager/"
        iconSrc="https://d1r1e7xjkfj7nz.cloudfront.net/DataHub2x.png"
      />
      {/* <HubCard
        title="Customer Hub"
        description="Build custom segment, configure recommendation, manage campaigns."
        link="https://idp-support.vue.ai//Digital-Experience-Manager/Experience/Experience%20Listing"
        buttonLabel="Experience"
        additionalButtonLabel="Metrics"
        additionalButtonLink="https://idp-support.vue.ai//Digital-Experience-Manager/Metrics"
        iconSrc="https://d1r1e7xjkfj7nz.cloudfront.net/Users2x.png"
      /> */}
      <HubCard1
        title="Automation Hub"
        description="One shot learning, build custom workflows, no-code automation."
        link="https://idp-support.vue.ai/Automation"
        buttonLabel="Workflow Manager"
        iconSrc="https://d1r1e7xjkfj7nz.cloudfront.net/AutomationHub2x.png"
      />
      {/* <HubCard
        title="Optimization Hub"
        description="Create custom metrics, reports, experiment & analyze."
        comingSoon={true}
        iconSrc="https://d1r1e7xjkfj7nz.cloudfront.net/OptimizationHub2x.png"
      /> */}
    </div>
  );
}
