# React Demo

Isolated demo application that imports generated components from `tech-stacks/react` to validate the framework.

## Setup

From this directory:

```bash
npm install
npm run dev
```

Open http://localhost:5173 to see the generated components in action.

## Architecture

- **Framework components**: `../../tech-stacks/react/components/`
- **Demo app**: `prototypes/react-demo/` (this directory)
- Components are imported via `@framework/*` alias configured in vite.config.ts

## Components Demonstrated

- Button
- TextInput
- Select
- Checkbox

All generated from core component specs using the framework generator.
