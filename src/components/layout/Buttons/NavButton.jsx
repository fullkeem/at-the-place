import React from 'react';
import classes from './NavButton.module.scss';

const NavButton = (props) => {
  return (
    <>
      <button className={classes.nav_button} onClick={props.onClick}>
        <span>{props.title} </span>
      </button>
    </>
  );
};

export default NavButton;
