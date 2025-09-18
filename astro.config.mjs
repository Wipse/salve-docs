// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "SALVE Docs",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
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
          items: [
            {
              label: "Introductie",
              link: "/concepting",
            },
            {
              label: "Value Proposition 2.0",
              link: "/concepting/value-proposition/",
            },
            {
              label: "Unique Selling Points",
              link: "/concepting/usps/",
            },
            {
              label: "MoSCoW Methode",
              link: "/concepting/moscow/",
              badge: { text: "New", variant: "tip" },
            },
            {
              label: "Naam",
              link: "/concepting/naam/",
              badge: { text: "New", variant: "tip" },
            },
          ],
        },
        {
          label: "Design",
          items: [
            {
              label: "Introductie",
              link: "/design",
            },
            {
              label: "Styleguide",
              link: "/design/styleguide/",
              badge: { text: "New", variant: "tip" },
            },
          ],
        },
        {
          label: "Development",
          autogenerate: { directory: "development" },
        },
      ],
      customCss: ["./src/tailwind.css"],
      editLink: {
        baseUrl: "https://github.com/wisseheida/salve-docs/edit/main/",
      },
    }),
  ],
});
