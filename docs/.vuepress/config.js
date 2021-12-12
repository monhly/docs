module.exports = {
  base: "/",
  title: "前端杨小兽",
  description: "Discover some interesting front-end knowledge",
  theme: "reco",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: "/icons/apple-touch-icon-152x152.png" },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  plugins: [
    ["@vuepress/back-to-top"],
    ["vuepress-plugin-auto-sidebar", {}],
    [
      {
        "@vuepress/pwa": {
          serviceWorker: true,
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新",
          },
        },
      },
    ],

    [
      {
        "vuepress-plugin-sponsor": {
          theme: "drinks",
          alipay: "/assets/img/1.webp",
          wechat: "/assets/img/1.webp",
          qq: "/assets/img/1.webp",
          duration: 2000,
        },
      },
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    type: "blog",
    authorAvatar: "/assets/img/1.webp",
    //导航栏的logo
    logo: "/assets/img/1.webp",

    //页面滚动
    smoothScroll: true,

    //多个下拉选项,
    subSidebar: "auto", //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // nav: [
    //   {
    //     text: "Languages",
    //     ariaLabel: "Language Menu",
    //     items: [{ text: "Chinese", link: "/language/chinese/" }],
    //   },
    //   { text: "Guide", link: "/guide/" },
    //   { text: "About", link: "/about/" },
    // ],
    nav: [
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      {
        text: "Languages",
        ariaLabel: "Language Menu",
        items: [{ text: "Chinese", link: "/language/chinese/" }],
      },
      { text: "Guide", link: "/guide/" },
      { text: "About", link: "/about/" },
    ],
    // sidebar: "auto",
    // displayAllHeaders: true,
    //最后更改时间
    lastUpdated: "Last Updated",
    codeTheme: "okaidia",
    record: "京ICP备2021038286号-1",
    recordLink: "https://beian.miit.gov.cn/#/Integrated/index",
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: "2021",
    locales: {
      "/": {
        recoLocales: {
          homeBlog: {
            article: "美文", // 默认 文章
            tag: "标识", // 默认 标签
            category: "类别", // 默认 分类
            friendLink: "友链", // 默认 友情链接
          },
          pagation: {
            prev: "上一页",
            next: "下一页",
            go: "前往",
            jump: "跳转至",
          },
        },
      },
    },
  },
};
