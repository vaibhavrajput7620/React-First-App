import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";

const StyledNote = styled.div`
  max-width: 600px;
  margin: 20px auto;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  margin: 10px;
  &:hover {
    background-color: #45a049;
  }
`;

const NotesItem = ({ note, editNote, deleteNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(note.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editNote(note.id, content);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteNote(note.id);
  };

  return (

    
    <StyledNote>
      {isEditing ? (
        <div>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button onClick={handleSave}>Save</Button>
        </div>
      ) : (
        <div>
          <p>{content}</p>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      )}
    </StyledNote>
  );
};

NotesItem.propTypes = {
  note: PropTypes.string.isRequired,
  editNote: PropTypes.string.isRequired,
  deleteNote: PropTypes.string.isRequired,
};
export default NotesItem;
