import { defineConfig } from "vitepress";
import { teekConfig } from "./teekConfig.mts";

const description = "用量子生物学翻译东方生命智慧，不玄学，只讲科学。";

export default defineConfig({
  extends: teekConfig,
  title: "HUMAN_OS",
  description: description,
  cleanUrls: false,
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "HUMAN_OS" }],
    ["meta", { property: "og:description", content: description }],
    ["meta", { name: "description", content: description }],
    ["meta", { name: "author", content: "HUMAN_OS" }],
    ["meta", { name: "keywords", content: description }],
  ],
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  themeConfig: {
    logo: "/logo.svg",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "核心理论",
        link: "/zh/core/",
        activeMatch: "/zh/core/",
      },
      {
        text: "身体与能量",
        link: "/zh/hardware/",
        activeMatch: "/zh/hardware/",
      },
      {
        text: "实践指南",
        link: "/zh/software/",
        activeMatch: "/zh/software/",
      },
      {
        text: "功能页",
        items: [
          { text: "归档页", link: "/archives" },
          { text: "分类页", link: "/categories" },
          { text: "标签页", link: "/tags" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/" }],
    search: {
      provider: "local",
    },
  },
});
