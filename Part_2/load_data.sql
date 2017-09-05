\c hotel_db

COPY guests (name, email) FROM '/Users/pkallas/Desktop/Phase_3_Challenge_2/Part_2/guests.csv' DELIMITERS ',' CSV;
COPY rooms (room_number, capacity) FROM '/Users/pkallas/Desktop/Phase_3_Challenge_2/Part_2/rooms.csv' DELIMITERS ',' CSV;
COPY bookings (room_id, guest_id, check_in, check_out) FROM '/Users/pkallas/Desktop/Phase_3_Challenge_2/Part_2/bookings.csv' DELIMITERS ',' CSV;
