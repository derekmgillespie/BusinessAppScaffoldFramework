# Design Systems

This directory contains decoupled design language definitions that can be applied to the framework independently.

## Purpose

Design systems define:
- Color palettes and themes
- Typography specifications
- Spacing and sizing scales
- Component styling rules
- Icons and assets
- Interaction patterns

The key principle is that design systems are **separate from component logic**, allowing different visual languages to be applied without changing implementation.

## Structure

Each design system should be self-contained:

```
design-systems/
├── material-design/        # Material Design 3 implementation
│   ├── colors.json
│   ├── typography.json
│   ├── spacing.json
│   ├── components.json     # Design system component specs
│   └── README.md
├── bootstrap/              # Bootstrap-based design
├── custom/                 # Custom brand design systems
└── README.md
```

## Design System Specification

Each design system should include:

1. **Design Tokens** (colors, fonts, sizes, spacing)
2. **Component Styling** (how core components should look)
3. **Theme Variables** (values that map to code variables)
4. **Documentation** (guidelines and usage)

## Usage

Generators will read the design system definition and apply it when rendering components for a specific tech stack.
