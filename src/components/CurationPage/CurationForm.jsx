import React from 'react';
import classes from './CurationForm.module.scss';
import { useNavigate } from 'react-router-dom';
import NavButton from '../layout/Buttons/NavButton';

const curationInfoData = [
  {
    id: 1,
    className: 'classes.timer',
    img: 'src/assets/oneMinute.png',
    alt: '60초 타이머',
    firstP: '질문은 4개.',
    secondP: '1분이면 OK!',
  },
  {
    id: 2,
    className: 'classes.check',
    img: 'src/assets/check.png',
    alt: '체크표시',
    firstP: '빠르고,',
    secondP: '간단하게!',
  },
  {
    id: 3,
    className: 'classes.donut',
    img: 'src/assets/donut.png',
    alt: '커피와 도넛',
    firstP: '취향에 맞게 답변을 고르면,',
    secondP: '내가 찾던 카페가 딱!',
  },
];

const CurationForm = () => {
  const imgStyle = { width: '2rem', height: '2rem', marginBottom: '0.5rem' };

  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.innerBox}>
        <h1 className={classes.title}>내 취향의 카페 찾기</h1>
        <ul className={classes.infoBox}>
          {curationInfoData.map((data) => {
            return (
              <li key={data.id} className={classes.info}>
                <img alt={data.alt} src={data.img} style={imgStyle} />
                <p>{data.firstP}</p>
                <p>{data.secondP}</p>
              </li>
            );
          })}
        </ul>
        <div className={classes.middle}>
          <img
            alt="커피 마시면서 쉬는 사람들"
            className={classes.coffeeTime}
            src="src/assets/coffee-lover.png"
          />
        </div>
        <div className={classes.footer}>
          <NavButton
            type="button"
            title={'카페 찾기!'}
            className={`${classes.start}`}
            onClick={() => {
              navigate('/curation/enterthename');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CurationForm;
