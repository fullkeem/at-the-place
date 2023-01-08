import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import QuestionsList from './QuestionsList';

import classes from './Questions.module.scss';

const Questions = () => {
  const params = useParams();

  useEffect(() => {
    console.log(QuestionsList);
  }, []);

  return (
    <div className={classes.container}>
      <ul className={classes.questionBox}>
        {QuestionsList.map((el) => {
          return QuestionsList[1] === true ? (
            <li key={el.id}>
              <div className={classes.number}> Q{el.id}.</div>
              <div className={classes.question}>{el.question}</div>
              <p className={classes.answer}>{el.answer.a}</p>
              <p className={classes.answer}>{el.answer.b}</p>
              <img style={{ width: '10rem', height: '8rem' }} src={el.img} />
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default Questions;
