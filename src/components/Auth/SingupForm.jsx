import React from 'react';
import classes from './SignupForm.module.scss';

const SingupForm = () => {
  return (
    <div className={classes.signup_wrapper}>
      <div className={classes.card_wrapper}>
        <form className={classes.signup_input}>
          <input placeholder={'이메일 주소 (형식:hello@atThePlace.com)'} />
        </form>
      </div>
    </div>
  );
};

export default SingupForm;
