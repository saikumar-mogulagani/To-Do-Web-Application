import React, { useState } from "react";
import DatePicker from "react-datepicker";

function InputArea(props) {
  const [inputText, setInputText] = useState(""); // State for input text
  const [dueDate, setDueDate] = useState(getTodayDate()); // State for due date
  const [dueTime, setDueTime] = useState("12:00"); // State for due time

  // Function to handle input changes for the text input
  function handleInput(event) {
    const newValue = event.target.value;
    setInputText(newValue); // Update inputText state with the new value
  }

  // Function to handle input changes for the due date input
  function handleDueDateChange(event) {
    const newDueDate = event.target.value;
    setDueDate(newDueDate); // Update dueDate state with the new value
  }

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // Function to handle input changes for the due time input
  function handleDueTimeChange(event) {
    const newDueTime = event.target.value;
    setDueTime(newDueTime); // Update dueTime state with the new value
  }

  // Function to handle adding the to-do item
  function handleAddItem() {
    // Call the onAdd function passed from the parent component
    // Pass the inputText, dueDate, and dueTime as arguments
    props.onAdd(inputText, dueDate, dueTime);

    // Clear the input fields after adding the item
    setInputText("");
    setDueDate(getTodayDate());
    setDueTime("");
  }

  return (
    <div>
      {/* Input field for adding the text of the to-do item */}
      <input
        type="text"
        placeholder="Add Item"
        value={inputText}
        onChange={handleInput}
      />
      <br />
      <label>Due Date:</label>
      <DatePicker selected={dueDate} onChange={(date) => setDueDate(date)} />
      <label>Due Time:</label>
      <br />
      <input type="time" value={dueTime} onChange={handleDueTimeChange} />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}

export default InputArea;
