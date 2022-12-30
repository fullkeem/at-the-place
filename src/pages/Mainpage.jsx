import React from 'react';
import FirstSlide from '../components/Mainpage/Slides/FirstSlide';
import SecondSlide from '../components/Mainpage/Slides/SecondSlide';
import ThirdSlide from '../components/Mainpage/Slides/ThirdSlide';

const data = [
  {
    id: 1,
    title: 'All the place you need,',
    text: '오직 당신을 위한 맞춤형 카페 찾기 플랫폼 @thePlaced',
  },
  {
    id: 2,
    title: '바쁜 당신을 위해',
    text: '1분도 안걸리는 간단한 설문으로\n A부터 Z까지 나에게 맞는 추천받는 맞춤형 공간 큐레이션',
  },
  {
    id: 3,
    title: '@thePlace',
    text: '지금 당신에게 딱 맞는 맞춤형 공간 추천받기',
  },
];

function Mainpage() {
  return (
    <>
      <FirstSlide title={data[0].title} text={data[0].text} />
      <SecondSlide title={data[1].title} text={data[1].text} />
      <ThirdSlide title={data[2].title} text={data[2].text} />
    </>
  );
}

export default Mainpage;
