import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { teekConfig, teekConfigEn } from "./teekConfig";

const description =
  "HUMAN_BODY — 用量子生物学、神经科学与筋膜解剖学的语言，翻译东方生命智慧。不玄学，只讲科学。";

export default withMermaid(defineConfig({
  extends: teekConfig,
  title: "HUMAN_BODY",
  description: description,
  cleanUrls: false,
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/teek-logo-mini.svg" }],
    ["link", { rel: "icon", type: "image/png", href: "/teek-logo-mini.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "HUMAN_BODY | 重新认识你的身体" }],
    ["meta", { property: "og:site_name", content: "HUMAN_BODY" }],
    ["meta", { property: "og:description", content: description }],
    ["meta", { name: "description", content: description }],
    ["meta", { name: "author", content: "HUMAN_BODY" }],
    ["meta", { name: "keywords", content: "量子生物学,意识,冥想,筋膜,经络,觉知,人体潜能,东方智慧,神经科学" }],
  ],
  rewrites: {
    "zh/:rest*": ":rest*",
  },
  markdown: {
    lineNumbers: true,
    image: { lazyLoading: true },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        nav: [
          { text: "首页", link: "/" },
          { text: "核心理论", link: "/core/intro", activeMatch: "/01.核心理论/" },
          { text: "身体与能量", link: "/body/intro", activeMatch: "/10.身体与能量/" },
          { text: "实践指南", link: "/practice/intro", activeMatch: "/15.实践指南/" },
          { text: "归档", link: "/archives" },
          { text: "关于", link: "/personal" },
          { text: "✨ 赞赏", link: "/personal#赞赏" },
        ],
        darkModeSwitchLabel: "主题",
        sidebarMenuLabel: "菜单",
        returnToTopLabel: "返回顶部",
        lastUpdatedText: "上次更新时间",
        outline: { level: [2, 4], label: "本页导航" },
        docFooter: { prev: "上一页", next: "下一页" },
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      themeConfig: {
        ...teekConfigEn.themeConfig,
        sidebar: {
          "/en/core/": [
            {
              text: "Consciousness",
              items: [
                { text: "The Architecture of Consciousness", link: "/en/core/intro" },
                { text: "Awareness, Thought & The Brain", link: "/en/core/consciousness" },
              ],
            },
            {
              text: "Energy Patterns",
              items: [
                { text: "The Physics of Energy Patterns", link: "/en/core/karma" },
              ],
            },
          ],
          "/en/body/": [
            {
              text: "Meridians",
              items: [
                { text: "Energy & The Fascia Network", link: "/en/body/intro" },
              ],
            },
            {
              text: "Fascia",
              items: [
                { text: "The Fascia System", link: "/en/body/fascia" },
              ],
            },
          ],
          "/en/practice/": [
            {
              text: "Overview",
              items: [
                { text: "Practical Guide", link: "/en/practice/intro" },
              ],
            },
            {
              text: "Meditation",
              items: [
                { text: "Meditation Practice Guide", link: "/en/practice/meditation" },
              ],
            },
            {
              text: "Potential",
              items: [
                { text: "Human Potential Development", link: "/en/practice/potential" },
              ],
            },
          ],
        },
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Core Theory", link: "/en/core/intro", activeMatch: "/en/core/" },
          { text: "Body & Energy", link: "/en/body/intro", activeMatch: "/en/body/" },
          { text: "Practice Guide", link: "/en/practice/intro", activeMatch: "/en/practice/" },
          { text: "Archives", link: "/en/archives" },
          { text: "About", link: "/en/personal" },
          { text: "✨ Support", link: "/en/personal#support" },
        ],
        darkModeSwitchLabel: "Theme",
        sidebarMenuLabel: "Menu",
        returnToTopLabel: "Back to top",
        lastUpdatedText: "Last updated",
        outline: { level: [2, 4], label: "On this page" },
        docFooter: { prev: "Previous", next: "Next" },
      },
    },
  },
  themeConfig: {
    logo: "/teek-logo-mini.svg",
    socialLinks: [{ icon: "github", link: "https://github.com/" }],
    search: { provider: "local" },
  },
}));
