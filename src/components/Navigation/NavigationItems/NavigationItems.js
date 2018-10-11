import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'
import classes from './NavigationItems.css'
const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">
      Burger&nbsp;Builder
    </NavigationItem>
    <NavigationItem link="/orders">
      Orders
    </NavigationItem>
  </ul>
);

export default navigationItems;