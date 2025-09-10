import React, { useMemo, useState } from "react";
import "../styles/common.css";
import "../styles/home.css";
import SearchBar from "../components/SearchBar";
import ChipsRow from "../components/ChipsRow";
import RecipeCard from "../components/RecipeCard";
import MiniRecipeCard from "../components/MiniRecipeCard";

/**
 * PUBLIC_INTERFACE
 * Home screen page for the recipe app.
 * Implements greeting, search, category chips, featured recipes, new recipes, and bottom nav placeholder.
 */
export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => [
      "All",
      "Indian",
      "Italian",
      "Asian",
      "Chinese",
      "Fruit",
      "Vegetables",
      "Protein",
      "Cereal",
      "Local Dishes",
    ],
    []
  );

  // Static demo data; replace with backend data later.
  const featured = [
    { title: "Classic Greek Salad", time: "15 Mins", rating: 4.5, category: "Vegetables" },
    { title: "Crunchy Nut Coleslaw", time: "10 Mins", rating: 3.5, category: "Vegetables" },
    { title: "Shrimp Chicken Andouille Sausage Jambalaya", time: "10 Mins", rating: 3.0, category: "Asian" },
    { title: "Barbecue Chicken Jollof Rice", time: "10 Mins", rating: 4.5, category: "Local Dishes" },
    { title: "Portuguese Piri Piri Chicken", time: "10 Mins", rating: 4.5, category: "Portuguese" },
  ];

  const newRecipes = [
    { title: "Steak with tomato sauce and bulgur rice.", author: "James Milner", time: "20 mins", category: "Protein" },
    { title: "Pilaf sweet with lamb-and-raisins", author: "Laura Wilson", time: "20 mins", category: "Cereal" },
    { title: "Rice Pilaf, Broccoli and Chicken", author: "Lucas Moura", time: "20 mins", category: "Protein" },
    { title: "Chicken meal with sauce", author: "Issabella Ethan", time: "20 mins", category: "Protein" },
    { title: "Stir-fry chicken with broccoli in sweet and sour sauce and rice.", author: "Miquel Ferran", time: "20 mins", category: "Asian" },
  ];

  const matchesSearch = (title) => title.toLowerCase().includes(search.trim().toLowerCase());
  const matchesCategory = (category) => selectedCategory === "All" || category === selectedCategory;

  const filteredFeatured = featured.filter((r) => matchesSearch(r.title) && matchesCategory(r.category));
  const filteredNew = newRecipes.filter((r) => matchesSearch(r.title) && matchesCategory(r.category));

  const onFilterClick = () => {
    // Placeholder for future filter modal/sheet
    // eslint-disable-next-line no-alert
    alert("Filters coming soon!");
  };

  return (
    <main className="home-screen" role="main">
      {/* Status Bar */}
      <div className="status-bar" aria-hidden="true">
        <div style={{ marginLeft: "auto", fontSize: "var(--typo-67-size)", fontWeight: "var(--typo-67-weight)", color: "var(--color-303030)" }}>
          19:27
        </div>
      </div>

      {/* Header: Greeting + Avatar */}
      <header className="header">
        <div className="title-wrap">
          <div className="hello">Hello Jega</div>
          <div className="subtitle">What are you cooking today?</div>
        </div>
        <div className="avatar" aria-label="Profile avatar"></div>
      </header>

      {/* Search + Filter */}
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFilterClick={onFilterClick}
      />

      {/* Category Chips */}
      <ChipsRow
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* Featured/New Recipes label */}
      <div className="section-label">New Recipes</div>

      {/* Featured Dishes Row */}
      <section className="dishes-row row-scroll" aria-label="Featured dishes">
        {filteredFeatured.map((r) => (
          <RecipeCard
            key={r.title}
            title={r.title}
            time={r.time}
            rating={r.rating}
          />
        ))}
      </section>

      {/* New Recipes Row */}
      <section className="new-recipes">
        <div className="section-label visually-hidden">New Recipes</div>
        <div className="new-recipes-row row-scroll" aria-label="New Recipes">
          {filteredNew.map((r) => (
            <MiniRecipeCard
              key={r.title}
              title={r.title}
              author={r.author}
              time={r.time}
            />
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="bottom-nav-wrapper" role="contentinfo" aria-label="Bottom navigation">
        <nav className="bottom-nav" aria-label="Primary">
          <button className="icon" aria-label="Home"></button>
          <button className="icon" aria-label="Bookmarks"></button>
          <button className="fab" aria-label="Add">+</button>
          <button className="icon" aria-label="Notifications"></button>
          <button className="icon" aria-label="Profile"></button>
        </nav>
        <div className="home-indicator" aria-hidden="true">
          <div className="line"></div>
        </div>
      </div>
    </main>
  );
}
