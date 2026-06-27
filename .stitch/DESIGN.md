# Satria Mandiri Forklift - Design System Specification

## 1. Concept & Vision

**Satria Mandiri Forklift** adalah platform B2B untuk layanan rental forklift diesel dan crane di Bandung Raya. Website ini harus memancarkan kesan **profesional, terpercaya, dan responsif cepat** - kualitas yang diharapkan oleh kontraktor dan manajer operasional ketika membutuhkan alat berat dalam situasi darurat atau proyek terjadwal.

Visual direction: **"Industrial Trust"** - kombinasi estetika heavy-duty dengan sentuhan modern yang membedakan dari kompetitor yang umumnya memiliki website kuno. Fokus pada speed-of-response dan reliability.

---

## 2. Design Language

### Aesthetic Direction
**Reference:** Industrial Equipment meets Modern B2B SaaS. Contoh inspiratif: Caterpillar.com, Komatsu.com, namun dengan warmth Indonesia yang lebih friendly.

**Mood Keywords:** Professional, Trustworthy, Fast-Response, Heavy-Duty, Accessible, Indonesian-Warm

### Color Palette

```
PRIMARY TOKENS:
├── brand-navy:      #0F172A   (Deep Industrial Navy - headers, primary text)
├── brand-navy-light: #1E293B  (Lighter navy for secondary elements)
├── accent-orange:   #EA580C   (Action Orange - CTAs, highlights, urgency)
├── accent-orange-dark: #C2410C (Hover state for orange)
├── accent-orange-light: #FFEDD5 (Tinted backgrounds)

NEUTRAL TOKENS:
├── bg-white:        #FFFFFF   (Primary background)
├── bg-light:        #F8FAFC   (Section backgrounds, cards)
├── bg-alt:          #F1F5F9   (Alternate sections)
├── text-primary:    #1E293B   (Body text)
├── text-secondary:  #64748B   (Muted text, descriptions)
├── border:          #E2E8F0   (Subtle borders)

SEMANTIC TOKENS:
├── success:         #059669   (Availability badges, confirmations)
├── success-light:  #ECFDF5   (Success backgrounds)
├── warning:        #D97706   (Limited availability)
├── error:          #DC2626   (Error states)

HERO/EMERGENCY TOKENS:
├── hero-overlay:   rgba(15, 23, 42, 0.85)  (Dark overlay for hero backgrounds)
├── hero-text:      #FFFFFF   (Text on dark backgrounds)
├── hero-accent:    #FDBA74   (Orange-tinted text on dark backgrounds)
```

### Typography

```
HEADING FONTS:
├── display: 'Space Grotesk', sans-serif (Logo, hero headlines - bold, industrial feel)
├── heading: 'Plus Jakarta Sans', sans-serif (Section titles, H2-H4 - modern, readable)
├── body:    'Inter', sans-serif (Body text - clean, professional)

TYPE SCALE:
├── display-hero:  clamp(2.5rem, 6vw, 4rem) / bold / -0.03em tracking
├── display-xl:    clamp(2rem, 4vw, 3rem) / bold / -0.02em tracking
├── heading-lg:    2rem / 800 weight / -0.02em tracking
├── heading-md:    1.5rem / 700 weight
├── heading-sm:    1.25rem / 700 weight
├── body-lg:       1.125rem / 400 weight / 1.7 line-height
├── body-md:       1rem / 400 weight / 1.6 line-height
├── body-sm:       0.875rem / 500 weight
├── caption:       0.75rem / 600 weight / uppercase / 0.1em tracking
```

### Spatial System

```
SPACING TOKENS (8px base):
├── space-xs:   8px   (Tight spacing within components)
├── space-sm:   16px  (Component internal padding)
├── space-md:   24px  (Between related elements)
├── space-lg:   40px  (Section internal spacing)
├── space-xl:   64px  (Section separation)
├── space-2xl:  96px  (Major section breaks)

CONTAINER:
├── max-width:  1100px
├── padding:    0 24px (mobile), 0 48px (desktop)

BORDER RADIUS:
├── radius-sm:  6px   (Buttons, small elements)
├── radius-md:  12px  (Cards, containers)
├── radius-lg:  24px  (Large cards, featured elements)
├── radius-full: 9999px (Pills, avatars)
```

