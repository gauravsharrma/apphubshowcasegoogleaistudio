
import React from 'react';
import { AppItem, AppCategory } from '../types';

interface AppCardProps {
  app: AppItem;
}

const categoryColorMap: Record<AppCategory, string> = {
  [AppCategory.FINANCE]: 'bg-green-100 text-green-800',
  [AppCategory.HEALTH]: 'bg-blue-100 text-blue-800',
  [AppCategory.UTILITIES]: 'bg-yellow-100 text-yellow-800',
  [AppCategory.SECURITY]: 'bg-red-100 text-red-800',
  [AppCategory.PRODUCTIVITY]: 'bg-purple-100 text-purple-800',
  [AppCategory.INFORMATION]: 'bg-sky-100 text-sky-800',
};

export const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const IconComponent = app.icon;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl flex flex-col h-full">
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-full bg-indigo-100 mr-4">
            <IconComponent className="h-8 w-8 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800">{app.name}</h3>
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColorMap[app.category]}`}>
              {app.category}
            </span>
          </div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed flex-grow">
          {app.description}
        </p>
        {/* Placeholder for a button if needed in future, currently non-interactive */}
        {/* <div className="mt-6">
          <button 
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out text-sm font-medium"
            onClick={() => alert(`Navigating to ${app.name} (not implemented)`)}
          >
            Open App
          </button>
        </div> */}
      </div>
    </div>
  );
};
