import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";

export const teekConfig = defineTeekConfig({
  teekHome: false,
  vpHome: true,
  sidebarTrigger: true,
  author: { name: "人体宇宙", link: "https://github.com/" },
  footerInfo: {
    theme: {
      name: `Theme By Teek@${version}`,
    },
    copyright: {
      createYear: 2025,
      suffix: "人体宇宙",
    },
  },
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"),
  },
  articleShare: { enabled: true },
  appreciation: {
    position: "doc-after",
    options: {
      icon: "weChatPay",
      expandTitle: "打赏支持",
      collapseTitle: "下次一定",
      content: `<div style="display:flex;gap:16px;justify-content:center"><div style="text-align:center"><img src="/qrcode/wechat-pay.jpg" style="width:180px;border-radius:8px"><p style="margin:8px 0 0;font-size:14px;color:#888">微信</p></div><div style="text-align:center"><img src="/qrcode/alipay.jpg" style="width:180px;border-radius:8px"><p style="margin:8px 0 0;font-size:14px;color:#888">支付宝</p></div></div>`,
      expand: false,
    },
  },
  banner: { enabled: false },
  topArticle: { enabled: false },
  category: { enabled: false },
  tag: { enabled: false },
  friendLink: { enabled: false },
  docAnalysis: { enabled: false },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
      localeRootDir: "zh",
    },
  },
});

export const teekConfigEn = defineTeekConfig({
  teekHome: false,
  vpHome: true,
  sidebarTrigger: true,
  author: { name: "人体宇宙", link: "https://github.com/" },
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("Copied!"),
  },
  articleShare: { enabled: true, text: "Share this page", copiedText: "Link copied" },
  appreciation: {
    position: "doc-after",
    options: {
      icon: "weChatPay",
      expandTitle: "Support",
      collapseTitle: "Maybe next time",
      content: `<div style="display:flex;gap:16px;justify-content:center"><div style="text-align:center"><img src="/qrcode/wechat-pay.jpg" style="width:180px;border-radius:8px"><p style="margin:8px 0 0;font-size:14px;color:#888">WeChat</p></div><div style="text-align:center"><img src="/qrcode/alipay.jpg" style="width:180px;border-radius:8px"><p style="margin:8px 0 0;font-size:14px;color:#888">Alipay</p></div></div>`,
      expand: false,
    },
  },
  banner: { enabled: false },
  topArticle: { enabled: false },
  category: { enabled: false },
  tag: { enabled: false },
  friendLink: { enabled: false },
  docAnalysis: { enabled: false },
});
