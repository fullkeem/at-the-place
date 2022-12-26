import React from 'react';

import classes from './Slide.module.scss';

const Slide = (props) => {
  return (
    <>
      <div className={classes.slide_wrapper}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default Slide;
