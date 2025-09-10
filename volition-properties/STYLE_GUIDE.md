# Volition Properties - Style Guide

## Design System Overview

This style guide documents the design system for Volition Properties, a luxury real estate investment advisory website. The design emphasizes elegance, trustworthiness, and exclusivity while maintaining approachability.

## Color Palette

### Primary Colors
- **Primary Dark**: `#1a1a2e` - Main brand color, used for headers and primary text
- **Primary Light**: `#2a2a4e` - Lighter variant for gradients and hover states
- **Secondary Gold**: `#d4af37` - Accent color for luxury elements and highlights
- **Accent Blue**: `#4a90e2` - Call-to-action buttons and interactive elements
- **Accent Blue Light**: `#6ba3f0` - Hover states for blue elements

### Neutral Colors
- **White**: `#ffffff` - Primary background color
- **Gray 50**: `#fafafa` - Light background sections
- **Gray 100**: `#f5f5f5` - Card backgrounds
- **Gray 200**: `#e5e5e5` - Borders and dividers
- **Gray 300**: `#d4d4d4` - Input borders
- **Gray 400**: `#a3a3a3` - Placeholder text
- **Gray 500**: `#737373` - Secondary text
- **Gray 600**: `#525252` - Body text
- **Gray 700**: `#404040` - Emphasis text
- **Gray 800**: `#262626` - Headings
- **Gray 900**: `#171717` - Primary text

## Typography

### Font Family
- **Primary Font**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

### Font Weights
- **Light**: 300 - Large headings, hero titles
- **Normal**: 400 - Body text, paragraphs
- **Medium**: 500 - Subheadings, card titles
- **Semibold**: 600 - Button text, emphasis
- **Bold**: 700 - Strong emphasis (rarely used)

### Font Sizes
- **6xl**: 3.75rem (60px) - Hero headlines
- **5xl**: 3rem (48px) - Page titles
- **4xl**: 2.25rem (36px) - Section titles
- **3xl**: 1.875rem (30px) - Card headings
- **2xl**: 1.5rem (24px) - Subheadings
- **xl**: 1.25rem (20px) - Large text
- **lg**: 1.125rem (18px) - Lead paragraphs
- **base**: 1rem (16px) - Body text
- **sm**: 0.875rem (14px) - Small text, captions
- **xs**: 0.75rem (12px) - Labels, tags

### Letter Spacing
- **Tighter**: -0.05em - Large headings
- **Tight**: -0.025em - Section titles
- **Normal**: 0em - Body text
- **Wide**: 0.025em - Small caps
- **Wider**: 0.05em - Buttons
- **Widest**: 0.1em - Tags, badges

## Spacing System

### Base Unit
The spacing system uses a base unit of 0.25rem (4px) with consistent multiples:

- **1**: 0.25rem (4px)
- **2**: 0.5rem (8px)
- **3**: 0.75rem (12px)
- **4**: 1rem (16px)
- **5**: 1.25rem (20px)
- **6**: 1.5rem (24px)
- **8**: 2rem (32px)
- **10**: 2.5rem (40px)
- **12**: 3rem (48px)
- **16**: 4rem (64px)
- **20**: 5rem (80px)
- **24**: 6rem (96px)
- **32**: 8rem (128px)

## Border Radius

### Radius Scale
- **sm**: 0.125rem (2px) - Small elements
- **base**: 0.25rem (4px) - Input fields
- **md**: 0.375rem (6px) - Buttons
- **lg**: 0.5rem (8px) - Cards
- **xl**: 0.75rem (12px) - Feature cards
- **2xl**: 1rem (16px) - Hero sections
- **3xl**: 1.5rem (24px) - Large cards
- **full**: 9999px - Circular elements

## Shadows

### Shadow System
- **sm**: Subtle shadow for small elements
- **base**: Default card shadow
- **md**: Medium elevation
- **lg**: High elevation cards
- **xl**: Floating elements
- **2xl**: Modal overlays
- **inner**: Inset shadows for pressed states

### Neumorphic Shadows
Special neumorphic effects for buttons and interactive elements:
- **Light**: `20px 20px 60px #bebebe, -20px -20px 60px #ffffff`
- **Dark**: `20px 20px 60px #0f0f1f, -20px -20px 60px #25253d`
- **Inset**: `inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff`

### Glassmorphic Effects
- **Background**: `rgba(255, 255, 255, 0.25)`
- **Border**: `rgba(255, 255, 255, 0.18)`
- **Backdrop Filter**: `blur(16px)`
- **Shadow**: `0 8px 32px 0 rgba(31, 38, 135, 0.37)`

## Icons

### Icon Library
**Phosphor Icons** - Light weight variant for consistent, minimal aesthetic

### Common Icons
- **Navigation**: ph-list, ph-x
- **Actions**: ph-arrow-right, ph-paper-plane-tilt
- **Features**: ph-trend-up, ph-gear, ph-house, ph-chart-bar
- **Contact**: ph-phone, ph-envelope, ph-map-pin
- **Social**: ph-instagram-logo, ph-linkedin-logo, ph-twitter-logo
- **UI**: ph-plus, ph-minus, ph-calendar, ph-magnifying-glass

## Component Patterns

### Buttons

