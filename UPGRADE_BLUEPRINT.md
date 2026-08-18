# Our Planet — Upgrade Blueprint

## Design Intent

The upgraded site will become **Living Atlas**, an immersive environmental field guide built around the idea that the planet is a connected system rather than a list of isolated problems. It deliberately replaces the previous card-based interface, frosted navigation, and generic green call-to-action treatment. The visual experience will feel like moving through layered field observations: ocean, atmosphere, forest, and human response.

## Visual Language

| Element | Direction |
| --- | --- |
| Core concept | **Living Atlas** — a contemporary field atlas with an evolving, layered planetary signal. |
| Palette | Chalk `#F4F1E8`, mineral ink `#0B1D1C`, ocean blue `#136A8A`, canopy `#2D6B4B`, lichen `#B8D55A`, and warm clay `#D6764E`. |
| Typography | A high-contrast editorial serif for environmental headlines paired with a compact grotesk for labels, metadata, and navigational coordinates. |
| Image treatment | Existing landscape, forest, institutional, and organization imagery becomes the central evidence of the work. Images are framed as field plates, never hidden behind abstract backgrounds. |
| Graphic language | Fine coordinate rules, orbital rings, translucent topographic contours, low-opacity habitat labels, and distinct topic colors create a visible atlas system. |
| Layout | Asymmetric magazine-like spreads, large image fields, narrow factual sidebars, and overlapping information layers replace repetitive rounded card grids. |

## Interaction Direction

The site will be driven by a shared `atlas.js` interaction layer. A fixed vertical progress filament will track page movement; hero and image planes will move at different rates during scroll; the atmospheric globe will respond to pointer movement; topic plates and organization cards will subtly tilt in three-dimensional space; and sections will reveal progressively as observations enter the viewport. Motion will honor `prefers-reduced-motion` and must never block normal scrolling.

## Information Architecture

| Route | Role in Living Atlas |
| --- | --- |
| `index.html` | **Atlas entry**: a photographed landscape, a pointer-responsive planet mark, three evidence markers, and routes into the field guide. |
| `issues.html` | **Pressure systems**: visual field plates for ocean pollution, climate, biodiversity, and justice, with readable fact panels and reference paths. |
| `organizations.html` | **Response network**: a curated directory of active institutions, retaining the real outbound links while presenting them through a unified Living Atlas identifier system. |
| `resources.html` | **Research desk**: a clear source index that preserves credible references and removes legacy course/assignment framing. |

## Non-Negotiable Rules

Every public page must use English only; must use the same Living Atlas navigation, progress feedback, footer attribution, and interaction system; must remove all course, student-number, and assignment references; and must identify **Yehong Hu** as the sole contributor. Repository history, commits, push activity, and deployment will all use the GitHub identity `yehonghu`.

## Existing Asset Strategy

The original mountain hero and forest image remain as authentic evidence-bearing media. Older downloaded organization logo files are replaced with a coherent Living Atlas badge system built with CSS and accessible HTML; full organization names and direct official links preserve recognition without embedding inconsistent legacy marks. New decorative graphics avoid empty artificial backdrops or visual effects that obscure the project material.

## Validation Standard

The final release must retain natural scrolling at all viewport widths, pass through all four public routes without style or navigation drift, expose the original images prominently, include accessible `alt` text and keyboard-visible controls, and deploy from the `main` branch root via GitHub Pages.
