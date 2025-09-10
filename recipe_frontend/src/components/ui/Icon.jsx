import React from "react";

/**
 * PUBLIC_INTERFACE
 * Icon placeholder block (used as simple square/rect placeholder).
 * Props:
 * - size: number (default 18)
 * - rounded: boolean (default false)
 * - style: object - inline styles
 * - className: string - additional class
 */
export default function Icon({ size = 18, rounded = false, style, className = "" }) {
  const baseStyle = {
    width: size,
    height: size,
    borderRadius: rounded ? 8 : 3,
  };
  return <span className={`icon ${className}`} aria-hidden="true" style={{ ...baseStyle, ...style }} />;
}
