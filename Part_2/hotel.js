const {
  guests,
  guestsSelect,
  rooms,
  roomsSelect,
} = require('./database');
const client = require('./pg');

switch (process.argv[2]) {
  case 'guests':
    guests(guestsSelect);
    break;

  case 'rooms':
    rooms(roomsSelect);
    break;

  default:
    console.log('Please enter a command after hotel. \nCommands are guests, rooms.');
    client.end();
};
