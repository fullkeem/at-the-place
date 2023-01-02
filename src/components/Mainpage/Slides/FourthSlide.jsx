import React from 'react';
import Slider from '../Slider/Slider';
import classes from './FourthSlide.module.scss';

const FourthSlide = (props) => {
  console.log(props.title);
  const sliderImageUrl = [
    {
      url: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1570126688035-1e6adbd61053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ];
  return (
    <>
      <div className={classes.slide_wrapper}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <Slider sliderImageUrl={sliderImageUrl} />
      </div>
      <div className={classes.bottom_slide_wrapper}></div>
    </>
  );
};

export default FourthSlide;
