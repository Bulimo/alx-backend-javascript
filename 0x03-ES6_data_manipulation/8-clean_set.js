export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || !startString || typeof startString !== 'string') {
    return '';
  }
  // if (startString === '') return '';
  // const filteredValues = Array.from(set)
  //   .filter((value) => value.startsWith(startString))
  //   .map((value) => value.slice(startString.length))
  //   .join('-');
  const filteredValues = Array.from(set)
    .filter((value) => value && startString.length > 0 && value.startsWith(startString))
    .map((value) => value.replace(startString, ''))
    .join('-');

  return filteredValues;
}
