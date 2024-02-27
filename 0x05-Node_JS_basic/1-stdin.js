process.stdin.setEncoding('utf8');
const displayMessage = require('./0-console');

displayMessage('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    displayMessage(`Your name is: ${chunk}`);
  }
}).on('end', () => {
  displayMessage('This important software is now closing');
});
