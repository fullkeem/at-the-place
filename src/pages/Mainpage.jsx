import React from 'react';
import Slide from '../layout/Slide';

const DUMMY_Data = [
  { id: 1, title: '제목 1234', text: '내용 1234', img: 'url1' },
  { id: 2, title: '제목 5678', text: '내용 5678', img: 'url2' },
  { id: 3, title: '제목 9012', text: '내용 9012', img: 'url3' },
];

function Mainpage() {
  const slideData = DUMMY_Data.map((data, i) => (
    <Slide
      id={data.id}
      title={data.title}
      text={data.text}
      img={data.img}
      index={i}
    />
  ));

  return (
    <div>
      <ul>{slideData}</ul>
    </div>
  );
}

export default Mainpage;
