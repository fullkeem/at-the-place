import React from 'react';
import classes from './ThirdSlide.module.scss';

const ThirdSlide = (props) => {
  return (
    <>
      <div className={classes.slide_wrapper}>
        <img src="src/assets/office.png" alt="office_img" />
        <section className={classes.description_section}>
          <p>{props.text}</p>
          <h1>{props.title}</h1>
        </section>
      </div>
    </>
  );
};

export default ThirdSlide;
