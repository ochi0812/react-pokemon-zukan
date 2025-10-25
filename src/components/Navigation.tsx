// src/components/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
          ポケモン図鑑
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
