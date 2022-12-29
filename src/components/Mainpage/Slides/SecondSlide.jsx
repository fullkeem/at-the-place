import classes from './SecondSlide.module.scss';

const SecondSlide = (props) => {
  return (
    <div className={classes.slide_wrapper}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default SecondSlide;
