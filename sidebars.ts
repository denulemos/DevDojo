import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'devhood',
    'accesibilidad',
    {
      type: 'category',
      label: '🧠 Arquitectura',
      link: { type: 'doc', id: 'arquitectura/arquitectura' },
      collapsed: true,
      items: [
        'arquitectura/systemdesign/systemdesign', 'arquitectura/patrones/patrones',
        {
          type: 'category',
          label: '🔌 APIs',
          link: { type: 'doc', id: 'arquitectura/apis/api' },
          collapsed: true,
          items: [
            {
              type: 'link',
              label: 'Tipos',
              href: '/docs/api#arquitecturas-y-tipos',
            },
            {
              type: 'link',
              label: 'Componentes',
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
        {
          type: 'category',
          label: '🧩 Patrones de Arquitectura',
          collapsed: true,
          items: ['arquitectura/patrones/microfrontends', {
            type: 'link',
            label: 'Microservicios',
            href: '/docs/arquitectura#microservicios',
          }, {
              type: 'link',
              label: 'Multilayer - Multicapa',
              href: '/docs/arquitectura#multilayer',
            }, {
              type: 'link',
              label: 'Multi-tier - Multinivel',
              href: '/docs/arquitectura#multinivel',
            }],
        }
        , {
          type: 'category',
          label: '⚙️ DevOps',
          collapsed: true,
          items: ['arquitectura/devops/versionado', 'arquitectura/devops/cicd'],
        },
        {
          type: 'category',
          label: '☁️ Cloud',
          collapsed: true,
          items: ['arquitectura/cloud/aws/aws'],
        }

      ],
    },
    {
      type: 'category',
      label: '🖥️ Backend',
      collapsed: true,
      items: [
        'backend/python/python',
        {
          type: 'category',
          label: '💚 NodeJS',
          link: { type: 'doc', id: 'backend/nodejs/nodejs' },
          collapsed: true,
          items: [
            {
              type: 'link',
              label: 'Conceptos Básicos (Node)',
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
          link: { type: 'doc', id: 'backend/databases/basesDatos' },
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
        }
      ],
    },

    {
      type: 'category',
      label: '🎨 Frontend',
      collapsed: true,
      link: { type: 'doc', id: 'frontend/frontend' },
      items: [
        {
          type: 'category',
          label: '❤️ Angular',
          link: { type: 'doc', id: 'frontend/angular/angular' },
          collapsed: true,
          items: [
            'frontend/angular/ejercicios-tecnicos',
          ],
        },

        'frontend/react/react',
        'frontend/css/scss',
        'frontend/html/html',
        'frontend/ssr/ssr',
      ],
    },
    {
      type: 'category',
      label: '💛 JavaScript',
      link: { type: 'doc', id: 'javascript/javascript' },
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
      link: { type: 'doc', id: 'typescript/typescript' },
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'Conceptos Básicos (TS)',
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
      label: '🤖 IA',
      link: { type: 'doc', id: 'ia/ia' },
      collapsed: true,
      items: [{
        type: 'link',
        label: '⚡ Claude',
        href: '/docs/ia/ia#claude',
      },{
        type: 'link',
        label: '♊️ Gemini',
        href: '/docs/ia/ia#gemini',
      }
      ,{
        type: 'link',
        label: '✨ OpenIA',
        href: '/docs/ia/openia',
      }
    ],
    },
    {
      type: 'category',
      label: '📚 Teoría',
      collapsed: true,
      items: ['teoria/algoritmos/algoritmos', 'teoria/poo/poo'],
    },
    'seguridad/seguridad',
  ],
};

export default sidebars;
