import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
import { downloadFilesPlugin } from "./plugins/download-files";
import { missionsPlugin } from "./plugins/missions";
import { mermaidPlugin } from "./plugins/vitepress-mermaid";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(__dirname, "..");
const siteBase = normalizeBase(process.env.VITEPRESS_BASE ?? "/copilot-studio/");

function normalizeBase(base: string) {
  return `/${base.replace(/^\/+|\/+$/g, "")}/`;
}

function withBase(assetPath: string) {
  return `${siteBase}${assetPath.replace(/^\/+/, "")}`;
}

export default defineConfig({
  title: "Copilot Studio Enablement",
  base: siteBase,
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: withBase("/agent-academy/images/copilot-studio.svg") }],
    [
      "script",
      { text: "text/javascript" },
      `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "u32wbf0qvv");`,
    ],
  ],
  description:
    "Copilot Studio Enablement - Comprehensive resources for building, optimizing, and managing AI agents with Microsoft Copilot Studio.",
  themeConfig: {
    logo: "/agent-academy/images/copilot-studio.svg",
    colorScheme: "auto",
    nav: [
      { text: "Home", link: "/" }
    ],
    search: {
      provider: "local",
    },
    sidebar: {
      "/agent-academy/": [
        {
          text: 'Agent Academy',
          link: '/agent-academy/',
        },
        {
          text: 'Recruit',
          link: '/agent-academy/recruit/',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/agent-academy/recruit/' },
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
      "/tool-selection/": [
        {
          text: 'Agent Tool Selection',
          link: '/tool-selection/',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/tool-selection/' },
            { text: 'What each one does', link: '/tool-selection/what-each-one-does' },
            { text: 'Worked example', link: '/tool-selection/worked-example' },
            { text: 'When to pick what', link: '/tool-selection/when-to-pick-what' },
            { text: 'Documented limits', link: '/tool-selection/documented-microsoft-copilot-studio-limits' },
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
          items: [
            { text: 'Overview', link: '/observability/' },
            { text: 'Usage Metrics', link: '/observability/1-usage-metrics' },
            { text: 'Correct Usage Metrics', link: '/observability/2-correct-usage-metrics' },
            { text: 'User Behaviour Metrics', link: '/observability/3-user-behaviour-metrics' },
            { text: 'Compliance Metrics', link: '/observability/4-compliance-metrics' },
            { text: 'Quick Reference Appendix', link: '/observability/updated-quick-reference-appendix' },
          ],
        },
      ],
    }
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
