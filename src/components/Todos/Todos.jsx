import React, { useEffect, useState } from "react";
import "./Todos.css";

const Todos = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Todos</h1>
      {users.map((user) => (
        <div className={user.completed ? "users" : "users completed"}>
          <p>
            {user.title} : {user.completed ? "Completed" : "Not Completed"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
