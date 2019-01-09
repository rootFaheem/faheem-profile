import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems';
import Logo from './Logo/Logo';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <nav className={classes.Nav}>
            <Logo link={"/"} logoname={"Logo"}/>
            
            <div className={classes.Spacer}></div> 
            
            <NavigationItems 
                link={"/"} name={"ABOUT ME"}/>
            <NavigationItems 
                link={"/"} name={"WORK"}/>
            <NavigationItems 
                link={"/"} name={"CONTACT"}/>

        </nav>
    </header>
);

export default toolbar;