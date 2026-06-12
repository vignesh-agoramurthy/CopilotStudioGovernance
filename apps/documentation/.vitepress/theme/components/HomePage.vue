<template>
  <div class="cs-home">
    <div class="hero-section">
      <h1 class="hero-title">Copilot Studio Enablement</h1>
      <p class="hero-subtitle">Comprehensive resources for building, optimizing, and managing intelligent AI agents.</p>
      <a href="https://copilotstudio.microsoft.com/" class="cta-button">Get Started</a>
    </div>

    <div class="sections-grid">
      <a :href="withBase('/agent-academy/')" class="section-card">
        <span class="section-icon">🎓</span>
        <h3>Agent Academy</h3>
        <p>Start your journey with our comprehensive training program. Learn the fundamentals of building AI agents from scratch with 13 hands-on modules designed to take you from beginner to agent maker.</p>
      </a>

      <a :href="withBase('/tool-selection/')" class="section-card">
        <span class="section-icon">🧭</span>
        <h3>Agent Tool Selection</h3>
        <p>Compare agent frameworks and learn when to use each one, so you can choose the right foundation for your use case, integration needs, and governance requirements.</p>
      </a>

      <a :href="withBase('/observability/')" class="section-card">
        <span class="section-icon">📊</span>
        <h3>Observability Guide</h3>
        <p>Monitor, analyze, and govern agents with comprehensive observability tools and guidance.</p>
      </a>

      <a :href="withBase('/testing/')" class="section-card">
        <span class="section-icon">🧪</span>
        <h3>Testing and Evaluation</h3>
        <p>Learn how to evaluate agents in the Copilot Studio portal and run advanced testing with the Copilot Studio Kit.</p>
      </a>

      <a :href="withBase('/best-practices/')" class="section-card">
        <span class="section-icon">⭐</span>
        <h3>Best Practice</h3>
        <p>Discover industry best practices, proven patterns, and expert recommendations for building efficient, secure, and scalable AI agents.</p>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withBase } from "vitepress";
</script>

<style scoped>
.cs-home {
  background: var(--vp-c-bg, #ffffff);
  padding: 0 1rem;
  color: var(--vp-c-text-primary, #0f172a);
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 4rem 2rem 2rem;
  margin-bottom: 4rem;
}

.hero-title {
  font-size: clamp(2.2rem, 8vw, 3.2rem);
  font-weight: 700;
  margin: 0 0 1.5rem;
  line-height: 45px;
  background: linear-gradient(90deg, var(--vp-c-primary, #0078d4) 0%, var(--vp-c-primary, #0078d4) 50%, var(--vp-c-accent, #50e6ff) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--vp-c-text-2, #6b7280);
  margin: 0 0 2.5rem;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
}

.cta-button {
  display: inline-block;
  padding: 0.8rem 2.2rem;
  background: linear-gradient(135deg, var(--vp-c-primary, #0078d4) 0%, var(--vp-c-primary-dark, #106ebe) 100%);
  color: var(--vp-c-button-text, #ffffff);
  text-decoration: none;
  border-radius: 24px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 120, 212, 0.35);
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 120, 212, 0.35);
  background: linear-gradient(135deg, var(--vp-c-primary-dark, #106ebe) 0%, var(--vp-c-primary, #0078d4) 100%);
}

.cta-button:active {
  transform: translateY(-1px);
}

/* Sections Grid */
.sections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 3rem 0 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
}

.section-card {
  display: block;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider, #d1d5db);
  border-radius: 12px;
  background: var(--vp-c-bg-soft, var(--vp-c-bg, #f8fafc));
  transition: all 0.3s cubic-bezier(0.4, 0.4, 0.2, 1);
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
}

.section-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    rgba(0, 120, 212, 0),
    var(--vp-c-primary, #0078d4) 30%,
    var(--vp-c-accent, #50e6ff) 70%,
    rgba(0, 120, 212, 0)
  );
  opacity: 0;
  transition: opacity 0.3s;
}

.section-card:hover {
  border-color: var(--vp-c-primary, #0078d4);
  box-shadow: 0 12px 32px rgba(0, 120, 212, 0.2);
  transform: translateY(-6px);
  background: var(--vp-c-bg-soft, var(--vp-c-bg, #f8fafc));
}

.section-card:hover::before {
  opacity: 1;
}

.section-card:focus-visible {
  outline: 2px solid var(--vp-c-primary, #0078d4);
  outline-offset: 4px;
}

.section-icon {
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
  display: block;
}

.section-card h3 {
  font-size: 1.4rem;
  margin: 0 0 1rem;
  color: var(--vp-c-text-1, #111827);
  font-weight: 600;
  letter-spacing: -0.3px;
}

.section-card p {
  font-size: 0.95rem;
  color: var(--vp-c-text-2, #6b7280);
  margin: 0 0 1.5rem;
  line-height: 1.7;
  font-weight: 400;
}

.section-link {
  display: inline-block;
  color: var(--vp-c-primary, #0078d4);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
  font-size: 0.9rem;
  letter-spacing: 0.2px;
}

.section-card:hover .section-link {
  color: var(--vp-c-primary-dark, #106ebe);
}

/* Footer Section */
.footer-section {
  text-align: center;
  padding: 3rem 2rem;
  border-top: 1px solid var(--vp-c-divider, #d1d5db);
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.footer-section h3 {
  font-size: 1.2rem;
  color: var(--vp-c-text-1, #111827);
  margin: 0 0 0.5rem;
  font-weight: 600;
}

.footer-section p {
  color: var(--vp-c-text-2, #6b7280);
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer-section a {
  color: var(--vp-c-primary, #0078d4);
  text-decoration: none;
  transition: color 0.2s;
  font-weight: 500;
}

.footer-section a:hover {
  color: var(--vp-c-primary-dark, #106ebe);
  text-decoration: underline;
}
</style>
