import { Fragment } from "react";
import Button from "../common/Button";
import classes from "./FunctionalButton.module.css";

const FunctionalButton = (props) => {
  return <Fragment>
    <Button name='Run'/>
    <Button name='Reset'/>
  </Fragment>;
};

export default FunctionalButton;
