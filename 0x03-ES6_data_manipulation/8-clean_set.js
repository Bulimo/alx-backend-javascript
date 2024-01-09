export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new Error('Invalid set or startString');
  }
  // if (startString === '') return '';
  // const filteredValues = Array.from(set)
  //   .filter((value) => value.startsWith(startString))
  //   .map((value) => value.slice(startString.length))
  //   .join('-');
  const filteredValues = Array.from(set)
    .filter((value) => value && typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return filteredValues;
}
