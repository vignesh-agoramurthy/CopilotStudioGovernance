<template>
  <div class="orkes-home">
    <div class="hero-section">
      <h1 class="hero-title">Copilot Studio Enablement</h1>
      <p class="hero-subtitle">Comprehensive resources for building, optimizing, and managing intelligent AI agents.</p>
      <a href="/CopilotStudioGovernance/recruit/" class="cta-button">Get Started</a>
    </div>

    <div class="sections-grid">
      <div class="section-card">
        <span class="section-icon">🎓</span>
        <h3>Agent Academy</h3>
        <p>Start your journey with our comprehensive training program. Learn the fundamentals of building AI agents from scratch with 13 hands-on modules designed to take you from beginner to agent maker.</p>
        <a href="/CopilotStudioGovernance/recruit/" class="section-link">Explore Academy →</a>
      </div>

      <div class="section-card">
        <span class="section-icon">⭐</span>
        <h3>Best Practices</h3>
        <p>Discover industry best practices, proven patterns, and expert recommendations for building efficient, secure, and scalable AI agents.</p>
        <a href="/CopilotStudioGovernance/best-practices/" class="section-link">View Best Practices →</a>
      </div>

      <div class="section-card">
        <span class="section-icon">📊</span>
        <h3>Observability</h3>
        <p>Monitor, analyze, and optimize your agents with comprehensive observability tools and guidance.</p>
        <a href="/CopilotStudioGovernance/observability/" class="section-link">Explore Observability →</a>
      </div>
    </div>

    <div class="footer-section">
      <h3>Code of Conduct</h3>
      <p>This project has adopted the <a href="https://opensource.microsoft.com/codeofconduct/">Microsoft Open Source Code of Conduct</a>.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.orkes-home {
  background: linear-gradient(135deg, #1a1a1e 0%, #252529 100%);
  padding: 0 1rem;
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 6rem 2rem 4rem;
  margin-bottom: 4rem;
}

.hero-title {
  font-size: clamp(2.2rem, 8vw, 3.2rem);
  font-weight: 700;
  margin: 0 0 1.5rem;
  background: linear-gradient(90deg, #7DCFFF 0%, #0078D4 50%, #50E6FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #b0b0b0;
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
  background: linear-gradient(135deg, #0078D4 0%, #1084D9 100%);
  color: white;
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
  box-shadow: 0 8px 24px rgba(0, 120, 212, 0.5);
  background: linear-gradient(135deg, #1084D9 0%, #106EBE 100%);
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
  padding: 2.5rem;
  border: 1px solid #3e3e42;
  border-radius: 12px;
  background: #2d2d31;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.section-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #0078D4, transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.section-card:hover {
  border-color: #0078D4;
  box-shadow: 0 12px 32px rgba(0, 120, 212, 0.2);
  transform: translateY(-6px);
  background: linear-gradient(135deg, #2d2d31 0%, #3a3a3f 100%);
}

.section-card:hover::before {
  opacity: 1;
}

.section-icon {
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
  display: block;
}

.section-card h3 {
  font-size: 1.4rem;
  margin: 0 0 1rem;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: -0.3px;
}

.section-card p {
  font-size: 0.95rem;
  color: #b0b0b0;
  margin: 0 0 1.5rem;
  line-height: 1.7;
  font-weight: 400;
}

.section-link {
  display: inline-block;
  color: #0078D4;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
  font-size: 0.9rem;
  letter-spacing: 0.2px;
}

.section-link:hover {
  color: #50E6FF;
  transform: translateX(4px);
}

/* Footer Section */
.footer-section {
  text-align: center;
  padding: 3rem 2rem;
  border-top: 1px solid #3e3e42;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.footer-section h3 {
  font-size: 1.2rem;
  color: #ffffff;
  margin: 0 0 0.5rem;
  font-weight: 600;
}

.footer-section p {
  color: #b0b0b0;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer-section a {
  color: #0078D4;
  text-decoration: none;
  transition: color 0.2s;
  font-weight: 500;
}

.footer-section a:hover {
  color: #50E6FF;
  text-decoration: underline;
}
</style>
