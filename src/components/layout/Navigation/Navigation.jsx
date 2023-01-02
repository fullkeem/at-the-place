import { useState, useEffect } from 'react';
import { FaBars, FaMapMarkedAlt, FaArrowLeft } from 'react-icons/fa';
import DetailedNavigation from './DetailedNavigation';

import classes from './Navigation.module.scss';

function Navigation() {
  const [height, setHeight] = useState(1);
  const [showMenu, setShowMenu] = useState('');

  const [forwardedData] = useState('');

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
    // if (winScroll > heightToHideFrom) {
    //   isVisible && setIsVisible(false);
    // } else {
    //   setIsVisible(true);
    // }
  };
  const forwardData = (forwardedData) => {
    setShowMenu(forwardedData);
  };

  return (
    <>
      <nav className={classes.nav_container}>
        {showMenu ? (
          <>
            <DetailedNavigation forwardData={forwardData} />
          </>
        ) : (
          <>
            <FaBars
              alt="menu_bar"
              onClick={() => {
                setShowMenu(true);
              }}
            />
            <img
              style={{ opacity: 1 / height }}
              src="src/assets/logo_transparent.png"
            />
            <FaMapMarkedAlt alt="map_icon" />
          </>
        )}
      </nav>
    </>
  );
}

export default Navigation;
