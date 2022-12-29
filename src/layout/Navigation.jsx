import { useState, useEffect } from 'react';
import { FaBars, FaMapMarkedAlt } from 'react-icons/fa';

import classes from './Navigation.module.scss';

function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(1);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    // return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 10;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll === 0) {
      setHeight(1);
    }
    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  console.log(height, isVisible);

  return (
    <>
      <div
        className={classes.nav_container}
        style={
          isVisible
            ? { backgroundColor: 'black' }
            : { backgroundColor: 'transparent' }
        }
      >
        <FaBars />
        <img style={{ opacity: 5 / height }} src="src/assets/logo.png" />
        <FaMapMarkedAlt />
      </div>
    </>
  );
}

export default Navigation;
