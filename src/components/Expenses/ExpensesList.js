import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found.</p>;

  if (props.items.length === 0) {
    return (
      <h2 className="expense-list__fallback">Found no expenses.</h2>
    )
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
      <ExpenseItem
        // for performance purpose : this key help react to find the individual item that changed (if not react would update all content not just s specific thing)
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}
    </ul>
  );
};

export default ExpensesList;
