import React, { useState } from 'react';
import classes from './Input.module.scss';

const Input = (props) => {
  const [email, setEmail] = useState('');
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  console.log(email);
  return (
    <div className={classes.signup_input_wrapperr}>
      <input placeholder={props.placeholder} onChange={emailChangeHandler} />
    </div>
  );
};

export default Input;
