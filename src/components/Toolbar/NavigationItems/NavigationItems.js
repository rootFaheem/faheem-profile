import React from 'react';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <div className={classes.NavigationItems}>
                <ul>
                    <li><a href={props.link}>{props.name}</a></li>
                </ul>
            </div>
);

export default navigationItems;