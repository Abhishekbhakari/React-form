import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  background-color:  #a2d5c6;
  padding: 60px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width:40%;
  margin:0 auto;
`;

 const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-family: cursive;
  `;

 const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

 const StyledInputRadio = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;


 const StyledButton = styled.button`
  background-color: #077b8a;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;
`;


const FormComponent = ({ onSubmit }) => {
  // State 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [weekday, setWeekday] = useState(false);
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    if (name && email && contact && weekday && gender && dob) {
      
      const formData = {
        name,
        email,
        contact,
        weekday,
        gender,
        dob,
      };
     // onSubmit 
      onSubmit(formData);
      // Reset
      setName('');
      setEmail('');
      setContact('');
      setWeekday(false);
      setGender('');
      setDob('');
    } else {
      // Handle form validation errors
      console.error('Form validation error. Please check all fields.');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {/* Form fields */}
      <StyledLabel>Name: </StyledLabel>
      <StyledInput type="text" value={name} onChange={(e) => setName(e.target.value)} required />

      <StyledLabel>Email: </StyledLabel>
      <StyledInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <StyledLabel>Contact: </StyledLabel>
      <StyledInput type="number" value={contact} onChange={(e) => setContact(e.target.value)} required />

      <StyledLabel>Weekday: Mon to Fri </StyledLabel>
      <StyledInputRadio type="checkbox" checked={weekday} onChange={() => setWeekday(!weekday)} />

      <StyledLabel>Gender </StyledLabel>
      <StyledLabel>
        <StyledInputRadio type="radio" value="Male" checked={gender === 'Male'} onChange={() => setGender('Male')} />
        Male
      </StyledLabel>
      <StyledLabel>
        <StyledInputRadio type="radio" value="Female" checked={gender === 'Female'} onChange={() => setGender('Female')} />
        Female
      </StyledLabel>
      <br />

      <StyledLabel>Date of Birth: </StyledLabel>
      <StyledInput type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />

      {/* Submit button */}
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default FormComponent;
