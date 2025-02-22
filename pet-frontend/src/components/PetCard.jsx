import { useState } from 'react';
import '../styles/PetCard.css';

function PetCard({ pet, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPet, setEditedPet] = useState(pet);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(pet.id, editedPet);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedPet({
      ...editedPet,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeleteClick = () => {
    if (window.confirm(`Are you sure you want to delete ${pet.name}?`)) {
      onDelete(pet.id);
    }
  };

  return (
    <div className="pet-card">
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            name="name"
            value={editedPet.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="disease"
            value={editedPet.disease || ''}
            onChange={handleChange}
            placeholder="Disease"
          />
          <input
            type="number"
            name="age"
            value={editedPet.age}
            onChange={handleChange}
            placeholder="Age"
          />
          <select
            name="gender"
            value={editedPet.gender || ''}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="text"
            name="species"
            value={editedPet.species || ''}
            onChange={handleChange}
            placeholder="Species"
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <>
          <div className="pet-info">
            <h3>{pet.name}</h3>
            <p>ID: {pet.id}</p>
            <p>Disease: {pet.disease || 'None'}</p>
            <p>Age: {pet.age}</p>
            <p>Gender: {pet.gender || 'Not specified'}</p>
            <p>Species: {pet.species || 'Not specified'}</p>
          </div>
          <div className="pet-actions">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDeleteClick} className="delete-btn">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PetCard;