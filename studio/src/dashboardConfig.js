export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62d989e3da9932109002760e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blogo-studio-im2t76zb",
                  apiId: "883bf9f2-15da-40f2-bc4f-fedc4d9b475a",
                },
                {
                  buildHookId: "62d989e3fb5f6b106d7bd287",
                  title: "Blog Website",
                  name: "sanity-gatsby-blogo-web",
                  apiId: "5bad7393-44a5-4d25-b0a6-30de1cf835d5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/joshueoconnor/sanity-gatsby-blogo",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blogo-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
