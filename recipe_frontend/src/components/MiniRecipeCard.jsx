import React from "react";

/**
 * PUBLIC_INTERFACE
 * MiniRecipeCard represents the compact horizontal card in the New Recipes row.
 * Props:
 * - title: string
 * - author: string
 * - time: string
 * - onClick: function (optional)
 */
export default function MiniRecipeCard({ title, author, time, onClick }) {
  return (
    <article className="mini-card" onClick={onClick} role="article" aria-label={title} tabIndex={0}>
      <div className="circle" aria-hidden="true"></div>
      <div className="mini-body">
        <div className="title">{title}</div>
        <div className="mini-meta">
          <div className="creator">
            <div className="avatar" aria-hidden="true"></div>
            <div className="name">By {author}</div>
          </div>
          <div className="time">
            <span className="icon" aria-hidden="true"></span>
            <span className="value">{time}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
