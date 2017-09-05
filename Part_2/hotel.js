const {
  guests,
  guestsSelect,
  rooms,
  roomsSelect,
  availableRooms,
  availableRoomsSelect,
  bookings,
  bookingsSelect,
  bookingsForRoom,
  bookingsForRoomSelect,
} = require('./database');
const client = require('./pg');
const print = require('node-print');
const optionalInput = process.argv[3];

switch (process.argv[2]) {
  case 'guests':
    guests(guestsSelect);
    break;

  case 'rooms':
    if (!optionalInput) {
      rooms(roomsSelect);
      break;
    } else if (optionalInput === '--available') {
      availableRooms(availableRoomsSelect);
      break;
    } else {
      console.log('Please enter a command after hotel.');
      console.log('Commands are guests, rooms, and rooms --available.');
      client.end();
      break;
    };

  case 'bookings':
    if (!optionalInput) {
      bookings(bookingsSelect);
      break;
    } else {
      bookingsForRoom(bookingsForRoomSelect, optionalInput);
      break;
    }

  default:
    console.log('Please enter a command after hotel.');
    console.log('Commands are guests, rooms, and rooms --available.');
    client.end();
};
