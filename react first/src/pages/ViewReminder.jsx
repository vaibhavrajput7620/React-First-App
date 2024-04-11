// App.js
import  { useState, useEffect } from 'react';
import styled from 'styled-components';

import ReminderList from '../components/ReminderList';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const ViewReminder = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const storedReminders = JSON.parse(localStorage.getItem('reminders'));
    if (storedReminders) {
      setReminders(storedReminders);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

 

  const deleteReminder = (reminderToDelete) => {
    const updatedReminders = reminders.filter(
      (reminder) => reminder !== reminderToDelete
    );
    setReminders(updatedReminders);
  };

  const editReminder = (editedReminder) => {
    const updatedReminders = reminders.map((reminder) =>
      reminder === editedReminder ? editedReminder : reminder
    );
    setReminders(updatedReminders);
  };

  return (
    <Container>
     
      <ReminderList
        reminders={reminders}
        onDelete={deleteReminder}
        onEdit={editReminder}
      />
    </Container>
  );
};

export default ViewReminder;
