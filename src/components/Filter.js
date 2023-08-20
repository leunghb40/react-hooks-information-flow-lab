import React from "react";

function Filter({ onCategoryChange }) {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <div>
      <label htmlFor="category">Filter by category:</label>
      <select id="category" onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="food">Food</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
    </div>
  );
}

export default Filter;