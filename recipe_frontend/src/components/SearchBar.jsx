import React from "react";
import Icon from "./ui/Icon";

/**
 * PUBLIC_INTERFACE
 * SearchBar with input and filter button.
 * Props:
 * - value: string - current search text
 * - onChange: function(e) - called when input text changes
 * - onFilterClick: function - called when filter icon/button clicked
 */
export default function SearchBar({ value, onChange, onFilterClick }) {
  return (
    <div className="search-row">
      <label className="search-box" htmlFor="search-input" aria-label="Search recipes">
        <Icon />
        <input
          id="search-input"
          type="text"
          placeholder="Search recipe"
          value={value}
          onChange={onChange}
          aria-label="Search recipe"
        />
      </label>
      <button type="button" className="filter-btn" aria-label="Open filters" onClick={onFilterClick}>
        <Icon style={{ background: "transparent" }} />
      </button>
    </div>
  );
}
