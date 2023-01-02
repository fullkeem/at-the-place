import React, { useContext, useState } from 'react';
import classes from './DetailedNavigation.module.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OverlayContext from '../../../context/overlay-context';

const DetailedNavigation = (props) => {
  // const isClicked = false;

  // const isClickeHandler = () => {
  //   props.forwardData(isClicked);
  // };

  const overlayCtx = useContext(OverlayContext);
  console.log(overlayCtx.clicked);

  return (
    <>
      {overlayCtx.clicked && (
        <div className={classes.detailed_nav_container}>
          <FaArrowLeft onClick={() => overlayCtx.navClickedHandler(false)} />
          <li>
            <Link to="/">회원가입</Link>
          </li>
          <li>
            <Link to="/">로그인</Link>
          </li>
          <li>
            <Link to="/">둘러보기</Link>
          </li>
          <li>
            <Link to="/">문의하기</Link>
          </li>
        </div>
      )}
    </>
  );
};

export default DetailedNavigation;
