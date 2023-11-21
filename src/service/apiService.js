const BASE_URL = 'http://localhost:3000/api';

// Create operation
export const createObject = async (newObject) => {
  try {
    const response = await fetch(`${BASE_URL}/objects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newObject),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating object:', error);
    throw error;
  }
};

// Read operation
export const getObjects = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching objects:', error);
    throw error;
  }
};

// Update operation
export const updateObject = async (objectId, updatedObject) => {
  try {
    const response = await fetch(`${BASE_URL}/objects/${objectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedObject),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating object:', error);
    throw error;
  }
};

// Delete operation
export const deleteObject = async (objectId) => {
  try {
    const response = await fetch(`${BASE_URL}/objects/${objectId}`, {
      method: 'DELETE',
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting object:', error);
    throw error;
  }
};