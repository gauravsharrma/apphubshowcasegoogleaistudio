
import React, { useState, useEffect, useCallback } from 'react';
import { Layout } from './components/Layout';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { AppList } from './components/AppList';
import { APPS_DATA, CATEGORIES } from './constants';
import { AppItem, AppCategory } from './types';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<AppCategory | 'All'>('All');
  const [filteredApps, setFilteredApps] = useState<AppItem[]>(APPS_DATA);

  const filterApps = useCallback(() => {
    let apps = APPS_DATA;

    if (searchTerm) {
      apps = apps.filter(app =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      apps = apps.filter(app => app.category === selectedCategory);
    }
    setFilteredApps(apps);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    filterApps();
  }, [filterApps]);

  return (
    <Layout>
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Discover Our Apps</h2>
          <div className="space-y-4">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <CategoryFilter 
              categories={CATEGORIES} 
              selectedCategory={selectedCategory} 
              onCategoryChange={setSelectedCategory} 
            />
          </div>
        </div>
        
        <AppList apps={filteredApps} />
      </div>
    </Layout>
  );
};

export default App;
