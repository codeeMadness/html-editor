import { Fragment } from "react";
import Navigation from "../common/Navigation";
import NavItem from "../common/NavItem";
import classes from "./Content.module.css";
import Editor from "./Editor";
import FunctionalButton from "./FunctionalButton";
import ProcessorFrame from "./ProcessorFrame";

const Content = () => {
  return (
    <Fragment>
      <FunctionalButton />
      <div className={classes["float-parent-element"]}>
        <div className={classes["float-child-element"]}>
          <div className={classes.editor}>
            <Navigation
              children={[
                <NavItem
                  key="html"
                  id="html"
                  tabName="HTML"
                  children={<Editor id="html-editor" />}
                />,
                <NavItem
                  key="css"
                  id="css"
                  tabName="CSS"
                  children={<Editor id="css-editor" />}
                />,
                <NavItem
                  key="js"
                  id="js"
                  tabName="JS"
                  children={<Editor id="js-editor" />}
                />,
              ]}
            />
          </div>
        </div>
        <div className={classes["float-child-element"]}>
          <div className={classes.frame}>
            <ProcessorFrame />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Content;
