# Basic Application Template

This repository is a monorepo template for building both a React web application (with Microsoft Authentication) and a VitePress-powered technical documentation site. It is designed for use with pnpm workspaces and supports modern development workflows, CI/CD, and deployment to AWS S3.

## Projects in this Repository

### 1. Web Application
- **Path:** `apps/web-application`
- **Description:** A React application template using MSAL (Microsoft Authentication Library) for authentication, Vite for fast builds, and a modern TypeScript/React stack.
- **Getting Started & Details:** See [`apps/web-application/README.md`](./apps/web-application/README.md)

### 2. Technical Documentation
- **Path:** `apps/documentation`
- **Description:** A VitePress-based template for technical documentation, ready for deployment and customization.
- **Getting Started & Details:** See [`apps/documentation/README.md`](./apps/documentation/README.md)

## Monorepo Structure

- All projects are managed as pnpm workspaces under the `apps/` directory.
- Each project manages its own dependencies and build scripts.
- The root `package.json` provides scripts to build each project via pnpm filtering.

## CI/CD & Deployment

- GitHub Actions workflows are provided for building and deploying both the web application and documentation.
- Environment variables and secrets for deployment should be configured in your repository settings under **Settings > Secrets and Variables > Actions > Variables**.

## More Information

- For details on setting up authentication, environment variables, and local development for the web application, see [`apps/web-application/README.md`](./apps/web-application/README.md).
- For details on customizing and deploying the documentation site, see [`apps/documentation/README.md`](./apps/documentation/README.md).

---

**Contributions are welcome!**

If you have suggestions or improvements, please open an issue or submit a pull request.

