import './Card.css';

const Card = (props) => {
  // don't forget to put the whitespace to separate de class names (it is a long string)
  const classes = 'card ' + props.className;

  return (
    // children is what's inside my Card component
    <div className={classes}>{props.children}</div>
  )
}

export default Card;
