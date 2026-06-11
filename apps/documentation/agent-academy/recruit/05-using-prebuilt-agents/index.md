---
prev:
  text: Creating a Solution for Your Agent
  link: ./04-creating-a-solution
next:
  text: Create a custom agent using natural language with AI
  link: ./06-create-agent-from-conversation
short-description: Use and customize a template agent to accelerate setup
difficulty: 1
codename: OPERATION SAFE TRAVELS
time: 30
tags:
  - prebuilt-agents
products:
  - copilot-studio
  - microsoft-365
  - teams
industries:
  - it
created-date: 2025-08-20
last-edited-date: 2026-03-11
---
# 🧰 Mission 05: Using a Pre-Built Agent   {#mission-05-using-a-pre-built-agent}

<mission-meta />

## 🎯 Mission Brief {#mission-brief}

In this lesson, you will explore pre-built agents, which are purpose-built agents created by Microsoft to help you get started more quickly and reduce the time needed to deliver value.
Rather than building from scratch, pre-built agents, also known as agent templates, provide a ready-made starting point that you can review, customise, and deploy in a short amount of time.

In this mission, you’ll work with the **Safe Travels** agent—an agent that helps you prepare for business travel, understand company policies, and streamline planning.

## 🧭 Objectives {#objectives}

Your goals for this mission are:

1. Understand what pre-built agents are and why they matter  
1. Deploy the **Safe Travels** agent template  
1. Customize the agent’s responses and content  
1. Test and publish the agent  

## 🧠 What Are Pre-Built Agents? {#what-are-pre-built-agents}

Pre-built agents are turnkey AI agents created by Microsoft that:

- Address common business needs (like travel, HR, IT support)
- Include fully functioning topics, trigger phrases, instructions and sample knowledge.
- Can be edited, extended, and grounded with your own data

These agents are perfect for getting started quickly or learning how agents are structured.

## 🧪 Lab 05: Quickly get started with a pre-built agent {#lab-05-quickly-get-started-with-a-pre-built-agent}

We're now going to learn how to select a pre-built agent and customize it.

Let's begin!

### 5.1 Launch Copilot Studio

1. Navigate to [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)

1. Sign in with your work (Woodside) email address


### 5.2 Choose the Safe Travels Agent Template

1. From the Copilot Studio homepage, click **+ Create**
    ![Create an agent](./images/create.png)

1. Scroll down to the **Start with an agent template** section

1. Find and select **Safe Travels**

    ![Choose safe travels template](./images/choose_template.png)

1. Notice that the template comes pre-loaded with a description, instructions and knowledge.

    ![Review the template](./images/template-setup.png)

1. Click **Create**

    ![Create an agent](./images/create-agent-setup.png)

This will create a new agent in your environment based on the Safe Travels configuration.

### 5.3 Customize the Agent


1. We'll equip the agent with an additional knowledge source so it can answer questions suitable for Australian travellers. To do this, scroll down to the **knowledge** section and select **Add knowledge**

    ![Add Knowledge](./images/knowledge.png)

1. Select **Public websites**

    ![Add a public website](./images/public-website.png)

1. In the text input, paste **<https://www.smartraveller.gov.au/>** and select **Add**

    ![Add the website](./images/paste-add.png)

1. Select **Add to agent**

    ![Add to Agent](./images/add-to-agent.png)

### 5.4 Test and Publish

1. Click **Test** in the top-right to launch the test window  

1. Try phrases like:

    - `“Do I need a visa to travel from the US to Amsterdam?”`
    - `“How long does it take to get an Australian Passport?”`
    - `“What do I need to know before travelling to Fiji?”`

1. Confirm the agent responds with accurate and helpful information and observe the Activity Map to see where it retrieved the information.

    ![Add to Agent](./images/response-passport.png)

1. When ready, click **Publish**

    ![Add to Agent](./images/publish-1.png)

1. Select **Publish** again in the dialog box
   
    ![Add to Agent](./images/publish-2.png)

1. Optionally, add the agent to Microsoft Teams using the built-in **Channels** feature.


## ✅ Mission Complete {#mission-complete}

You've now successfully:

- Deployed a Microsoft pre-built agent  
- Customized the agent
- Tested and published your own version of the **Safe Travels** agent template

⏭️ [Move to **Creating a custom agent from scratch** lesson](../06-create-agent-from-conversation/index.md).

<analytics-tag section="recruit" mission="05-using-prebuilt-agents" />
