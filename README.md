# Business Application Framework

A technology-stack-agnostic framework for creating business applications from Figma mockups. This framework separates design systems from implementation, allowing flexible tech stack choices while maintaining consistent component building blocks.

## Philosophy

The framework uses a **"Lego approach"** where:
- **Design systems** define visual language independently from implementation
- **Core components** are technology-agnostic building blocks
- **Tech stack templates** provide scaffolding for different frameworks (React, Vue, Angular, Svelte, etc.)
- **Code generators** transform components into target tech stack code
- **GitHub Copilot** drives the heavy lifting for code generation, not Figma AI

## Project Structure

```
├── .github/                  # GitHub configuration and Copilot instructions
├── docs/                     # Research, architecture, and guidelines
├── design-systems/           # Decoupled design language definitions
│   ├── material-design/      # Material Design implementation
│   ├── bootstrap/            # Bootstrap-based design
│   └── custom/               # Custom brand design systems
├── mockups/                  # Figma exports and reference designs
├── core-components/          # Technology-agnostic component specs
│   ├── form-components/      # Inputs, selects, textareas, etc.
│   ├── layout-components/    # Grids, containers, flexbox
│   ├── navigation-components/# Headers, navbars, sidebars
│   ├── display-components/   # Cards, modals, alerts, etc.
│   └── utilities/            # Buttons, badges, spinners, etc.
├── tech-stacks/              # Implementation templates
│   ├── react/                # React + TypeScript scaffold
│   ├── vue/                  # Vue 3 scaffold
│   ├── angular/              # Angular scaffold
│   └── svelte/               # Svelte scaffold
├── generators/               # Code generation tools
│   ├── component-generator/  # Generate components from specs
│   ├── design-system-mapper/ # Map design tokens to code
│   └── template-renderer/    # Render components for target stack
├── prototypes/               # Proof-of-concept implementations
└── tools/                    # Utility scripts and helpers
```

## Key Features

- **Design System Separation**: Swap design systems without changing component logic
- **Stack Agnostic**: Same components work across React, Vue, Angular, Svelte
- **Modular Components**: Build complex UIs from simple building blocks
- **Generator-Driven**: GitHub Copilot generates implementation code
- **Specification-Based**: Components defined by specs, not framework code
- **Frontend Focus**: Currently targeting UI/frontend layer

## Getting Started

1. **Define Core Components**: Create component specifications in `/core-components`
2. **Choose Design System**: Select or create design system in `/design-systems`
3. **Setup Tech Stack**: Pick implementation framework in `/tech-stacks`
4. **Configure Generators**: Set up code generators to map specs to code
5. **Build Prototypes**: Test with real Figma designs in `/prototypes`

## Next Steps (Frontend Phase)

- [ ] Document component specification schema
- [ ] Define core component building blocks (forms, layouts, navigation, display)
- [ ] Create design system abstraction layer
- [ ] Build code generator for target tech stacks
- [ ] Create prototype with real Figma mockups
- [ ] Document GitHub Copilot usage patterns

## Future Phases

- Backend microservices framework (separate project)
- API contract specifications
- State management patterns
- Testing frameworks and templates
