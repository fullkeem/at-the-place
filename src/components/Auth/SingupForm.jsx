import React from 'react';
import Input from '../layout/Input/Input';
import NavButton from '../layout/Buttons/NavButton';
import classes from './SignupForm.module.scss';

const SingupForm = () => {
  return (
    <div className={classes.signup_container}>
      <div className={classes.signup_card_wrapper}>
        <section className={classes.signup_title_section}>
          <h1>회원님의 정보를 입력해 주세요</h1>
        </section>
        <form className={classes.signup_input_wrapper}>
          <Input placeholder={'이메일 주소  ( 형식: hello@atThePlace.com )'} />
          <Input placeholder={'성명'} />
          <Input placeholder={'비밀번호'} />
          <Input placeholder={'비밀번호 재확인'} />
        </form>
        <NavButton title={'회원가입'} />
      </div>
    </div>
  );
};

export default SingupForm;
