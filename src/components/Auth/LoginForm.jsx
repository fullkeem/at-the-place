import React from 'react';

import classes from './LoginForm.module.scss';

import Input from '../layout/Input/Input';
import NavButton from '../layout/Buttons/NavButton';

const LoginForm = () => {
  return (
    <div className={classes.login_container}>
      <div className={classes.login_card_wrapper}>
        <section className={classes.login_title_section}>
          <h1>다시 뵙게 되어서 반가워요.</h1>
        </section>
        <form className={classes.login_input_wrapper}>
          <Input placeholder={'이메일 주소  ( 형식: hello@atThePlace.com )'} />
          <Input placeholder={'비밀번호'} />
        </form>
        <NavButton title={'회원가입'} />
      </div>
    </div>
  );
};

export default LoginForm;
