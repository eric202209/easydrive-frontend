import React, { useState } from 'react';

const Booking = () => {
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [numberOfPassengers, setNumberOfPassengers] = useState(1); // Default to 1 passenger

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { pickupDate, returnDate, numberOfPassengers });
  };

  return (
    <div>
      <h2>Booking</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pickupDate">Pickup Date:</label>
        <input
          type="date"
          id="pickupDate"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          required
        />

        <label htmlFor="returnDate">Return Date:</label>
        <input
          type="date"
          id="returnDate"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          required
        />

        <label htmlFor="numberOfPassengers">Number of Passengers:</label>
        <input
          type="number"
          id="numberOfPassengers"
          value={numberOfPassengers}
          onChange={(e) => setNumberOfPassengers(parseInt(e.target.value, 10))}
          min="1"
          required
        />

        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
}

export default Booking;