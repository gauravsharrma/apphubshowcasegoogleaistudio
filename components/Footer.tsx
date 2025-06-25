
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-400 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} App Hub Showcase. All rights reserved.</p>
        <p className="text-sm mt-1">Crafted with ❤️ and Tailwind CSS</p>
      </div>
    </footer>
  );
};
