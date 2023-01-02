import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Slider.scss';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  // tablet: {
  //   breakpoint: { max: 1024, min: 768 },
  //   items: 3,
  //   slidesToSlide: 3, // optional, default to 1.
  // },
  // mobile: {
  //   breakpoint: { max: 767, min: 464 },
  //   items: 2,
  //   slidesToSlide: 1, // optional, default to 1.
  // },
};

const Slider = (props) => {
  const sliderImageUrl = props.sliderImageUrl;
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        arrows={false}
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
