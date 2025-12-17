# Quick Reference Guide

## Importing Styles in Components

```scss
// Component.module.scss
@import '../../styles/abstracts/variables';
@import '../../styles/abstracts/mixins';

.myComponent {
  // Use variables
  padding: $spacing-6;
  color: $primary-500;
  
  // Use mixins
  @include flex-center;
  @include respond-to(md) {
    padding: $spacing-8;
  }
}
```

## Available Variables

### Colors
- `$primary-50` through `$primary-900`
- `$secondary-50` through `$secondary-900`
- `$gray-50` through `$gray-900`
- `$white`, `$black`
- `$success`, `$error`, `$warning`, `$info`

### Spacing
- `$spacing-0` through `$spacing-20`
- Use: `padding: $spacing-4;`

### Typography
- `$font-size-xs` through `$font-size-5xl`
- `$font-weight-light` through `$font-weight-bold`
- `$line-height-tight`, `$line-height-normal`, `$line-height-relaxed`

### Breakpoints
- `$breakpoint-sm`, `$breakpoint-md`, `$breakpoint-lg`, `$breakpoint-xl`, `$breakpoint-2xl`

## Available Mixins

### Responsive
```scss
@include respond-to(md) {
  // Styles for medium screens and up
}
```

### Layout
```scss
@include flex-center;      // Center content
@include flex-between;    // Space between
@include flex-column;     // Column layout
@include grid-auto(250px); // Auto grid
@include container(1200px); // Container
```

### Components
```scss
@include button-base;     // Button styles
@include card-base;        // Card styles
```

### Effects
```scss
@include gradient-text;    // Gradient text
@include gradient-bg;      // Gradient background
@include truncate;         // Text truncation
@include line-clamp(3);    // Multi-line clamp
@include focus-visible;    // Focus styles
```

## CSS Modules Usage

```jsx
import styles from './Component.module.scss';

<div className={styles.container}>
  <h1 className={styles.title}>Title</h1>
</div>
```

## BEM Naming in CSS Modules

```scss
.card {
  &__header { }  // .card__header
  &__body { }    // .card__body
  &--large { }   // .card--large
}
```

## Component Structure Template

```
ComponentName/
  ├── ComponentName.jsx
  ├── ComponentName.module.scss
  └── index.js
```

