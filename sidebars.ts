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
    'devhood',
    {
      type: 'category',
      label: '🧠 Arquitectura',
      link: { type: 'doc', id: 'arquitectura' },
      collapsed: true,
      items: ['microfrontends', 'systemdesign', 'microservicios'],
    },
    {
      type: 'category',
      label: '🖥️ Backend',
      link: { type: 'doc', id: 'backend' },
      collapsed: true,
      items: [
        'java',
        'nodejs',
        'basesDatos',
        'api',
      ],
    },
    {
      type: 'category',
      label: '⚙️ DevOps',
      link: { type: 'doc', id: 'devops' },
      collapsed: true,
      items: ['versionado', 'cicd'],
    },
    {
      type: 'category',
      label: '🎨 Frontend',
      collapsed: true,
      link: { type: 'doc', id: 'frontend' },
      items: [
        {
          type: 'category',
          label: '❤️ Angular',
          link: { type: 'doc', id: 'angular' },
          collapsed: true,
          items: [
            'angular/ejercicios-tecnicos',
          ],
        },

        'react',
        'scss',
        'html',
        'ssr',
      ],
    },
    'javascript',
    'typescript',
    {
      type: 'category',
      label: '🤝 Soft Skills',
      link: { type: 'doc', id: 'soft' },
      collapsed: true,
      items: ['comunicacion'],
    },
    {
      type: 'category',
      label: '🤖 IA',
      link: { type: 'doc', id: 'ia' },
      collapsed: true,
      items: ['claude', 'mcp'],
    },
    {
      type: 'category',
      label: '📚 Teoría',
      link: { type: 'doc', id: 'teoria' },
      collapsed: true,
      items: ['algoritmos', 'poo', 'patrones', 'internetredes'],
    },
    'accesibilidad',
    'seguridad',
  ],
};

export default sidebars;
