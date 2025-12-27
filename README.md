# React Calendar Library

A production-ready, fully-typed React calendar component built as a distributable package.

![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue.svg)
![React](https://img.shields.io/badge/React-18.2-blue.svg)
![Build](https://img.shields.io/badge/Build-tsup-orange.svg)

## 🎯 Project Overview

This project has been transformed from a basic React app into a **standalone component library**. It provides a reusable `<Calendar />` component that can be:

1.  **Published to npm** and installed in other projects.
2.  **Consumed locally** via the `dist` folder.
3.  **Developed and Tested** using the included demo app.

##  Library Architecture

The project structure has been refactored to separate the library logic from the consumer app:

```
cal/
├── dist/                      📦 Built Library (Generated)
│   ├── index.js               # CommonJS bundle
│   ├── index.mjs              # ES Module bundle
│   ├── index.d.ts             # Type Definitions
│   └── index.css              # Extracted Styles
│
├── src/
│   ├── lib/                   📚 Library Source Code
│   │   ├── components/        # UI Components (Calendar, Header, Grid...)
│   │   ├── utils/             # Pure Logic (Dates, Arrays...)
│   │   ├── types/             # TypeScript Interfaces
│   │   └── index.ts           # Library Entry Point
│   │
│   ├── App.tsx                📱 Demo App (Consumer)
│   └── index.tsx              # Entry point for Dev Server
│
├── package.json               ⚙️ Library Configuration
└── tsconfig.json              ⚙️ TypeScript Configuration
```

## 🚀 Building the Library

We use **[tsup](https://tsup.egoist.dev/)** to bundle the library. It uses `esbuild` under the hood for extremely fast builds and provides zero-config TypeScript compilation.

To build the library:

```bash
npm run build-lib
```

**What this does:**
1.  Compiles `src/lib/index.ts`.
2.  Generates **CJS** (CommonJS) and **ESM** (ES Module) formats.
3.  Generates **Type Definitions** (`.d.ts`) for IntelliSense.
4.  Extracts CSS into `dist/index.css`.
5.  Clean the `dist` folder before building.

## 📦 Consuming the Library

### In a Real Project (after npm install)

Once published or linked, you can use the component like any other library:

```tsx
import { Calendar } from 'your-package-name';
import 'your-package-name/dist/index.css'; // Don't forget styles!

function MyComponent() {
  return <Calendar date={new Date()} />;
}
```

### In this Repository (Development)

The `src/App.tsx` file acts as a test consumer. It imports directly from the library source for hot-reloading:

```tsx
import { Calendar } from './lib';
// Styles are automatically imported via CSS Modules in source mode
```

## �️ Implementation Details

### 1. `package.json` Configuration

The package file has been configured for distribution:

- **`main`**: `dist/index.js` (Entry point for CommonJS)
- **`module`**: `dist/index.mjs` (Entry point for ES Modules)
- **`types`**: `dist/index.d.ts` (TypeScript support)
- **`files`**: `["dist"]` (Ensures only the built library is published to npm)
- **`private`**: `false` (Allows publishing)

### 2. Styles

We use **CSS Modules** (`Calendar.module.css`) for scoped properties. During the build, `tsup` extracts these styles into a single `index.css` file, making it easy for consumers to import the default theme.

## 💻 Development Commands

| Command | Description |
|---------|-------------|
| `npm start` | Starts the demo app (with hot reloading) |
| `npm run build-lib` | **Builds the library** into `dist/` |
| `npm test` | Runs the test suite |
| `npm run build` | Builds the *demo app* (not the library) |

## � Testing

The library includes comprehensive tests using **React Testing Library**.

```bash
npm test
```

- **30+ tests** covering rendering, logic, and accessibility.
- Tests are located alongside components in `src/lib`.

