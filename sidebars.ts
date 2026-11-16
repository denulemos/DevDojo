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
              href: '#arquitecturas-y-tipos',
            },
            {
              type: 'link',
              label: 'Componentes',
              href: '#componentes-de-una-api',
            },
            {
              type: 'link',
              label: 'Diseño y Buenas Prácticas',
              href: '#diseno-y-buenas-practicas',
            },
            {
              type: 'link',
              label: 'Seguridad y Control de Tráfico',
              href: '#seguridad-y-control-de-trafico',
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
              href: '#conceptos-basicos',
            },
            {
              type: 'link',
              label: 'Herramientas y Entorno',
              href: '#herramientas-y-entorno',
            },
            {
              type: 'link',
              label: 'ExpressJS',
              href: '#expressjs',
            },
            {
              type: 'link',
              label: 'Rendimiento y Escalabilidad',
              href: '#rendimiento-y-escalabilidad',
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
              href: '#sql',
            },
            {
              type: 'link',
              label: 'Not Only SQL - NoSQL',
              href: '#nosql',
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
          href: '#metodos-y-colecciones',
        },
        {
          type: 'link',
          label: 'Fundamentos del Lenguaje',
          href: '#fundamentos-del-lenguaje',
        },
        {
          type: 'link',
          label: 'Asincronía y Runtime',
          href: '#asincronia-y-runtime',
        },
        {
          type: 'link',
          label: 'Objetos, Módulos y Estructuras',
          href: '#objetos-modulos-y-estructuras',
        },
        {
          type: 'link',
          label: 'Preguntas Frecuentes',
          href: '#preguntas-frecuentes',
        },
        {
          type: 'link',
          label: 'Async Operations',
          href: '#async-operations',
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
          href: '#conceptos-basicos',
        },
        {
          type: 'link',
          label: 'Interfaces',
          href: '#interfaces',
        },
        {
          type: 'link',
          label: 'Types',
          href: '#types',
        },
        {
          type: 'link',
          label: 'Utility Types',
          href: '#utility-types',
        },
        {
          type: 'link',
          label: 'Decoradores',
          href: '#decoradores',
        },
        {
          type: 'link',
          label: 'Conditional Types',
          href: '#conditional-types',
        },
        {
          type: 'link',
          label: 'Parametros REST',
          href: '#parametros-rest',
        },
        {
          type: 'link',
          label: 'Clases',
          href: '#clases',
        },
        {
          type: 'link',
          label: 'Herencia',
          href: '#herencia',
        },
      ],
    },
    {
      type: 'category',
      label: '🤖 IA',
      link: { type: 'doc', id: 'ia/ia' },
      collapsed: true,
      items: [
        { type: 'link', label: 'Tokens', href: '/docs/ia#tokens' },
        { type: 'link', label: 'Temperatura', href: '/docs/ia#temperatura' },
        { type: 'link', label: 'IA Generativa', href: '/docs/ia#ia-generativa' },
        { type: 'link', label: 'Alucinaciones', href: '/docs/ia#alucinaciones' },
        { type: 'link', label: 'Sesgo o Bias', href: '/docs/ia#sesgo-o-bias' },
        { type: 'link', label: 'Exceso de complacencia', href: '/docs/ia#exceso-de-complacencia' },
        { type: 'link', label: 'Coding Assistant', href: '/docs/ia#coding-assistant' },
        { type: 'link', label: 'Tool Use', href: '/docs/ia#tool-use' },
        { type: 'link', label: 'RAG', href: '/docs/ia#rag-retrieval-augmented-generation' },
        { type: 'link', label: 'AI Fluency', href: '/docs/ia#ai-fluency' },
        'ia/prompts',
        { type: 'link', label: 'Claude', href: '/docs/ia#claude' },
      ],
    },
    {
      type: 'category',
      label: '📚 Teoría',
      collapsed: true,
      items: ['teoria/algoritmos/algoritmos', 'teoria/poo/poo', 'teoria/Agile/agile'],
    },
    'seguridad/seguridad',
  ],
};

export default sidebars;
