import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ming's Blog",
  description: "记录所思所想，希望回头能看到时间的轨迹。",
  base: "/blog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "学习能力", link: "/study/basic" },
    ],

    sidebar: [
      {
        text: "反思",
        items: [{ text: "9.29", link: "/record/9.26" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/NoahStepheno/blog" },
    ],
  },
});
