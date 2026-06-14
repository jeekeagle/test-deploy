import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '管理者的十六字心法',
  tagline: '三千年试错，凝于十六字',
  favicon: 'img/favicon.svg',

  future: {v4: true},

  url: 'https://jeekeagle.github.io',
  baseUrl: '/test-deploy/',

  organizationName: 'jeekeagle',
  projectName: 'test-deploy',

  onBrokenLinks: 'warn',

  i18n: {defaultLocale: 'zh-Hans', locales: ['zh-Hans']},

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/jeekeagle/test-deploy/edit/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {respectPrefersColorScheme: true, defaultMode: 'light'},
    metadata: [
      {name: 'Cache-Control', content: 'no-cache, no-store, must-revalidate'},
      {name: 'Pragma', content: 'no-cache'},
      {name: 'Expires', content: '0'},
    ],
    navbar: {
      title: '管理者的十六字心法',
      logo: {alt: '管', src: 'img/logo.svg'},
      items: [
        {to: '/', label: '首页', position: 'left'},
        {to: '/intro/intro', label: '开始阅读', position: 'left'},

        {to: '/part-5/chapter-4', label: '管理者的十六', position: 'left'},

        {href: 'https://github.com/jeekeagle/test-deploy', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '本书',
          items: [
            {label: '引言', to: '/intro/intro'},

            {label: '引言', to: '/intro/intro'},

            {label: '第一编 · 管理者的两难', to: '/part-1/chapter-1'},

            {label: '第二编 · 一抔干沙：没有内在凝聚力的组织长什么样', to: '/part-2/chapter-1'},

            {label: '第三编 · 秦亡五因：只靠法统为什么撑不住', to: '/part-3/chapter-1'},

            {label: '第四编 · 黄老之治与民休息：给组织喘息的空间', to: '/part-4/chapter-1'},

            {label: '第五编 · 被污名化的务实者：李斯的贡献清单', to: '/part-5/chapter-1'},

          ],
        },
        {
          title: '更多',
          items: [
            {label: 'GitHub 仓库', href: 'https://github.com/jeekeagle/test-deploy'},
            {label: '完整索引', to: '/llms.txt'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} jeekeagle · 管理者的十六字心法`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
