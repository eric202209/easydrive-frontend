import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CarDetail = () => {
  const { carId } = useParams();
  const [carDetails, setCarDetails] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        // Assuming you have an API endpoint to fetch car details by carId
        const response = await fetch(`http://localhost:3000/api/cars/${carId}`);
        const data = await response.json();
        setCarDetails(data);
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    };

    fetchCarDetails();
  }, [carId]);

  return (
    <div>
      <h2>Car Detail</h2>
      <p>Car ID: {carId}</p>

      {carDetails ? (
        <div>
          <p>Car Model: {carDetails.model}</p>
          <p>Manufacturer: {carDetails.manufacturer}</p>
          {/* Display other relevant details */}
        </div>
      ) : (
        <p>Loading car details...</p>
      )}
    </div>
  );
}

export default CarDetail;