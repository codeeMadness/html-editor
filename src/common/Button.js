import classes from "./Button.module.css";

const Button = (props) => {
  return <button className={classes.run}>{props.name}</button>;
};

export default Button;
