import React from "react";

/**
 * PUBLIC_INTERFACE
 * Chip component for selectable category/filter tags.
 * Props:
 * - label: string - text to display
 * - active: boolean - whether the chip is selected
 * - onClick: function - click handler
 */
export default function Chip({ label, active = false, onClick }) {
  const className = `chip ${active ? "is-active" : ""}`;
  return (
    <button
      type="button"
      className={className}
      role="tab"
      aria-selected={active}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
