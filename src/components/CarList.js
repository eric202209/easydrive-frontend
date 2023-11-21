import React, { useEffect, useState } from 'react';
import { getObjects } from '../service/apiService';
import { Link } from 'react-router-dom';

const CarList = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    const fetchCarList = async () => {
      try {
        const data = await getObjects('cars');
        setCarList(data);
      } catch (error) {
        console.error('Error fetching car list:', error);
      }
    };
    fetchCarList();
  }, []);

  return (
    <div>
      <h2>Car List</h2>
      {carList.map((car) => (
        <div key={car.id}>
          <p>Car Model: {car.model}</p>
          <p>Manufacturer: {car.manufacturer}</p>
          {/* Display other relevant details */}
          <Link to={`/cars/${car.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default CarList;