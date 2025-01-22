import React from 'react';
import { Pokemon } from '../types';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105">
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        className="w-full h-48 object-contain bg-gray-50 dark:bg-gray-700 p-4 transition-colors duration-200"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold capitalize mb-2 text-gray-900 dark:text-white">{pokemon.name}</h2>
        <div className="flex flex-wrap gap-2">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 transition-colors duration-200"
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}