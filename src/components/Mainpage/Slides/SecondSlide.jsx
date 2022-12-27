import classes from './SecondSlide.module.scss';
import Video from '../../../assets/Coffee.mp4';

const SecondSlide = (props) => {
  return (
    <div className={classes.slide_wrapper}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <video loop autoPlay muted>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};

export default SecondSlide;
