import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const Logo = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="BurgerBuilder"/>
  </div>
);

export default Logo;