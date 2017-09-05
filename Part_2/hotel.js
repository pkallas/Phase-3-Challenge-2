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
    return guests(guestsSelect)
    .then(res => {
      client.end();
      print.pt(res)
    })
    .catch(err => console.log(error));
    break;

  case 'rooms':
    if (!optionalInput) {
      return rooms(roomsSelect)
      .then(res => {
        client.end();
        print.pt(res)
      })
      .catch(err => console.log(error));
      break;
    } else if (optionalInput === '--available') {
      return availableRooms(availableRoomsSelect)
      .then(res => {
        client.end();
        print.pt(res)
      })
      .catch(err => console.log(error));
      break;
    } else {
      console.log('Please enter a command after hotel.');
      console.log('Commands are guests, rooms, and rooms --available.');
      client.end();
      break;
    };

  case 'bookings':
    if (!optionalInput) {
      return bookings(bookingsSelect)
      .then(res => {
        client.end();
        print.pt(res)
      })
      .catch(err => console.log(error));
      break;
    } else {
      return bookingsForRoom(bookingsForRoomSelect, optionalInput)
      .then(res => {
        client.end();
        print.pt(res)
      })
      .catch(err => console.log(error));
      break;
    }

  default:
    console.log('Please enter a command after hotel.');
    console.log('Commands are guests, rooms, rooms --available, bookings, and bookings followed by a room.');
    client.end();
};
