import React from "react";

const BookButton = ({ room, hotelName }) => {
    return (
        <div>
        <button>Book {room.roomType} room at {hotelName}</button>
        </div>
    );
    }

export default BookButton;