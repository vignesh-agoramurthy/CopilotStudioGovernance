import { defineConfig } from "vitepress";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mermaidPlugin } from "./plugins/vitepress-mermaid";
import { missionsPlugin } from "./plugins/missions";
import { downloadFilesPlugin } from "./plugins/download-files";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(__dirname, "..");

export default defineConfig({
  title: "Agent Academy",
  base: "/copilot-studio/",
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
      { text: "Home", link: "/" },
      { text: "Recruit", link: "/recruit/" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
  { text: 'Home', link: '/' },
  {
    text: 'Recruit',
    link: '/recruit/',
    collapsed: true,
    items: [
      { text: 'Course Setup', link: '/recruit/00-course-setup/' },
      { text: 'Introduction to Agents', link: '/recruit/01-introduction-to-agents/' },
      { text: 'Copilot Studio Fundamentals', link: '/recruit/02-copilot-studio-fundamentals/' },
      { text: 'Create A Declarative Agent For M365 Copilot', link: '/recruit/03-create-a-declarative-agent-for-M365Copilot/' },
      { text: 'Creating A Solution', link: '/recruit/04-creating-a-solution/' },
      { text: 'Using Prebuilt Agents', link: '/recruit/05-using-prebuilt-agents/' },
      { text: 'Create Agent From Conversation', link: '/recruit/06-create-agent-from-conversation/' },
      { text: 'Add New Topic With Trigger', link: '/recruit/07-add-new-topic-with-trigger/' },
      { text: 'Add Adaptive Cards', link: '/recruit/08-add-adaptive-card/' },
      { text: 'Add An Agent Flow', link: '/recruit/09-add-an-agent-flow/' },
      { text: 'Add Event Triggers', link: '/recruit/10-add-event-triggers/' },
      { text: 'Publish Your Agents', link: '/recruit/11-publish-your-agent/' },
      { text: 'Course Completion', link: '/recruit/course-completion/' },
    ],
  },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Woodside/copilot-studio/",
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
