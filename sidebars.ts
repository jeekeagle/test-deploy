import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// 《管理者的十六字心法》侧栏
// Docusaurus 默认从文件名生成 id，自动去前导数字：
// 例如 docs/02-part-one/01-chapter-1.md → id 为 "part-one/chapter-1"
const sidebars: SidebarsConfig = {
  bookSidebar: [
    {
      type: 'category',
      label: '引言',
      collapsed: false,
      items: [
        'intro/intro',
      ],
    },
    {
      type: 'category',
      label: '第一编 · 管理者的两难',
      collapsed: false,
      items: [
        'part-1/chapter-1',
        'part-1/chapter-2',
        'part-1/chapter-3',
        'part-1/chapter-4',
      ],
    },
    {
      type: 'category',
      label: '第二编 · 一抔干沙：没有内在凝聚力的组织长什么样',
      collapsed: false,
      items: [
        'part-2/chapter-1',
        'part-2/chapter-2',
        'part-2/chapter-3',
        'part-2/chapter-4',
      ],
    },
    {
      type: 'category',
      label: '第三编 · 秦亡五因：只靠法统为什么撑不住',
      collapsed: false,
      items: [
        'part-3/chapter-1',
        'part-3/chapter-2',
        'part-3/chapter-3',
        'part-3/chapter-4',
      ],
    },
    {
      type: 'category',
      label: '第四编 · 黄老之治与民休息：给组织喘息的空间',
      collapsed: false,
      items: [
        'part-4/chapter-1',
        'part-4/chapter-2',
        'part-4/chapter-3',
        'part-4/chapter-4',
      ],
    },
    {
      type: 'category',
      label: '第五编 · 被污名化的务实者：李斯的贡献清单',
      collapsed: false,
      items: [
        'part-5/chapter-1',
        'part-5/chapter-2',
        'part-5/chapter-3',
        'part-5/chapter-4',
        'part-5/chapter-5',
        'part-5/chapter-6',
      ],
    },
  ],
};

export default sidebars;