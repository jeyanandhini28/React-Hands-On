import { useState } from "react";
import ReactDOM from "react-dom/client";

import { useState } from "react"

const App = () => {
  const [users, setUsers] = useState([
    {id: 1,name: "jeya",},
    { id: 2, name: "nandhini" },
    { id: 3, name: "nandy" },
  ]);
  const[input,setInput]=useState("");
  const[editId,setEditId]=useState(null);

  const handleChange=(e)=>{
    setInput(e.target.value);
  }
  const handleAdd=()=>{
    if(input.trim()==="")return;
    const newUser={id:Date.now(),name:input.trim()};
    setUsers([...users,newUser]);
    setInput("");
  }

  const handleDelete=(id)=>{
    setUsers(users.filter(user=>user.id !==id));
  }
  const handleEdit=(id)=>{
        const user=users.find(user=>user.id===id)
        setEditId(id);
        setInput(user.name);
  }

  const handleUpdate=()=>{
    users.map(user=>user.id===editId ?{...user,name:input.trim()}:user);
    setEditId(null);
    setInput("");
  }



  return (
    <div>
        <input type="text" value={input} onChange={handleChange}></input>
        {editId ?
        <button onClick={handleAdd}>Add</button> :
        <button onClick={handleUpdate}>Update</button>}
        <ul>
            {users.map(user=>
                <li key={user.id}>{user.name}
                <button onClick={()=>handleDelete(user.id)}>Delete</button>
                <button onClick={()=>handleEdit(user.id)}>Edit</button>
                </li>
                
            )}
        </ul>
    </div>
  )
}