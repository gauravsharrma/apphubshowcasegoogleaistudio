
import React from 'react';
import { AppHubLogoIcon } from './icons/AppHubLogoIcon';

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <AppHubLogoIcon className="h-8 w-8 mr-3 text-indigo-400" />
        <h1 className="text-2xl font-semibold tracking-tight">App Hub Showcase</h1>
      </div>
    </header>
  );
};
