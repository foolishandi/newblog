import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog', 'fe5'),
    exact: true
  },
  {
    path: '/en/blog/archive',
    component: ComponentCreator('/en/blog/archive', 'a81'),
    exact: true
  },
  {
    path: '/en/blog/first-blog-post',
    component: ComponentCreator('/en/blog/first-blog-post', 'e87'),
    exact: true
  },
  {
    path: '/en/blog/long-blog-post',
    component: ComponentCreator('/en/blog/long-blog-post', '019'),
    exact: true
  },
  {
    path: '/en/blog/mdx-blog-post',
    component: ComponentCreator('/en/blog/mdx-blog-post', 'b33'),
    exact: true
  },
  {
    path: '/en/blog/tags',
    component: ComponentCreator('/en/blog/tags', '862'),
    exact: true
  },
  {
    path: '/en/blog/tags/docusaurus',
    component: ComponentCreator('/en/blog/tags/docusaurus', '89b'),
    exact: true
  },
  {
    path: '/en/blog/tags/facebook',
    component: ComponentCreator('/en/blog/tags/facebook', '96d'),
    exact: true
  },
  {
    path: '/en/blog/tags/hello',
    component: ComponentCreator('/en/blog/tags/hello', 'f7a'),
    exact: true
  },
  {
    path: '/en/blog/tags/hola',
    component: ComponentCreator('/en/blog/tags/hola', 'bbf'),
    exact: true
  },
  {
    path: '/en/blog/welcome',
    component: ComponentCreator('/en/blog/welcome', 'be2'),
    exact: true
  },
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', 'ab5'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', 'b11'),
    routes: [
      {
        path: '/en/docs/next',
        component: ComponentCreator('/en/docs/next', '06a'),
        routes: [
          {
            path: '/en/docs/next',
            component: ComponentCreator('/en/docs/next', 'bfe'),
            routes: [
              {
                path: '/en/docs/next/category/tutorial---basics',
                component: ComponentCreator('/en/docs/next/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/next/category/tutorial---extras',
                component: ComponentCreator('/en/docs/next/category/tutorial---extras', 'c9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/next/intro',
                component: ComponentCreator('/en/docs/next/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/next/tutorial-basics/congratulations',
                component: ComponentCreator('/en/docs/next/tutorial-basics/congratulations', '2e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/next/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/en/docs/next/tutorial-basics/create-a-blog-post', '378'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/next/tutorial-basics/create-a-document',
                component: ComponentCreator('/en/docs/next/tutorial-basics/create-a-document', '026'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/next/tutorial-basics/create-a-page',
                component: ComponentCreator('/en/docs/next/tutorial-basics/create-a-page', 'e8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/next/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/en/docs/next/tutorial-basics/deploy-your-site', '71c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/next/tutorial-basics/markdown-features',
                component: ComponentCreator('/en/docs/next/tutorial-basics/markdown-features', '0e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/next/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/en/docs/next/tutorial-extras/manage-docs-versions', '92e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/next/tutorial-extras/translate-your-site',
                component: ComponentCreator('/en/docs/next/tutorial-extras/translate-your-site', 'e76'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/en/docs',
        component: ComponentCreator('/en/docs', '14b'),
        routes: [
          {
            path: '/en/docs',
            component: ComponentCreator('/en/docs', 'f4a'),
            routes: [
              {
                path: '/en/docs/category/tutorial---basics',
                component: ComponentCreator('/en/docs/category/tutorial---basics', '47e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/category/tutorial---extras',
                component: ComponentCreator('/en/docs/category/tutorial---extras', '134'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/intro',
                component: ComponentCreator('/en/docs/intro', '606'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/en/docs/tutorial-basics/congratulations', '09c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/en/docs/tutorial-basics/create-a-blog-post', '120'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/en/docs/tutorial-basics/create-a-document', 'c96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/en/docs/tutorial-basics/create-a-page', '098'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/en/docs/tutorial-basics/deploy-your-site', '5d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/en/docs/tutorial-basics/markdown-features', '762'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/en/docs/tutorial-extras/manage-docs-versions', '2ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/en/docs/tutorial-extras/translate-your-site', 'e9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', '688'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
