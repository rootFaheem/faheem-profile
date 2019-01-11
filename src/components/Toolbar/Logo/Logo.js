import React from 'react';
import brandlogo from '../../../assets/logo1.png';
import classes from './Logo.css';

const logo = (props) => {

  return  ( <div className={classes.Logo} > 
            <a className="tooltip" href={"/"}> <img src={brandlogo} alt="MyLogo"></img></a>
        </div>
  )};
    
export default logo;