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

module.exports = {
  guestsSelect,
  roomsSelect,
  availableRoomsSelect,
  bookingsSelect,
  bookingsForRoomSelect,
};
