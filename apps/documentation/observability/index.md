---
title: "Overview"
next:
  text: 'Usage Metrics'
  link: '/observability/1-usage-metrics'
---

# Purpose

This guide helps Copilot Studio users and administrators understand where to source data for key Copilot Studio reporting metrics.

It is intended to support consistent reporting across business areas by clearly explaining:

-   What each metric means
-   Where the data can be found
-   Which platform or dashboard should be used
-   Any known limitations
-   Whether additional configuration or custom reporting may be required

This guide is designed as a high-level, fit-for-purpose reference to support metric understanding and navigation, rather than a detailed technical guide. The guide consolidates metric definitions, data source guidance, and walkthrough steps into a single reference and is based on the Copilot Studio metrics and data source information provided.

Screenshots are included under the relevant metric where a standard navigation path exists, to support users in locating the data source or interpreting the report. Where screenshots are not provided, this indicates that a consistent or out-of-the-box navigation path may not be available, and additional configuration or custom implementation may be required.

## Role Definition and System Access 

A role-based access model has been defined to clearly delineate responsibilities across business, technical, and governance functions. This model aligns access to Microsoft 365, Power Platform, and Copilot Studio capabilities based on each role's responsibilities.

The following table outlines each role, its primary responsibilities, the systems it can access, and the rationale for that access within the Copilot Studio operating model.

### Agent maker (Standard)

A business user who designs, builds, and maintains Copilot Studio agents for personal productivity or team-level use cases, using out-of-the-box capabilities and is accountable for the quality, accuracy, and ongoing maintenance of their agents.\
**Systems Access:**

-   Copilot Studio Analytics

### Agent maker (Pro Developer)

A technically skilled user who builds advanced Copilot Studio agents, aligned to organisational architecture, governance, and application lifecycle management practices.\
**Systems Access:**

-   Copilot Studio Kit
-   Copilot Studio Analytics
-   Azure Application Insights

### Business Leader

A senior stakeholder responsible for defining use cases, driving adoption, evaluating the business value and productivity impact of Copilot Studio, and agent usage.\
**Systems Access:**

-   Microsoft Viva Insights

### Power Platform (PP) Team

The platform engineering team responsible for configuring and managing the Power Platform environments that underpin Copilot Studio, including environment strategy, controls, and scalability.\
**Systems Access:**

-   Power Platform Admin Centre
-   Copilot Studio Kit

### Cybersecurity (including Audit)

The function responsible for ensuring Copilot Studio usage meets security, compliance, and audit requirements, including monitoring risks, enforcing controls, and supporting audit activities.\
**Systems Access:**

-   Copilot Studio Kit
-   Microsoft 365 Admin Centre

### AI Team / Administrator (Responsible AI)

A governance function responsible for ensuring Copilot Studio agents adhere to Responsible AI principles, including appropriate use, risk management, and compliance with organisational policies.\
**Systems Access:**

-   Copilot Studio Kit
-   Microsoft 365 Admin Centre

### AI Team / Administrator (AI Team)

The central function responsible for setting strategy, defining standards, and providing governance direction for Copilot Studio adoption across the enterprise.\
**Systems Access:**

-   Copilot Studio Kit
-   Microsoft 365 Admin Centre

## Systems, Summary and Link

The following systems may be required to access the metrics described in this guide.

