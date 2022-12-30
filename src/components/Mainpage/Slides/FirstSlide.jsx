import classes from './FirstSlide.module.scss';
import Video from '../../../assets/CoffeeBean.mp4';

const Slide = (props) => {
  return (
    <>
      <div className={classes.slide_wrapper}>
        <div className={classes.caption_wrapper}>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <button>나의 취향 바로찾기</button>
        </div>
        <video loop autoPlay muted>
          <source src={Video} alt="coffee_bean" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Slide;
