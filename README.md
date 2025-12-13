# 💼 ntduyet.github.io

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Tested_with-Vitest-6E9F18?style=flat&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Coverage Status](https://coveralls.io/repos/github/ntduyet/ntduyet.github.io/badge.svg?branch=main)](https://coveralls.io/github/ntduyet/ntduyet.github.io?branch=main)

> 🚀 A personal learning project to explore web development by building a **templated resume generator** with **React**, **Next.js**, and **Tailwind CSS**.

---

## 🧠 About the Project

This project is a hands-on way to **learn modern web development** by creating a responsive and customizable resume page.  
It blends **front-end design**, **data-driven components**, and **Next.js features** to make resume generation fast and flexible.

🧩 **Goal:** To understand how to build, style, and deploy modern web apps using industry-standard tools.

---

## ⚙️ Features

✅ Customizable YAML-based resume configuration  
✅ Reusable and modular components  
✅ Responsive UI with Tailwind CSS  
✅ Lightweight unit tests powered by Vitest  
✅ Deployable on GitHub Pages  
✅ Beginner-friendly development setup  

---

## 🏗️ Tech Stack

| Category | Technology |
|-----------|-------------|
| 🖥️ Framework | [Next.js](https://nextjs.org/) |
| ⚛️ Library | [React](https://reactjs.org/) |
| 📝 Language | [TypeScript](https://www.typescriptlang.org/) |
| 🎨 Styling | [Tailwind CSS](https://tailwindcss.com/) |
| 🧹 Linting | ESLint + Prettier |
| ☁️ Deployment | GitHub Pages |

---

## 📁 Project Structure

The repository is organized to keep configuration, assets, and application logic cleanly separated:

| Folder/File | Description |
|--------------|-------------|
| **`app/`** | Contains all main application pages and components used by Next.js. |
| **`config/`** | YAML configuration files defining resume content. |
| **`public/`** | Includes static resources like images and icons. |
| **`tests/`** | Unit and integration tests. Contains:<br>• `ui/` – component‑level tests for presentation logic.<br>• `services/` – tests for data‑loading and business logic.<br>• `utils/` – shared test utilities like mocks, factory helpers, and render wrappers. |
| **`.github/workflows/`** | GitHub Actions for automated build, lint, test, and deployment pipelines. |
| **`eslint.config.mjs`** | ESLint configuration defining code‑style rules, TypeScript, and import conventions used for linting during CI/CD. |
| **`vitest.config.ts`** | Vitest configuration file controlling test environment setup, alias resolution (`@/`), code‑coverage thresholds, and JSDOM settings. |
| **`package.json`** | Lists dependencies, test/lint/build scripts, and project metadata. |
| **`tailwind.config.mjs`** | TailwindCSS setup with custom color palette, typography, and theme extensions. |
| **`tsconfig.json`** | TypeScript compiler configuration for strict typing, path aliases, and incremental builds. |

> 🧠 This structure is optimized for scalability — you can easily add new resume templates, pages, or configuration files as the project grows.

## 🌱 What I Learned

Through building this project, I’ve gained hands-on experience with:

- ⚡ **Next.js** — understanding routing, page generation, and component-based architecture  
- 🎨 **Tailwind CSS** — rapid UI development using utility-first principles  
- 🧩 **React + TypeScript** — structuring clean, type-safe, and scalable frontend apps
- 🧪 **Vitest** — writing and running lightweight, fast unit tests for React components  
- 🔄 **GitHub Actions** — setting up automated build and deployment pipelines  
- 🧠 **UI Design Principles** — creating visually consistent, data-driven interfaces  

---

## 🎯 Future Enhancements

Planned features and improvements to expand functionality:

- 🧩 Support for multiple resume layout templates  
- 🌗 Dark & light theme mode toggle  
- 🧾 Export resume as downloadable **PDF**  
- ✍️ Interactive web-based resume editor  
- 🌐 API-based template management for dynamic content
