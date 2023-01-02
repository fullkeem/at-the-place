import React from 'react';
import { useParams } from 'react-router-dom';

const Questions = () => {
  const params = useParams();
  const questionsId = params.questionsId;

  return <div>Questions</div>;
};

export default Questions;
