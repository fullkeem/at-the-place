import React from 'react';
import CurationForm from '../components/Auth/CurationPage/CurationForm';

const curationInfoDate = [
  {
    id: 1,
    class: 'classes.timer',
    img: 'src/assets/oneMinute.png',
    alt: '60초 타이머',
    firstP: '질문은 4개.',
    secondP: '1분이면 OK!',
  },
  {
    id: 2,
    class: 'classes.check',
    img: 'src/assets/check.png',
    alt: '체크표시',
    firstP: '빠르고,',
    secondP: '간단하게!',
  },
  {
    id: 3,
    class: 'classes.donut',
    img: 'src/assets/donut.png',
    alt: '커피와 도넛',
    firstP: '취향에 맞게 답변을 고르면,',
    secondP: '내가 찾던 카페가 딱!',
  },
];

const Curation = () => {
  return (
    <>
      <CurationForm curationInfoDate={curationInfoDate} />
    </>
  );
};

export default Curation;
