---
prev:
  text: Course Setup
  link: ./00-course-setup
next:
  text: Copilot Studio Fundamentals
  link: ../02-copilot-studio-fundamentals
short-description: >-
  Understand conversational AI concepts, LLMs, and autonomous vs. declarative
  agents
difficulty: 1
codename: OPERATION AI AGENT DECODE
time: 30
tags:
  - fundamentals
products:
  - copilot-studio
industries:
  - it
created-date: 2025-08-20
last-edited-date: 2026-03-13
---
# 🚨 Mission 01: Introduction to Agents {#mission-01-introduction-to-agents}

<mission-meta />


## 🎯 Mission Brief {#mission-brief}

Welcome! Before we dive into building agents, you need a firm grasp of the AI concepts that power them. This lesson will equip you with foundational knowledge of conversational AI, large language models (LLMs), retrieval-augmented generation (RAG), and the types of agents you can create in Copilot Studio.

## 🔎 Objectives {#objectives}

In this mission, you’ll learn:

1. What conversational AI is
1. How Large Language Models (LLMs) power chat experiences  
1. What Retrieval-Augmented Generation (RAG) brings to the table  
1. The distinction between conversational agents and autonomous agents  
1. How agents in Copilot Studio leverage these concepts  

Let’s dive in!

## What Is Conversational AI?

Conversational AI refers to any system that can understand, process, and respond to human language (text or speech) in a way that feels natural. Think chatbots on websites that help you figure out where your order is or virtual personal assistants in your favorite apps. Under the hood, most modern conversational AIs rely on Large Language Models (LLMs).

## Large Language Models (LLMs) 101

At the core of most conversational AI systems are **Large Language Models**, neural networks trained on massive amounts of text. These models learn the statistical patterns of language so they can generate coherent sentences, answer questions,  brainstorm ideas or even create content. Key points to understand:

1. **Training Data:** LLMs ingest terabytes of text (web pages, books, poems, articles). This “world knowledge” lets them respond on many topics.  
1. **Tokenization:** Text is broken into smaller units called tokens (words, subwords, or characters). The model predicts one token at a time.  
1. **Context Window:** Each LLM has a limit on how many tokens it can “see” at once. Beyond that limit, prior tokens get shortened.  
1. **Prompting:** You interact with an LLM by sending it a prompt (your question or request in a block of text). The better your prompt, the more focused and relevant the response from the LLM.  

> [!TIP]
> A common analogy is that an LLM is like a “super-smart autocomplete.” It doesn’t truly understand meaning like a human brain, but it’s extremely good at predicting the next best word (or phrase) in a sequence.

## Retrieval-Augmented Generation (RAG)

When LLMs rely solely on static training data, they might hallucinate or become outdated. RAG addresses this by letting the model “look up” fresh information before composing an answer. At a high level, RAG works like this:

1. **User Query:** A user asks a question (e.g., “What’s the latest on Contoso’s quarterly earnings?”).  
1. **Retriever Step:** The system queries a knowledge source (documents, public websites, internal databases, SharePoint libraries, etc.) to find relevant information.  
1. **Augmentation:** Retrieved data gets appended to or prepended before sending to the LLM.
1. **Generation:** The LLM ingests both the user’s question and the retrieved context, then generates a response that’s grounded in up-to-date data.  

With RAG, your agent can search approved knowledge sources such as SharePoint content, OneDrive files, uploaded documents, or FAQ material to produce more grounded answers.

## Conversational vs. Autonomous Agents

In the context of Copilot Studio, the term **agent** can refer to multiple flavors of AI assistants. It’s helpful to draw a line between:

**Conversational Agents:**

- Requires two-way dialogue (text or speech) to work.
- Persist context across multiple turns of a conversation.
- Can connect to approved Microsoft 365 capabilities to support guided interactions and simple actions
- Ideal for customer support, FAQs, guided interactions or simple Q&A. For example, an agent in Microsoft Teams that answers HR policy questions.  

**Autonomous Agents:**

- Go beyond back-and-forth chat; they can kick off and **take actions** on behalf of the user.
- Use LLM reasoning loops (think “plan → act → observe → replan”) to complete tasks.
- Can respond to approved triggers and perform actions (e.g., send emails, send messages on Microsoft Teams).
- Operate without constant human prompts. Once triggered, they can handle multi-step processes autonomously. For example, An agent that responds when a new item is added to a SharePoint List and sends a follow-up email.

> [!INFO]
> Conversational agents wait for user input and require back and forth dialogue to work. Autonomous agents can execute based on external triggers and perform actions without any human interaction.

## Agents in Copilot Studio

**Copilot Studio** unifies both conversational and autonomous scenarios under one framework. Here’s how Copilot Studio helps you build agents:

1. **Visual Agent Designer:** A drag and drop canvas to build, test and deploy your agents.
1. **Model (LLM) Selection:** Select from various AI models (OpenAI, Anthropic) to choose the best LLM for your agent scenario.  
1. **Knowledge:** Use approved Microsoft 365 knowledge sources such as SharePoint, OneDrive for Business, uploaded documents, and public websites.
1. **Tools:** Enable your agent to perform actions (e.g., send calendar invites, update a SharePoint List).
1. **Multi-Modal Support:** Copilot studio agents support file uploads.
1. **Publishing & Distribution:** Once your agent is ready, you can publish it to Microsoft 365 Copilot and Microsoft Teams.

## 🎉 Mission Complete {#mission-complete}

You’ve now completed your introduction to agents and foundational AI concepts. You understand:

1. **LLMs = The “Brain” of Your Agent**  
   - Responsible for language understanding and generation.  

1. **RAG = Real-Time Knowledge Integration**  
   - Bridges the gap between a static LLM and ever-changing data sources.  
   - Retrieves and injects relevant documents or records into the LLM prompt.  

1. **Conversational vs. Autonomous**  
   - **Conversational:** Focus on back and forth dialogue
   - **Autonomous:** No dialogue required, kicks off from external triggers and performs actions autonomously

Next up, you'll explore the [fundamentals of Copilot Studio](../02-copilot-studio-fundamentals/index.md)!


## 📚 Tactical Resources {#tactical-resources}

🔗 [Copilot Studio Documentation Home](https://learn.microsoft.com/microsoft-copilot-studio/)

<analytics-tag section="recruit" mission="01-introduction-to-agents" />
