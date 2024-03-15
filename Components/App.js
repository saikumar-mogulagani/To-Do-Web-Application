import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  // State hook to manage the list of to-do items
  const [items, setItems] = useState([]);

  // Function to handle adding new to-do items to the list
  function handleAddItem(inputText, dueDate, dueTime) {
    setItems((prevValue) => {
      return [...prevValue, { text: inputText, dueDate, dueTime }];
    });
  }

// Function to handle editing an existing to-do item in the list
function handleEditItem(index, editedText, editedDueDate, editedDueTime) {
  setItems((prevItems) => {
    // Create a copy of the previous items array
    const updatedItems = [...prevItems];
    // Update the specific item at the given index with the edited values
    updatedItems[index] = {
      ...updatedItems[index],
      text: editedText,
      dueDate: editedDueDate,
      dueTime: editedDueTime,
    };
    // Return the updated items array
    return updatedItems;
  });
}


  // Function to delete a to-do item from the list
  function deleteItem(id) {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => index !== id);
    });
  }

  return (
    <div className="Todocontainer">
      {/* Heading section */}
      <div className="Heading">
        <h1>To-Do List</h1>
      </div>

      {/* Input area for adding new to-do items */}
      <div className="form">
        <InputArea onAdd={handleAddItem} />
      </div>

      {/* Heading for displaying the list of to-do items */}
      <div className="Heading">
        <h2>Your Tasks</h2>
      </div>

      {/* List of to-do items */}
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              inputItem={todoItem}
              dueDate={todoItem.dueDate}
              dueTime={todoItem.dueTime}
              onClicked={deleteItem}
              onSave={handleEditItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
