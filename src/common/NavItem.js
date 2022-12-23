import React, { useState } from 'react';
import classes from './NavItem.module.css';

const NavItem = (props) => {
    const [isSelected, setIsSelected] = useState(false); 
    const handleClicked = (e) => {
        setIsSelected(!isSelected);
    }
    return (
        <div className={classes.tab} onClick={handleClicked}>
            {isSelected && <input type="radio" name="css-tabs" id={props.id} defaultChecked={isSelected} className={classes["tab-switch"]}/>}
            {!isSelected && <input type="radio" name="css-tabs" id={props.id} defaultChecked={!isSelected} className={classes["tab-switch"]}/>}
            <label htmlFor="tab-1" className={classes["tab-label"]}>{props.tabName}</label>
            <div className={classes["tab-content"]}>
                {props.children}
            </div>
        </div>
    );
}

export default NavItem;