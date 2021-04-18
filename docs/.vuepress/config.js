module.exports = {
  title: "Civet",
  description: "Civet是一款开源管理软件。它的目标是提供各种资源的管理，使快速查找需要的数据和信息成为可能",
  base: '/civet/',
  markdown: {
    lineNumbers: true
  },
  theme: 'thindark',
  themeConfig : {
    sidebarDepth: 2,
    nav : [
      { text: '介绍', link: '/introduction' },
      { text: '整体框架', link: '/frame' },
      { text: '前端', link: '/frontend' },
      { text: '扩展', link: '/extension' },
      { text: '数据库', link: '/db' },
      { text: '扩展市场', link: '/market' },
      {
        text: 'GitHub', link: 'https://github.com/webbery/civet'
      }
    ],
    sidebar: [
      '/introduction',
      '/frame',
      '/frontend',
      '/extension',
      '/db'
    ]
  }
}