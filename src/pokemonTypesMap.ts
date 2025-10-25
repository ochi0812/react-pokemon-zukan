// src/pokemonTypesMap.ts

export type PokemonTypeInfo = {
  enType: string;
  jaType: string;
  color: string;
};

export const pokemonTypesMap: PokemonTypeInfo[] = [
  { enType: 'normal', jaType: 'ノーマル', color: '#A8A878' },
  { enType: 'fire', jaType: 'ほのお', color: '#F08030' },
  { enType: 'water', jaType: 'みず', color: '#6890F0' },
  { enType: 'electric', jaType: 'でんき', color: '#F8D030' },
  { enType: 'grass', jaType: 'くさ', color: '#78C850' },
  { enType: 'ice', jaType: 'こおり', color: '#98D8D8' },
  { enType: 'fighting', jaType: 'かくとう', color: '#C03028' },
  { enType: 'poison', jaType: 'どく', color: '#A040A0' },
  { enType: 'ground', jaType: 'じめん', color: '#E0C068' },
  { enType: 'flying', jaType: 'ひこう', color: '#A890F0' },
  { enType: 'psychic', jaType: 'エスパー', color: '#F85888' },
  { enType: 'bug', jaType: 'むし', color: '#A8B820' },
  { enType: 'rock', jaType: 'いわ', color: '#B8A038' },
  { enType: 'ghost', jaType: 'ゴースト', color: '#705898' },
  { enType: 'dragon', jaType: 'ドラゴン', color: '#7038F8' },
  { enType: 'dark', jaType: 'あく', color: '#705848' },
  { enType: 'steel', jaType: 'はがね', color: '#B8B8D0' },
  { enType: 'fairy', jaType: 'フェアリー', color: '#EE99AC' },
];
