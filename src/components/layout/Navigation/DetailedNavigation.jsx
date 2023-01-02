import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DetailedNavigation = (props) => {
  const forwardVal = false;

  const forwardValHandler = () => {
    props.forwardData(forwardVal);
  };

  return (
    <>
      <FaArrowLeft onClick={forwardValHandler} />
      <ul>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Map</Link>
          </li>
        </ul>
      </ul>
    </>
  );
};

export default DetailedNavigation;
