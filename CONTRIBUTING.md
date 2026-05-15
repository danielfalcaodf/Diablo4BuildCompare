# Contributing Guide

Thank you for your interest in contributing to **Diablo 4 Build Compare**! 🎉  
This project is a work in progress and all kinds of contributions are welcome — bug fixes, new features, documentation improvements, you name it.

---

## Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) 18+
- [npm](https://www.npmjs.com/) 10+
- [Git](https://git-scm.com/)

---

## Step-by-step guide

### 1. Fork the repository

Click **Fork** in the top-right corner of the GitHub page to create your own copy.

### 2. Clone your fork

```bash
git clone https://github.com/your-username/Diablo4BuildCompare.git
cd Diablo4BuildCompare
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a branch

Use a descriptive branch name:

```bash
git checkout -b feat/my-feature
# or
git checkout -b fix/bug-description
```

### 5. Run the project locally

```bash
npm run dev   # starts backend and frontend together
```

### 6. Commit your changes

Write clear commit messages in English using [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add stat comparison logic
fix: resolve incorrect slot mapping for barbarian
docs: update README setup instructions
chore: update dependencies
```

### 7. Push to your fork

```bash
git push origin feat/my-feature
```

### 8. Open a Pull Request

Go to the original repository and click **New Pull Request**. Fill in the PR template with details about what you changed and why.

---

## Reporting bugs

Before opening an issue, check if the bug has already been reported.  
If not, open a new issue using the **Bug Report** template.

## Suggesting features

Have an idea? Open an issue using the **Feature Request** template and describe what you'd like to see.

---

## Project structure

```
Diablo4BuildCompare/
├── d4-backend/    # NestJS API — business logic and Maxroll integration
├── d4-frontend/   # Angular SPA — user interface
└── turbo.json     # Turborepo configuration (monorepo)
```

---

## Good first contributions

- [ ] Real logic for the **Stat Checklist** (currently placeholder UI)
- [ ] Implement the **Attribute Display** panel
- [ ] Configure **Docker Compose** with backend and frontend services
- [ ] Add unit and integration tests
- [ ] Improve error handling for invalid Maxroll IDs
- [ ] Responsive layout improvements

---

## Questions?

Open an issue with the `question` label — happy to help!
