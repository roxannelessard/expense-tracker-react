import './ExpenseItem.css';

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      {/* Add .toISOString() because it is a date object */}
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
