\c hotel_db

COPY guests (name, email) FROM '/Users/pkallas/Desktop/Phase_3_Challenge_2/Part_2/guests.csv' DELIMITERS ',' CSV;
COPY rooms (room_number, capacity) FROM '/Users/pkallas/Desktop/Phase_3_Challenge_2/Part_2/rooms.csv' DELIMITERS ',' CSV;
COPY bookings (room_id, guest_id, check_in, check_out) FROM '/Users/pkallas/Desktop/Phase_3_Challenge_2/Part_2/bookings.csv' DELIMITERS ',' CSV;

-- After data has been loaded into the database, update the rooms table to reflect bookings.
-- Available column in rooms table should be set to true if a guest has booked a room past the current date.
-- For this project, the current date is 2017-09-05. This is the date that will be used to determine
-- if a room is available or not.
UPDATE rooms
SET available = true
FROM bookings
WHERE bookings.check_out > DATE '2017-09-05';
