import PropTypes from "prop-types";
import  { useState } from 'react';
import styled from 'styled-components';
const FormContainer = styled.div`
  max-width: 500px;
  margin: auto;
  background-color: #3e2a54;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const Label = styled.label`
  display: block;
  color: #f2f2f2;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 5px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
`;

const Button = styled.button`
  background-color: #33fff8;
  padding: 5px;
  border: none;
  color: #1e282f;
  border-radius: 5px;
  width: 30%;
  height: 30px;

  &:hover {
    cursor: pointer;
    background-color: lightgrey;
  }
`;


function ReminderForm({ addReminder }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dateTime, setDateTime] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addReminder({ title, description, dateTime });
      setTitle('');
      setDescription('');
      setDateTime('');
    };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
      <Label>Title :</Label>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
         <Label>Description :</Label>
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
         <Label>dateTime :</Label>
        <Input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          required
        />
        <Button type="submit">Add Reminder</Button>
      </form>
    </FormContainer>
  );
}
ReminderForm.propTypes = {
    addReminder: PropTypes.string.isRequired,
    
   
  };

export default ReminderForm;
