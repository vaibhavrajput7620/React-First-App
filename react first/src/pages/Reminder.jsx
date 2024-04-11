// App.js
import  { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReminderForm from '../components/ReminderForm';
import ReminderList from '../components/ReminderList';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Reminder = () => {
    const [reminders, setReminders] = useState([]);

    useEffect(() => {
      try {
        const storedReminders = JSON.parse(localStorage.getItem('reminders'));
        console.log('Stored Reminders:', storedReminders);
        if (storedReminders) {
          setReminders(storedReminders);
        }
      } catch (error) {
        console.error('Error retrieving reminders from localStorage:', error);
      }
    }, []);
  
    useEffect(() => {
      try {
        localStorage.setItem('reminders', JSON.stringify(reminders));
        console.log('Reminders saved to localStorage:', reminders);
      } catch (error) {
        console.error('Error storing reminders in localStorage:', error);
      }
    }, [reminders]);
  
    const addReminder = (reminder) => {
      setReminders([...reminders, reminder]);
    };
  
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
     
      <ReminderForm addReminder={addReminder} />
      <ReminderList
        reminders={reminders}
        onDelete={deleteReminder}
        onEdit={editReminder}
      />
    </Container>
  );
};

export default Reminder;
