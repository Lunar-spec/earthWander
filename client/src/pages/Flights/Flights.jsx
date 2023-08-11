import { useState } from 'react';
import './Flights.scss'; // Import the SCSS file for styling

const Flights = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [flights, setFlights] = useState([]);

  const handleSearch = () => {
    // Simulate flight search results
    const searchResults = [
      {
        flightName: 'Flight A',
        details: 'Direct flight, economy class',
        price: '$200',
      },
      {
        flightName: 'Flight B',
        details: 'Connecting flight, business class',
        price: '$350',
      },
      // Add more flight options here
    ];
    setFlights(searchResults);
  };

  const handlePurchase = (flightName) => {
    alert(`You have purchased ${flightName}`);
  };

  return (
    <div className="flight-search-container">
      <h2>Flight Search</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="From"
          value={fromLocation}
          onChange={(e) => setFromLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="To"
          value={toLocation}
          onChange={(e) => setToLocation(e.target.value)}
        />
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="flight-list">
        {flights.map((flight, index) => (
          <div className="flight-card" key={index}>
            <h3>{flight.flightName}</h3>
            <p>{flight.details}</p>
            <p>Price: {flight.price}</p>
            <button onClick={() => handlePurchase(flight.flightName)}>Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flights;
