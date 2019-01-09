import React from 'react';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}> 
        < a href={props.logolink}>{props.logoname} </a></div>
);

export default logo;