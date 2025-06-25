
import React from 'react';
import { AppCategory } from '../types';

interface CategoryFilterProps {
  categories: AppCategory[];
  selectedCategory: AppCategory | 'All';
  onCategoryChange: (category: AppCategory | 'All') => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onCategoryChange }) => {
  const allCategories: (AppCategory | 'All')[] = ['All', ...categories];

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span className="text-sm font-medium text-slate-700 mr-2">Filter by category:</span>
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-150 ease-in-out
            ${selectedCategory === category 
              ? 'bg-indigo-600 text-white shadow-md' 
              : 'bg-white text-slate-700 hover:bg-indigo-100 border border-slate-300'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
