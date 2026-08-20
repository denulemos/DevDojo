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
              href: 'arquitectura/apis/api#arquitecturas-y-tipos',
            },
            {
              type: 'link',
              label: 'Componentes',
              href: 'arquitectura/apis/api#componentes-de-una-api',
            },
            {
              type: 'link',
              label: 'Diseño y Buenas Prácticas',
              href: 'arquitectura/apis/api#diseno-y-buenas-practicas',
            },
            {
              type: 'link',
              label: 'Seguridad y Control de Tráfico',
              href: 'arquitectura/apis/api#seguridad-y-control-de-trafico',
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
            href: 'arquitectura/arquitectura#microservicios',
          }, {
              type: 'link',
              label: 'Multilayer - Multicapa',
              href: 'arquitectura/arquitectura#multilayer',
            }, {
              type: 'link',
              label: 'Multi-tier - Multinivel',
              href: 'arquitectura/arquitectura#multinivel',
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
              href: 'backend/nodejs/nodejs#conceptos-basicos',
            },
            {
              type: 'link',
              label: 'Herramientas y Entorno',
              href: 'backend/nodejs/nodejs#herramientas-y-entorno',
            },
            {
              type: 'link',
              label: 'ExpressJS',
              href: 'backend/nodejs/nodejs#expressjs',
            },
            {
              type: 'link',
              label: 'Rendimiento y Escalabilidad',
              href: 'backend/nodejs/nodejs#rendimiento-y-escalabilidad',
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
              href: 'backend/databases/basesDatos#sql',
            },
            {
              type: 'link',
              label: 'Not Only SQL - NoSQL',
              href: 'backend/databases/basesDatos#nosql',
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
          href: 'javascript/javascript#metodos-y-colecciones',
        },
        {
          type: 'link',
          label: 'Fundamentos del Lenguaje',
          href: 'javascript/javascript#fundamentos-del-lenguaje',
        },
        {
          type: 'link',
          label: 'Asincronía y Runtime',
          href: 'javascript/javascript#asincronia-y-runtime',
        },
        {
          type: 'link',
          label: 'Objetos, Módulos y Estructuras',
          href: 'javascript/javascript#objetos-modulos-y-estructuras',
        },
        {
          type: 'link',
          label: 'Preguntas Frecuentes',
          href: 'javascript/javascript#preguntas-frecuentes',
        },
        {
          type: 'link',
          label: 'Async Operations',
          href: 'javascript/javascript#async-operations',
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
          href: 'typescript/typescript#conceptos-basicos',
        },
        {
          type: 'link',
          label: 'Interfaces',
          href: 'typescript/typescript#interfaces',
        },
        {
          type: 'link',
          label: 'Types',
          href: 'typescript/typescript#types',
        },
        {
          type: 'link',
          label: 'Utility Types',
          href: 'typescript/typescript#utility-types',
        },
        {
          type: 'link',
          label: 'Decoradores',
          href: 'typescript/typescript#decoradores',
        },
        {
          type: 'link',
          label: 'Conditional Types',
          href: 'typescript/typescript#conditional-types',
        },
        {
          type: 'link',
          label: 'Parametros REST',
          href: 'typescript/typescript#parametros-rest',
        },
        {
          type: 'link',
          label: 'Clases',
          href: 'typescript/typescript#clases',
        },
        {
          type: 'link',
          label: 'Herencia',
          href: 'typescript/typescript#herencia',
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
        href: 'ia/ia#claude',
      },{
        type: 'link',
        label: '♊️ Gemini',
        href: 'ia/ia#gemini',
      }
      ,{
        type: 'link',
        label: '✨ OpenIA',
        href: 'ia/openia',
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
