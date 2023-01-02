import classes from './FirstSlide.module.scss';
import Video from '../../../assets/CoffeeBean.mp4';
import NavButton from '../../layout/Buttons/NavButton';

const Slide = (props) => {
  return (
    <>
      <div className={classes.slide_wrapper}>
        <div className={classes.caption_wrapper}>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <NavButton title={'나의 취향 바로찾기'} />
        </div>
        <video loop autoPlay muted>
          <source src={Video} alt="coffee_bean" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Slide;
