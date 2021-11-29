module.exports = {
  base: "/docs/",
  title: "前端杨小兽",
  description: "自定义",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  plugins: ["@vuepress/back-to-top"],
  themeConfig: {
    //导航栏的logo
    logo: "/assets/img/1.webp",

    //页面滚动
    smoothScroll: true,

    //多个下拉选项,

    nav: [
      {
        text: "Languages",
        ariaLabel: "Language Menu",
        items: [{ text: "Chinese", link: "/language/chinese/" }],
      },
      { text: "Guide", link: "/guide/" },
      { text: "About", link: "/about/" },
    ],
    // sidebar: "auto",
    sidebar: ["/", "/about/", "/guide/"],
    // displayAllHeaders: true,
    //最后更改时间
    lastUpdated: "Last Updated",
  },
};
