import React from 'react';
import brandlogo from '../../../assets/logo1.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}> 
        <img src={brandlogo} alt="MyLogo"></img>
    </div>
);

export default logo;