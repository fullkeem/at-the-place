import React from 'react';
import FirstSlide from '../components/Mainpage/Slides/FirstSlide';
import FourthSlide from '../components/Mainpage/Slides/FourthSlide';
import SecondSlide from '../components/Mainpage/Slides/SecondSlide';
import ThirdSlide from '../components/Mainpage/Slides/ThirdSlide';

const data = [
  {
    id: 0,
    title: 'All the place you need,',
    text: '오직 당신을 위한 맞춤형 카페 찾기 플랫폼 @thePlaced',
  },
  {
    id: 1,
    title: '바쁜 당신을 위해',
    text: '1분도 안걸리는 간단한 설문으로 A부터 Z까지 \n나에게 맞는 공간을 추천하는 맞춤 큐레이션.',
  },
  {
    id: 2,
    title: '지금 내 근처 어디든',
    text: '언제 어디서나 간편하게,\n당신 주변이 당신이 찾는 바로 맞춤형 Working place.',
  },
  {
    id: 3,
    title: '@thePlace',
    text: '지금 바로 이곳에서 당신이 원하는 당신만의 공간 둘러보기',
  },
];

function Mainpage() {
  return (
    <>
      <FirstSlide title={data[0].title} text={data[0].text} />
      <SecondSlide title={data[1].title} text={data[1].text} />
      <ThirdSlide title={data[2].title} text={data[2].text} />
      <FourthSlide title={data[3].title} text={data[3].text} />
    </>
  );
}

export default Mainpage;
