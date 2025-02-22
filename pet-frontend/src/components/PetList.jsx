import { useState, useEffect } from 'react';
import PetCard from './PetCard';
import '../styles/PetList.css';

function PetList() {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/pets');
      const data = await response.json();
      setPets(data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/delpet/${id}`, {
        method: 'DELETE',
      });
      fetchPets();
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  const handleUpdate = async (id, updatedPet) => {
    try {
      await fetch(`http://localhost:8080/api/updatepet/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPet),
      });
      fetchPets();
    } catch (error) {
      console.error('Error updating pet:', error);
    }
  };

  return (
    <div className="pet-list">
      <h2>All Pets</h2>
      <div className="pets-grid">
        {pets.map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default PetList;