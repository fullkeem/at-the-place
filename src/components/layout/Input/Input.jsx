import React from 'react';
import classes from './Input.module.scss';

const Input = (props) => {
  return (
    <div className={classes.signup_input_wrapperr}>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
