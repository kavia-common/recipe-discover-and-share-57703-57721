import React from "react";

/**
 * PUBLIC_INTERFACE
 * RecipeCard displays a vertical recipe card with image, time, rating, and title.
 * Props:
 * - title: string
 * - time: string (e.g., "15 Mins")
 * - rating: number|string
 * - onClick: function (optional) - called when the card is clicked
 */
export default function RecipeCard({ title, time, rating, onClick }) {
  return (
    <article className="card" onClick={onClick} role="article" aria-label={title} tabIndex={0}>
      <div className="image-rect" aria-hidden="true">
        {/* Optional bookmark placeholder */}
        <div className="bookmark" aria-hidden="true">☆</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: 8 }}>
        <div className="time-block">
          <div className="time-label">Time</div>
          <div className="time-value">{time}</div>
        </div>
        <div className="rating-pill">
          <span className="star" aria-hidden="true"></span>
          <span>{rating}</span>
        </div>
      </div>
      <div className="title">{title}</div>
    </article>
  );
}
