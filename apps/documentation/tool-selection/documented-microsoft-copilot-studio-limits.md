---
title: "Documented Microsoft Copilot Studio limits"
prev:
  text: 'When to pick what'
  link: '/tool-selection/when-to-pick-what'
next:
  text: 'Overview'
  link: '/tool-selection/'
---

# Documented Microsoft Copilot Studio limits

Reference values sourced from Microsoft Learn at the time of writing. Limits change frequently - re-verify before any contractual or architectural commitment.

## Per-agent caps

-   Agent instructions: 8,000 characters

-   Topics: 1,000 per agent (Dataverse environment)

-   Trigger phrases: 200 per topic

-   Skills: 100 per agent

-   File-upload knowledge: 500 files at 512 MB each (within Woodside DLP and governance)

## Knowledge source ceilings

-   Generative orchestration: 25 SharePoint URLs; 25 public websites; unlimited Documents, Dataverse, and certified connector sources (within Woodside DLP and governance)

-   Classic orchestration is tighter: 4 public URLs; 4 SharePoint URLs per node; 2 Dataverse sources with up to 15 tables; 2 certified connector sources

-   Citations returned by knowledge cannot be passed as inputs to tools or actions

-   Sensitivity-labelled content may silently return no answer

-   "Exhaustive retrieval" failure mode is documented for queries that need to consider hundreds of files at once - specific token number is not published

## Throughput and throttling

-   Messages: 8,000 per minute per Dataverse environment

-   M365 Copilot users without packs: 10 requests per minute, 200 per hour

-   Generative AI messages, 1--10 prepaid packs: 50 RPM / 1,000 RPH

-   Generative AI messages, 11--50 packs: 80 RPM / 1,600 RPH

-   Generative AI messages, 51--150 packs: 100 RPM / 2,000 RPH

-   Power Platform requests: 250,000 per 24h (Standard); 6,000 per 24h (Teams plan)

-   Omnichannel ACS channel-data message cap: 28 KB

## Authentication

-   Three modes supported: No authentication; Authenticate with Microsoft (Entra ID); Manual (OAuth2 generic)

-   Manual authentication is not solution-aware - must be reapplied per environment

-   Knowledge from SharePoint, Dataverse, and certified connector sources is always agent-user-authenticated within Woodside DLP and governance
