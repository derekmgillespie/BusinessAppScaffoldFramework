# Code Generators

Tools that transform component specifications into target tech stack code.

## Generator Components

### 1. Component Generator
Takes a component spec and generates code for target framework.

**Input**: Component specification (JSON/YAML)
**Output**: Framework-specific component code

### 2. Design System Mapper
Converts design tokens to framework-specific theme/style code.

**Input**: Design system definition
**Output**: CSS, SCSS, Tailwind, styled-components, etc.

### 3. Template Renderer
Renders component templates with design system applied.

**Input**: Component spec + Design system + Tech stack
**Output**: Complete, styled component code

## Architecture

```
generators/
├── component-generator/
│   ├── index.js
│   ├── templates/         # Per-framework templates
│   └── utils/
├── design-system-mapper/
│   ├── index.js
│   ├── token-parser/
│   └── output-formatters/
├── template-renderer/
│   ├── index.js
│   └── helpers/
└── README.md
```

## Usage Flow

```
Figma Mockup
    ↓
Component Specs (JSON)
    ↓
[Component Generator] + [Design System] + [Tech Stack Template]
    ↓
Generated Framework Code
    ↓
Code Review + GitHub Copilot Refinement
    ↓
Production Component
```

## GitHub Copilot Integration

Generators produce **scaffolding code** that GitHub Copilot can then refine:

1. Generator creates initial component structure
2. Copilot adds business logic and enhancements
3. Copilot generates hooks, state management, validation
4. Copilot creates tests and documentation

This approach combines:
- **Generators**: Fast, consistent scaffolding
- **Copilot**: Intelligent enhancements and logic

## Generator Development

Each generator should:
- Be framework-agnostic where possible
- Support multiple output formats
- Produce readable, idiomatic code
- Include configuration options
- Have clear documentation
- Be testable with sample specs

## Quickstart: Generate React Components

Generate a component from a core spec into the React stack. Outputs a `.tsx` component and a `.css` file under `tech-stacks/react/`.

Examples:

```bash
node generators/component-generator/index.js core-components/specs/components/Button.json react material-design

node generators/component-generator/index.js core-components/specs/components/TextInput.json react material-design
```

Outputs look like:
- `tech-stacks/react/components/Button.tsx`
- `tech-stacks/react/styles/Button.css`

If you see "Stack not yet implemented", only React is currently supported for generation — add templates for other stacks next.
