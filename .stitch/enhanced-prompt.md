# Redesign Prompt - Satria Mandiri Forklift

## Enhanced Prompt for Stitch MCP / Design Tool

---

### Overall Vibe, Mood & Purpose

**Satria Mandiri Forklift** adalah website B2B untuk layanan rental forklift diesel (3-15 ton) dan mobile crane (20-45 ton) di Bandung, Cimahi, dan sekitarnya. Website harus memancarkan kesan **profesional, terpercaya, dan responsif cepat** - memenuhi ekspektasi kontraktor dan manajer operasional yang butuh alat berat dalam situasi mendesak.

Tone visual: **"Industrial Trust Modern"** - estetika heavy-duty dengan sentuhan contemporary yang membedakan dari kompetitor yang umumnya memiliki website outdated. Fokus utama: speed-of-response, fleet reliability, dan trust signals.

---

## DESIGN SYSTEM (REQUIRED)

### Platform Specification
- **Platform:** Web (Desktop-first, mobile-optimized responsive)
- **Breakpoints:**
  - Mobile: < 576px
  - Tablet: 576px - 768px
  - Desktop: 768px - 1200px
  - Wide: > 1200px

### Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `--primary` | `#0F172A` | Deep Industrial Navy - headers, primary text |
| `--primary-dark` | `#020617` | Extra dark navy - footer, overlays |
| `--primary-light` | `#F8FAFC` | Light background surfaces |
| `--accent` | `#EA580C` | Vibrant Orange - CTAs, highlights, urgency |
| `--accent-dark` | `#C2410C` | Orange hover state |
| `--accent-light` | `#FFEDD5` | Orange tinted backgrounds |
| `--accent-gradient` | `linear-gradient(135deg, #F97316 0%, #EA580C 100%)` | Primary button gradient |
| `--accent-glow` | `0 8px 24px rgba(234, 88, 12, 0.25)` | Button glow shadow |
| `--bg-light` | `#FFFFFF` | Primary background |
| `--bg-alt` | `#F1F5F9` | Alternate section backgrounds |
| `--text-main` | `#1E293B` | Body text color |
| `--text-muted` | `#64748B` | Secondary/muted text |
| `--border` | `#E2E8F0` | Subtle borders |
| `--success` | `#059669` | Availability badges |
| `--success-light` | `#ECFDF5` | Success backgrounds |

### Typography

**Font Stack:**
```css
--font-display: 'Space Grotesk', sans-serif;  /* Logo, hero headlines */
--font-heading: 'Plus Jakarta Sans', sans-serif;  /* Section titles */
--font-body: 'Inter', sans-serif;  /* Body text */
```

**Type Scale:**
| Element | Size | Weight | Tracking |
|---------|------|--------|----------|
| Hero Title | clamp(2.5rem, 6vw, 4rem) | 800 | -0.03em |
| Section H2 | 2.5rem | 800 | -0.02em |
| Section H3 | 1.5rem | 700 | - |
| Body Large | 1.125rem | 400 | - |
| Body | 1rem | 400 | - |
| Caption | 0.75rem | 600 | 0.1em uppercase |

### Spatial System

**Spacing (8px base):**
- `--space-xs`: 8px
- `--space-sm`: 16px
- `--space-md`: 24px
- `--space-lg`: 40px
- `--space-xl`: 64px
- `--space-2xl`: 96px

**Container:** max-width 1100px, padding 0 24px (mobile) / 0 48px (desktop)

**Border Radius:**
- `--radius-sm`: 6px (buttons)
- `--radius-md`: 12px (cards)
- `--radius-lg`: 24px (large cards)
- `--radius-full`: 9999px (pills, avatars)

### Motion

**Timing Functions:**
```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 600ms;
```

**Animation Patterns:**
- Scroll reveal: `translateY(30px) → translateY(0)`, opacity 0→1, 800ms
- Hover lift: `translateY(-3px)` with shadow increase
- Button press: `scale(0.98)` on active
- WhatsApp FAB: Continuous pulse animation

---

## PAGE STRUCTURE

### 1. Header (Fixed Navigation)

**Description:**
Sticky navigation bar with glassmorphism effect (backdrop-filter blur 20px, white 90% opacity). Logo left-aligned with "SATRIA MANDIRI" in brand-navy and "FORKLIFT" suffix in accent-orange using Space Grotesk font. Center-aligned nav links (Beranda, Armada, Galeri, Wilayah, FAQ) with 40px gap. Right side contains language dropdown (ID/EN) and primary CTA button. Mobile: hamburger menu with slide-in panel.

**Elements:**
- Logo: Space Grotesk, 1.35rem, weight 900
- Nav links: 0.95rem, weight 500, hover → primary color
- CTA Button: Pill-shaped, orange gradient, shadow glow
- Hamburger: 3-line → X animation on toggle

### 2. Hero Section

