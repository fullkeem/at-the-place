import { useState, useEffect } from 'react';

import classes from './Navigation.module.scss';

function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  console.log(isVisible, height);

  return (
    <>
      <div className={classes.logo_wrapper}>
        <img src="src/assets/main-menu.png" />
        <img style={{ opacity: 20 / height }} src="src/assets/logo.png" />
        <img src="src/assets/pin.png" />
      </div>
    </>
  );
}

export default Navigation;
