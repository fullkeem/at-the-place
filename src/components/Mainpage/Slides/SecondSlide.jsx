import classes from './SecondSlide.module.scss';

const SecondSlide = (props) => {
  return (
    <>
      <div className={classes.top_slide_wrapper}>
        <section className={classes.description}>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </section>
        <section className={classes.image_section}>
          <img src="/src/assets/office.png" />
        </section>
      </div>
      <div className={classes.bottom_slide_wrapper}></div>
    </>
  );
};

export default SecondSlide;
