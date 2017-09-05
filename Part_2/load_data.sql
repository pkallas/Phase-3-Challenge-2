\c hotel_db

COPY guests (name, email) FROM '/Users/pkallas/Desktop/Phase_3_Challenge_2/Part_2/guests.csv' DELIMITERS ',' CSV;
COPY rooms (room_number, capacity) FROM '/Users/pkallas/Desktop/Phase_3_Challenge_2/Part_2/rooms.csv' DELIMITERS ',' CSV;
COPY bookings (room_id, guest_id, check_in, check_out) FROM '/Users/pkallas/Desktop/Phase_3_Challenge_2/Part_2/bookings.csv' DELIMITERS ',' CSV;

-- After data has been loaded into the database, update the rooms table to reflect bookings.
-- Available column in rooms table should be set to false if a guest has not yet checked out.
-- For this project, the current date used is 2017-08-27.
-- This is the date that will be used to determine if a room is available or not.
-- This date was chosen to so that more than one room could be unavailble as the tables are created.
UPDATE rooms
SET available = false
FROM bookings
WHERE bookings.check_in <= DATE '2017-08-27'
AND bookings.check_out > DATE '2017-08-27'
AND bookings.room_id = rooms.id;
