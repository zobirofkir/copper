import React, { memo, useState, useEffect } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState<Category[]>(categories);
  
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter(category => 
        category.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  }, [searchTerm, categories]);
  
  if (categories.length === 0) return null;
  
  const handleCategoryClick = (categoryId: number | null) => {
    if (categoryId !== selectedCategory) {
      onCategoryChange(categoryId);
    }
  };
  
  return (
    <div className="mb-10">
      <div className="mb-4 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          )}
        </div>
      </div>
      
      <div className="overflow-x-auto pb-2">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex whitespace-nowrap gap-3 min-w-max justify-center"
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
          
          {filteredCategories.map(category => (
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
          
          {filteredCategories.length === 0 && searchTerm && (
            <div className="px-4 py-2 text-gray-500 dark:text-gray-400">
              No categories found
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
});

export default CategoryFilter;