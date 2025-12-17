# CSS/SCSS Architecture Documentation

## Overview
This project follows the **7-1 SCSS Architecture Pattern** combined with **CSS Modules** for component-scoped styles.

## Directory Structure

```
src/
├── styles/                          # Global styles
│   ├── abstracts/                   # Variables, mixins, functions
│   │   ├── _variables.scss         # Colors, typography, spacing, etc.
│   │   ├── _mixins.scss            # Reusable mixins
│   │   └── _functions.scss         # Utility functions
│   ├── base/                        # Base styles
│   │   ├── _reset.scss             # CSS reset
│   │   ├── _typography.scss        # Typography styles
│   │   └── _forms.scss            # Form base styles
│   ├── components/                  # Global component styles
│   │   ├── _buttons.scss           # Button component
│   │   └── _cards.scss             # Card component
│   ├── layout/                      # Layout styles
│   │   └── _container.scss         # Container layout
│   └── main.scss                    # Main entry point
│
├── components/                      # React components
│   └── ComponentName/
│       ├── ComponentName.jsx       # Component logic
│       ├── ComponentName.module.scss # Component styles (CSS Modules)
│       └── index.js                 # Export file
│
└── pages/                           # Page components
    └── PageName/
        ├── PageName.jsx             # Page logic
        ├── PageName.module.scss     # Page styles (CSS Modules)
        └── index.js                 # Export file
```

## Architecture Principles

### 1. **7-1 Pattern**
- **abstracts/**: Non-outputting SCSS files (variables, mixins, functions)
- **base/**: Foundational styles (reset, typography, forms)
- **components/**: Reusable UI components (buttons, cards)
- **layout/**: Layout-related styles (container, grid)
- **pages/**: Page-specific styles (if needed globally)
- **themes/**: Theme variations (if needed)
- **vendors/**: Third-party styles (if needed)

### 2. **CSS Modules**
- Each component/page has its own `.module.scss` file
- Styles are scoped to the component
- No global style pollution
- Better maintainability

### 3. **BEM Naming Convention**
- Block: `.card`
- Element: `.card__header`
- Modifier: `.card--large`

## Usage Guidelines

### Importing in Components

```scss
// ComponentName.module.scss
@import '../../styles/abstracts/variables';
@import '../../styles/abstracts/mixins';

.component {
  @include card-base;
  padding: $spacing-6;
  
  &__header {
    margin-bottom: $spacing-4;
  }
  
  &--large {
    padding: $spacing-8;
  }
}
```

### Using in JSX

```jsx
import styles from './ComponentName.module.scss';

function ComponentName() {
  return (
    <div className={styles.component}>
      <div className={styles.component__header}>Header</div>
    </div>
  );
}
```

### Global Styles
- Use `styles/` folder for global styles
- Import in `main.scss`
- Use for base typography, reset, etc.

### Component Styles
- Use CSS Modules (`.module.scss`) for component-specific styles
- Keeps styles scoped and maintainable
- Prevents style conflicts

## Best Practices

1. **Always use CSS Modules for components/pages**
2. **Import variables and mixins from abstracts**
3. **Use BEM naming in CSS Modules**
4. **Keep global styles minimal**
5. **Use mixins for repeated patterns**
6. **Follow the 7-1 folder structure**
7. **One component = one folder**

## Migration Guide

### Old Structure
```
Component.jsx
Component.css
```

### New Structure
```
Component/
  ├── Component.jsx
  ├── Component.module.scss
  └── index.js
```

## Benefits

1. **Scalability**: Easy to add new components
2. **Maintainability**: Clear structure and organization
3. **Performance**: CSS Modules prevent style conflicts
4. **Reusability**: Mixins and variables promote DRY code
5. **Team Collaboration**: Clear conventions for all developers

