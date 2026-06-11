import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
import { downloadFilesPlugin } from "./plugins/download-files";
import { missionsPlugin } from "./plugins/missions";
import { mermaidPlugin } from "./plugins/vitepress-mermaid";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(__dirname, "..");

export default defineConfig({
  title: "Agent Academy",
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
    "Welcome to Copilot Studio Agent Academy. Curated lessons on getting started building agents with Copilot Studio.",
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Agent Academy", link: "/" },
      { text: "Templates", link: "/templates/" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
  {
    text: 'Agent Academy',
    link: '/',
    collapsed: true,
    items: [
      { text: 'Course Setup', link: '/agent-academy/00-course-setup/' },
      { text: 'Introduction to Agents', link: '/agent-academy/01-introduction-to-agents/' },
      { text: 'Copilot Studio Fundamentals', link: '/agent-academy/02-copilot-studio-fundamentals/' },
      { text: 'Create A Declarative Agent For M365 Copilot', link: '/agent-academy/03-create-a-declarative-agent-for-M365Copilot/' },
      { text: 'Creating A Solution', link: '/agent-academy/04-creating-a-solution/' },
      { text: 'Using Prebuilt Agents', link: '/agent-academy/05-using-prebuilt-agents/' },
      { text: 'Create Agent From Conversation', link: '/agent-academy/06-create-agent-from-conversation/' },
      { text: 'Add New Topic With Trigger', link: '/agent-academy/07-add-new-topic-with-trigger/' },
      { text: 'Add Adaptive Cards', link: '/agent-academy/08-add-adaptive-card/' },
      { text: 'Add An Agent Flow', link: '/agent-academy/09-add-an-agent-flow/' },
      { text: 'Add Event Triggers', link: '/agent-academy/10-add-event-triggers/' },
      { text: 'Publish Your Agents', link: '/agent-academy/11-publish-your-agent/' },
      { text: 'Course Completion', link: '/agent-academy/course-completion/' },
    ],
  },
  {
    text: 'Templates',
    link: '/templates/',
    collapsed: true,
    items: [],
  },
    ],
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
