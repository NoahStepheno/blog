import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ming's Blog",
  description: "记录所思所想，希望回头能看到时间的轨迹。",
  base: "/blog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "首页", link: "/" }],

    sidebar: [
      {
        text: "反思",
        items: [
          { text: "9.29", link: "/record/9.29" },
          { text: "9.26", link: "/record/9.26" },
        ],
      },
      {
        text: "学习",
        items: [
          {
            text: "学习能力",
            link: "/study/basic",
          },
          {
            text: "目标",
            link: "/study/goal",
          },
        ],
      },
      {
        text: "英语",
        items: [
          {
            text: "目标",
            link: "/english/goal",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/NoahStepheno/blog" },
    ],
  },
});
