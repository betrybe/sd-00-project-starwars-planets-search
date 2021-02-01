const TABLE_KEYS = [
  'name',
  'gravity',
  'rotation_period',
  'climate',
  'orbital_period',
  'diameter',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

const RANDOM_RANGE = 20;
const SIZE_SEED = 1E12;
const INITIAL = 0;
const FINAL = 1;

function rKey(key) {
  const rand = 'qwertyuiopasdfghjklç'[Math.floor(Math.random(RANDOM_RANGE))];
  return `${key}_${rand}_${Math.floor(Math.random() * SIZE_SEED)}`;
}

function formatName(name = '') {
  const str = `${name.slice(INITIAL, FINAL).toUpperCase()}${name.slice(FINAL)}`;
  return str.replace('_', ' ');
}

export {
  TABLE_KEYS,
  rKey,
  formatName,
};
