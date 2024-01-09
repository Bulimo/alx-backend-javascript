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
    .filter((value) => value && value.startsWith(startString) && startString.length > 0)
    .map((value) => value.replace(startString, ''))
    .join('-');

  return filteredValues;
}
