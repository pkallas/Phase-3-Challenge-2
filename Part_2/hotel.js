const {
  guests,
  guestsSelect,
} = require('./database');
const client = require('./pg');

switch (process.argv[2]) {
  case 'guests':
    guests(guestsSelect);
    break;

  default:
    console.log('Please enter a command after hotel. \nCommands are guests.');
    client.end();
};
