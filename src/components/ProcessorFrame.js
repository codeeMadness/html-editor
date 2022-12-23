import classes from "./ProcessorFrame.module.css";

const ProcessorFrame = () => {
  return <iframe title="frame" className={classes.frame} id="code"></iframe>;
};

export default ProcessorFrame;
