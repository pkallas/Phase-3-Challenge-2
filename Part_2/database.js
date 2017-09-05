const client = require('./pg');
const guestsSelect = 'SELECT * FROM guests';
const roomsSelect = 'SELECT room_number, capacity, available FROM rooms';
const availableRoomsSelect = `SELECT room_number, capacity, available FROM rooms
WHERE available = true`;
const bookingsSelect = `SELECT room_number, name, check_in, check_out FROM bookings
JOIN rooms ON rooms.id = bookings.room_id
JOIN guests ON guests.id = bookings.guest_id
WHERE check_out > CURRENT_DATE`;
const bookingsForRoomSelect = `SELECT room_number, name, check_in, check_out FROM bookings
JOIN rooms ON rooms.id = bookings.room_id
JOIN guests ON guests.id = bookings.guest_id
WHERE check_out > CURRENT_DATE
AND room_number = $1`;

const guests = function (text) {
  return client.query(text)
  .then(res => res.rows)
  .catch(error => console.log(error));
};

const rooms = function (text) {
  return client.query(text)
  .then(res => res.rows)
  .catch(error => console.log(error));
};

const availableRooms = function (text) {
  return client.query(text)
  .then(res => res.rows)
  .catch(error => console.log(error));
};

const bookings = function (text) {
  return client.query(text)
  .then(res => res.rows)
  .catch(error => console.log(error));
};

const bookingsForRoom = function (text, roomNumber) {
  return client.query(text, [roomNumber])
  .then(res => res.rows)
  .catch(error => console.log(error));
};

module.exports = {
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
};
