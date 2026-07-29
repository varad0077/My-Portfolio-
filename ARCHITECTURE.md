# 🏗️ Architecture & Technical Overview

This document provides a breakdown of the architecture, visual design system, and custom physics implementation behind the Studio Ghibli developer portfolio.

---

## 📁 Codebase Directory Layout

```
src/
├── components/
│   ├── GhibliCanvas.jsx    # HTML5 Canvas animation loop (Fireflies, Leaves, Kodama, Soot Sprites)
│   ├── AudioPlayer.jsx     # Web Audio API ambient chime synthesizer
│   ├── ScrollReveal.jsx    # IntersectionObserver fade-up scroll reveal wrapper
│   ├── Hero.jsx            # Hero section with animated text reveal & counter statistics
│   ├── Navbar.jsx          # Glassmorphism header & full-screen mobile menu overlay
│   ├── About.jsx           # Engineering bio & philosophy cards
│   ├── TechGarden.jsx      # Categorized skills matrix & level progress bars
│   ├── Projects.jsx        # Interactive showcase grid with hover zoom
│   ├── ProjectModal.jsx    # Detailed case study inspector modal
│   ├── Timeline.jsx        # Vertical milestone timeline
│   ├── Contact.jsx         # Contact form & copy-to-clipboard email utility
│   ├── Footer.jsx          # Minimalist footer with quick links & back-to-top button
│   └── SocialIcons.jsx     # SVG social brand icons
├── data/
│   └── portfolioData.js    # Single source of truth for portfolio content & projects
├── App.jsx                 # Main layout wrapper
├── main.jsx                # React DOM entry point
└── index.css               # Design system tokens, keyframe animations, & utility classes
```

---

## 🎨 Design System System Tokens

```css
--bg-primary: #0F1720;      /* Deep Midnight Navy */
--bg-secondary: #18242D;    /* Elevated Surface Navy */
--bg-card: rgba(24, 36, 45, 0.75);
--accent-primary: #8BC5A4;  /* Soft Sage Green */
--accent-secondary: #C9D8C5;/* Soft Muted Sage */
--text-main: #F5F5F3;       /* Off-White */
--text-muted: #A3B0A5;      /* Muted Sage / Grey */
```

---

## 🍃 Canvas Particle Physics (`GhibliCanvas.jsx`)

The canvas runs on a high-DPI scaled `requestAnimationFrame` loop maintaining 60FPS:
1. **Fireflies**: 25 glowing particles with radial gradient halos and continuous sine-wave brightness modulation.
2. **Leaves**: 8 floating leaf elements rendered with SVG-like canvas paths, center/side veins, and horizontal drift sine physics.
3. **Kodama Spirits**: 5 tree spirits rendered with head tilts and asymmetric eye paths.
4. **Susuwatari Soot Sprites**: Fuzzy outline blobs with animated eye blink state timers.
