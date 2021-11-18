import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Pour Over Kettle",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Health Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      {/* display expenses list by passing expense items */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
