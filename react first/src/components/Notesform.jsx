import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 600px;
    margin: 20px auto;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
    text-align: center;
`;
const NotesContainer = styled.div`
    margin-top: 20px;
`;
const AddNote = styled.div`
    margin-bottom: 10px;
`;
const Textarea = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 10px;
`;

const Button = styled.button`
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background-color: #45a049;
    }
`;
const Form = styled.form`
  margin-bottom: 20px;
`;

const Notesform = ({ addNote }) => {

    const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    addNote({
      id: Date.now(),
      content,
    });
    setContent('');
    window.location.replace("http://localhost:5173/welcomepage/viewnotes");
  };
  return (
    <Container>
    <Header>
        <h1>My Notes</h1>
    </Header>
    <NotesContainer>
    <AddNote>
    <Form onSubmit={handleSubmit}>
      <Textarea  value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a new note..." />
      <Button type="submit">Add Note</Button>
      </Form>
      </AddNote>
      </NotesContainer>
      </Container>

  )
  };
Notesform.propTypes = {
    addNote: PropTypes.string.isRequired,
    
   
  };
export default Notesform;
