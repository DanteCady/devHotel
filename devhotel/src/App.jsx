import React from 'react';
import Hotel from './views/hotel';
import { hotelRooms, hotelInfo } from './components/hotelRooms';

const App = () => {
    return (
        <div>
          <Hotel hotelRooms={hotelRooms} hotelName={hotelInfo.hotelName} />
        </div>
    );
}

export default App; 
