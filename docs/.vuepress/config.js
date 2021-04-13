module.exports = {
  title: "Civet",
  description: "Civet是一款开源管理软件。它的目标是提供各种资源的管理，使快速查找需要的数据和信息成为可能",
  base: '/civet/',
  theme: 'thindark',
  themeConfig : {
    nav : [
      { text: '介绍', link: '/introduction' },
      { text: '整体框架', link: '/frame' },
      { text: '前端', link: '/frontend' },
      { text: '数据库', link: '/db' },
      { text: '扩展及能力', link: '/extension' },
      {
        text: 'GitHub', link: 'https://github.com/webbery/civet'
      }
    ],
    sidebar: {
      '/frontend' : [
        {
          title: '属性面板',
          children: ['标题属性', '列表属性', '画板属性', '特殊属性']
        },
        {
          title: '导航面板',
          children: ['三导航', '分类导航']
        },
        {
          title: '主面板',
        },
        {
          title: '展示面板',
        }
      ],
      '/db' : [
        { title: '查询' }, { title: '添加/修改/删除' }
      ],
      '/extension' : [
        {
          title: '实现细节',
          children: ['/protocal']
        },
        {
          title: '浏览器扩展',
          children: ['数据交互']
        },
        {
          title: '数据源扩展',
          children: ['']
        },
        {
          title: '存储扩展',
          children: ['']
        },
        {
          title: '算法扩展',
          children: ['']
        },
        {
          title: 'UI扩展',
          children: ['']
        },
        {
          title: '常用扩展集',
          children: ['']
        }
      ]
    }
  }
}