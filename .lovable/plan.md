

# MSN — Prediction Market Intelligence Terminal

A Bloomberg Terminal-inspired prediction market dashboard with a 1980s/90s Wall Street aesthetic. Dense, information-rich, professional intelligence tool built with monospace typography, phosphor green accents, and CRT retro effects.

## Visual Foundation
- **Black base** (#0A0A0A / #111111) with phosphor green (#00FF41), amber (#FFB000), and red (#FF3333) accents
- **Monospace typography** throughout (IBM Plex Mono / Space Mono)
- **CRT effects**: CSS scanline overlay, text glow/bloom, subtle flicker
- **Dense grid layout** with thin 1px border lines separating panels

## Components

### 1. Top Ticker Bar
Horizontally scrolling infinite tape showing trending predictions — short event title, probability %, directional arrows (▲/▼) with green/red coloring. Smooth infinite scroll animation.

### 2. MSN Brand Header
Terminal-style branding with "MSN" prominently displayed, styled like a Reuters/Bloomberg terminal header.

### 3. BREAKING / High-Confidence Panel
Main focal point for events with >85% probability. Wire service alert styling with amber/gold accent, pulsing "LIKELY" indicator, and prominent probability display. Feels urgent and important.

### 4. Primary Feed Panel
Main news feed of predictions displayed as wire service headlines. Each entry shows: event title, probability % (as a confidence meter/bar), source tag (Polymarket), 24h trend with delta, category tag, and timestamp. Sorted by probability descending. Dense and scannable.

### 5. Trending Movers Panel
"What just changed" — events with the largest probability shifts in 24h. Prominent delta display, green for rising, red for falling. Equivalent of unusual volume alerts.

### 6. Category Sidebar/Tabs
Terminal-style menu to filter by: Politics, Economics, Crypto, Tech, Sports, World, Culture. Each category shows active prediction count.

### 7. Market Detail Expansion
Click/hover to expand a story showing: probability-over-time sparkline chart (green line on black grid), current odds, volume/liquidity indicator, and AI-generated summary of market movement.

### 8. Dashboard Stats Bar
Aggregate stats: total predictions tracked, average confidence of top stories, count of >80% probability markets, monthly accuracy score.

### 9. Bottom Status Bar
Connection status with blinking green dot, live-updating clock, data freshness indicator ("LAST SYNC: 4s AGO"), and market source status (POLYMARKET: LIVE).

## Interactions & Animations
- Probability numbers with simulated periodic fluctuations
- Blinking terminal cursor in at least one panel
- Smooth scrolling ticker and feed
- Hover states with glow increases and row highlights
- New high-confidence events animate in like wire alerts

## Technical Notes
- All mock/demo data — no backend needed initially
- Tailwind for layout, custom CSS for retro effects (scanlines, glow, flicker)
- Recharts for sparkline probability charts
- Single-page dense dashboard layout

