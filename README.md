# Levi Satto Siedschlag — Portfolio Landing Page

Modern, high-performance portfolio for **Levi Satto Siedschlag**, Senior Full-Stack Software Analyst specializing in Python (FastAPI, Django, Flask), ReactJS (TypeScript), and PostgreSQL data architectures.

## 🚀 Quick Start

### 1. Start Local Development Server
```bash
npm run dev
```
Open **http://localhost:5173/** in your browser.

### 2. Build for Production
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```

## 🛠️ Tech Stack & Features
- **Frontend Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Glassmorphism Dark Mode
- **Icons**: Lucide React
- **Interactive Features**:
  - **Hero & Executive Summary**: Bilingual badges, direct WhatsApp / Email quick actions.
  - **Technical Qualifications Matrix**: Filterable competency matrix with search by technology/tag.
  - **Career Experience Timeline**: Detailed career progression with interactive milestone inspection.
  - **Interactive Architecture & Performance Lab**: Live simulation of FastAPI endpoints and PostgreSQL query execution plans (`EXPLAIN ANALYZE`).
  - **Academic Background**: MBA in NLP/Data Analysis and Systems Analysis degrees.
  - **Printable & Markdown Resume Modal**: Formatted printable resume with 1-click Markdown export.


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
