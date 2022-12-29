import React from 'react';
import FirstSlide from '../components/Mainpage/Slides/FirstSlide';
import SecondSlide from '../components/Mainpage/Slides/SecondSlide';
import ThirdSlide from '../components/Mainpage/Slides/ThirdSlide';

const data = [
  {
    id: 1,
    title: '지금 잠이 오시나요 충만님?',
    text: '저는 왜 잠이 오는거죠!',
  },
  {
    id: 2,
    title: '이거 아닌거 같은데',
    text: '뭐 방법이 생각 안나니까 이렇게 하죠',
  },
  {
    id: 3,
    title: '@thePlace',
    text: '아니 그런데 말이에요 명조체 느낌이 이상한데?',
  },
];

function Mainpage() {
  // const slideData = DUMMY_Data.map((data, i) => (
  //   <Slide
  //     key={data.id}
  //     title={data.title}
  //     text={data.text}
  //     img={data.img}
  //     index={i}
  //   />
  // ));

  return (
    <>
      <FirstSlide title={data[0].title} text={data[0].text} />
      <SecondSlide title={data[1].title} text={data[1].text} />
      <ThirdSlide title={data[2].title} text={data[2].text} />
    </>
  );
}

export default Mainpage;
