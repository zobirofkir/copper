import React, { memo } from "react";
import { motion } from "framer-motion";
import { Category } from "./types";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: number | null;
  onCategoryChange: (categoryId: number | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = memo(({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  if (categories.length === 0) return null;
  
  const handleCategoryClick = (categoryId: number | null) => {
    if (categoryId !== selectedCategory) {
      onCategoryChange(categoryId);
    }
  };
  
  return (
    <div className="mb-10">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-3"
        layout
      >
        <button 
          onClick={() => handleCategoryClick(null)} 
          className={`px-4 py-2 transition-all duration-300 ${
            selectedCategory === null 
              ? 'border-b-2 border-gray-800 font-medium dark:border-white dark:text-white' 
              : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
          }`}
        >
          Tout
        </button>
        
        {categories.map(category => (
          <button 
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`px-4 py-2 transition-all duration-300 ${
              selectedCategory === category.id 
                ? 'border-b-2 border-gray-800 font-medium dark:border-white' 
                : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
            }`}
          >
            {category.title}
          </button>
        ))}
      </motion.div>
    </div>
  );
});

export default CategoryFilter;