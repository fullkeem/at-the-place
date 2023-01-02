import React from 'react';
import classes from './NavButton.module.scss';

const NavButton = (props) => {
  return (
    <>
      <button className={classes.nav_button}>
        <span>{props.title} </span>
      </button>
    </>
  );
};

export default NavButton;
