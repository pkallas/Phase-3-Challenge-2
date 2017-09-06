const client = require('./pg');

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
  rooms,
  availableRooms,
  bookings,
  bookingsForRoom,
};
