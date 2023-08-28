import React from "react";
import { categories } from "./data";

interface CategorySelectorProps {
  setSelectedCategory: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  setSelectedCategory,
}) => {
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="category-selector">
      <h3>Select a category:</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => handleCategoryChange(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelector;
