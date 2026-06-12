---
title: "Worked example - finance use cases across the three tools"
prev:
  text: 'What each one does'
  link: '/tool-selection/what-each-one-does'
next:
  text: 'When to pick what'
  link: '/tool-selection/when-to-pick-what'
---

# Worked example - finance use cases across the three tools

The same starting point - **"help finance staff get answers from policy documents"** - lands on a different tool depending on how far the use case extends. The table below shows how Agent Builder, Copilot Studio, and Foundry each handle a finance scenario, and why the choice shifts as scope grows.

If your use case looks like column 1, don't reach for column 2 or 3. If it looks like column 2, don't try to squeeze it into column 1 - and don't escalate to Foundry until the column-3 signals (non-M365 corpus, custom evaluation, experience outside M365) are actually needed.

<div class="agent-tool-matrix worked-example-matrix">
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
        <th scope="row">The use case</th>
        <td>Finance Policy Helper - answers questions about expense, travel, and procurement policies stored in the Finance SharePoint site.</td>
        <td>Finance Assistant - answers policy questions, looks up cost codes in Dataverse, raises tickets for finance issues, drafts emails in response to queries, and triggers a Power Automate approval flow.</td>
        <td>Finance Knowledge Platform - unified Q&A and analysis across SharePoint policies, SAP transactions, data warehouse, and Dataverse, embedded in a custom finance portal for the whole division.</td>
      </tr>
      <tr>
        <th scope="row">Who builds it</th>
        <td>A finance team member, in M365 Copilot - no IT involvement.</td>
        <td>An engagement lead or Citizen Developer Program participant working with the finance pod's tech lead.</td>
        <td>The AI team plus developers and data engineers; partners with finance SMEs.</td>
      </tr>
      <tr>
        <th scope="row">Knowledge / RAG</th>
        <td>Toggle SharePoint folders for the Finance site. M365-bounded, within Woodside DLP and governance.</td>
        <td>SharePoint policies + Dataverse cost-code table. Citations into the original documents.</td>
        <td>Foundry IQ across SharePoint, SAP, Snowflake, and Dataverse - hybrid + vector + semantic retrieval, custom chunking and re-ranking, source-aware permissions.</td>
      </tr>
      <tr>
        <th scope="row">Tools / actions</th>
        <td>None beyond defaults (image / code / document generation toggles).</td>
        <td>Outlook send-email, Dataverse lookup, create-ticket (pending connector enablement), Power Automate approval flow.</td>
        <td>Function calling against finance APIs, Connected Agents (one agent per finance domain), custom Python tools for variance analysis.</td>
      </tr>
      <tr>
        <th scope="row">Where users meet it</th>
        <td>M365 Copilot chat. That's the only surface.</td>
        <td>Teams (1:1 and a finance channel), M365 Copilot, and a Word sidecar. Could also be published to Lumina or other internal platforms.</td>
        <td>A custom finance portal; also surfaced in Teams via an M365 Agents SDK wrapper.</td>
      </tr>
      <tr>
        <th scope="row">Why this is the right tool</th>
        <td>Single user group, M365-only knowledge, no integrations, no orchestration.</td>
        <td>Multiple knowledge sources behind certified connectors, a mix of AI reasoning and deterministic flows, employees on Entra ID.</td>
        <td>Corpus crosses non-M365 systems, needs custom evaluation for accuracy on financial figures, experience must live outside M365.</td>
      </tr>
      <tr>
        <th scope="row">Effort / time to first value</th>
        <td>Hours. A finance team member can ship a v1 in a sitting.</td>
        <td>Days to weeks, depending on connector enablement and flow design.</td>
        <td>Weeks to months - model selection, retrieval, evaluation, portal, security review.</td>
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

html.dark .agent-tool-matrix {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.24);
}
</style>
