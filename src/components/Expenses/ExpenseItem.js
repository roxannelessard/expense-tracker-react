import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// import React, { useState } from 'react';

const ExpenseItem = (props) => {
  // with use state we're creating a variable which will lead to call this function again
  // props.title is the default value
  // it returns a function which we can then call to assign a new value
  // (we'll be assigning new values by calling a function) for that UseState returns an array [currentStateValue, updatingFunction]
  // so we use array destructuring to store the elements
  // state is separated on a per component basis
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   // by calling setTitle() the component return by the function will be executed again!
  //   setTitle("Updated");
  //   console.log(title);
  // };

  return (
    // you can't use your custom components as wrappers around other kind of content
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">{props.amount}</div>
        {/* you write clickHandler without the () because you just want to point at the function & not execute the code right now */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
