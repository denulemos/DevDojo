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
      items: ['microfrontends', 'systemdesign', 'microservicios', {
        type: 'category',
        label: '⚙️ DevOps',
        link: { type: 'doc', id: 'devops' },
        collapsed: true,
        items: ['versionado', 'cicd'],
      },
        {
          type: 'category',
          label: '☁️ Cloud',
          collapsed: true,
          items: ['aws'],
        }

      ],
    },
    {
      type: 'category',
      label: '🖥️ Backend',
      link: { type: 'doc', id: 'backend' },
      collapsed: true,
      items: [
        'java',
        {
          type: 'category',
          label: '💚 NodeJS',
          link: { type: 'doc', id: 'nodejs' },
          collapsed: true,
          items: [
            {
              type: 'link',
              label: 'Conceptos Básicos',
              href: '/docs/nodejs#conceptos-basicos',
            },
            {
              type: 'link',
              label: 'Herramientas y Entorno',
              href: '/docs/nodejs#herramientas-y-entorno',
            },
            {
              type: 'link',
              label: 'ExpressJS',
              href: '/docs/nodejs#expressjs',
            },
            {
              type: 'link',
              label: 'Rendimiento y Escalabilidad',
              href: '/docs/nodejs#rendimiento-y-escalabilidad',
            },
          ],
        },
        {
          type: 'category',
          label: '🗄️ Bases de Datos',
          link: { type: 'doc', id: 'basesDatos' },
          collapsed: true,
          items: [
            {
              type: 'link',
              label: 'SQL',
              href: '/docs/basesDatos#sql',
            },
            {
              type: 'link',
              label: 'Not Only SQL - NoSQL',
              href: '/docs/basesDatos#nosql',
            },
          ],
        },
        {
          type: 'category',
          label: '🔌 APIs',
          link: { type: 'doc', id: 'api' },
          collapsed: true,
          items: [
            {
              type: 'link',
              label: 'Arquitecturas y Tipos',
              href: '/docs/api#arquitecturas-y-tipos',
            },
            {
              type: 'link',
              label: 'Componentes de una API',
              href: '/docs/api#componentes-de-una-api',
            },
            {
              type: 'link',
              label: 'Diseño y Buenas Prácticas',
              href: '/docs/api#diseno-y-buenas-practicas',
            },
            {
              type: 'link',
              label: 'Seguridad y Control de Tráfico',
              href: '/docs/api#seguridad-y-control-de-trafico',
            },
          ],
        },
      ],
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
    {
      type: 'category',
      label: '💛 JavaScript',
      link: { type: 'doc', id: 'javascript' },
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'Métodos y Colecciones',
          href: '/docs/javascript#metodos-y-colecciones',
        },
        {
          type: 'link',
          label: 'Fundamentos del Lenguaje',
          href: '/docs/javascript#fundamentos-del-lenguaje',
        },
        {
          type: 'link',
          label: 'Asincronía y Runtime',
          href: '/docs/javascript#asincronia-y-runtime',
        },
        {
          type: 'link',
          label: 'Objetos, Módulos y Estructuras',
          href: '/docs/javascript#objetos-modulos-y-estructuras',
        },
        {
          type: 'link',
          label: 'Preguntas Frecuentes',
          href: '/docs/javascript#preguntas-frecuentes',
        },
        {
          type: 'link',
          label: 'Async Operations',
          href: '/docs/javascript#async-operations',
        },
      ],
    },
    {
      type: 'category',
      label: '💎 TypeScript',
      link: { type: 'doc', id: 'typescript' },
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'Conceptos Básicos',
          href: '/docs/typescript#conceptos-basicos',
        },
        {
          type: 'link',
          label: 'Interfaces',
          href: '/docs/typescript#interfaces',
        },
        {
          type: 'link',
          label: 'Types',
          href: '/docs/typescript#types',
        },
        {
          type: 'link',
          label: 'Utility Types',
          href: '/docs/typescript#utility-types',
        },
        {
          type: 'link',
          label: 'Decoradores',
          href: '/docs/typescript#decoradores',
        },
        {
          type: 'link',
          label: 'Conditional Types',
          href: '/docs/typescript#conditional-types',
        },
        {
          type: 'link',
          label: 'Parametros REST',
          href: '/docs/typescript#parametros-rest',
        },
        {
          type: 'link',
          label: 'Clases',
          href: '/docs/typescript#clases',
        },
        {
          type: 'link',
          label: 'Herencia',
          href: '/docs/typescript#herencia',
        },
      ],
    },
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
      items: ['claude'],
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
  tecnicosSidebar: [
    {
      type: 'category',
      label: '📚 Teoría',
      link: { type: 'doc', id: 'teoria' },
      collapsed: true,
      items: ['algoritmos', 'poo', 'patrones', 'internetredes'],
    },
  ],
};

export default sidebars;
