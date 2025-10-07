import React, { useState } from "react";

const RegisterUser = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  // Extra state for editing
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addUser = () => {
    const newUser = { firstname, lastname, email, password };

    if (isEditing) {
      // Update existing user
      let updatedUsers = [...allUsers];
      updatedUsers[editIndex] = newUser;
      setAllUsers(updatedUsers);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add new user
      setAllUsers([...allUsers, newUser]);
    }

    // Clear form after submit
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };

  const deleteUser = (index) => {
    const confirmDelete = confirm("Are you sure you want to delete this user?")
    if(confirmDelete){
      let newAllUsers = [...allUsers];
      newAllUsers.splice(index, 1);
      setAllUsers(newAllUsers);
    }
  };

  const editUser = (index) => {
    let user = allUsers[index];
    setFirstname(user.firstname);
    setLastname(user.lastname);
    setEmail(user.email);
    setPassword(user.password);

    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <>
      <div className="mx-auto col-7 my-4 p-3 border shadow-sm text-center">
        <h1 className="text-success">{isEditing ? "Edit User" : "Sign Up"}</h1>
        <input
          className="mb-3 form-control"
          type="text"
          placeholder="Enter your firstname"
          value={firstname}
          onChange={(event) => setFirstname(event.target.value)}
        />
        <input
          className="mb-3 form-control"
          type="text"
          placeholder="Enter your lastname"
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
        />
        <input
          className="mb-3 form-control"
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="mb-3 form-control"
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={addUser} className="mb-3 btn btn-success">
          {isEditing ? "Update User" : "Sign Up"}
        </button>
      </div>

      {allUsers.length === 0 ? (
        <div>
          <h1>No User yet</h1>
        </div>
      ) : (
        allUsers.map((user, index) => (
          <div key={index} className="border p-2 m-2">
            <p>User #{index + 1}</p>
            <h4>{user.firstname} {user.lastname}</h4>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <button
              onClick={() => deleteUser(index)}
              className="btn btn-danger me-2"
            >
              Delete User
            </button>
            <button
              onClick={() => editUser(index)}
              className="btn btn-primary"
            >
              Edit User
            </button>
          </div>
        ))
      )}
    </>
  );
};

export default RegisterUser;
