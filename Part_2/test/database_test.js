process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
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
} = require('../database');

describe('function guests', function () {
  it('Should return all guests from the guests table', function () {
    return guests(guestsSelect)
    .then(res => {
      expect(res.length).to.eql(20);
    });
  });

  it('Should return Aurthur Velti as the first guest', function () {
    return guests(guestsSelect)
    .then(res => {
      expect(res[0].name).to.eql('Aurthur Velti');
    });
  });

  it('Should return Penelope Searchfield as the last guest', function () {
    return guests(guestsSelect)
    .then(res => {
      expect(res[19].name).to.eql('Penelope Searchfield');
    });
  });
});

describe('function rooms', function () {
  it('Should return all room numbers, their capacity, and their availability from the rooms table', function () {
    return rooms(roomsSelect)
    .then(res => {
      expect(res.length).to.eql(18);
    });
  });

  it('Should return room 2A as the first room', function () {
    return rooms(roomsSelect)
    .then(res => {
      expect(res[0].room_number).to.eql('2A');
    });
  });

  it('Should return room 5A as the last room', function () {
    return rooms(roomsSelect)
    .then(res => {
      expect(res[17].room_number).to.eql('5A');
    });
  });
});

describe('function availableRooms', function () {
  it('Should return all room numbers and their capacity if they are available', function () {
    return availableRooms(availableRoomsSelect)
    .then(res => {
      expect(res.length).to.eql(16);
    });
  });

  it('Should only return rooms if they available', function () {
    return availableRooms(availableRoomsSelect)
    .then(res => {
      expect(res[0].available).to.eql(true);
    });
  });

  it('Should only return rooms if they available', function () {
    return availableRooms(availableRoomsSelect)
    .then(res => {
      expect(res[3].available).to.eql(true);
    });
  });

  it('Should only return rooms if they available', function () {
    return availableRooms(availableRoomsSelect)
    .then(res => {
      expect(res[15].available).to.eql(true);
    });
  });
});
