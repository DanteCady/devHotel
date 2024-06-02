import React from "react";
import BookButton from "../components/bookButton";

const Hotel = ({ hotelRooms, hotelName }) => {
    return (
        <div>
            <h1>{hotelName}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Room ID</th>
                        <th>Room Type</th>
                        <th>Room Price</th>
                        <th>Room Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {hotelRooms.map((room) => (
                        <tr key={room.roomId}>
                            <td>{room.roomId}</td>
                            <td>{room.roomType}</td>
                            <td>{room.roomPrice}$</td>
                            <td>{room.roomCapacity}</td>
                            <td>
                                <BookButton room={room} hotelName={hotelName} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Hotel;
