import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [name, setName] = useState([
    "jay",
    "nandhini",
    "shree",
    "vijay",
    "dass",
  ]);

  const [newName, setNewName] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleAdd = () => {
    if (newName === "") return;
    setName([...name, newName]);
    setNewName("");
  };

  const handleDelete = () => {
    const updatedList = name.filter((name) => name !== newName);
    setName(updatedList);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(name[index]);
  };

  const handleUpdate = () => {
    const updatedList = [...name];
    updatedList[editIndex] = editValue;
    setName(updatedList);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div>
      <h2>Name of List</h2>

      <input
        type="text"
        placeholder="Enter Your name"
        value={newName}
        onChange={handleChange}
      />
      <button onClick={handleAdd}> Add </button>
      <button onClick={handleDelete}>Delete</button>
      <ul>
        {name.map((name, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
                <button onClick={() => setEditIndex(null)}>Cancel</button>
              </>
            ) : (
              <>
                {name} <button onClick={() => handleEdit(index)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <h3>Updated List</h3>
      <ul>
        {name.map((list, index) => (
          <li key={index}>{list} </li>
        ))}
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