<div class="observability-table systems-table">
  <table>
    <thead>
      <tr>
        <th scope="col">System</th>
        <th scope="col">Summary</th>
        <th scope="col">Link <em>(Microsoft reference links)</em></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Microsoft 365 Admin Centre -- Agent Management / Agent 365</th>
        <td>The Microsoft 365 Admin Centre is the broader admin portal, while <strong>Agent 365</strong> is an agent-specific control plane surfaced through it. Together, they support tenant-level visibility of agent adoption, usage trends, governance gaps, lifecycle, access, and administrative control across the organisation's agent estate. Microsoft describes the Agent overview page in the Microsoft 365 Admin Centre as the control plane for all agents.</td>
        <td><a href="https://aus01.safelinks.protection.outlook.com/?url=https%3A%2F%2Flearn.microsoft.com%2Fen-us%2Fmicrosoft-365%2Fadmin%2Fmanage%2Fagent-365-overview%3Fview%3Do365-worldwide&amp;data=05%7C02%7CEMELYN.H%27NG%40woodside.com%7C88dae6b9f4d04da635bb08dec5019d9b%7Ca3299bbaade64965b011bada8d1d9558%7C0%7C0%7C639164807913306825%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&amp;sdata=oDzqtbC1Nptv8JqzCaCRHxRGgEP%2FDxUYM1FcPQjeFWY%3D&amp;reserved=0">Agent management in Microsoft 365 Admin Centre</a><br><a href="https://learn.microsoft.com/en-us/microsoft-agent-365/overview">Agent 365</a></td>
      </tr>
      <tr>
        <th scope="row">Copilot Studio</th>
        <td>A low-code platform used to build, configure, test, publish, and optimise individual agents. It is the most relevant source for agent-level performance, including usage, session behaviour, conversation patterns, component-level performance, and improvement opportunities. Microsoft describes Copilot Studio analytics as providing key metrics and in-depth usage analytics for an agent's components.</td>
        <td><a href="https://aus01.safelinks.protection.outlook.com/?url=https%3A%2F%2Flearn.microsoft.com%2Fen-us%2Fmicrosoft-copilot-studio%2Fanalytics-overview&amp;data=05%7C02%7CEMELYN.H%27NG%40woodside.com%7C88dae6b9f4d04da635bb08dec5019d9b%7Ca3299bbaade64965b011bada8d1d9558%7C0%7C0%7C639164807913335364%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&amp;sdata=KgYJlM2dGc%2Bi71Z716r6qG%2BWcP%2BT97GmoLwE%2BhdNsxo%3D&amp;reserved=0">Copilot Studio analytics overview</a></td>
      </tr>
      <tr>
        <th scope="row">Copilot Studio Kit</th>
        <td>An extended governance and operational toolkit for managing Copilot Studio agents at scale. It provides additional visibility over agent inventory, compliance, risk thresholds, policy adherence, breach cases, SLA tracking, and enforcement workflows beyond native Copilot Studio analytics. Microsoft's Compliance Hub guidance describes configurable risk thresholds and automated enforcement actions where compliance is not achieved.</td>
        <td><a href="https://aus01.safelinks.protection.outlook.com/?url=https%3A%2F%2Flearn.microsoft.com%2Fen-us%2Fmicrosoft-copilot-studio%2Fguidance%2Fkit-configure-compliance-hub&amp;data=05%7C02%7CEMELYN.H%27NG%40woodside.com%7C88dae6b9f4d04da635bb08dec5019d9b%7Ca3299bbaade64965b011bada8d1d9558%7C0%7C0%7C639164807913363103%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&amp;sdata=YjEC0jeFGWnbaY6mb7VyySnp5lAkbHVMG0nhmWk1Yp0%3D&amp;reserved=0">Copilot Studio Kit Compliance Hub</a></td>
      </tr>
      <tr>
        <th scope="row">Viva Insights / Copilot Dashboard</th>
        <td>A business-facing analytics layer for understanding Copilot and agent adoption, usage, and organisational impact. It is most useful where leaders need an accessible view of adoption patterns, usage trends, enablement opportunities, and business-level engagement rather than detailed agent diagnostics.</td>
        <td><a href="https://aus01.safelinks.protection.outlook.com/?url=https%3A%2F%2Flearn.microsoft.com%2Fen-us%2Fviva%2Finsights%2Forg-team-insights%2Fcopilot-dashboard&amp;data=05%7C02%7CEMELYN.H%27NG%40woodside.com%7C88dae6b9f4d04da635bb08dec5019d9b%7Ca3299bbaade64965b011bada8d1d9558%7C0%7C0%7C639164807913374886%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&amp;sdata=%2FNufSExaP%2B9wSpKpNB2Wdnsf8o0MgIkZxVv5Hfk0%2F24%3D&amp;reserved=0">Copilot Dashboard in Viva Insights</a></td>
      </tr>
      <tr>
        <th scope="row">Power Platform Admin Centre (PPAC)</th>
        <td>Provides environment and platform-level administration across Power Platform, including Copilot Studio monitoring. From an observability perspective, it is useful for understanding operational health, active agents, message consumption, usage patterns, and broader environment-level oversight. Microsoft notes that Copilot Studio operational health metrics are available in the Power Platform Admin Centre under Monitor &gt; Products &gt; Copilot Studio.</td>
        <td><a href="https://aus01.safelinks.protection.outlook.com/?url=https%3A%2F%2Flearn.microsoft.com%2Fen-us%2Fpower-platform%2Fadmin%2Fmonitoring%2Fmonitor-copilot-studio&amp;data=05%7C02%7CEMELYN.H%27NG%40woodside.com%7C88dae6b9f4d04da635bb08dec5019d9b%7Ca3299bbaade64965b011bada8d1d9558%7C0%7C0%7C639164807913405484%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&amp;sdata=3vvgyXlBZjaMpVODCBf81iduBpl%2BJ8TGQxF%2BtGX8OQk%3D&amp;reserved=0">Metrics and recommendations for Copilot Studio in PPAC</a></td>
      </tr>
      <tr>
        <th scope="row">Entra Admin Centre</th>
        <td>Provides identity, access, and security administration across users, groups, applications, authentication, Conditional Access, and access governance. From an observability perspective, it is most relevant for validating whether the right users and groups have appropriate access to Copilot Studio, agents, environments, and related resources.</td>
        <td><a href="https://aus01.safelinks.protection.outlook.com/?url=https%3A%2F%2Flearn.microsoft.com%2Fen-us%2Fentra%2Ffundamentals%2Fentra-admin-center&amp;data=05%7C02%7CEMELYN.H%27NG%40woodside.com%7C88dae6b9f4d04da635bb08dec5019d9b%7Ca3299bbaade64965b011bada8d1d9558%7C0%7C0%7C639164807913418730%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&amp;sdata=mKgXnpq%2BTzoZU5fJ1FSh6eV1H1z36c1beBbB6NR8jYs%3D&amp;reserved=0">Microsoft Entra admin centre overview</a></td>
      </tr>
      <tr>
        <th scope="row">Custom Dashboard / Export</th>
        <td>Provides a tailored analytics layer where native platform reporting does not meet required needs for granularity, retention, segmentation, historical analysis, or cross-source reporting. This may involve exporting data from Microsoft 365, Power Platform, Copilot Studio, Dataverse, or other sources into Power BI or another reporting layer to create a fit-for-purpose analytical view.</td>
        <td><a href="https://aus01.safelinks.protection.outlook.com/?url=https%3A%2F%2Flearn.microsoft.com%2Fen-us%2Fmicrosoft-copilot-studio%2Fguidance%2Fcustom-analytics-strategy&amp;data=05%7C02%7CEMELYN.H%27NG%40woodside.com%7C88dae6b9f4d04da635bb08dec5019d9b%7Ca3299bbaade64965b011bada8d1d9558%7C0%7C0%7C639164807913436574%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&amp;sdata=OXghcdcja61DnJh3DnN250kjQ%2Fbn5%2B20D9HoaOs5I5c%3D&amp;reserved=0">Develop a custom analytics strategy</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Before You Start