### Motion Philosophy

```
TIMING FUNCTIONS:
├── ease-default: cubic-bezier(0.4, 0, 0.2, 1) - General transitions
├── ease-bounce:  cubic-bezier(0.68, -0.55, 0.265, 1.55) - Playful feedback
├── ease-smooth: cubic-bezier(0.4, 0, 0.2, 1) - Smooth reveals

DURATION TOKENS:
├── duration-fast:   150ms  (Micro-interactions, hovers)
├── duration-normal: 300ms  (State changes, reveals)
├── duration-slow:   600ms  (Page transitions, major reveals)

ANIMATION PATTERNS:
├── scroll-reveal:   translateY(30px) → translateY(0), opacity 0→1, 800ms
├── hover-lift:      translateY(-3px) with shadow increase
├── button-press:    scale(0.98) on active
├── pulse-wa:        Continuous pulse animation for sticky WhatsApp CTA
```

### Visual Assets

```
ICON STYLE:
├── library: Font Awesome 6 (Industrial, recognizable)
├── weight:  Solid for feature icons, Regular for UI icons
├── sizing:  1.25rem (inline), 1.5rem (feature), 2rem (CTA areas)

IMAGE TREATMENT:
├── hero:         Full-width background with dark overlay (85% opacity)
├── unit-photos:  Clean product shots with subtle drop shadow
├── gallery:      Grayscale → color on hover (filter transition)
├── rounded corners: 12px standard, 24px for featured

SHADOW SYSTEM:
├── shadow-sm:   0 4px 6px -1px rgba(15, 23, 42, 0.05)
├── shadow-md:   0 10px 25px -5px rgba(15, 23, 42, 0.08)
├── shadow-lg:   0 20px 35px -5px rgba(15, 23, 42, 0.12)
├── shadow-glow: 0 8px 24px rgba(234, 88, 12, 0.25) (Orange glow for CTAs)
```

---

## 3. Layout & Structure

### Page Architecture

```
HEADER (Fixed, 90px height):
├── Glassmorphism background (white 90% + blur 20px)
├── Logo left-aligned (brand name + FORKLIFT suffix)
├── Navigation center (5 items: Beranda, Armada, Galeri, Wilayah, FAQ)
├── CTA + Language selector right
└── Mobile: Hamburger menu

HERO SECTION (100vh - 90px offset):
├── Dark overlay background image (industrial photo)
├── Badge: "BUTUH FORKLIFT CEPAT? KAMI DATANG SEKARANG!"
├── H1: Service + location headline
├── Description paragraph
├── Primary CTA button (orange, pulse animation)
└── Trust badge: Location indicator

ABOUT SECTION (overlap layout):
├── 2-column asymmetric grid (55% / 45%)
├── Left: Pretitle + H2 + description paragraphs
├── Right: Industrial image with floating badge (8+ Years)
└── Feature grid 2x2 below (Efisiensi, Keamanan, Kapasitas, Operator)

FEATURES/WHY-US SECTION:
├── Light gray background
├── Section title centered
├── 4-column card grid
└── Cards: Icon + H3 + description, hover lift effect

UNIT SECTION (Tabbed):
├── Section header with tabs (3T | 5T | 7T | 15T)
├── Tab content: 2-column card (image left, specs right)
├── Spec grid: 2x2 comparison cards
└── Availability badge + CTA button

CRANE SECTION (Similar to Unit):
├── Section header with tabs (20T | 25T | 35T | 45T)
└── Same card structure as Unit section

GALLERY SECTION (Bento Grid):
├── Masonry-style grid with varying spans
├── 7 items: Large (2x2), tall, wide, standard
├── Grayscale → color on hover
└── Caption slides up on hover (location tag)

TESTIMONIALS (Slider):
├── Horizontal scrolling cards (3 per view desktop)
├── Quote icon + text + author info
└── Dot navigation below

AREA/REGION SECTION:
├── 3-column card grid
├── Each card: Icon + region name + list of areas
└── Hover: border color change

FAQ SECTION (Accordion):
├── 2-column grid layout
├── Expandable items with smooth height transition
└── Chevron rotation on expand

FOOTER:
├── 3-column grid (Logo+description, Navigation, Contact)
├── NAP (Name, Address, Phone) prominent
├── Copyright with dynamic year
└── Top border separator
```

