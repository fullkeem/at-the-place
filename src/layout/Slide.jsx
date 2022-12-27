import { useState } from 'react';

import classes from './Slide.module.scss';

const Slide = (props) => {
  let color;

  if (props.index === 0) {
    color = 'rgb(6, 4, 6)';
  } else if (props.index === 1) {
    color = 'rgb(236, 224, 206)';
  } else if (props.index === 2) {
    color = 'rgb(255, 0, 10)';
  }

  console.log(props);

  return (
    <>
      <div
        className={`${classes.slide_wrapper}`}
        style={{ backgroundColor: `${color}` }}
      >
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default Slide;
