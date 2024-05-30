import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '513'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '040'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '2b3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '3ef'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd7c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '5ea'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '326'),
    exact: true
  },
  {
    path: '/api',
    component: ComponentCreator('/api', '9c5'),
    exact: true
  },
  {
    path: '/api/v2',
    component: ComponentCreator('/api/v2', '775'),
    exact: true
  },
  {
    path: '/getting-started',
    component: ComponentCreator('/getting-started', 'cc5'),
    exact: true
  },
  {
    path: '/GTMnoScript',
    component: ComponentCreator('/GTMnoScript', 'c12'),
    exact: true
  },
  {
    path: '/Release',
    component: ComponentCreator('/Release', '842'),
    exact: true
  },
  {
    path: '/release-notes',
    component: ComponentCreator('/release-notes', '82b'),
    exact: true
  },
  {
    path: '/release-notes/rest-api',
    component: ComponentCreator('/release-notes/rest-api', '3e2'),
    exact: true
  },
  {
    path: '/guides',
    component: ComponentCreator('/guides', 'f41'),
    routes: [
      {
        path: '/guides',
        component: ComponentCreator('/guides', 'e60'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides',
        component: ComponentCreator('/guides', 'c26'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/api-reference/async_tagging',
        component: ComponentCreator('/guides/api-reference/async_tagging', '307'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/api-reference/tagging_feedback',
        component: ComponentCreator('/guides/api-reference/tagging_feedback', '97a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Getting started/Audience Listing',
        component: ComponentCreator('/guides/Getting started/Audience Listing', '432'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Beauty/1',
        component: ComponentCreator('/guides/Taxonomy/Beauty/1', '464'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Electronics/Appliances',
        component: ComponentCreator('/guides/Taxonomy/Electronics/Appliances', 'c7b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Electronics/Audio Devices',
        component: ComponentCreator('/guides/Taxonomy/Electronics/Audio Devices', '5ae'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Electronics/Cameras & Camcorders',
        component: ComponentCreator('/guides/Taxonomy/Electronics/Cameras & Camcorders', 'ebb'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Electronics/Car Electronics & GPS',
        component: ComponentCreator('/guides/Taxonomy/Electronics/Car Electronics & GPS', '6ac'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Electronics/Computers & Tablets',
        component: ComponentCreator('/guides/Taxonomy/Electronics/Computers & Tablets', '181'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Electronics/Health, Fitness & Personal Care',
        component: ComponentCreator('/guides/Taxonomy/Electronics/Health, Fitness & Personal Care', '35c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Electronics/Home & Office',
        component: ComponentCreator('/guides/Taxonomy/Electronics/Home & Office', '897'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Electronics/Mobile Phones',
        component: ComponentCreator('/guides/Taxonomy/Electronics/Mobile Phones', '7a4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Electronics/Overview',
        component: ComponentCreator('/guides/Taxonomy/Electronics/Overview', 'b41'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Electronics/Smart Home, Security & Wi-Fi',
        component: ComponentCreator('/guides/Taxonomy/Electronics/Smart Home, Security & Wi-Fi', '41f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Electronics/Sustainable Living',
        component: ComponentCreator('/guides/Taxonomy/Electronics/Sustainable Living', '553'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Electronics/TV & Home Theatre',
        component: ComponentCreator('/guides/Taxonomy/Electronics/TV & Home Theatre', '7ba'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Electronics/Video Games',
        component: ComponentCreator('/guides/Taxonomy/Electronics/Video Games', '302'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Electronics/Wearable Technology',
        component: ComponentCreator('/guides/Taxonomy/Electronics/Wearable Technology', '6cf'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Fashion/Color Family',
        component: ComponentCreator('/guides/Taxonomy/Fashion/Color Family', '869'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Fashion/Overview',
        component: ComponentCreator('/guides/Taxonomy/Fashion/Overview', '60d'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Fashion/Supported Attribute Family',
        component: ComponentCreator('/guides/Taxonomy/Fashion/Supported Attribute Family', 'cb9'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Fashion/Title and Description',
        component: ComponentCreator('/guides/Taxonomy/Fashion/Title and Description', 'e80'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Grocerry/Category',
        component: ComponentCreator('/guides/Taxonomy/Grocerry/Category', 'a49'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Grocerry/Overview',
        component: ComponentCreator('/guides/Taxonomy/Grocerry/Overview', '443'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Home/Category',
        component: ComponentCreator('/guides/Taxonomy/Home/Category', '378'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/guides/Taxonomy/Home/Overview',
        component: ComponentCreator('/guides/Taxonomy/Home/Overview', '1a6'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '01a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