#### Primary Button
- **Background**: Linear gradient from accent blue to light blue
- **Padding**: 16px 24px
- **Border Radius**: 12px
- **Font Weight**: Medium (500)
- **Shadow**: Large elevation with blue glow on hover
- **Hover**: Slight lift (-2px transform) with enhanced shadow

#### Secondary Button
- **Background**: White with gray border
- **Hover**: Accent blue background with white text
- **Size**: 48px x 48px for icon buttons

### Cards

#### Feature Cards
- **Background**: White
- **Border Radius**: 16px
- **Padding**: 32px
- **Shadow**: Large elevation
- **Hover**: Lift effect (-8px transform) with enhanced shadow
- **Border**: 1px solid gray-200, changes to accent blue on hover

#### Glassmorphic Cards
- **Background**: Semi-transparent white (25% opacity)
- **Backdrop Filter**: 16px blur
- **Border**: Semi-transparent white border
- **Shadow**: Specialized glass shadow

### Forms

#### Input Fields
- **Height**: 48px
- **Padding**: 16px horizontal
- **Border**: 1px solid gray-300
- **Border Radius**: 8px
- **Focus**: 2px accent blue border with subtle shadow
- **Labels**: Floating labels that animate on focus

#### Validation States
- **Error**: Red border with error message below
- **Success**: Green border
- **Loading**: Opacity reduced with spinner

### Navigation

#### Desktop Navigation
- **Height**: 80px
- **Background**: Semi-transparent white with blur effect
- **Scroll Effect**: Increased opacity and shadow on scroll
- **Links**: Underline animation on hover

#### Mobile Navigation
- **Burger Menu**: Slides in from right
- **Background**: High-opacity white with blur
- **Animation**: Smooth slide transition

## Animations

### Timing Functions
- **Fast**: 150ms ease - Quick feedback
- **Normal**: 250ms ease - Standard transitions
- **Slow**: 350ms ease - Page transitions
- **Bounce**: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) - Playful elements

### Common Animations

#### Page Load
- **Fade In**: 0 to 100% opacity over 700ms
- **Slide Up**: Content slides up 30px while fading in

#### Scroll Animations
- **Threshold**: 10% of element visible
- **Root Margin**: -50px bottom margin
- **Stagger**: 100ms delay between elements

#### Hover Effects
- **Cards**: -4px to -8px lift with enhanced shadow
- **Buttons**: -2px lift with glow effect
- **Icons**: Scale 1.1 with rotation for playful elements

## Responsive Breakpoints

### Breakpoint System
- **sm**: 640px - Small tablets
- **md**: 768px - Tablets
- **lg**: 1024px - Small desktops
- **xl**: 1280px - Large desktops
- **2xl**: 1536px - Extra large screens

### Container Widths
- **sm**: 640px max-width
- **md**: 768px max-width
- **lg**: 1024px max-width
- **xl**: 1280px max-width
- **2xl**: 1400px max-width

### Mobile-First Approach
All styles are written mobile-first, with larger screen styles added via min-width media queries.

## Accessibility

### WCAG Compliance
- **Level**: AA compliance target
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus Indicators**: Visible 2px outline for all interactive elements
- **Alt Text**: Required for all images
- **Semantic HTML**: Proper heading hierarchy and landmark usage

### Reduced Motion
- **Media Query**: `@media (prefers-reduced-motion: reduce)`
- **Behavior**: Disables animations and reduces transition durations to 1ms

## Performance Considerations

### CSS Optimization
- **Critical CSS**: Inlined styles for above-the-fold content
- **Non-critical CSS**: Loaded asynchronously
- **CSS Variables**: Used for theming and consistency

### Image Optimization
- **Formats**: WebP with JPEG fallbacks
- **Responsive Images**: Multiple sizes with srcset
- **Lazy Loading**: Implemented for below-the-fold images

### JavaScript
- **Bundling**: Minified and compressed
- **Code Splitting**: Separate bundles for different page types
- **Progressive Enhancement**: Core functionality works without JavaScript

## Content Guidelines

### Tone of Voice
- **Professional yet approachable**
- **Confident without being boastful**
- **Educational and informative**
- **Luxurious but not pretentious**

### Writing Style
- **Concise and clear**
- **Action-oriented**
- **Benefits-focused**
- **Industry expertise demonstrated**

### Call-to-Action Guidelines
- **Clear value proposition**
- **Specific action words** (Schedule, Download, Learn, Contact)
- **Sense of urgency when appropriate**
- **Trust indicators included**

## Technical Implementation

### CSS Architecture
- **Variables**: All design tokens stored in CSS custom properties
- **Components**: Modular component-based CSS
- **Layout**: CSS Grid and Flexbox for layouts
- **Utilities**: Minimal utility classes for common patterns

### File Structure
```
css/
├── variables.css    # Design tokens and CSS custom properties
├── global.css       # Base styles, typography, utilities
├── components.css   # Component-specific styles
└── layout.css       # Layout and section styles
```

### Browser Support
- **Modern browsers**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **Progressive enhancement**: Fallbacks for older browsers
- **Feature detection**: CSS @supports queries for advanced features

This style guide serves as the single source of truth for the Volition Properties design system, ensuring consistency across all pages and components.