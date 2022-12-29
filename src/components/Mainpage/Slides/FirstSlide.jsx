import classes from './FirstSlide.module.scss';
import Video from '../../../assets/CoffeeBean.mp4';

const Slide = (props) => {
  return (
    <>
      <div className={classes.slide_wrapper}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <video loop autoPlay muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Slide;
