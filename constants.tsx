
import { AppItem, AppCategory } from './types';
import { FinanceIcon } from './components/icons/FinanceIcon';
import { HealthIcon } from './components/icons/HealthIcon';
import { UtilitiesIcon } from './components/icons/UtilitiesIcon';
import { SecurityIcon } from './components/icons/SecurityIcon';
import { ProductivityIcon } from './components/icons/ProductivityIcon';
import { InformationIcon } from './components/icons/InformationIcon';

export const APPS_DATA: AppItem[] = [
  {
    id: '1',
    name: 'EMI Calculator',
    description: 'Calculate your Equated Monthly Installments for loans quickly and easily.',
    category: AppCategory.FINANCE,
    icon: FinanceIcon,
    path: '/emi-calculator',
  },
  {
    id: '2',
    name: 'BMI Calculator',
    description: 'Check your Body Mass Index to understand your weight status.',
    category: AppCategory.HEALTH,
    icon: HealthIcon,
    path: '/bmi-calculator',
  },
  {
    id: '3',
    name: 'Unit Converter',
    description: 'Convert various units of measurement (length, weight, temperature).',
    category: AppCategory.UTILITIES,
    icon: UtilitiesIcon,
    path: '/unit-converter',
  },
  {
    id: '4',
    name: 'Password Generator',
    description: 'Create strong, random passwords to enhance your online security.',
    category: AppCategory.SECURITY,
    icon: SecurityIcon,
    path: '/password-generator',
  },
  {
    id: '5',
    name: 'Quick Notes',
    description: 'Jot down your thoughts and ideas with this simple note-taking app.',
    category: AppCategory.PRODUCTIVITY,
    icon: ProductivityIcon,
    path: '/quick-notes',
  },
  {
    id: '6',
    name: 'Weather Today',
    description: 'Get current weather conditions and a short forecast for your area.',
    category: AppCategory.INFORMATION,
    icon: InformationIcon,
    path: '/weather-today',
  },
];

export const CATEGORIES: AppCategory[] = Object.values(AppCategory);
