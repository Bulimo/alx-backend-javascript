function calculateNumber(type, a, b) {
  const roundA = Math.round(a);
  const roundB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundA + roundB
    case 'SUBTRACT':
      return roundA - roundB
    case 'DIVIDE':
      return roundB === 0 ? 'Error' : roundA / roundB;
    default:
      return 'Invalid operation type';
  }
}

module.exports = calculateNumber;
