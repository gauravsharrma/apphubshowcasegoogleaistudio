
import React from 'react';

export enum AppCategory {
  FINANCE = "Finance",
  HEALTH = "Health",
  UTILITIES = "Utilities",
  SECURITY = "Security",
  PRODUCTIVITY = "Productivity",
  INFORMATION = "Information",
}

export interface AppItem {
  id: string;
  name: string;
  description: string;
  category: AppCategory;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  path: string; // For potential future navigation
}
