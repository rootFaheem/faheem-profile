import React from 'react';
import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <nav className={classes.Nav}>
            <div className={classes.Logo}> < a href="/">LOGO </a></div>
            <div className={classes.Spacer}></div>
            <div className={classes.NavItems}>
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Work</a> </li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>

        </nav>
    </header>
);

export default toolbar;