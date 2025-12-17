# Custom SCSS Framework

A comprehensive, modular SCSS framework for building modern web applications.

## Structure

```
src/styles/
├── _variables.scss    # Variables (colors, typography, spacing, etc.)
├── _mixins.scss       # Reusable mixins
├── _base.scss         # Base styles and resets
├── _components.scss   # Component styles (buttons, cards, etc.)
├── _utilities.scss    # Utility classes
└── main.scss          # Main entry point
```

## Usage

### Import in Components

```scss
// In your component SCSS file
@import '../styles/variables';
@import '../styles/mixins';

.my-component {
  @include card-base;
  padding: $spacing-6;
  background: $white;
  
  @include respond-to(md) {
    padding: $spacing-8;
  }
}
```

### Using Utility Classes

```jsx
// In your JSX
<div className="container">
  <button className="btn btn-primary btn-lg">
    Click Me
  </button>
  
  <div className="card">
    <div className="card-header">
      <h2 className="text-2xl font-bold">Title</h2>
    </div>
    <div className="card-body">
      <p className="text-gray-700">Content</p>
    </div>
  </div>
</div>
```

## Available Features

### Variables
- Colors (primary, secondary, grays, semantic)
- Typography (font sizes, weights, line heights)
- Spacing (0-20 scale)
- Border radius
- Shadows
- Breakpoints
- Transitions
- Z-index layers

### Mixins
- `@include respond-to($breakpoint)` - Responsive breakpoints
- `@include flex-center` - Flexbox centering
- `@include flex-between` - Space between
- `@include button-base` - Button base styles
- `@include card-base` - Card base styles
- `@include gradient-text` - Gradient text
- `@include gradient-bg` - Gradient background
- `@include truncate` - Text truncation
- `@include line-clamp($lines)` - Multi-line clamp
- `@include custom-scrollbar` - Custom scrollbar
- `@include focus-visible` - Focus styles
- `@include container($max-width)` - Container

### Components
- `.btn` - Buttons (primary, secondary, outline, ghost)
- `.card` - Cards with header/body/footer
- `.badge` - Badges (primary, success, error, warning, info)
- `.alert` - Alerts (success, error, warning, info)
- `.form-group` - Form styling
- `.container` - Responsive container
- `.grid` - Grid system
- `.flex` - Flexbox utilities

### Utilities
- Spacing: `.m-{size}`, `.p-{size}`, `.mt-{size}`, etc.
- Text: `.text-{size}`, `.text-{weight}`, `.text-{color}`
- Background: `.bg-{color}`, `.bg-gradient`
- Border: `.border`, `.rounded-{size}`
- Shadow: `.shadow-{size}`
- Display: `.d-{type}`
- Width/Height: `.w-{size}`, `.h-{size}`
- Position: `.position-{type}`
- Z-index: `.z-{value}`
- Overflow: `.overflow-{type}`
- Cursor: `.cursor-{type}`
- Transition: `.transition-{type}`

## Customization

Edit `_variables.scss` to customize:
- Colors
- Typography
- Spacing scale
- Breakpoints
- And more!

## Examples

### Creating a Custom Component

```scss
@import '../styles/variables';
@import '../styles/mixins';

.custom-button {
  @include button-base;
  background: $primary-500;
  color: $white;
  
  &:hover {
    background: $primary-600;
  }
}
```

### Responsive Design

```scss
.my-element {
  padding: $spacing-4;
  
  @include respond-to(md) {
    padding: $spacing-6;
  }
  
  @include respond-to(lg) {
    padding: $spacing-8;
  }
}
```

### Using Grid

```scss
.grid-container {
  @include grid-auto(250px);
  
  @include respond-to(lg) {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

