import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [userDetails, setUserDetails] = useState([]);

  const getUserData = (userName, uage) => {
    setUserDetails((prev) => {
      return [
        ...prev,
        { name: userName, age: uage, id: Math.random().toString() },
      ];
    });
  };
  console.log(userDetails);

  return (
    <>
      <AddUser onAddUser={getUserData} />
      <UserList users={userDetails} />
    </>
  );
}

export default App;
