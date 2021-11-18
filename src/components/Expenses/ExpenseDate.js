import "./ExpenseDate.css";

function ExpenseDate(props) {
  // Add .toISOString() because it is a date object
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
