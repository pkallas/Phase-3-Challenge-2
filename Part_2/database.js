const client = require('./pg');
const guestsSelect = 'SELECT * FROM guests';
const print = require('node-print');

const guests = function (text) {
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
};
