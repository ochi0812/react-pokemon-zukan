// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-sm">
          © 2025 ポケモン図鑑 | データ提供: <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">PokéAPI</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
