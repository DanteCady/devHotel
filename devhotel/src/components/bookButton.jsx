import React from "react";

const BookButton = ({ room, hotelName }) => {
 
    const handleBooking = () => {  
        alert(`You have booked a ${room.roomType} room at ${hotelName}`);
    };

    return (
        <div>
        <button onClick={handleBooking}>Book {room.roomType} room at {hotelName}</button>
        </div>
    );
    }

export default BookButton;