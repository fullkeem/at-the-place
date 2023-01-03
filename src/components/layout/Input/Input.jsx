import React from 'react';
import classes from './Input.module.scss';

const Input = () => {
  return (
    <div className={classes.signup_inpu_wrappert}>
      <input placeholder={'이메일 주소  ( 형식: hello@atThePlace.com )'} />
    </div>
  );
};

export default Input;
