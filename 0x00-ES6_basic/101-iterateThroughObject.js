export default function iterateThroughObject(reportWithIterator) {
  let output = '';
  let result = reportWithIterator.next();
  while (!result.done) {
    output += `${result.value}`;
    result = reportWithIterator.next();
    if (result.done === false) {
      output += ' | ';
    }
  }
  return output;
}
