import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// === Hero ===
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.eyebrow}>5编 · 22章</div>
        <Heading as="h1" className={clsx('hero__title', styles.title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          {siteConfig.tagline}
        </p>
        <p className={styles.lead}>
          每一个管理者，迟早都会撞上同一堵墙。
        </p>
        <div className={styles.ctaRow}>
          <Link to="/intro/intro" className={styles.ctaPrimary}>
            从引言开始读 →
          </Link>

          <Link to="/part-5/chapter-4" className={styles.ctaSecondary}>
            看管理者的十六
          </Link>

        </div>
      </div>
    </header>
  );
}

// === 编结构 ===
const PARTS = [

  {
    label: '引言',
    title: '引言',
    chapters: '序章',
    to: '/intro/intro',
    desc: '每一个管理者，迟早都会撞上同一堵墙。',
  },

  {
    label: '第一编',
    title: '管理者的两难',
    chapters: '第1 ~ 第4章',
    to: '/part-1/chapter-1',
    desc: '每一个管理者，迟早都会撞上同一堵墙。',
  },

  {
    label: '第二编',
    title: '一抔干沙：没有内在凝聚力的组织长什么样',
    chapters: '第5 ~ 第8章',
    to: '/part-2/chapter-1',
    desc: '上一章说法统管行为不管人心，靠恐惧不靠认同。那如果一个组织只有法统没有认同，会变成什么样？答案四个字：一抔干沙。',
  },

  {
    label: '第三编',
    title: '秦亡五因：只靠法统为什么撑不住',
    chapters: '第9 ~ 第12章',
    to: '/part-3/chapter-1',
    desc: '第二编讲了礼崩乐坏——文化管理的死法。礼制崩了之后，补位的是法统。法统短期极其有效，商鞅变法让秦国从西陲弱国变成天下最强，一百三十年后统一六国。但统一之后只撑了十五年。十五年，从天下一统到二世而亡。为',
  },

  {
    label: '第四编',
    title: '黄老之治与民休息：给组织喘息的空间',
    chapters: '第13 ~ 第16章',
    to: '/part-4/chapter-1',
    desc: '上一章说秦塑形、汉塑魂，塑魂的第一步是给组织喘息。这一章来看汉初怎么做——黄老之治，中国历史上最成功的一次组织止损。',
  },

  {
    label: '第五编',
    title: '被污名化的务实者：李斯的贡献清单',
    chapters: '第17 ~ 第22章',
    to: '/part-5/chapter-1',
    desc: '上一章说只走一条路必死，但不等于法统没有价值。法统是底线，是地板。这一章讲一个被遗忘的人——李斯。他不是反派，是被极端裹挟的务实者。他的贡献被秦亡的阴影遮住了，但他的贡献清单，是理解法统不可或缺的一页',
  },

];

function PartsGrid() {
  return (
    <section className={styles.partsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          编章结构
        </Heading>
        <p className={styles.sectionLead}>
          全书共 22 章，按 6 编组织。
        </p>
        <div className={styles.partsGrid}>
          {PARTS.map((p) => (
            <Link key={p.label} to={p.to} className={styles.partCard}>
              <div className={styles.partLabel}>{p.label}</div>
              <h3 className={styles.partTitle}>{p.title}</h3>
              <div className={styles.partChapters}>{p.chapters}</div>
              <p className={styles.partDesc}>{p.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// === 全书引文 ===
const QUOTES = [

  { text: `检查你的组织：制度和文化指向同一个方向吗？扩张的时候，认同覆盖了新增的人吗？`, cite: `—— 礼制：文化编织的弥天大网` },

  { text: `人主之患在于信人，信人则制于人`, cite: `—— 人心不可靠，这不是悲观，是起点` },

  { text: `道之以政，齐之以刑，民免而无耻`, cite: `—— 人心不可靠，这不是悲观，是起点` },

  { text: `的自觉就再也维持不住了——因为`, cite: `—— 法统：当礼制网不住变了的人心` },

];

function QuoteBlock() {
  return (
    <section className={styles.quoteSection}>
      <div className="container">
        {QUOTES.map((q, i) => (
          <blockquote key={i} className={styles.quote}>
            <p>{q.text}</p>
            <cite>{q.cite}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <PartsGrid />
        <QuoteBlock />
      </main>
    </Layout>
  );
}
