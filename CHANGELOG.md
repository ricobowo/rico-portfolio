# Changelog — Rico Tri Wibowo Portfolio

All notable changes to this project will be documented here.
Format: `[vX.Y.Z] — YYYY-MM-DD` | Patch = bug fix · Minor = new feature · Major = redesign

---

## [v0.5.1] — 2026-04-05
### Fixed
- Timeline period column: changed fixed `90px` to `min-content` so dates never hide behind cards at any resolution
- About section: hidden photo placeholder (`display: none`) and collapsed to single-column layout
- Footer version badge: hidden from visitors (`display: none`) — version remains in sidebar, file headers, and CHANGELOG

---

## [v0.5.0] — 2026-04-05
### Added — First real content release
- **About**: Full professional bio (5+ yrs, 300+ test cases, 15+ projects, Bandung)
- **Stats**: Real numbers — 5+ Years, 15+ Projects Delivered, 300+ Test Cases Written
- **Experience**: 5 real positions added:
  - QA Engineer (Part-time) @ Rolling Glory — Nov 2024–Present
  - Administration Staff — Communication Studies @ Telkom University — Oct 2024–Present
  - Chief Operating Officer @ PSI Indonesia — Jul 2023–Present
  - Administration Staff — Research & Community Service @ Telkom University — Feb 2021–Nov 2024
  - Junior Project Manager @ Rolling Glory — Sep 2019–Nov 2020
- **Portfolio**: 6 real projects added (4 QA + 2 PM):
  - B7 Supersales, Bebeclub, Treasury, TADA Spin Wheel, RS Mitra Keluarga, Morinaga Platinum
- **Skills**: 5 real categories — QA, Project Management, Design & Multimedia, Web & Digital, Tools
- **Contact**: Real email (ricobowo10@gmail.com) and LinkedIn (rico-tri-wibowo)
- **CV link**: All Download CV buttons point to `/assets/Rico_Tri_Wibowo_CV.pdf`
- **Social icons**: Added portfolio (Wix) globe icon alongside email and LinkedIn
- **Meta description**: Updated with real professional summary

---

## [v0.4.0] — 2026-04-05
### Added — Rule 6: Version header in all code files
- Version header comment added to top of `index.html`, `styles.css`, `script.js`, `server.js`
- Table of Contents comment block added to `styles.css` and `script.js`

### Changed — Full redesign (Brittany Chiang + Jesse Showalter)
- **Layout**: Switched to CSS Grid (`260px 1fr`) — dark sidebar left, light content right
- **Sidebar**: Dark background (`#0D1B2A`), white text, accent blue nav active state
- **CSS Variables**: All hardcoded colors replaced with 18 CSS custom properties in `:root`
- **Nav active detection**: Replaced scroll event with `IntersectionObserver` (more performant)
- **Nav indicator**: Border-left `3px solid var(--accent)` animates on active section
- **Hero**: Retained headline + badge; added stats row (3 cards) below CTA buttons
- **Experience cards**: Removed box-shadow; hover uses border-left accent + background shift
- **Portfolio cards**: `border-radius: 12px`, `padding: 20px`, hover `translateY(-4px)` + border-left
- **Portfolio cards**: Added metrics row (small accent pills for key numbers)
- **Portfolio badges**: Color-coded per category (blue=QA, green=PM)
- **Skills section**: Rearranged to label-left + pills-right layout per row
- **Contact cards**: Hover uses border-left accent + `translateX(4px)` instead of shadow
- **Tags**: Unified pill style across all sections (`border-radius: 999px`, `12px font-size`)
- **Sidebar footer**: Added social icons, Download CV link, version badge `v0.4.0`
- **Mobile nav**: Dark navbar matching sidebar color scheme, updated drawer styling
- **Footer**: Light gray centered text with inline version badge

---

## [v0.3.1] — 2026-04-05
### Added
- Version header comment (Rule 6) added to `index.html`, `styles.css`, `script.js`
- `CHANGELOG.md`, `VERSION` file created
- Version badge in footer: `v0.3.0`

---

## [v0.3.0] — 2026-04-05
### Added
- Dynamic color theme switcher (Navy, Slate, Minimal)
- CSS custom properties for all colors
- localStorage theme persistence

---

## [v0.2.0] — 2026-04-05
### Added
- Color customization attempt (dynamic colors)

---

## [v0.1.0] — 2026-04-05
### Added
- Initial portfolio structure (HTML/CSS/JS, no frameworks)
- Sidebar navigation (About, Experience, Portfolio, Skills, Contact)
- Fixed sidebar layout — sticky left panel, scrollable right content
- Hero section with bold headline and CTA buttons
- About section with photo placeholder and stat cards
- Experience section with two-column timeline and hover effects
- Portfolio section with filter buttons (All / QA / PM) and project cards
- Skills section with four categorized tag groups
- Contact section with Email and LinkedIn cards
- Footer with copyright 2026
- Mobile-responsive layout with hamburger drawer
- IntersectionObserver-based active nav link highlighting
- `server.js` — zero-dependency Node.js static file server
- `.claude/launch.json` — dev server configuration
- Version badge in footer