### Access and Permissions

Access requirements vary by metric. Depending on the data source, users may require one or more of the following roles:

-   Power Platform Administrator
-   Access to Copilot Studio Kit
-   Access to relevant Power BI reports or Dataverse tables
-   Access to Entra ID security groups

Where a metric depends on Microsoft 365 Admin Centre reporting, users may require Global Reader or AI Administrator access.

### Out-of-the-Box Availability

Each metric includes an **Out-of-the-box Availability** status.

<div class="observability-table availability-table">
  <table>
    <thead>
      <tr>
        <th scope="col">Status</th>
        <th scope="col">Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Yes</th>
        <td>The metric is available through standard reporting in Microsoft 365 Admin Centre, Copilot Studio, Power Platform Admin Centre, or Copilot Studio Kit. Some permissions or licensing may still be required.</td>
      </tr>
      <tr>
        <th scope="row">No</th>
        <td>The metric is not available in a sufficiently usable or complete format out of the box. Custom reporting, dashboarding, configuration, scheduled export, or additional logic may be required.</td>
      </tr>
      <tr>
        <th scope="row">Unspecified</th>
        <td>The availability of the metric has not been confirmed from the current source information. This should be validated during walkthrough, tenant review, or reporting design.</td>
      </tr>
    </tbody>
  </table>
</div>

### Important Reporting Considerations

Not all metrics are available out of the box.

Some metrics require:

-   Custom dashboards
-   Scheduled exports
-   RPA-based extraction
-   Agent-level configuration
-   Consistent environment naming or ownership rules
-   Use of Copilot Studio Kit
-   Additional reporting logic in Power BI or Dataverse

Some Microsoft 365 Admin Centre reports may also have limitations, such as:

-   Displaying only the most recent 30 days
-   Showing only the top 10 agents
-   Limiting reports to 100 rows
-   Requiring Agent 365 before some reports are unlocked

These limitations should be considered before using the data for executive reporting or enterprise-wide adoption analysis.

### Metrics, Definitions, Data Sources and Links Table

<div class="observability-table metrics-table">
  <table>
    <thead>
      <tr>
        <th scope="col">Metric</th>
        <th scope="col">Metric Definition</th>
        <th scope="col">Data Source</th>
        <th scope="col">Related Link <em>(Microsoft reference links and Woodside tenant links)</em></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Users Enabled</th>
        <td>Total number of users enabled for Copilot Studio access.</td>
        <td>Microsoft 365 Admin Centre; Entra Admin Centre.</td>
        <td><a href="https://admin.cloud.microsoft/?#/agents/overview">Agents - Microsoft 365 admin Centre</a><br><a href="https://admin.cloud.microsoft/#/reportsUsage/CopilotDeclarativeAgentsV2">https://admin.cloud.microsoft/#/reportsUsage/CopilotDeclarativeAgentsV2</a></td>
      </tr>
      <tr>
        <th scope="row">Active Usage</th>
        <td>Number of active users interacting with Copilot Studio over a defined period.</td>
        <td>Power Platform Admin Centre; Microsoft 365 Admin Centre agent usage reporting, assuming the report reflects agent usage rather than maker activity.</td>
        <td><a href="https://admin.cloud.microsoft/?#/agents/overview">Agents - Microsoft 365 admin Centre</a><br><a href="https://admin.cloud.microsoft/#/reportsUsage/CopilotDeclarativeAgentsV2">https://admin.cloud.microsoft/#/reportsUsage/CopilotDeclarativeAgentsV2</a></td>
      </tr>
      <tr>
        <th scope="row">Usage Increase from X Date</th>
        <td>Growth in usage relative to a defined baseline period.</td>
        <td>Microsoft 365 Admin Centre Agents Usage Report; Power Platform Admin Centre Copilot Studio usage view; custom dashboard or scheduled export where required.</td>
        <td><a href="https://admin.cloud.microsoft/?#/agents/overview">Agents - Microsoft 365 admin Centre</a><br><a href="https://admin.powerplatform.microsoft.com/copilot/copilotstudio">https://admin.powerplatform.microsoft.com/copilot/copilotstudio</a></td>
      </tr>
      <tr>
        <th scope="row">Agents Created</th>
        <td>Total number of agents created across environments.</td>
        <td>Copilot Studio Kit Agent Inventory; Copilot Studio; Power Platform Admin Centre.</td>
        <td><a href="https://org250488b7.crm6.dynamics.com/main.aspx?appid=ac5d3ab9-fdf7-f011-8406-0022481806a1&amp;pagetype=custom&amp;name=cat_agentinventory_0b104">Agent Inventory - Power Apps</a></td>
      </tr>
      <tr>
        <th scope="row">Sessions</th>
        <td>Total number of agent sessions initiated.</td>
        <td>Copilot Studio Kit KPI Detail View; Copilot Studio Analytics; Power Platform Admin Centre.</td>
        <td><a href="https://org250488b7.crm6.dynamics.com/main.aspx?appid=ac5d3ab9-fdf7-f011-8406-0022481806a1&amp;pagetype=entitylist&amp;etn=cat_copilotkpi&amp;viewid=7bc21b4b-8836-4b08-9d52-7436fddc49f9&amp;viewType=1039">Conversation KPIs All Conversation KPIs - Power Apps</a><br><br><a href="https://copilotstudio.microsoft.com/environments/2406dd8e-a8a0-e6bd-8242-558ce8bcd3c1/bots/80ed8d39-9da1-4889-b80e-a69e9a7e6b9a/analytics/sessions">Analytics - HR Copilot | Microsoft Copilot Studio</a></td>
      </tr>
      <tr>
        <th scope="row">Active Agents</th>
        <td>Number of agents actively used during a reporting period.</td>
        <td>Microsoft 365 Admin Centre Agents Usage Report. (Usage details section -&gt; Users &amp; agents tab</td>
        <td><a href="https://admin.cloud.microsoft/?#/reportsUsage/CopilotDeclarativeAgentsV2">[https://admin.cloud.microsoft/?#/reportsUsage/CopilotDeclarativeAgentsV2</a></td>
      </tr>
      <tr>
        <th scope="row">Most Popular / Used Agents</th>
        <td>Agents with the highest usage or active user counts.</td>
        <td>Microsoft 365 Admin Centre Agents Overview dashboard; Microsoft 365 Admin Centre Agents Usage Report; custom dashboard where broader historical reporting is required.</td>
        <td><a href="https://admin.cloud.microsoft/?#/agents/overview">Agents - Microsoft 365 admin Centre</a><br><br><a href="https://admin.cloud.microsoft/#/reportsUsage/CopilotDeclarativeAgentsV2">https://admin.cloud.microsoft/#/reportsUsage/CopilotDeclarativeAgentsV2</a></td>
      </tr>
      <tr>
        <th scope="row">Who Is Using Them</th>
        <td>Users interacting with specific Copilot Studio agents.</td>
        <td>Microsoft 365 Admin Centre Agents Usage Report.</td>
        <td><a href="https://admin.cloud.microsoft/?#/agents/overview">Agents - Microsoft 365 admin Centre</a><br><a href="https://admin.cloud.microsoft/#/reportsUsage/CopilotDeclarativeAgentsV2">https://admin.cloud.microsoft/#/reportsUsage/CopilotDeclarativeAgentsV2</a></td>
      </tr>
      <tr>
        <th scope="row">What They Are Being Used For</th>
        <td>Themes, topics, or use cases users are engaging agents for.</td>
        <td>Copilot Studio Analytics tab, including Themes where available.</td>
        <td><a href="https://copilotstudio.microsoft.com/environments/2406dd8e-a8a0-e6bd-8242-558ce8bcd3c1/bots/80ed8d39-9da1-4889-b80e-a69e9a7e6b9a/analytics/summary">Analytics - HR Copilot | Microsoft Copilot Studio</a></td>
      </tr>
      <tr>
        <th scope="row">Exceptions</th>
        <td>Exceptions or errors generated during interactions or workflows.</td>
        <td>Microsoft 365 Admin Centre Agents Overview dashboard; Copilot Studio; Copilot Studio Kit, noting aggregation may require per-agent configuration.</td>
        <td><a href="https://admin.cloud.microsoft/?#/agents/overview">Agents - Microsoft 365 admin Centre</a></td>
      </tr>
      <tr>
        <th scope="row">CSAT</th>
        <td>Customer Satisfaction score captured during interactions.</td>
        <td>Copilot Studio; Copilot Studio Kit, where CSAT is enabled and supported.</td>
        <td>Not Applicable for Gen AI agents</td>
      </tr>
      <tr>
        <th scope="row">Turns</th>
        <td>Number of conversational turns per interaction.</td>
        <td>Copilot Studio Analytics; Copilot Studio Kit Conversation KPI dashboard.</td>
        <td><a href="https://copilotstudio.microsoft.com/environments/2406dd8e-a8a0-e6bd-8242-558ce8bcd3c1/bots/80ed8d39-9da1-4889-b80e-a69e9a7e6b9a/analytics/sessions">Analytics - HR Copilot | Microsoft Copilot Studio</a><br><br><a href="https://org250488b7.crm6.dynamics.com/main.aspx?appid=ac5d3ab9-fdf7-f011-8406-0022481806a1&amp;pagetype=dashboard&amp;id=55b614bd-ec8a-ef11-ac21-7c1e520cbfa3&amp;type=system&amp;_canOverride=true">Conversation KPIs - Power Apps</a></td>
      </tr>
      <tr>
        <th scope="row">Conversation Duration</th>
        <td>Duration of Copilot Studio interactions.</td>
        <td>Copilot Studio Kit KPI Detail View; Copilot Studio Analytics.</td>
        <td><a href="https://org250488b7.crm6.dynamics.com/main.aspx?appid=ac5d3ab9-fdf7-f011-8406-0022481806a1&amp;pagetype=entitylist&amp;etn=cat_copilotkpi&amp;viewid=7bc21b4b-8836-4b08-9d52-7436fddc49f9&amp;viewType=1039">Conversation KPIs All Conversation KPIs - Power Apps</a><br><br><a href="https://copilotstudio.microsoft.com/environments/2406dd8e-a8a0-e6bd-8242-558ce8bcd3c1/bots/80ed8d39-9da1-4889-b80e-a69e9a7e6b9a/analytics/sessions">Analytics - HR Copilot | Microsoft Copilot Studio</a></td>
      </tr>
      <tr>
        <th scope="row">Time Saved</th>
        <td>Estimated time savings generated through Copilot Studio interactions.</td>
        <td>Copilot Studio Kit Agent Value Summary; Copilot Studio Savings where configured by the maker.</td>
        <td><a href="https://apps.powerapps.com/play/e/cf8100ee-547a-e28d-9cf3-3a355c4482cb/app/e9f7d45d-b9d2-4913-b1b7-0945214a4682?deeplink=%2Fagent-value-summary&amp;mda_org_url=https%3A%2F%2Forg250488b7.crm6.dynamics.com&amp;mda_app_id=ac5d3ab9-fdf7-f011-8406-0022481806a1&amp;hideNavBar=true">Copilot Studio Kit for Admins - Power Apps</a><br><br><a href="https://copilotstudio.microsoft.com/">https://copilotstudio.microsoft.com/</a></td>
      </tr>
      <tr>
        <th scope="row">Money Saved</th>
        <td>Estimated cost savings generated through Copilot Studio interactions.</td>
        <td>Copilot Studio Kit Agent Value Summary; Copilot Studio Savings where configured by the maker.</td>
        <td><a href="https://apps.powerapps.com/play/e/cf8100ee-547a-e28d-9cf3-3a355c4482cb/app/e9f7d45d-b9d2-4913-b1b7-0945214a4682?deeplink=%2Fagent-value-summary&amp;mda_org_url=https%3A%2F%2Forg250488b7.crm6.dynamics.com&amp;mda_app_id=ac5d3ab9-fdf7-f011-8406-0022481806a1&amp;hideNavBar=true">Copilot Studio Kit for Admins - Power Apps</a><br><br><a href="https://copilotstudio.microsoft.com/">https://copilotstudio.microsoft.com/</a></td>
      </tr>
      <tr>
        <th scope="row">Repeat Usage</th>
        <td>Frequency of repeated user interactions over time.</td>
        <td>M365 Admin Centre (Agents Overview dashboard -&gt; Trending agents by active users. This option only covers last 30 days not full history; M365 Admin Centre (Agents Usage Report (Preview) -&gt; Users &amp; agents). This option only shows maximum of 100 rows by most recent activity</td>
        <td><a href="https://admin.cloud.microsoft/?#/agents/overview">Agents - Microsoft 365 admin Centre</a><br><a href="https://admin.cloud.microsoft/#/reportsUsage/CopilotDeclarativeAgentsV2">https://admin.cloud.microsoft/#/reportsUsage/CopilotDeclarativeAgentsV2</a></td>
      </tr>
      <tr>
        <th scope="row">Abandoned Conversations</th>
        <td>Interactions terminated before achieving a meaningful outcome.</td>
        <td>Copilot Studio Kit Conversation KPIs; transcript and outcome data where deeper analysis is required.</td>
        <td><a href="https://org250488b7.crm6.dynamics.com/main.aspx?appid=ac5d3ab9-fdf7-f011-8406-0022481806a1&amp;pagetype=dashboard&amp;id=55b614bd-ec8a-ef11-ac21-7c1e520cbfa3&amp;type=system&amp;_canOverride=true">Conversation KPIs - Power Apps</a></td>
      </tr>
      <tr>
        <th scope="row">Agent Adoption by Business Unit</th>
        <td>Usage trends segmented by business area.</td>
        <td>Power Platform Admin Centre; Copilot Studio Kit Dataverse environment; organisational metadata; custom Power BI dashboard.</td>
        <td>Copilot Studio Kit Dataverse</td>
      </tr>
      <tr>
        <th scope="row">Compliance Cases</th>
        <td>Total number and status of agents in breach of compliance policies.</td>
        <td>Copilot Studio Kit Compliance Hub.</td>
        <td><a href="https://org250488b7.crm6.dynamics.com/main.aspx?appid=ac5d3ab9-fdf7-f011-8406-0022481806a1&amp;pagetype=custom&amp;name=cat_compliancehub_329f8">Compliance Hub - Power Apps</a></td>
      </tr>
      <tr>
        <th scope="row">Agents Without Owners</th>
        <td>Total number of agents without an owner.</td>
        <td>Microsoft 365 Admin Centre Agents Overview dashboard; Copilot Studio Kit Compliance Hub.</td>
        <td><a href="https://org250488b7.crm6.dynamics.com/main.aspx?appid=ac5d3ab9-fdf7-f011-8406-0022481806a1&amp;pagetype=custom&amp;name=cat_compliancehub_329f8">Compliance Hub - Power Apps</a></td>
      </tr>
      <tr>
        <th scope="row">Authentication Type</th>
        <td>Total number of agents by authentication method.</td>
        <td>Copilot Studio Kit Agent Inventory.</td>
        <td><a href="https://org250488b7.crm6.dynamics.com/main.aspx?appid=ac5d3ab9-fdf7-f011-8406-0022481806a1&amp;pagetype=custom&amp;name=cat_agentinventory_0b104">Agent Inventory - Power Apps</a></td>
      </tr>
      <tr>
        <th scope="row">Connections</th>
        <td>Total number and details of agent connections to data sources.</td>
        <td>Copilot Studio Kit Agent Inventory.</td>
        <td><a href="https://org250488b7.crm6.dynamics.com/main.aspx?appid=ac5d3ab9-fdf7-f011-8406-0022481806a1&amp;pagetype=custom&amp;name=cat_agentinventory_0b104">Agent Inventory - Power Apps</a></td>
      </tr>
      <tr>
        <th scope="row">AI Prompts Usage</th>
        <td>Total number and details of AI prompts used by agents.</td>
        <td>Copilot Studio Kit Agent Inventory.</td>
        <td><a href="https://org250488b7.crm6.dynamics.com/main.aspx?appid=ac5d3ab9-fdf7-f011-8406-0022481806a1&amp;pagetype=custom&amp;name=cat_agentinventory_0b104">Agent Inventory - Power Apps</a></td>
      </tr>
      <tr>
        <th scope="row">Knowledge Sources</th>
        <td>Total number and details of agents' connections to knowledge sources.</td>
        <td>Copilot Studio Kit Agent Inventory.</td>
        <td><a href="https://org250488b7.crm6.dynamics.com/main.aspx?appid=ac5d3ab9-fdf7-f011-8406-0022481806a1&amp;pagetype=custom&amp;name=cat_agentinventory_0b104">Agent Inventory - Power Apps</a></td>
      </tr>
      <tr>
        <th scope="row">Channels</th>
        <td>Channels to which the agent has been deployed, such as Teams or Microsoft 365.</td>
        <td>Microsoft 365 Admin Centre Agent Registry; Copilot Studio; Agent 365.</td>
        <td><a href="https://admin.cloud.microsoft/?#/agents/all">Agents - Microsoft 365 admin Centre</a></td>
      </tr>
    </tbody>
  </table>
</div>


<style>
.observability-table {
  margin: 1.25rem 0 2rem;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
}

.vp-doc .observability-table table {
  display: table;
  width: 100%;
  margin: 0;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
  font-size: 0.9rem;
  line-height: 1.45;
}

.vp-doc .observability-table th,
.vp-doc .observability-table td {
  border: 0;
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 0.85rem 1rem;
  text-align: left;
  vertical-align: top;
  overflow-wrap: anywhere;
  word-break: normal;
}

.vp-doc .observability-table thead th {
  background: color-mix(in srgb, var(--vp-c-brand-1, var(--vp-c-primary)) 16%, var(--vp-c-bg-soft));
  color: var(--vp-c-text-1);
  font-weight: 700;
}

.vp-doc .observability-table tbody th {
  background: color-mix(in srgb, var(--vp-c-brand-1, var(--vp-c-primary)) 8%, var(--vp-c-bg-soft));
  color: var(--vp-c-text-1);
  font-weight: 700;
}

.vp-doc .observability-table tbody td {
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
}

.vp-doc .observability-table tbody tr:nth-child(even) td {
  background: var(--vp-c-bg-soft);
}

.vp-doc .observability-table tbody tr:last-child th,
.vp-doc .observability-table tbody tr:last-child td {
  border-bottom: 0;
}

.vp-doc .observability-table tbody tr:hover th,
.vp-doc .observability-table tbody tr:hover td {
  background: color-mix(in srgb, var(--vp-c-brand-1, var(--vp-c-primary)) 10%, var(--vp-c-bg));
  color: var(--vp-c-text-1);
}

.vp-doc .observability-table.systems-table thead th:first-child,
.vp-doc .observability-table.systems-table tbody th {
  width: 24%;
}

.vp-doc .observability-table.metrics-table thead th:first-child,
.vp-doc .observability-table.metrics-table tbody th {
  width: 20%;
}

html.dark .observability-table {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.24);
}
</style>
