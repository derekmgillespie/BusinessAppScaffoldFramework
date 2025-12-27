# Business Application Framework - Project Instructions

## Project Overview
A technology-stack-agnostic framework for building business applications from Figma mockups. The framework decouples design systems from implementation, enabling consistent UI components across different tech stacks (React, Vue, Angular, Svelte, etc.).

## Architecture Philosophy
**"Lego Approach"**: Build complex UIs from modular, reusable building blocks

- **Design Systems**: Independent visual language definitions (can be swapped)
- **Core Components**: Technology-agnostic component specifications
- **Tech Stack Templates**: Scaffolding for different frameworks
- **Code Generators**: Transform specs into target framework code
- **GitHub Copilot**: Drives most code generation (not Figma AI)

## Project Structure
- `/docs` - Architecture, guidelines, and research
- `/design-systems/` - Decoupled design language definitions
- `/mockups/` - Figma exports and reference designs
- `/core-components/` - Technology-agnostic component specifications
- `/tech-stacks/` - Implementation templates (React, Vue, Angular, Svelte)
- `/generators/` - Code generation tools
- `/prototypes/` - Proof-of-concept implementations
- `/tools/` - Utility scripts

## Development Guidelines
- Separate design system from implementation logic
- Define components as specs first, then generate code
- Support multiple tech stacks with same component definitions
- Use GitHub Copilot for code generation
- Keep components modular and composable
- Document both specification and generated code patterns
- Focus on frontend implementation first

## Current Phase
**Frontend Focus**: Building the component framework and code generators for UI layer

## Quick Commands

### Restart Vite Dev Server
Run from workspace root:
```powershell
.\restart-vite.ps1
```
This script kills any hanging Node processes and restarts the Vite dev server for the React demo at http://localhost:5173

### Start Vite Dev Server
```powershell
.\start-vite.ps1
```
