import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

  const dummyData = [
    {
      id: "e1",
      title: "Pour Over Kettle",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Health Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Wooden Desk",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


const App = () => {
  const [expenses, setExpenses] = useState(dummyData);

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]);
    // Correct way below: we will use a function to use the latest state snapshot (because this depends from previous state)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      {/* display expenses list by passing expense items */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
