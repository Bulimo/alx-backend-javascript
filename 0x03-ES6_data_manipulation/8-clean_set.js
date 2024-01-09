export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) throw new Error('Set must be of type Set');
  if (startString === '') return '';
  const filteredValues = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return filteredValues;
}
