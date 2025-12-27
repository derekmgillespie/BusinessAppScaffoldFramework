# Core Components

Technology-agnostic component specifications that serve as building blocks for the framework.

## Philosophy

Core components are:
- **Specification-first**: Defined by JSON/YAML specs, not code
- **Technology-agnostic**: No framework-specific code
- **Composable**: Can be combined to create complex UIs
- **Themeable**: Styled by external design systems
- **Reusable**: Same spec generates code for all tech stacks

## Categories

### Form Components
- TextInput
- TextArea
- Select/Dropdown
- Checkbox
- Radio
- Toggle
- DatePicker
- TimePicker

### Layout Components
- Container
- Grid
- Flex
- Stack
- Spacer

### Navigation Components
- Header
- NavigationBar
- Sidebar
- Breadcrumb
- Tabs

### Display Components
- Card
- Modal/Dialog
- Alert
- Toast/Notification
- Badge
- Chip

### Utility Components
- Button
- Link
- Icon
- Spinner/Loader
- Divider
- Tooltip

## Component Specification Format

Each component is defined by a spec file:

```json
{
  "name": "Button",
  "category": "utility",
  "description": "Interactive element that triggers an action",
  "props": {
    "label": { "type": "string", "required": true },
    "variant": { "type": "enum", "values": ["primary", "secondary", "danger"] },
    "size": { "type": "enum", "values": ["small", "medium", "large"] },
    "disabled": { "type": "boolean", "default": false },
    "onClick": { "type": "function" }
  },
  "events": ["onClick"],
  "accessibility": ["aria-label", "role"],
  "usage": "Use buttons for actionable items"
}
```

## Development Process

1. **Define Component Spec**: Create JSON specification
2. **Validate Schema**: Ensure spec is valid
3. **Create Generator Template**: Add template for each tech stack
4. **Generate Code**: Use generator to create implementation
5. **Test Across Stacks**: Verify in React, Vue, Angular, Svelte
