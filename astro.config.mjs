// https://astro.build/config
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  //   typescript: false,
  // ---
  //类型：'static' | 'server' | 'hybrid'
  //默认值：'static'
  // static - 构建静态网站，部署到任何静态托管服务器上。
  // server - 构建应用，部署到支持 SSR（服务器端渲染）的托管服务器上。
  // hybrid - 构建包含少量服务端渲染页面的静态网站。
  // output: 'static'
  // ---
  // 增量构建
  experimental: {},
  markdown: {
    shikiConfig: {
      theme: "github-dark",

      wrap: true,
    },
  },
  site: "https://blog-template.606design.art/",
  integrations: [sitemap()],
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern",
      },
    },
  },
});
