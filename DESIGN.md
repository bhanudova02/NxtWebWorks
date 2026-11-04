# DESIGN.md — NxtWebWorks Design System

## 1. Visual Identity & Brand Direction
- **Mode:** `Persuade` (Professional Agency, High Credibility, Precision Engineering).
- **Core Theme:** Clean, crisp modern SaaS/Agency look with rich navy/blue accents, ample whitespace, high-contrast typography, and subtle micro-interactions.

## 2. Color Tokens
| Token | Hex / Value | Role |
|---|---|---|
| `--color-rn-bg` | `#FFFFFF` | Primary page canvas |
| `--color-rn-surface` | `#F1F5F9` | Section alternating surface, card sub-layer |
| `--color-rn-blue-soft` | `#DBEAFE` | Subtle active states, pill backgrounds, selection |
| `--color-rn-blue` | `#1E40AF` | Primary brand accent, CTA highlights, active indicators |
| `--color-rn-text` | `#0F172A` | Primary typography, deep slate navy |
| `--color-rn-text-muted` | `#64748B` | Secondary copy, metadata, subtle borders |
| `--color-rn-border` | `#E2E8F0` | Structural hair-lines, card outlines |

## 3. Typography
- **Primary Sans:** `Outfit` (Headings, branding, primary actions)
- **Technical Mono:** `JetBrains Mono` (Code snippets, metrics, tags)
- **Weights:** 400 (Body), 500 (Medium copy), 600 (Semibold UI labels), 700 (Headings)

## 4. UI Components & Patterns
- **Buttons (`premium-button`):** High contrast, subtle hover scaling, clear tactile feedback.
- **Cards:** Clean 1px border (`#E2E8F0`), subtle elevation (`shadow-sm` transitioning to `shadow-md`), slight scale micro-interaction (`active:scale-[0.98]`).
- **Modals & Overlays:** Backdrop blur with high z-index (`z-[100]`), mobile bottom-sheet ergonomics with grab handles, desktop centered dialog.
- **Accessibility & UX Floor:**
  - High contrast on all text elements (WCAG AA).
  - Explicit keyboard navigation support (`Escape` dismiss, tab stops).
  - Explicit touch targets >= 44px on mobile devices.

