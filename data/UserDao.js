import React, { useState, useEffect } from "react";
function UserDao() {
  const [users, setUsers] = useState(false);
  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setUsers(data);
      });
  }
  function createUser() {
    let name = prompt("Enter user name");
    let password = prompt("Enter user password");
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getUser();
      });
  }
  function deleteUser() {
    let id = prompt("Enter user id");
    fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getUser();
      });
  }

  return (
    <div>
      {users ? users : "There is no user data available"}
      <br />
      <button onClick={createUser}>Add user</button>
      <br />
      <button onClick={deleteUser}>Delete user</button>
    </div>
  );
}
export default UserDao;