### Responsive Strategy

```
BREAKPOINTS:
├── mobile:  max-width 576px
├── tablet:  max-width 768px
├── desktop: max-width 992px
├── wide:    max-width 1200px

MOBILE ADAPTATIONS:
├── Header: Hamburger menu, stacked logo
├── Hero: Full-width, reduced padding
├── About: Single column, stacked image
├── Features: 2-column → 1-column
├── Units: Stack image above content
├── Gallery: 2-column grid, auto rows
├── Areas: Horizontal scroll snap
├── FAQ: Single column
├── Footer: Stack all columns
```

---

## 4. Features & Interactions

### Core Features

```
NAVIGATION:
├── Sticky header with glassmorphism
├── Smooth scroll to sections
├── Active state highlighting
├── Mobile menu slide-in from right
└── Language dropdown (ID/EN)

UNIT SELECTOR:
├── Tab switching (instant, no page reload)
├── Image zoom on hover
├── Availability real-time badge
└── WhatsApp CTA with pre-filled message

GALLERY:
├── Lazy loading images
├── Grayscale → color transition
├── Caption overlay slide-up
└── Lightbox potential (future)

TESTIMONIAL SLIDER:
├── Horizontal scroll with snap
├── Touch swipe support
├── Dot navigation
└── Auto-play optional

FAQ ACCORDION:
├── Click to expand/collapse
├── Smooth height animation
├── Only one open at a time (optional)
└── Chevron rotation indicator

STICKY WHATSAPP:
├── Fixed position bottom-right
├── Pulse animation
├── Opens WhatsApp with pre-filled message
└── Z-index above all content

BACK TO TOP:
├── Appears after scroll
├── Fixed position bottom-left
└── Smooth scroll to top
```

### Interaction States

```
BUTTONS:
├── Default: Orange gradient background
├── Hover: Lift + brightness increase + glow
├── Active: Press down (scale 0.98)
├── Disabled: 50% opacity, no pointer

CARDS:
├── Default: White bg, subtle border
├── Hover: Lift up, shadow increase, border accent
└── Active: Slight scale down

TAB BUTTONS:
├── Default: Gray bg, muted text
├── Hover: Darker gray
├── Active: White bg, blue text, shadow
└── Focus: Outline ring

FAQ ITEMS:
├── Closed: Question visible, chevron right
├── Hover: Background tint
├── Open: Answer visible, chevron rotated down
└── Transition: Height 300ms ease

FORM INPUTS (if any):
├── Default: Gray border
├── Focus: Blue border + ring
├── Error: Red border + message
└── Success: Green border + checkmark
```

### Error & Edge Cases

```
EMPTY STATES:
├── No testimonials: Show placeholder card with "Testimonials coming soon"
├── Image load fail: Show gray placeholder with icon

LOADING STATES:
├── Images: Skeleton placeholder (gray animated bg)
├── Tabs: Brief fade transition between tabs

BOUNDARY CONDITIONS:
├── Very long testimonial: Truncate with "..."
├── Long area list: Scrollable within card
└── Mobile overflow: Horizontal scroll where appropriate
```

---

## 5. Component Inventory

### Buttons

```
PRIMARY BUTTON (.btn-primary):
├── Background: linear-gradient(135deg, #F97316, #EA580C)
├── Color: White
├── Padding: 16px 36px
├── Border-radius: 50px (pill)
├── Font: 1rem, 700 weight
├── Shadow: 0 8px 24px rgba(234, 88, 12, 0.25)
├── Hover: translateY(-3px), brightness(1.05), shadow increase
├── Active: translateY(-1px), scale(0.98)
└── Icon: WhatsApp icon left-aligned

SECONDARY BUTTON (.btn-secondary):
├── Background: Transparent
├── Border: 2px solid brand-navy
├── Color: brand-navy
└── Hover: Fill with brand-navy, text white

GHOST BUTTON (.btn-ghost):
├── Background: Transparent
├── Color: text-secondary
└── Hover: Background tint

CARD CTA (.btn-card-cta):
├── Background: Green gradient (#22C55E → #16A34A)
├── Width: 100% (full card width)
└── WhatsApp icon + text centered
```

