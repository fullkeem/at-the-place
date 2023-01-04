import { useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './EnterTheName.module.scss';

const EnterTheName = () => {
  const [userName, setUserName] = useState('oo');
  const params = useParams();
  const questionsId = params.questionsId;

  const getUserName = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.infoBox}>
        <p>바쁘다 바빠 현대사회, 알쏭달쏭 모바일 세상을 살아가시는 여러분.</p>
        <p>
          4가지 질문의 답에 따라{' '}
          <span className={classes.border}>"{userName}"</span>님의 취향맞춤
          카페를 찾아드립니다❣️
        </p>
        <p>두가지 답 중에 더 끌리는 답을 골라주세요!</p>
      </div>
      <div className={classes.titleBox}>
        <p>안녕하세요!</p>
        <p>먼저 이름을 알려주세요☺️</p>
      </div>
      <div className={classes.nameBox}>
        <input
          type="text"
          className={classes.name}
          placeholder="이름"
          onChange={getUserName}
          value={userName}
        />
      </div>
      <div className={classes.buttonBox}>
        <button type="button" className={classes.start}>
          start
        </button>
      </div>
    </div>
  );
};

export default EnterTheName;
