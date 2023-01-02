import React from 'react';
import classes from './ThirdSlide.module.scss';

const ThirdSlide = (props) => {
  return (
    <>
      <div className={classes.slide_wrapper2}>
        <section className={classes.bg_image_section}>
          <img src="src/assets/map.png" />
        </section>
        <section className={classes.description_section}>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </section>
      </div>
    </>
  );
};

export default ThirdSlide;
