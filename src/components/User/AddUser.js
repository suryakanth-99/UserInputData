import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError]=useState();
  const addSubmitHandler = (event) => {
    event.preventDefault();
    //console.log(enteredUsername + " " + enteredAge);
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0 )
    {
        setError(
          {
            title : 'Invalid Input',
            message : 'Please enter a valid name and age(non-empty values)',
          }
        );
    }
    if( +enteredAge<1)
    {
      setError(
        {
          title : 'Invalid Age',
          message : 'Please enter a non negative value for age',
        }
      );
    }
    else
    {
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
    }
  };
  const addUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const addAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  
  const addErrorHandler= () => 
  {
    setError(null);
  }

  return (
    <>
    {error && <ErrorModal title='Alert' message='Something went wrong' onConfirm={addErrorHandler}></ErrorModal> }
    <Card className={classes.input}>
      <form onSubmit={addSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={addUsernameHandler}
          value={enteredUsername}
        ></input>
        <label htmlFor="age">Age(years)</label>
        <input
          id="age"
          type="number"
          onChange={addAgeHandler}
          value={enteredAge}
        ></input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUser;
