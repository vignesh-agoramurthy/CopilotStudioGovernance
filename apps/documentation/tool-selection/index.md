---
next:
  text: 'What each one does'
  link: '/tool-selection/what-each-one-does'
---

# Agent Tool Selection

*A quick-reference decision matrix for choosing the best-fit Microsoft agent-building tool*

**How to use this guide:** Three Microsoft tools cover most agent use cases at Woodside. Use the matrix to compare capabilities, then apply the selection rules to choose the best fit. If more than one tool applies, select the simplest option that meets the need.

## Positioning

<div class="agent-tool-matrix">
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
        <th scope="row">Positioning</th>
        <td>AI for all</td>
        <td>AI for many</td>
        <td>AI for few</td>
      </tr>
      <tr>
        <th scope="row">Primary builder</th>
        <td>Any information worker (no-code)</td>
        <td>Citizen Developer Program participants, engagement leads, tech leads in business pods (low-code)</td>
        <td>AI team, developers, data scientists (pro-code)</td>
      </tr>
      <tr>
        <th scope="row">Core strength</th>
        <td>Narrows the scope of M365 Copilot for repeatable tasks; self-governed within M365 Copilot.</td>
        <td>Business process flow agentification. Native connection to SharePoint and M365 data and Work IQ. Native connection to Teams, M365 Copilot.</td>
        <td>Fully customisable solutions</td>
      </tr>
      <tr>
        <th scope="row">Where it runs</th>
        <td>Inside M365 Copilot (chat, Teams, Word, Excel)</td>
        <td>Power Platform; published to Teams, M365 Copilot, web, custom apps</td>
        <td>Azure PaaS; embedded into custom apps, web, mobile</td>
      </tr>
      <tr>
        <th scope="row">Licensing</th>
        <td>Included with the user's M365 Copilot license</td>
        <td>Copilot Studio message-pack consumption at the tenant</td>
        <td>Azure consumption (PAYG, PTUs)</td>
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
  font-size: 0.92rem;
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
