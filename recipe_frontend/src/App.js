import React, { useEffect, useState } from "react";
import "./App.css";
import "./styles/common.css";
import Home from "./pages/Home";

/**
 * PUBLIC_INTERFACE
 * App root renders the Home screen for now and keeps a theme toggle ready.
 */
function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: "auto", background: "transparent" }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </header>
      <Home />
    </div>
  );
}

export default App;
