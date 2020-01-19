import React from "react";

const Person = props => {
  return (
    <div className="container">
      <h2>{props.data.name}</h2>
      <h3>
        {props.data.age} | {props.data.email}
      </h3>
    </div>
  );
};

export default Person;
