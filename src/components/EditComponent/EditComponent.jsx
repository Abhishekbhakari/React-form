import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledModalLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const StyledModalInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledModalButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
`;

const StyledModalCancelButton = styled(StyledModalButton)`
  background-color: #f44336;
`;


const EditModalComponent = ({ rowData, onSave, onClose }) => {
  // State 
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedContact, setEditedContact] = useState('');
  const [editedWeekday, setEditedWeekday] = useState(false);
  const [editedGender, setEditedGender] = useState('');
  const [editedDob, setEditedDob] = useState('');

  // Effect to pre-fill form 
  useEffect(() => {
    setEditedName(rowData.name);
    setEditedEmail(rowData.email);
    setEditedContact(rowData.contact);
    setEditedWeekday(rowData.weekday);
    setEditedGender(rowData.gender);
    setEditedDob(rowData.dob);
  }, [rowData]);

  // Function to handle modal form submission
  const handleSave = () => {
    // Construct updated row data object
    const updatedData = {
      name: editedName,
      email: editedEmail,
      contact: editedContact,
      weekday: editedWeekday,
      gender: editedGender,
      dob: editedDob,
    };
   
    onSave(updatedData);
    // Close the modal
    onClose();
  };

  return (
    <StyledModal>
      {/* Modal form fields */}
      <StyledModalLabel>Name: </StyledModalLabel>
      <StyledModalInput type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} required />

      <StyledModalLabel>Email: </StyledModalLabel>
      <StyledModalInput type="email" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} required />

      <StyledModalLabel>Contact: </StyledModalLabel>
      <StyledModalInput type="number" value={editedContact} onChange={(e) => setEditedContact(e.target.value)} required />

      <StyledModalLabel>Weekday: </StyledModalLabel>
      <StyledModalInput type="checkbox" checked={editedWeekday} onChange={() => setEditedWeekday(!editedWeekday)} />

      <StyledModalLabel>Gender: </StyledModalLabel>
      <StyledModalLabel>
        <StyledModalInput type="radio" value="Male" checked={editedGender === 'Male'} onChange={() => setEditedGender('Male')} />
        Male
      </StyledModalLabel>
      <StyledModalLabel>
        <StyledModalInput type="radio" value="Female" checked={editedGender === 'Female'} onChange={() => setEditedGender('Female')} />
        Female
      </StyledModalLabel>

      <StyledModalLabel>Date of Birth: </StyledModalLabel>
      <StyledModalInput type="date" value={editedDob} onChange={(e) => setEditedDob(e.target.value)} required />

      {/* Save and Cancel buttons */}
      <StyledModalButton onClick={handleSave}>Save</StyledModalButton>
      <StyledModalCancelButton onClick={onClose}>Cancel</StyledModalCancelButton>
    </StyledModal>
  );
};

export default EditModalComponent;
