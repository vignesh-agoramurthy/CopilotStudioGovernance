import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
import { downloadFilesPlugin } from "./plugins/download-files";
import { missionsPlugin } from "./plugins/missions";
import { mermaidPlugin } from "./plugins/vitepress-mermaid";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(__dirname, "..");

export default defineConfig({
  title: "Copilot Studio Enablement",
  base: "/CopilotStudioGovernance/",
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "script",
      { text: "text/javascript" },
      `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "u32wbf0qvv");`,
    ],
  ],
  description:
    "Copilot Studio Enablement - Comprehensive resources for building, optimizing, and managing AI agents with Microsoft Copilot Studio.",
  themeConfig: {
    logo: "/logo.png",
    colorScheme: "auto",
    nav: [
      { text: "Agent Academy", link: "/agent-academy/" },
      { text: "Best Practices", link: "/best-practices/" },
      { text: "Observability", link: "/observability/" },
    ],
    search: {
      provider: "local",
    },
    sidebar: {
      "/agent-academy/": [
        {
          text: 'Recruit',
          link: '/agent-academy/recruit/',
          collapsed: true,
          items: [
            { text: 'Course Setup', link: '/agent-academy/recruit/00-course-setup/' },
            { text: 'Introduction to Agents', link: '/agent-academy/recruit/01-introduction-to-agents/' },
            { text: 'Copilot Studio Fundamentals', link: '/agent-academy/recruit/02-copilot-studio-fundamentals/' },
            { text: 'Create A Declarative Agent For M365 Copilot', link: '/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot/' },
            { text: 'Creating A Solution', link: '/agent-academy/recruit/04-creating-a-solution/' },
            { text: 'Using Prebuilt Agents', link: '/agent-academy/recruit/05-using-prebuilt-agents/' },
            { text: 'Create Agent From Conversation', link: '/agent-academy/recruit/06-create-agent-from-conversation/' },
            { text: 'Add New Topic With Trigger', link: '/agent-academy/recruit/07-add-new-topic-with-trigger/' },
            { text: 'Add Adaptive Cards', link: '/agent-academy/recruit/08-add-adaptive-card/' },
            { text: 'Add An Agent Flow', link: '/agent-academy/recruit/09-add-an-agent-flow/' },
            { text: 'Add Event Triggers', link: '/agent-academy/recruit/10-add-event-triggers/' },
            { text: 'Publish Your Agents', link: '/agent-academy/recruit/11-publish-your-agent/' },
            { text: 'Course Completion', link: '/agent-academy/recruit/course-completion/' },
          ],
        },
      ],
      "/best-practices/": [
        {
          text: 'Best Practices',
          link: '/best-practices/',
          collapsed: false,
          items: [],
        },
      ],
      "/observability/": [
        {
          text: 'Observability',
          link: '/observability/',
          collapsed: false,
          items: [],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Woodside/CopilotStudioGovernance/",
      },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(mermaidPlugin);
    },
  },
  vite: {
    plugins: [missionsPlugin(docsDir), downloadFilesPlugin(docsDir)],
  },
});
