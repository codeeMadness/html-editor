import classes from './Navigation.module.css';

const Navigation = (props) => {
return (
    <div className={classes.wrapper}>
        <div className={classes.tabs}>
            {props.children}
        </div>
    </div>
)
}

export default Navigation;