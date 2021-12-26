const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');


module.exports = {

  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "easy-mybatis",
  description: '一个把Mybatis操作简化至极致的框架',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: 'vuepress,theme,blog,vdoing' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色

  ],

  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南', link: '/pages/a2f161/', items: [
          { text: '主题初衷与诞生', link: '/pages/52d5c3/' },
          { text: '介绍', link: '/pages/a2f161/' },
          { text: '快速上手', link: '/pages/793dcb/' },
          { text: '目录结构', link: '/pages/2f674a/' },
          { text: '核心配置和约定', link: '/pages/33d574/' },
          { text: '自动生成front matter', link: '/pages/088c16/' },
          { text: 'Markdown 容器', link: '/pages/d0d7eb/' },
          { text: 'Markdown 中使用组件', link: '/pages/197691/' },
         
        ]
      },
      {
        text: '配置', link: '/pages/a20ce8/', items: [
          { text: '主题配置', link: '/pages/a20ce8/' },
          { text: '首页配置', link: '/pages/f14bdb/' },
          { text: 'front matter配置', link: '/pages/3216b0/' },
          { text: '目录页配置', link: '/pages/54651a/' },
          { text: '添加摘要', link: '/pages/1cc523/' },
          { text: '修改主题颜色和样式', link: '/pages/f51918/' },
          { text: '评论栏', link: '/pages/ce175c/' },
        ]
      },
      { text: '💖支持', link: '/pages/1b12ed/' },
      { text: '作者博客', link: 'https://zuoyu.top' },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: 'https://www.zuoyu.top/avatar', // 导航栏logo
    repo: 'zuoyuip/easy-mybatis', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true

    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: 'zuoyu', // 必需
      href: 'https://github.com/zuoyuip' // 可选的
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:zuoyuip@foxmail.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/zuoyuip'
        }
      ]
    },
    footer: { // 页脚信息
      createYear: 2021, // 博客创建年份
      copyrightInfo: 'zuoyu | MIT License | <a style="color: #73777a;" href="http://www.beian.miit.gov.cn" target="_blank">© 豫ICP备19014153号-1</a>', // 博客版权信息，支持a标签
    },
    htmlModules,
  },

  // 插件
  plugins: [
    [require('./plugins/love-me'), { // 鼠标点击爱心特效
      color: '#11a8cd', // 爱心颜色，默认随机色
      excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    }],

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode
      }
    ],

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    // ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
    //   settings: {
    //     // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
    //     // cssLib: ['http://xxx'], // 在线示例中的css依赖
    //     // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
    //     jsfiddle: false, // 是否显示 jsfiddle 链接
    //     codepen: true, // 是否显示 codepen 链接
    //     horizontal: false // 是否展示为横向样式
    //   }
    // }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    // [
    //   '@vuepress/last-updated', // "上次更新"时间格式
    //   {
    //     transformer: (timestamp, lang) => {
    //       const dayjs = require('dayjs') // https://day.js.org/
    //       return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
    //     },
    //   }
    // ]
  ],
}
