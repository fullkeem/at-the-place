import React from 'react';
import classes from './Curation.module.scss';

const Curation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerBox}>
        <h1 className={classes.title}>내 취향의 카페 찾기</h1>
        <ul>
          <li>
            <p>질문은 4개4️⃣</p>
            <p>1분이면 OK!</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Curation;
