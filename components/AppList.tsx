
import React from 'react';
import { AppItem } from '../types';
import { AppCard } from './AppCard';

interface AppListProps {
  apps: AppItem[];
}

export const AppList: React.FC<AppListProps> = ({ apps }) => {
  if (apps.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-slate-700">No Apps Found</h2>
        <p className="text-slate-500 mt-2">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
      {apps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  );
};
