import React from "react";
import classes from "./Editor.module.css";

const Editor = (props) => {
  return <textarea className={classes.textarea} id={`${props.id}`} placeholder={props.id}></textarea>;
};

export default Editor;