**Description:**
Full-width hero with dark industrial overlay (85% opacity) on background image showing forklift/industrial equipment in action. Content centered or left-aligned with generous padding (160px top, 120px bottom). Badge above headline in accent-orange uppercase. Main headline in white, bold, large clamp size. Description paragraph in muted white/gray. Primary CTA button with pulse animation. Trust indicator badge at bottom: location pin icon with "Asli Bandung Raya" text.

**Elements:**
- Hero Subtitle Badge: Orange pill badge, uppercase, 0.95rem, 800 weight
- H1 Title: White, clamp 2.5-4rem, weight 800, -0.02em tracking
- Description: 1.2rem, #E2E8F0 color, line-height 1.6
- CTA Button: Orange gradient, 16px 36px padding, pill shape, shadow glow
- Trust Badge: Location icon + "Asli Bandung Raya, paham rute & jalur aman!"

### 3. About / Tentang Kami Section

**Description:**
Two-column asymmetric grid (55% text / 45% visual). Left column contains pretitle "TENTANG SATRIA MANDIRI" in orange uppercase, H2 headline with highlighted word in tinted background, and description paragraphs. Below text is a 2x2 feature grid (Efisiensi Tinggi, Keamanan Terjamin, Kapasitas Fleksibel, Operator Handal) with icon cards. Right column has industrial photo with floating "8+ Tahun Pengalaman" badge overlay. Stats glass card below with 100+ Proyek Selesai and 24/7 Siaga Respon.

**Elements:**
- Pretitle: Orange, uppercase, 0.9rem, 800 weight, 0.12em tracking
- H2 Title: 2.5rem, weight 800, line-height 1.2
- Highlight span: Orange-light background tint
- Feature cards: Icon in orange circle + H3 + description, hover lift
- Image: Rounded 24px, shadow, floating badge bottom-right
- Experience badge: Orange gradient, white text, 8+ large number
- Stats card: White bg, rounded-lg, flex row, divider

### 4. Keunggulan / Features Section

