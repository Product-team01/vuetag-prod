// import React from 'react';
// import clsx from 'clsx';
// import HubCards from './HubCards'; // Import the HubCards component
// import './HubCards.css'; // Import the CSS file for the HubCards

// export default function HelpSection({ className = '' }) {
//   return (
//     <section className="px-3 ">
//       <div
//         className={clsx(
//           'mx-auto max-w-1xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-20 lg:py-20',
//           className
//         )}
//       >
//         <h2 className="mb-5 text-center lg:text-3xl">
//           How can we help you today?
//         </h2>
//        {/* Include the HubCards component here */}
//       </div>
//     </section>
//   );
// }


import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function HelpSection({ className = '' }) {
  return (
    <section className="px-4 pt-16">
      <div
        className={clsx(
          'mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20',
          className
        )}
      >
        <h2 className="mb-12 text-center lg:text-3xl">
          How can we help you today?
        </h2>
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          <div className="rounded-lg  bg-zinc-100 p-6 dark:bg-zinc-900">
            <h3 className="my-3">User Guides</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              This guide is designed to help you navigate and make the most of your experience on our tool.
            </p>
            <Link
              href="https://supportdocs.vuetag.ai/guides"
              className="text-primary dark:text-primary-100"
            >
              Take me there &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <h3 className="my-3">API Integration</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              This comprehensive guide is designed to assist developers in integrating and leveraging the functionalities of our tool.
            </p>
            <Link
              href="https://supportdocs.vuetag.ai/guides/api-reference/async_tagging"
              className="text-primary dark:text-primary-100"
            >
              Take me there &rarr;
            </Link>
          </div>

         
        </div>
      </div>
    </section>
  );
}
