import React from "react";
import { motion } from "framer-motion";
import { Category } from "./types";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: number | null;
  onCategoryChange: (categoryId: number | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  if (categories.length === 0) return null;
  
  return (
    <div className="mb-10">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-3"
      >
        <button 
          onClick={() => onCategoryChange(null)} 
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            selectedCategory === null 
              ? 'bg-gray-800 text-white shadow-lg' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          All
        </button>
        
        {categories.map(category => (
          <button 
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              selectedCategory === category.id 
                ? 'bg-gray-800 text-white shadow-lg' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category.title}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default CategoryFilter;