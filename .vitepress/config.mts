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
        text: "英语",
        items: [
          {
            text: "目标",
            link: "/english/goal",
          },
          {
            text: "TED Talks",
            items: [
              {
                text: "apocalyptic optimist",
                link: "/english/talks/apocalyptic optimist",
              },
              {
                text: "how 3 words change your life",
                link: "/english/talks/how 3 words change your life",
              },
              {
                text: "why we're so anxious about the future of the work",
                link: "/english/talks/why we're so anxious about the future of the work",
              },
            ],
          },
          {
            text: "vocabularies",
            items: [
              {
                text: "prepositions",
                link: "/english/vocabularies/prepositions",
              },
              {
                text: "verbs",
                link: "/english/vocabularies/verbs",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/NoahStepheno/blog" },
    ],
  },
});
