# Our Planet / Living Atlas

**Living Atlas** is a photography-first environmental field guide that connects ocean pollution, climate evidence, biodiversity, environmental justice, and the organizations responding to these pressures. It is a standalone portfolio experience designed and built by **Yehong Hu**.

## Live Site

[View the public Living Atlas site](https://yehonghu.github.io/our-planet-environmental-website/)

GitHub Pages publishes the repository root from the `main` branch. No installation, build step, or server is required.

## Routes

| Route | Role |
| --- | --- |
| `index.html` | **Atlas entry** — original mountain image hero, pointer-responsive planetary mark, evidence markers, photographed pressure-system plates, and the response-network preview. |
| `issues.html` | **Pressure systems** — photographed notes on ocean debris, climate evidence, biodiversity, and environmental justice. |
| `organizations.html` | **Response network** — current first-party official Logo assets for five institutions, a compliant NASA text reference, and direct links to all six institutions. |
| `resources.html` | **Research desk** — authoritative information sources, image notes, and direct organization links. |

## Design System

Living Atlas replaces the previous card-based interface with a distinct contemporary field-guide language.

| System layer | Implementation |
| --- | --- |
| Photography | Original mountain and forest assets are the core visual evidence. A NASA/NOAA ocean-debris photograph is added only where a dedicated ocean-pollution image is needed. |
| Visual language | Mineral-ink, chalk, ocean, canopy, lichen, and clay palette; topographic rules; coordinate labels; field plates; high-contrast editorial typography. |
| Scroll behavior | A fixed atlas progress filament, image-plane parallax, staggered observation reveals, and responsive section transitions. |
| Network identifiers | Current official SVG assets are retained without recolouring or distortion inside a shared logo frame. NASA is represented by a text-only official-site reference because its Brand Center prohibits third-party logo use without permission. |
| Depth | Pointer-responsive planet mark and three-dimensional tilt on topic plates; all motion respects `prefers-reduced-motion`. |
| Accessibility | Semantic page sections, visible navigation states, descriptive image alternative text, keyboard-ready controls, and normal document scrolling. |

## Sources and Image Notes

The research desk links to the United Nations, UNEP, NASA Science, IPBES, IUCN, and the featured organizations. The added ocean-debris image is associated with NASA’s article, [*How NASA Is Homing in From Space on Ocean Debris*](https://www.nasa.gov/earth/how-nasa-is-homing-in-from-space-on-ocean-debris/), where it is credited to NOAA. See [`resources.html`](resources.html) for the full source index.

## Technology

This is a dependency-free static site built with HTML5, CSS3, and vanilla JavaScript. Shared interactions live in `main.js`; the entire Living Atlas visual system lives in `styles.css`.

## Contributor

**Yehong Hu** is the sole contributor and copyright holder for this portfolio upgrade.
