// ReminderList.js
import PropTypes from "prop-types";
import ReminderItem from './ReminderItem';

const ReminderList = ({ reminders, onDelete, onEdit }) => {
  return (
    <div>
      {reminders.map((reminder, index) => (
        <ReminderItem
          key={index}
          reminder={reminder}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};
ReminderList.propTypes = {
    reminders: PropTypes.string.isRequired,
    onDelete:  PropTypes.func.isRequired,
    onEdit:   PropTypes.func.isRequired
    
   
  };


export default ReminderList;
