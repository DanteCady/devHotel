import React from 'react';
import Hotel from './views/hotel';
import { hotelRooms } from './components/hotelRooms';

const App = () => {
    return (
        <div>
          <Hotel hotelRooms={hotelRooms} />
        </div>
    );
}

export default App;