### Cards

```
UNIT CARD (.unit-detailed-card):
├── Layout: 2-column grid (55% / 45%)
├── Background: White
├── Border-radius: 24px
├── Shadow: 0 20px 50px rgba(0,0,0,0.05)
├── Hover: Shadow increase, border orange tint
├── Image: Product shot with badge overlay
└── Content: Title, subtitle, availability, specs grid, CTA

FEATURE CARD (.feature-card):
├── Background: White
├── Padding: 35px
├── Border-radius: 24px
├── Border: 1px solid border color
├── Hover: translateY(-10px), shadow-hover, border accent
├── Icon: 60px circle with orange bg
└── Content: H3 + paragraph

TESTIMONIAL CARD (.testimonial-card):
├── Background: White
├── Padding: 40px
├── Border-radius: 12px
├── Border: 1px solid border color
├── Quote icon: Large, muted color
├── Text: Italic, body-lg
└── Author: Name + location

AREA CARD (.area-card):
├── Background: White
├── Padding: 30px
├── Border-radius: 24px
├── Border: 1px solid border color
├── Hover: border primary, shadow
├── Icon: Accent color
└── List: Bullet points with accent bullets

FAQ ITEM (.faq-item):
├── Background: bg-alt
├── Border-radius: 12px
├── Border: 1px solid border
├── Question row: Flex space-between, padding 25px 30px
├── Chevron: Rotates 180° when open
├── Answer: Max-height transition, padding bottom when open
└── Active state: border primary, shadow
```

### Navigation

```
HEADER:
├── Position: Fixed, top 0, full width
├── Height: 90px
├── Background: rgba(255,255,255,0.9) + backdrop-filter blur(20px)
├── Border-bottom: 1px solid border
├── Logo: Space Grotesk, brand-navy, FORKLIFT in accent
└── Nav links: 40px gap, weight 500, hover primary color

MOBILE MENU:
├── Trigger: Hamburger (3 lines → X when open)
├── Position: Fixed, full width, below header
├── Background: White
├── Shadow: 0 10px 30px rgba(0,0,0,0.1)
├── Animation: translateY from -150% to 0
├── Links: Full-width, padding 10px 0, border-bottom
└── CTA: Full-width orange button at bottom
```

### Badges & Tags

```
AVAILABILITY BADGE:
├── Background: success-light
├── Color: success
├── Border: 1px solid #A7F3D0
├── Border-radius: 100px
├── Padding: 6px 16px
├── Font: 0.85rem, 600 weight
└── Dot indicator: 8px circle, pulsing

TON BADGE (.unit-badge-ton):
├── Position: Absolute bottom on image
├── Background: accent-orange
├── Color: White
├── Font: 1.25rem, 800 weight
├── Padding: 6px 18px
├── Border-radius: 50px
├── Border: 3px solid white
└── Shadow: 0 8px 20px rgba(192,57,43,0.25)

EXPERIENCE BADGE:
├── Position: Absolute on image corner
├── Background: Orange gradient
├── Color: White
├── Border-radius: 12px
├── Border: 4px solid white
├── Number: 2.8rem, 900 weight
├── Label: 0.75rem, uppercase, 800 weight
└── Shadow: 0 12px 25px rgba(234,88,12,0.3)
```

### Form Elements

```
LANGUAGE DROPDOWN:
├── Button: Globe icon + "ID" + chevron
├── Border: 1px solid border
├── Border-radius: 4px
├── Dropdown: White bg, shadow, 160px min-width
├── Items: Padding 10px 16px, hover bg-alt
└── Active item: Orange tint background
```

---

## 6. Technical Approach

### Architecture

