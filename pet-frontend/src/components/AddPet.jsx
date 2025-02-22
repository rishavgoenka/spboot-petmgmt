import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddPet.css';

function AddPet() {
  const navigate = useNavigate();
  const [pet, setPet] = useState({
    name: '',
    disease: '',
    age: '',
    gender: '',
    species: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/newpet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet),
      });
      if (response.ok) {
        navigate('/pets');
      }
    } catch (error) {
      console.error('Error adding pet:', error);
    }
  };

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-pet">
      <form onSubmit={handleSubmit} className="pet-form">
        <h2>Add New Pet</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={pet.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Disease:</label>
          <input
            type="text"
            name="disease"
            value={pet.disease}
            onChange={handleChange}
            placeholder="Enter 'None' if no disease"
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={pet.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={pet.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Species:</label>
          <input
            type="text"
            name="species"
            value={pet.species}
            onChange={handleChange}
            required
            placeholder="e.g., Dog, Cat, etc."
          />
        </div>
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}

export default AddPet;