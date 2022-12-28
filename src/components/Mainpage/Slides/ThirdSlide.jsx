import React from 'react';
import classes from './ThirdSlide.module.scss';

const ThirdSlide = (props) => {
  return (
    <>
      <div className={classes.slide_wrapper}>
        <img src="src/assets/office.png" />
        <section className={classes.description_section}>
          <p>{props.text}</p>
          <h1>{props.title}</h1>
          {/* <button>구경하러 가기</button> */}
        </section>
      </div>
    </>
  );
};

export default ThirdSlide;
