# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev        # Development server on http://localhost:3000
npm run build      # Production build
npm run start      # Production server
npm run lint       # Run ESLint
```

## Architecture Overview

### Tech Stack
- **Next.js 12.3.0** with React 18.2.0 (Pages Router)
- **JavaScript** (ES6+) - No TypeScript
- **Styling**: Custom CSS + SCSS in `/public/style/`
- **Animations**: Typed.js, Parallax.js, Jarallax, Swiper, custom cursor
- **jQuery** for DOM manipulation alongside React

### Project Structure

```
pages/                  # Next.js pages (file-based routing)
├── index.js           # Homepage with hero section
├── work.js            # Portfolio showcase
├── work_single*.js    # Individual project details (1-6)
├── resume.js          # CV/Resume page
├── contacts.js        # Contact form page
└── api/               # API routes

src/
├── components/        # React components
│   ├── ContactSection.js  # Contact form with honeypot
│   ├── TypingAnimation.js # Typing effect component
│   └── popup/         # Modal components
├── layout/           
│   ├── Layout.js     # Main wrapper (Header + Footer)
│   └── Header.js     # Navigation with mobile menu
└── utils.js          # cursor(), parallax(), sticky nav functions
```

### Key Architectural Patterns

1. **Hybrid jQuery/React**: Legacy jQuery animations coexist with React components. When modifying animations or DOM interactions, check if jQuery is already handling it in `utils.js`.

2. **Animation System**: Multiple animation libraries loaded globally. Cursor effects and parallax are initialized in `utils.js` and called from `Layout.js`.

3. **Work Items**: Portfolio items are hardcoded across multiple files:
   - Gallery grid in `work.js`
   - Individual detail pages `work_single[1-6].js`
   - Images in `/public/images/work/`

4. **Contact Form**: 
   - Component: `src/components/ContactSection.js`
   - Includes honeypot field for spam protection
   - Form submission handled client-side

5. **Global Scripts**: Many libraries loaded via CDN in `_document.js` and initialized in `Layout.js` useEffect.

### Development Considerations

- **No TypeScript**: Project uses plain JavaScript
- **No CSS Modules**: Global CSS files in `/public/css/`
- **Mixed Animation Approaches**: Both React state and jQuery DOM manipulation
- **Google Tag Manager**: Integrated in `_app.js` (ID: G-NSBRY4KZ0S)
- **Mobile Navigation**: Hamburger menu with overlay in `Header.js`

### Common Tasks

**Adding Portfolio Items**: Requires updates to both `work.js` gallery and creating new `work_single*.js` page.

**Modifying Animations**: Check both React components and jQuery functions in `utils.js`.

**Styling Changes**: Edit CSS files directly in `/public/css/` or SCSS sources in `/public/style/`.