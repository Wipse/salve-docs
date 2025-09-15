// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "SALVE Docs",
      defaultLocale: "nl",
      locales: {
        nl: {
          label: "Nederlands",
          lang: "nl-NL",
        },
      },
      social: {
        github: "https://github.com/Wipse/salve-docs",
      },
      sidebar: [
        {
          label: "Onderzoek",
          items: [
            {
              label: "Deskresearch",
              link: "/onderzoek/",
            },
            {
              label: "Fieldresearch",
              link: "/onderzoek/fieldresearch/",
            },
            {
              label: "Fieldresearch Copy",
              link: "/onderzoek/fieldresearch-copy/",
            },
          ],
        },
        {
          label: "Framing",
          items: [
            {
              label: "Introductie",
              link: "/framing",
            },
            {
              label: "Why-How Laddering",
              link: "/framing/why-how-laddering/",
            },
            {
              label: "Value Proposition",
              link: "/framing/value-propostion/",
            },
            {
              label: "Jobs to be Done",
              link: "/framing/jobs-to-be-done/",
            },
            {
              label: "Metaforen",
              link: "/framing/metaforen/",
            },
            {
              label: "How Might We",
              link: "/framing/how-might-we/",
            },
            {
              label: "Design Gap",
              link: "/framing/design-gap/",
            },
            {
              label: "Design Challenge",
              link: "/framing/design-challenge/",
            },
          ],
        },
        {
          label: "Concepting",
          autogenerate: { directory: "Concepting" },
        },
        {
          label: "Design",
          autogenerate: { directory: "Design" },
        },
        {
          label: "Development",
          autogenerate: { directory: "development" },
        },
      ],
      customCss: ["./src/tailwind.css"],
      components: {
        // Override the default Starlight components to use custom logo
        SiteTitle: "./src/components/SiteTitle.astro",
      },
      editLink: {
        baseUrl: "https://github.com/wisseheida/salve-docs/edit/main/",
      },
    }),
  ],
});
