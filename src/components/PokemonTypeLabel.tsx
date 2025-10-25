// src/components/PokemonTypeLabel.tsx
// ポケモンのタイプのラベル
import type { PokemonTypeInfo } from '../pokemonTypesMap.ts';
import { pokemonTypesMap } from '../pokemonTypesMap.ts';

type PokemonTypeLabelProps = {
  type: string;
};

const PokemonTypeLabel: React.FC<PokemonTypeLabelProps> = ({ type }) => {
  const typeInfo = pokemonTypesMap.find((t: PokemonTypeInfo) => t.jaType === type);
  return (
    <span
      style={{
        backgroundColor: typeInfo?.color,
      }}
      key={type}
      className={`text-white px-3 py-1 rounded-full w-fit`}
    >
      {typeInfo?.jaType}
    </span>
  );
};

export default PokemonTypeLabel;
