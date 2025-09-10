import React from "react";
import Chip from "./ui/Chip";

/**
 * PUBLIC_INTERFACE
 * Horizontal scrollable row of category chips.
 * Props:
 * - categories: string[] - list of category names
 * - selected: string - currently selected category name
 * - onSelect: function(category: string) - selection handler
 */
export default function ChipsRow({ categories, selected, onSelect }) {
  return (
    <div className="chips-container">
      <div className="chips-row" role="tablist" aria-label="Recipe categories">
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            active={selected === cat}
            onClick={() => onSelect(cat)}
          />
        ))}
      </div>
    </div>
  );
}
