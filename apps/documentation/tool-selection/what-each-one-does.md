---
title: "What each one does"
prev:
  text: Overview
  link: '/tool-selection/'
next:
  text: Worked Example
  link: '/tool-selection/worked-example'
---

# What each one does

<div class="agent-tool-matrix capability-matrix">
  <table>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Agent Builder</th>
        <th scope="col">Copilot Studio</th>
        <th scope="col">Microsoft Foundry</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Model choice</th>
        <td>M365 Copilot models (fixed)</td>
        <td>GPT and Anthropic models out of the box; option to bring models from Foundry</td>
        <td>Foundry Models catalogue (11,000+ models including OpenAI, Anthropic, Meta, Mistral, your own)</td>
      </tr>
      <tr>
        <th scope="row">Knowledge / RAG</th>
        <td>SharePoint, OneDrive, Teams, Outlook, web - M365-bounded, within Woodside DLP and governance</td>
        <td>
          <p>SharePoint, Dataverse, websites, file upload, and certified connector sources - within Woodside DLP and governance.</p>
          <p>Today, only M365 connectors are enabled. ServiceNow and Snowflake are not yet available but are planned for future enablement.</p>
        </td>
        <td>Foundry IQ - unified retrieval across any source, hybrid + vector + semantic, custom chunking and re-ranking. Used at Woodside via Lumina / Bedrock for high-IP content.</td>
      </tr>
      <tr>
        <th scope="row">Topics</th>
        <td>Not available</td>
        <td>Topics - trigger phrases, entities, slot filling, conditional logic, fallback</td>
        <td>Not a first-class concept; build equivalent flows in Foundry Workflows or code</td>
      </tr>
      <tr>
        <th scope="row">Tools / actions</th>
        <td>Toggle switches for image creation and code / document generation</td>
        <td>
          <p>Certified connectors (1,500+ available, subject to enablement within Woodside DLP and governance), custom connectors over Woodside APIs, MCP servers, Agent Flows, Power Automate, Prompt actions.</p>
          <p>Examples: send an email, create a ServiceNow ticket, look up a cost code, post a Teams message.</p>
        </td>
        <td>Function calling, MCP, OpenAPI, custom Python / .NET tools, Connected Agents</td>
      </tr>
      <tr>
        <th scope="row">Deterministic workflows</th>
        <td>Not available</td>
        <td>Agent Flows (Power Automate-based), AI Approval Flows, Human-in-the-loop</td>
        <td>Foundry Workflows (preview) - durable, deterministic orchestration alongside agentic steps</td>
      </tr>
      <tr>
        <th scope="row">Multi-agent orchestration</th>
        <td>Not available</td>
        <td>Multi-agent GA - A2A protocol, M365 Agents SDK, connect to Foundry and Fabric Data agents</td>
        <td>Microsoft Agent Framework (RC) - SK + AutoGen consolidation; Connected Agents; A2A protocol</td>
      </tr>
      <tr>
        <th scope="row">Triggers / autonomy</th>
        <td>User-invoked only</td>
        <td>User-invoked, scheduled, or event-based (Dataverse, Graph, connectors). Standalone Agent Flows and Autonomous Agents both supported</td>
        <td>Full programmatic triggers, queues, schedules, event grid, webhooks</td>
      </tr>
      <tr>
        <th scope="row">Internal vs external use</th>
        <td>Internal only (Woodside employees, inside M365)</td>
        <td>Internal employees on Entra ID is the default Woodside posture. External / no-auth public agents would need a separate governance review</td>
        <td>Internal and external - fully embeddable in any app, channel, device</td>
      </tr>
      <tr>
        <th scope="row">Channels / deployment</th>
        <td>M365 Copilot only</td>
        <td>M365 Copilot, Teams (1:1, group, channel), Word / Excel / PowerPoint sidecar, custom web chat, SharePoint</td>
        <td>Anywhere via SDK / API - web, mobile, IoT, Foundry Local for edge</td>
      </tr>
      <tr>
        <th scope="row">Authentication</th>
        <td>User's M365 identity (passthrough)</td>
        <td>Entra ID is the Woodside default. OAuth and manual auth supported but manual auth is not solution-aware</td>
        <td>Entra ID, Entra Agent ID, managed identities, customer keys, delegated VNet</td>
      </tr>
      <tr>
        <th scope="row">Governance, DLP, compliance</th>
        <td>M365 admin controls; respects Purview sensitivity labels; inherits the logged-in user's permissions</td>
        <td>Power Platform DLP at the connector layer (Business / Non-business / Blocked); environment governance; Purview DSPM for AI; audit logs. Purview prompt-level DLP only applies at the M365 Copilot location</td>
        <td>Full Azure governance - RBAC, Private Link, customer-managed keys, Defender, Purview</td>
      </tr>
      <tr>
        <th scope="row">Evaluations</th>
        <td>Not available</td>
        <td>Automated agent testing, generative answer evaluation, test packs</td>
        <td>Foundry Evaluations (built-in + custom evaluators), AI Red Teaming Agent (PyRIT), A / B testing</td>
      </tr>
      <tr>
        <th scope="row">Foundry-only capabilities</th>
        <td>Not available</td>
        <td>Not available</td>
        <td>Fine-tuning (SFT, DPO, RFT, distillation); Foundry Local for edge / offline / disconnected.</td>
      </tr>
      <tr>
        <th scope="row">Cost-control levers</th>
        <td>Bundled in the M365 Copilot license - no extra metering</td>
        <td>Message-pack consumption, per-message metering, environment caps</td>
        <td>PTUs, Priority, Batch APIs, Model Router, regional capacity planning</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.agent-tool-matrix {
  margin: 1.25rem 0 2rem;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
}

.vp-doc .agent-tool-matrix table {
  display: table;
  width: 100%;
  margin: 0;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
  font-size: 0.9rem;
  line-height: 1.45;
}

.vp-doc .agent-tool-matrix th,
.vp-doc .agent-tool-matrix td {
  border: 0;
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 0.85rem 1rem;
  text-align: left;
  vertical-align: top;
  overflow-wrap: anywhere;
  word-break: normal;
}

.vp-doc .agent-tool-matrix thead th {
  background: color-mix(in srgb, var(--vp-c-brand-1, var(--vp-c-primary)) 16%, var(--vp-c-bg-soft));
  color: var(--vp-c-text-1);
  font-weight: 700;
}

.vp-doc .agent-tool-matrix thead th:first-child {
  width: 22%;
}

.vp-doc .agent-tool-matrix tbody th {
  background: color-mix(in srgb, var(--vp-c-brand-1, var(--vp-c-primary)) 8%, var(--vp-c-bg-soft));
  color: var(--vp-c-text-1);
  font-weight: 700;
}

.vp-doc .agent-tool-matrix tbody td {
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
}

.vp-doc .agent-tool-matrix tbody tr:nth-child(even) td {
  background: var(--vp-c-bg-soft);
}

.vp-doc .agent-tool-matrix tbody tr:last-child th,
.vp-doc .agent-tool-matrix tbody tr:last-child td {
  border-bottom: 0;
}

.vp-doc .agent-tool-matrix tbody tr:hover th,
.vp-doc .agent-tool-matrix tbody tr:hover td {
  background: color-mix(in srgb, var(--vp-c-brand-1, var(--vp-c-primary)) 10%, var(--vp-c-bg));
  color: var(--vp-c-text-1);
}

.vp-doc .agent-tool-matrix td p {
  margin: 0;
}

.vp-doc .agent-tool-matrix td p + p {
  margin-top: 0.65rem;
}

html.dark .agent-tool-matrix {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.24);
}
</style>
