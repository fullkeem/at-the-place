import React from 'react';

import classes from './Slide.module.scss';

const Slide = (props) => {
  console.log(props);

  return (
    <>
      <div
        className={classes.slide_wrapper}
        style={{ backgroundColor: `${props.bg_color}` }}
      >
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default Slide;
