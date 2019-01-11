import React from 'react';
import classes from './Landing.css';

const landing = (props) => (
    <div className={classes.Landing}> 
        <h1>Hello, I am Faheem Ahmad <br />
        a Full Stack Web Developer </h1>
        <p>I love what i do, and vice-versa.</p>
        <span><button >View My Work &rarr;</button></span>
    </div>
);

export default landing;