const client = require('./pg');
const print = require('node-print');
const guestsSelect = 'SELECT * FROM guests';
const roomsSelect = 'SELECT room_number, capacity, available FROM rooms';

const guests = function (text) {
  return client.query(text)
  .then(res => {
    client.end();
    print.pt(res.rows);
    return res.rows;
  })
  .catch(error => console.log(error));
};

const rooms = function (text) {
  return client.query(text)
  .then(res => {
    client.end();
    print.pt(res.rows);
    return res.rows;
  })
  .catch(error => console.log(error));
};

module.exports = {
  guests,
  guestsSelect,
  rooms,
  roomsSelect,
};
