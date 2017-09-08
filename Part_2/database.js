const client = require('./pg');

const guests = function () {
  return client.query('SELECT * FROM guests')
  .then(res => res.rows)
  .catch(error => console.log(error));
};

const rooms = function () {
  return client.query('SELECT room_number, capacity, available FROM rooms')
  .then(res => res.rows)
  .catch(error => console.log(error));
};

const availableRooms = function () {
  return client.query(`SELECT room_number, capacity, available FROM rooms
  WHERE available = true`)
  .then(res => res.rows)
  .catch(error => console.log(error));
};

const bookings = function () {
  return client.query(`SELECT room_number, name, check_in, check_out FROM bookings
  JOIN rooms ON rooms.id = bookings.room_id
  JOIN guests ON guests.id = bookings.guest_id
  WHERE check_out > CURRENT_DATE`)
  .then(res => res.rows)
  .catch(error => console.log(error));
};

const bookingsForRoom = function (roomNumber) {
  return client.query(`SELECT room_number, name, check_in, check_out FROM bookings
  JOIN rooms ON rooms.id = bookings.room_id
  JOIN guests ON guests.id = bookings.guest_id
  WHERE check_out > CURRENT_DATE
  AND room_number = $1`, [roomNumber])
  .then(res => res.rows)
  .catch(error => console.log(error));
};

module.exports = {
  guests,
  rooms,
  availableRooms,
  bookings,
  bookingsForRoom,
};
