/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a set of docs in the sidebar
 - provide next/previous navigation

 The sidebars can be generated from the file structure, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  learningPath: [
    {
      type: 'doc',
      id: 'intro',
      label: '🚀 Start Here',
    },
    {
      label: '🌐 Web3 Basics',
      type: 'category',
      link: {type: 'doc', id: 'web3-basics/intro'},
      items: [
        'web3-basics/lesson-01-what-is-web3',
        'web3-basics/lesson-02-blockchain-explained',
        'web3-basics/lesson-03-cryptocurrencies',
        'web3-basics/lesson-04-smart-contracts',
        'web3-basics/resources',
      ],
    },
    {
      label: '₿ Crypto & Blockchain',
      type: 'category',
      link: {type: 'doc', id: 'crypto-blockchain/intro'},
      items: [
        'crypto-blockchain/lesson-01-how-crypto-works',
        'crypto-blockchain/lesson-02-bitcoin-vs-ethereum',
        'crypto-blockchain/lesson-03-defi-explained',
        'crypto-blockchain/lesson-04-nfts-guide',
        'crypto-blockchain/lesson-05-security-best-practices',
        'crypto-blockchain/resources',
      ],
    },
    {
      label: '🤖 AI Tools & Skills',
      type: 'category',
      link: {type: 'doc', id: 'ai-tools/intro'},
      items: [
        'ai-tools/lesson-01-ai-basics',
        'ai-tools/lesson-02-chatgpt-guide',
        'ai-tools/lesson-03-midjourney-ai-art',
        'ai-tools/lesson-04-automation',
        'ai-tools/resources',
      ],
    },
    {
      label: '📱 Digital Marketing',
      type: 'category',
      link: {type: 'doc', id: 'digital-marketing/intro'},
      items: [
        'digital-marketing/lesson-01-web3-marketing',
        'digital-marketing/lesson-02-social-media',
        'digital-marketing/lesson-03-community-building',
        'digital-marketing/lesson-04-content-strategy',
        'digital-marketing/resources',
      ],
    },
    {
      label: '📝 Data Entry Skills',
      type: 'category',
      link: {type: 'doc', id: 'data-entry/intro'},
      items: [
        'data-entry/lesson-01-fundamentals',
        'data-entry/lesson-02-tools-software',
        'data-entry/lesson-03-efficiency-tips',
        'data-entry/lesson-04-remote-work',
        'data-entry/resources',
      ],
    },
    {
      label: '🌉 Web2 → Web3 Career Path',
      type: 'category',
      link: {type: 'doc', id: 'career-transition/intro'},
      items: [
        'career-transition/lesson-01-self-assessment',
        'career-transition/lesson-02-skill-gaps',
        'career-transition/lesson-03-learning-roadmap',
        'career-transition/lesson-04-building-portfolio',
        'career-transition/lesson-05-job-hunting',
        'career-transition/resources',
      ],
    },
    {
      label: '💼 Opportunities',
      type: 'category',
      link: {type: 'doc', id: 'opportunities/intro'},
      items: [
        'opportunities/lesson-01-airdrops',
        'opportunities/lesson-02-freelance-work',
        'opportunities/lesson-03-dao-contributor',
        'opportunities/lesson-04-remote-jobs',
        'opportunities/resources',
      ],
    },
    {
      label: '🛠 Resources & Tools',
      type: 'category',
      link: {type: 'doc', id: 'resources/intro'},
      items: [
        'resources/essential-tools',
        'resources/communities',
        'resources/learning-platforms',
        'resources/useful-links',
      ],
    },
  ],
};

export default sidebars;
