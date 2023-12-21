import React, { useState } from 'react';

const ReminderModal = ({ onClose, onSave, reminder }) => {
  const [editedReminder, setEditedReminder] = useState({ ...reminder });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedReminder((prevReminder) => ({
      ...prevReminder,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedReminder);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-[10000000000000000]">
      <div className="bg-white p-8 rounded-2xl max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-4 info-text m-auto mt-4 max-w-lg text-center">
          {reminder ? 'Edit Reminder' : 'Add New Reminder'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex">
            <div className="w-1/3 pr-4">
              <label className="font-semibold mb-1 info-text m-auto mt-4 max-w-lg mr-5">Title:</label>
            </div>
            <div className="w-2/3">
              <input
                type="text"
                name="title"
                value={editedReminder.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-4"
                placeholder="Enter the title"
              />
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="w-1/3 pr-4">
              <label className="font-semibold mb-1 info-text m-auto mt-4 max-w-lg mr-5">End Date and Time:</label>
            </div>
            <div className="w-2/3">
              <input
                type="datetime-local"
                name="endDateTime"
                value={editedReminder.endDateTime}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-4"
              />
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="w-1/3 pr-4">
              <label className="font-semibold mb-1 info-text m-auto mt-4 max-w-lg mr-5">Color:</label>
            </div>
            <div className="w-2/3">
              <input
                type="color"
                name="color"
                value={editedReminder.color}
                onChange={handleInputChange}
                className="mb-4"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-coral-red text-white px-4 py-2 rounded-full mt-4 mr-2"
            >
              {reminder ? 'Save Changes' : 'Add Reminder'}
            </button>
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full mt-4 ml-2"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Reminders = () => {
  const [reminders, setReminders] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editedReminderIndex, setEditedReminderIndex] = useState(null);

  const handleAddReminder = () => {
    setModalOpen(true);
    setEditedReminderIndex(null);
  };

  const handleEditReminder = (index) => {
    setModalOpen(true);
    setEditedReminderIndex(index);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditedReminderIndex(null);
  };

  const handleSaveReminder = (editedReminder) => {
    if (editedReminderIndex !== null) {
      // Edit existing reminder
      const updatedReminders = [...reminders];
      updatedReminders[editedReminderIndex] = editedReminder;
      setReminders(updatedReminders);
    } else {
      // Add new reminder
      setReminders([...reminders, editedReminder]);
    }
    handleCloseModal();
  };

  const handleDeleteReminder = (index) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this reminder?');
    if (shouldDelete) {
      const updatedReminders = [...reminders];
      updatedReminders.splice(index, 1);
      setReminders(updatedReminders);
    }
  };

  return (
    <div className="mt-10 font-palanquin">
      <h3 className='font-bold text-slate-gray text-[24px] mb-9'>Reminders</h3>

      {reminders.map((reminder, index) => (
        <div
          key={index}
          className={`bg-white flex items-center gap-4 mb-7 p-5 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out border-[5px]`}
          style={{ borderColor: reminder.color }}
        >
          <div className="flex justify-between items-center m-0 w-full">
            <div className="info">
              <h3>{reminder.title}</h3>
              <small className="text-[#7d8da1]">{reminder.endDateTime}</small>
            </div>
            <div className="flex items-center">
              <button
                className="bg-coral-red text-white px-4 py-2 rounded-full mr-2"
                onClick={() => handleEditReminder(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-full"
                onClick={() => handleDeleteReminder(index)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      <div
        className="bg-white flex items-center justify-center gap-4 mb-7 p-5 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out border-[3px] border-pale-blue hover:shadow-none hover:text-white font-bold text-xl hover:bg-coral-red hover:border-dashed hover:border-white"
        onClick={handleAddReminder}
      >
        <h3>Add Reminder</h3>
      </div>

      {isModalOpen && (
        <ReminderModal
          onClose={handleCloseModal}
          onSave={handleSaveReminder}
          reminder={editedReminderIndex !== null ? reminders[editedReminderIndex] : null}
        />
      )}
    </div>
  );
};

export default Reminders;
