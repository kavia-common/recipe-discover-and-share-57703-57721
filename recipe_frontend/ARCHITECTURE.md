# Recipe Frontend - Architecture Overview

This React app renders the "Home" screen based on provided design assets and organizes the UI into reusable components.

## Structure

- src/pages/Home.jsx — Page that composes the Home screen sections.
- src/components/
  - SearchBar.jsx — Search input with filter button.
  - ChipsRow.jsx — Horizontal, scrollable category chips.
  - RecipeCard.jsx — Vertical featured recipe card.
  - MiniRecipeCard.jsx — Compact card used in "New Recipes".
  - ui/
    - Chip.jsx — Simple selectable chip component.
    - Icon.jsx — Placeholder square icon.

- src/styles/
  - common.css — Design tokens and shared utility classes.
  - home.css — Styles scoped for Home screen layout.

## Interactions

- Search input filters both featured and new recipe lists by title.
- Category chip selection filters lists by category, with "All" showing everything.
- Filter button shows a placeholder alert for future filter UI.

## Extensibility

- Replace static arrays in Home.jsx with data from backend APIs.
- Move search/chips state to a global store when multiple pages need it.
- Integrate a router and additional pages (details, bookmarks, profile).
- Replace Icon placeholders with an actual icon set when available.

