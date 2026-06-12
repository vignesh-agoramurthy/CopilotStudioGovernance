---
title: "Updated Quick Reference Appendix"
prev:
  text: 'Compliance Metrics'
  link: '/observability/4-compliance-metrics'
next:
  text: 'Overview'
  link: '/observability/'
---

# Updated Quick Reference Appendix

| Category | Metric | Primary Data Source | Out-of-the-Box Availability | Additional Configuration Likely Required | Key Limitation |
| --- | --- | --- | --- | --- | --- |
| Usage | Users Enabled | Microsoft 365 Admin Centre / Entra Admin Centre | Yes | No | Access does not equal active usage |
| Usage | Active Usage | Microsoft 365 Admin Centre | Yes | No | Confirm report scope and included agent types |
| Usage | Usage Increase from Baseline Date | M365 Admin Centre / PPAC / Custom Dashboard | No | Yes | Requires baseline comparison and trend analysis |
| Usage | Agents Created | Copilot Studio Kit | No | Yes | Kit setup and cross-environment reporting may be required |
| Usage | Sessions | Copilot Studio / Copilot Studio Kit | Yes | Possibly | Conversation KPI dashboard may require setup |
| Usage | Active Agents | Copilot Studio Kit / Custom Dashboard | Unspecified | Yes | Requires agreed definition of active |
| Usage | Most Popular / Used Agents | Microsoft 365 Admin Centre / PPAC | No | Yes | Enterprise segmentation may require custom dashboarding |
| Usage | Who Is Using Them | Microsoft 365 Admin Centre | Yes | Possibly | Subject to privacy, permissions, and report scope |
| Usage | What They Are Being Used For | Copilot Studio Analytics | Yes | Possibly | Low-volume agents may have limited insight |
| Correct Usage | Exceptions | Microsoft 365 Admin Centre | Yes | No | Requires technical review to confirm root cause |
| Correct Usage | CSAT | Copilot Studio | No | Yes | Not consistently available for GenAI orchestrated agents |
| Correct Usage | Turns | Copilot Studio / Copilot Studio Kit | Yes | Possibly | Conversation KPI dashboard may require setup |
| Correct Usage | Conversation Duration | Copilot Studio / Copilot Studio Kit | Yes | Possibly | Must be interpreted by agent purpose |
| User Behaviour | Time Saved | Copilot Studio Kit / Copilot Studio | Yes | Possibly | Estimate only unless assumptions are documented |
| User Behaviour | Money Saved | Copilot Studio Kit / Copilot Studio | Yes | Possibly | Estimate only unless calculation logic is documented |
| User Behaviour | Repeat Usage | Microsoft 365 Admin Centre / Custom Dashboard | No | Yes | Requires longitudinal user-agent interaction analysis |
| User Behaviour | Abandoned Conversations | Copilot Studio Kit | Yes | Yes | May not be reliable for GenAI orchestrated agents |
| User Behaviour | Agent Adoption by Business Unit | Copilot Studio Kit / Custom Dashboard | No | Yes | Requires environment or business unit mapping |
| Compliance | Compliance Cases | Copilot Studio Kit | Yes | Possibly | Depends on configured compliance policies |
| Compliance | Agents Without Owners | M365 Admin Centre / Copilot Studio Kit | Yes | Possibly | Ownership data may be incomplete |
| Compliance | Authentication Type | Copilot Studio Kit | Yes | Possibly | Requires Agent Inventory configuration |
| Compliance | Connections | Copilot Studio Kit | Yes | Possibly | Requires review of connected data sensitivity |
| Compliance | AI Prompts Usage | Copilot Studio Kit | Yes | Possibly | Requires governance review in sensitive use cases |
| Compliance | Knowledge Sources | Copilot Studio Kit | Yes | Possibly | Source quality and currency must be governed separately |
| Compliance | Channels | Microsoft 365 Admin Centre | Yes | No | Review with authentication and audience |