**Description:**
Light gray background (#F1F5F9) section with centered title and 4-column responsive grid of feature cards. Each card has centered icon in orange circle, H3 title, and description paragraph. Cards have white background, rounded corners, border, and hover effect with lift and shadow increase.

**Elements:**
- Section title: Centered, H2 with underline accent bar
- Feature cards grid: 4 columns desktop, 2 tablet, 1 mobile
- Card icon: 60px circle, orange background, white icon, centered
- Card title: 1.15rem, weight 700, centered
- Card description: 0.9rem, text-muted color, centered, line-height 1.6
- Hover: translateY(-10px), shadow-hover, border-accent

### 5. Unit / Armada Section (Forklift)

**Description:**
Tabbed interface for forklift units (3T, 5T, 7T, 15T). Section header with subtitle "— ARMADA KAMI" and H2. Tab buttons styled as pill group with active state (white bg, blue text, shadow). Each tab content is a detailed card with 2-column layout: left side has product image with floating ton badge, right side has unit title (large blue number), subtitle, availability badge, spec grid (2x2), and green CTA button linking to WhatsApp.

**Elements:**
- Tab buttons: Gray bg, rounded, padding 10px 24px, active white+shadow
- Detailed card: 2-column grid, white bg, rounded-24px, shadow
- Unit image: Max-height 320px, drop shadow, zoom on hover
- Ton badge: Orange pill, absolute positioned, white border
- Unit title: 4rem, blue (#3B82F6), weight 800
- Availability badge: Green pill with pulsing dot
- Spec grid: 2x2, light gray bg cards
- Spec label: 0.7rem, uppercase, muted, margin-bottom 8px
- Spec value: 1rem, weight 700, primary
- CTA button: Green gradient, full width, WhatsApp icon

### 6. Crane Section

**Description:**
Similar structure to Unit section but for cranes (20T, 25T, 35T, 45T). Light background section. Same tab interface and card layout. Units described as Mobile/Truck Crane or Rough Terrain Crane (off-road for 35T). Boom length specifications instead of mast height.

**Elements:**
- Same component styles as Unit section
- Boom length badge instead of mast height
- Off-road indicator for 35T (Rough Terrain designation)

### 7. Gallery Section

**Description:**
Bento grid masonry layout (4 columns, auto rows 250px) with varying span sizes (large 2x2, tall 1x2, wide 2x1, standard 1x1). Images start grayscale with slight contrast, transition to full color and slight zoom on hover. Dark gradient overlay from bottom. Caption slides up from bottom on hover with location badge styled like industrial signage (small rectangular tag with orange left border).

**Elements:**
- Gallery grid: 4-column with grid-auto-flow dense
- Large item: span 2 columns and 2 rows
- Tall item: span 2 rows
- Wide item: span 2 columns
- Image: grayscale(40%) → grayscale(0%) on hover, scale(1.05)
- Overlay: Linear gradient bottom, 70% height, opacity transition
- Caption: Hidden by default, slide up on hover, bg primary, orange left border
- CTA tile: Dark bg, icon pulse animation, orange accents

### 8. Testimonials Section

**Description:**
Horizontal scrolling slider with snap points showing 3 testimonials per view on desktop. Each card has large muted quote icon, italic text, and author info (name + location). Cards are white with subtle border, rounded corners. Dot navigation below for pagination. Light background section.

**Elements:**
- Slider: Overflow hidden, flex with transition
- Testimonial card: White bg, padding 40px, rounded-12px, border
- Quote icon: 2rem, muted color, margin-bottom
- Text: 1rem, italic, line-height 1.8
- Author name: 0.95rem, weight 700
- Author location: 0.8rem, muted, weight 600
- Dots: 10px circles, active → 30px pill, primary color

### 9. Wilayah / Area Section

**Description:**
3-column grid of area cards (Kota Bandung, Cimahi & Bandung Barat, Kabupaten Bandung). Each card has icon + H3 title, and bulleted list of areas. Cards have white background, rounded corners, hover border effect. Bottom section with "Sewa forklift di..." keyword optimization.

**Elements:**
- Area grid: 3 columns desktop, 1 column mobile
- Area card: White bg, padding 30px, rounded-24px, border
- Card icon: Accent orange, 1.1rem
- Card title: 1.1rem, flex with icon gap
- Area list: Bullets in accent color, padding 8px 0
- List items: 0.95rem, muted color, border-bottom subtle

### 10. FAQ Section

**Description:**
Two-column grid layout for FAQ items. Each item is an accordion with question row (flex space-between, padding, cursor pointer) and hidden answer (max-height 0, overflow hidden). Click toggles active state with chevron rotation, border color change, and smooth height animation to reveal answer. Light background section.

**Elements:**
- FAQ container: 2 columns, gap 25px
- FAQ item: bg-alt, rounded-12px, border, overflow hidden
- Question row: Padding 25px 30px, flex justify-between, cursor pointer
- Question text: 1.1rem, weight 700, primary
- Chevron: Rotates 180deg when active, transition
- Answer: Padding 0 30px, max-height 0→500px transition
- Answer text: Padding-bottom 25px, muted color
- Active state: border-primary, shadow

### 11. Footer

**Description:**
Gray background (#F1F5F9) with top border. 3-column grid: Left has logo + description text about company. Center has navigation links list. Right has contact info with address (clickable Google Maps link), WhatsApp link. Bottom has centered copyright with dynamic year.

**Elements:**
- Footer grid: 3 columns, gap 60px
- Logo: Space Grotesk, 1.5rem, FORKLIFT suffix orange
- Description: 0.95rem, muted, line-height 1.8
- Navigation: List with 12px margin-bottom per item
- Contact: Icon + text links, icon colors for visual interest
- Map link: Primary color, hover underline
- WhatsApp: Green icon, bold number
- Copyright: Centered, border-top, padding-top 40px, muted, small

### 12. Sticky Elements

**Floating WhatsApp Button:**
- Position: Fixed, bottom 30px, right 30px
- Size: 65px circle
- Background: #25D366 (WhatsApp green)
- Icon: White, 2rem
- Shadow: 0 5px 20px rgba(0,0,0,0.25)
- Animation: Pulse-wa keyframe (box-shadow expansion)
- Hover: Scale 1.08, shadow increase

**Back to Top Button:**
- Position: Fixed, bottom 30px, left 30px
- Size: 50px circle
- Background: Primary navy
- Icon: White arrow-up
- Visibility: Hidden until scroll (opacity 0), visible class toggle
- Hover: Background accent-orange, translateY(-5px)

---

## OUTPUT COMPONENTS

After generation, expect these outputs:

### Text Description
Professional B2B industrial equipment rental website with strong trust signals, clear call-to-action flow, and mobile-first responsive design. Features prominent WhatsApp integration for quick customer conversion.

### Suggestions
- Add subtle parallax effect to hero background
- Consider adding trust badges (SIO certification, partnership logos)
- Implement animated counter for statistics
- Add subtle particle/grid pattern to hero overlay for texture
- Consider micro-animation on unit images (slow bob/float effect)

---

## IMPLEMENTATION NOTES

### Image Assets Required
- hero_industrial_bg.png (dark overlay background)
- hero_industrial.png (about section image)
- forklift_vector_hero.svg (hero illustration - can be removed in redesign)
- unit_3t1.png, forklift_5t.png, forklift_7t.png, forklift_15t.png (unit images)
- crane_20t.png, crane_25t.png, crane_35t.png, crane_45t.png (crane images)
- gallery_1.png through gallery_6.png (gallery images)
- favicon.svg (brand icon)

### External Dependencies
- Google Fonts: Space Grotesk, Plus Jakarta Sans, Inter
- Font Awesome 6 (CDN)
- No JavaScript frameworks (vanilla JS only)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- CSS custom properties for theming
- Graceful degradation for older browsers
