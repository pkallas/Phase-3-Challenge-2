const {
  guests,
  rooms,
  availableRooms,
  bookings,
  bookingsForRoom,
} = require('./database');
const client = require('./pg');
const print = require('node-print');
const optionalInput = process.argv[3];

switch (process.argv[2]) {
  case 'guests':
    return guests()
    .then(res => {
      client.end();
      print.pt(res)
    })
    .catch(error => console.log(error));
    break;

  case 'rooms':
    if (!optionalInput) {
      return rooms()
      .then(res => {
        client.end();
        print.pt(res)
      })
      .catch(error => console.log(error));
      break;
    } else if (optionalInput === '--available') {
      return availableRooms()
      .then(res => {
        client.end();
        print.pt(res)
      })
      .catch(error => console.log(error));
      break;
    } else {
      console.log('Please enter a command after hotel.');
      console.log('Commands are guests, rooms, rooms --available, bookings, and bookings followed by a room.');
      client.end();
      break;
    };

  case 'bookings':
    if (!optionalInput) {
      return bookings()
      .then(res => {
        client.end();
        print.pt(res)
      })
      .catch(err => console.log(error));
      break;
    } else {
      return bookingsForRoom(optionalInput)
      .then(res => {
        client.end();
        print.pt(res)
      })
      .catch(error => console.log(error));
      break;
    }

  default:
    console.log('Please enter a command after hotel.');
    console.log('Commands are guests, rooms, rooms --available, bookings, and bookings followed by a room.');
    client.end();
};
