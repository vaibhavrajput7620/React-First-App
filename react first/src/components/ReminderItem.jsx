// ReminderItem.js
import PropTypes from "prop-types";
import styled from 'styled-components';

// const Container = styled.div`
//   margin-bottom: 20px;
// `;

// const Title = styled.h3`
//   margin-bottom: 5px;
// `;

// const Description = styled.p`
//   margin-bottom: 5px;
// `;

// const DateTime = styled.p`
//   margin-bottom: 5px;
// `;

// const Button = styled.button`
//   margin-right: 10px;
// `;

const ReminderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const Th = styled.th`
  padding: 5px;
  border: 1px solid rgb(2, 1, 1);
  text-align: center;
  color: #f2f2f2;
  background-color: #3e2a54;
`;

const Td = styled.td`
  padding: 5px;
  border: 1px solid rgb(2, 1, 1);
  text-align: center;
`;

const ReminderItem = ({ reminder, onDelete, onEdit }) => {
  const { title, description, dateTime } = reminder;

  return (


<ReminderTable>
        <thead>
          <tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Date & Time</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
         
            <tr>
              <Td>{title}</Td>
              <Td>{description}</Td>
              <Td>{dateTime}</Td>
              <Td>
              <button onClick={() => onDelete(reminder)}>Delete</button>
         <button onClick={() => onEdit(reminder)}>Edit</button>
              </Td>
            </tr>
        
        </tbody>
      </ReminderTable>

    
    // <Container>
    //   <Title>{title}</Title>
    //   <Description>{description}</Description>
    //   <DateTime>{dateTime}</DateTime>
    //   <Button onClick={() => onDelete(reminder)}>Delete</Button>
    //   <Button onClick={() => onEdit(reminder)}>Edit</Button>
    // </Container>
  );
};
ReminderItem.propTypes = {
    reminder: PropTypes.string.isRequired,
    onDelete:  PropTypes.func.isRequired,
    onEdit:   PropTypes.func.isRequired
    
   
  };

export default ReminderItem;
