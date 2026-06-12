---
prev:
  text: 'Worked Example'
  link: '/tool-selection/worked-example'
next:
  text: Documented limits
  link: '/tool-selection/documented-microsoft-copilot-studio-limits'
---

# When to pick what

Apply these in order. Stop at the first one that fits.

<div class="selection-rules">
  <section>
    <h2>Pick Agent Builder when</h2>
    <ul>
      <li>The use case is a single information worker or small team boosting their own productivity inside M365.</li>
      <li>The knowledge needed is already in their M365, such as SharePoint, OneDrive, Teams, or Outlook, within Woodside DLP and governance.</li>
      <li>No integration with other systems is needed.</li>
      <li>No deterministic flow, multi-step orchestration, or autonomy is required.</li>
    </ul>
  </section>

  <section>
    <h2>Pick Copilot Studio when</h2>
    <ul>
      <li>Users are Woodside employees on Entra ID and the agent runs in Teams, M365 Copilot, Word, web, or SharePoint.</li>
      <li>The agent needs topics, tools, knowledge, or a mix of AI reasoning and deterministic logic.</li>
      <li>The data lives in M365 or a connector source that is enabled within Woodside DLP and governance.</li>
      <li>The build can be owned by a maker pod, engagement lead, Citizen Developer Program participant, or tech lead in a business pod.</li>
      <li>This is the default for most Woodside agent use cases today.</li>
    </ul>
  </section>

  <section>
    <h2>Pick Microsoft Foundry when</h2>
    <ul>
      <li>You need fine-tuned models, custom evaluators, or red-teaming for high-stakes content.</li>
      <li>You need complex ML pipelines or custom model training.</li>
      <li>You need long-running multi-agent orchestration.</li>
      <li>The agent must be embedded in a fully custom application with its own SDK integration.</li>
      <li>Sub-second consistent latency or edge / offline deployment is required.</li>
      <li>You need a programmatic evaluation harness for RAG quality.</li>
    </ul>
  </section>

  <section>
    <h2>Do not build an agent when</h2>
    <ul>
      <li>The real question is analytical, such as millions of rows, multi-table joins, or dashboards. This is a BI use case.</li>
      <li>The work needs no meaningful AI reasoning. This is process automation; build a Power Automate flow.</li>
      <li>There is no clear long-term owner. No owner means wrong tool, regardless of platform.</li>
    </ul>
  </section>
</div>

## Wrong-tool signals - escalate or reshape

- External customers with custom authentication beyond certified connector support -> Foundry.
- Required certified connector is not yet enabled within Woodside DLP and governance -> blocked pending enablement, not a Copilot Studio limit.
- Agent is purely a chat wrapper over a Power Automate flow with no meaningful AI reasoning -> build it as a flow, not an agent.
- Video or audio as the primary knowledge source -> not supported as RAG content, reshape the source or change stack.
- Aggregation across millions of rows is the answer, not a byproduct -> BI or Foundry, not Copilot Studio.
- Sub-second consistent latency required -> Foundry. Copilot Studio is not built for hard real-time.

## Woodside-specific notes

- Today only M365 connectors are enabled in Woodside's Power Platform environments. ServiceNow and Snowflake are recognised gaps and are in progress as allowable data sources within Woodside DLP and governance. Flag any use case dependent on these as blocked-pending-connector, not as a Copilot Studio limitation.
- Citations returned by a knowledge source cannot be passed as inputs to tools or actions. This is a documented Microsoft Copilot Studio limit and shapes "find document X then act on it" patterns.
- Sensitivity-labelled content may silently return no answer in Copilot Studio knowledge results. Always test with labelled content before go-live.

<style>
.selection-rules {
  display: grid;
  gap: 1rem;
  margin: 1.5rem 0 2rem;
}

.vp-doc .selection-rules section {
  margin: 0;
  padding: 1rem 1.1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.vp-doc .selection-rules h2 {
  margin: 0 0 0.65rem;
  padding-top: 0;
  border-top: 0;
  color: var(--vp-c-text-1);
  font-size: 1.05rem;
}

.vp-doc .selection-rules ul {
  margin: 0;
  padding-left: 1.2rem;
}

.vp-doc .selection-rules li + li {
  margin-top: 0.4rem;
}
</style>