```
PLATFORM: Static HTML/CSS/JS website
├── Single page application feel with smooth scrolling
├── Section-based layout
├── Mobile-first responsive
└── No build step required

ASSETS:
├── CSS: Single style.css (modular sections)
├── JS: Vanilla JS (script.js) - no frameworks
├── Images: PNG/JPG/SVG in assets/images/
└── Icons: Font Awesome 6 via CDN

PERFORMANCE:
├── Lazy loading for images
├── Font preconnect to Google Fonts
├── Critical CSS inlined (optional)
├── Minimal JS footprint
└── Image optimization recommended

SEO:
├── Semantic HTML5 structure
├── Schema.org LocalBusiness markup
├── Open Graph meta tags
├── Canonical URLs
├── Sitemap.xml
└── robots.txt

HOSTING COMPATIBILITY:
├── Vercel (vercel.json)
├── Netlify (netlify.toml)
├── Apache (.htaccess)
└── Standard static hosting
```

### Key Implementation Notes

```
HEADER BEHAVIOR:
- Fixed position with backdrop-filter blur
- Background becomes more opaque on scroll (JS)
- Mobile menu toggle with body scroll lock

SCROLL ANIMATIONS:
- .reveal class for scroll-triggered animations
- IntersectionObserver for performance
- Staggered delays for grid items

IMAGE HANDLING:
- All images have alt text for accessibility
- Lazy loading with loading="lazy"
- Responsive images with srcset (future enhancement)

ACCESSIBILITY:
- ARIA labels on interactive elements
- Focus states for keyboard navigation
- Skip to content link (optional)
- Color contrast WCAG AA compliant

BROWSER SUPPORT:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- CSS custom properties (variables) for theming
```

---

## 7. Redesign Recommendations

### Areas for Enhancement

Based on current implementation analysis:

```
IMPROVEMENT 1: Hero Visual Impact
├── Current: Dark overlay with SVG illustration
├── Suggested: Higher contrast, bolder typography
├── Consider: Animated forklift silhouette or particle effect
└── Keep: Orange accent CTA which performs well

IMPROVEMENT 2: Unit Section UX
├── Current: Tabbed interface works well
├── Suggested: Add "Compare" feature or quick-spec table
├── Consider: Video showcase of units in action
└── Keep: Availability badges - these build trust

IMPROVEMENT 3: Trust Signals
├── Current: 8+ years badge, testimonials, stats
├── Suggested: Add logo bar of "brands served" or certifications
├── Consider: SIO certification badge prominent
└── Keep: Stats glass card - modern and clean

IMPROVEMENT 4: Mobile Navigation
├── Current: Hamburger menu functional
├── Suggested: Add slide-in panel from right with animation
├── Consider: Bottom navigation bar for mobile (app-like)
└── Keep: WhatsApp CTA always visible

IMPROVEMENT 5: Visual Consistency
├── Current: Mix of styles (cards, tabs, gallery)
├── Suggested: Unify card border-radius (currently mix of 12/24)
├── Consider: Consistent shadow system throughout
└── Keep: Orange accent - strong brand identifier

IMPROVEMENT 6: Page Speed
├── Current: Multiple CSS files referenced (seems single style.css)
├── Suggested: Inline critical CSS
├── Consider: Implement next/image or similar optimization
└── Keep: Lazy loading already implemented
```

### Suggested Redesign Direction

```
MOOD BOARD: "Modern Industrial"
├── Primary: Deep charcoal (#1a1a2e) instead of navy
├── Accent: Vibrant yellow (#ffd700) for energy, or keep orange
├── Background: Light warm gray (#f5f5f5)
├── Typography: Bold, condensed for headers (like industrial signage)
└── Imagery: High-contrast B&W photos with color pop

LAYOUT SHIFT:
├── Hero: Full-bleed with centered content
├── About: Asymmetric with large typography
├── Units: Card-based with prominent imagery
├── Trust: Logo ticker animation
└── CTA: Sticky bottom bar on mobile

MICRO-INTERACTIONS:
├── Button hover: Slide-right effect
├── Cards: Tilt effect on hover (3D)
├── Numbers: Count-up animation on scroll
└── Images: Ken Burns slow zoom effect
```

---

*Document Version: 1.0*
*Last Updated: 2026-06-27*
*Project: Satria Mandiri Forklift - Bandung, Indonesia*
