import React, { useState } from "react";
import DatePicker from "react-datepicker";

function ToDoItem(props) {
  // Define state for edit mode and edited text
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(props.inputItem.text);
  const [editedDueDate, setEditedDueDate] = useState(props.dueDate);
  const [editedDueTime, setEditedDueTime] = useState(props.dueTime);

  // Function to handle edit button click
  function handleEdit() {
    setEditMode(true); // Set edit mode to true
  }

  // Function to handle save button click
  function handleSave() {
    props.onSave(props.id, editedText, editedDueDate, editedDueTime); // Call onSave function from parent with item id, edited text, edited due date, and edited due time
    setEditMode(false); // Set edit mode to false
  }

  // Function to handle cancel button click
  function handleCancel() {
    setEditMode(false); // Set edit mode to false
    setEditedText(props.inputItem.text); // Reset edited text to original value
    setEditedDueDate(props.dueDate); // Reset edited due date to original value
    setEditedDueTime(props.dueTime); // Reset edited due time to original value
  }

  // Function to handle input changes during editing
  function handleInputChange(event) {
    const newValue = event.target.value;
    setEditedText(newValue); // Update edited text
  }

  // Function to handle due date change during editing
  function handleDueDateChange(event) {
    const newDueDate = event.target.value;
    setEditedDueDate(newDueDate); // Update edited due date
  }

  // Function to handle due time change during editing
  function handleDueTimeChange(event) {
    const newDueTime = event.target.value;
    setEditedDueTime(newDueTime); // Update edited due time
  }

  // Render different content based on edit mode
  if (editMode) {
    // If in edit mode, render input fields for edited text, due date, and due time
    return (
      <div>
        {/* Input field for edited text */}
        <input type="text" value={editedText} onChange={handleInputChange} />
        <label>Due Date:</label>
        {/* <DatePicker selected={editedDueDate} onChange={handleDueDateChange} /> */}
        <input
          type="date"
          value={editedDueDate}
          onChange={handleDueDateChange}
        />
        <label>Due Time:</label>
        {/* <TimePicker onChange={handleDueTimeChange} value={editedDueTime} /> */}
        <input
          type="time"
          value={editedDueTime}
          onChange={handleDueTimeChange}
        />
        {/* Save and Cancel buttons */}
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    );
  } else {
    // If not in edit mode, render the item text, due date, due time, edit button, and delete button
    return (
      <div className="to-do-item">
        <div className="to-do-top">
          {/* Display the text of the to-do item */}
          <span className="to-do-item-text">{props.inputItem.text}</span>
          <div className="to-do-item-datetime">
            <span>
              {props.dueDate && <span> Due Date: {props.dueDate}</span>}
            </span>
            <span>
              {props.dueTime && <span> Due Time: {props.dueTime}</span>}
            </span>
          </div>
        </div>
        <div className="to-do-item-buttons">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => props.onClicked(props.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default ToDoItem;
