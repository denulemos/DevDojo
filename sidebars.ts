import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'landing/devhood',
    {
      type: 'category',
      label: '🧠 Arquitectura',
      link: { type: 'doc', id: 'landing/arquitectura' },
      collapsed: true,
      items: ['microfrontends', 'systemdesign', 'loadbalancer', 'microservicios'],
    },
    {
      type: 'category',
      label: '🖥️ Backend',
      link: { type: 'doc', id: 'landing/backend' },
      collapsed: true,
      items: [
        'desarrollo-web/backend/java',
        'desarrollo-web/nodejs',
        'desarrollo-web/backend/basesDatos',
        'api',
      ],
    },
    {
      type: 'category',
      label: '⚙️ DevOps',
      link: { type: 'doc', id: 'landing/devops' },
      collapsed: true,
      items: ['versionado', 'cicd'],
    },
    {
      type: 'category',
      label: '🎨 Frontend',
      collapsed: true,
      link: { type: 'doc', id: 'landing/frontend' },
      items: [
        {
          type: 'category',
          label: '❤️ Angular',
          link: { type: 'doc', id: 'landing/angular' },
          collapsed: true,
          items: [
            'desarrollo-web/angular/ejercicios-tecnicos',
          ],
        },
        'desarrollo-web/javascript/javascript',
        'desarrollo-web/javascript/typescript',
        'desarrollo-web/react',
        'desarrollo-web/scss',
        'desarrollo-web/html',
        'ssr',
      ],
    },

    {
      type: 'category',
      label: '🤝 Soft Skills',
      link: { type: 'doc', id: 'landing/soft' },
      collapsed: true,
      items: ['comunicacion'],
    },
    {
      type: 'category',
      label: '🤖 IA',
      link: { type: 'doc', id: 'landing/ia' },
      collapsed: true,
      items: ['claude', 'mcp'],
    },
    {
      type: 'category',
      label: '📚 Teoría',
      link: { type: 'doc', id: 'landing/teoria' },
      collapsed: true,
      items: ['algoritmos', 'desarrollo-web/backend/poo', 'patrones', 'internetredes'],
    },
    'accesibilidad/accesibilidad',
    'seguridad',
  ],
};

export default sidebars;
