# Product Landing Vibe

Modern product showcase landing page with interactive gallery and smooth UX interactions.

## Project Overview

This is a production-ready landing page demonstrating modern web development practices and a professional GitHub workflow with feature branches, pull requests, and selective merge strategy.

## Features

### Core Features (v1.0)
- Responsive hero section with CTA
- Product showcase cards with icons
- Benefits section with key advantages
- Customer testimonials
- Pricing tiers (Free / Pro / Enterprise)
- Social footer with links
- Mobile-first responsive design

### Interactive Gallery (Merged)
- Product gallery with 6 showcase images
- Category filters (All / UI / API / Mobile)
- Lightbox overlay with full-size images
- Next/Previous navigation
- Image counter display
- Full keyboard support (Arrow keys, Escape)
- Smooth animations and transitions

## Tech Stack

- HTML5 (semantic markup)
- CSS3 (Flexbox/Grid)
- Vanilla JavaScript

## Project Structure

```
/
├── index.html          # Main landing page
├── styles.css          # All styles
├── app.js              # JavaScript functionality
├── assets/
│   ├── images/         # Product images
│   └── icons/          # Section icons
└── README.md           # Documentation
```

## Live Demo

🚀 [View Live Site](https://vahegasparyan-collab.github.io/product-landing-vibe)

## Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/vahegasparyan-collab/product-landing-vibe.git
   ```

2. Navigate to the project directory:
   ```bash
   cd product-landing-vibe
   ```

3. Open `index.html` in your browser
   - No build step required
   - Pure HTML/CSS/JS
   - No dependencies needed

## Development Workflow

This project demonstrates a real-world GitHub workflow:

### Branches
- `main` - Stable production code (v1.0 + merged features)
- `feature/ux-enhancements` - Sticky navbar, smooth scroll, CTA modal (PR #1 - Open)
- `feature/showcase-interactions` - Gallery with lightbox (PR #2 - Merged ✓)

### Pull Requests
- **PR #1**: UX Enhancements - Postponed for next iteration
- **PR #2**: Gallery Interactions - Merged into main

### Workflow Strategy
1. Create feature branch from `main`
2. Implement features with clean commits
3. Push branch and open Pull Request
4. Code review and testing
5. Merge with squash strategy
6. Delete merged branch

## Key Features by Section

### Gallery Section
- **Filtering**: Toggle between All, UI, API, and Mobile categories
- **Lightbox**: Click any image to view full-size
- **Navigation**: Use arrow keys or on-screen buttons
- **Responsive**: 2 columns on mobile, 3 on desktop

### Design System
- **Colors**: Indigo (#6366f1) and Purple (#8b5cf6) accent colors
- **Typography**: System fonts for optimal performance
- **Spacing**: Consistent 4rem section padding
- **Animations**: Smooth CSS transitions throughout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading images
- CSS animations (GPU accelerated)
- No external dependencies
- Minimal JavaScript footprint

## Team

Vahe Gasparyan ([@vahegasparyan-collab](https://github.com/vahegasparyan-collab))

## License

MIT License - feel free to use this project for learning purposes.
