import React, { useState, useEffect } from "react";
import axiosWithAUth from "./utils/axiosWithAuth";
import Person from "./person.js";

const PeopleList = props => {
  const [friendsList, setfriendsList] = useState([]);

  useEffect(() => {
    axiosWithAUth()
      .get("/api/friends")
      .then(res => {
        setfriendsList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [friendsList]);

  const [inputField, setInputField] = useState({
    id: "",
    name: "",
    age: "",
    email: ""
  });

  //   const login = localStorage.getItem("token")

  const changeHandler = event => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    const addUser = { ...inputField, id: Date.now() };
    axiosWithAUth()
      .post("/api/friends", addUser)
      .then(res => {
        console.log("res", res, "addUser", addUser);
        setfriendsList([...friendsList, res.data]);
        setInputField({ id: "", name: "", age: "", email: "" });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={inputField.name}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="age"
          placeholder="Enter age"
          value={inputField.age}
          onChange={changeHandler}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={inputField.email}
          onChange={changeHandler}
        />
        <button> + </button>
      </form>
      <div className="list">
        {friendsList
          ? friendsList.map(cv => {
              return <Person data={cv} key={cv.id} />;
            })
          : "You Have No Friends"}
      </div>
    </div>
  );
};

export default PeopleList;
