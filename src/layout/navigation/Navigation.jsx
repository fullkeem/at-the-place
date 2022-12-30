import { useState, useEffect } from 'react';
import { FaBars, FaMapMarkedAlt, FaArrowLeft } from 'react-icons/fa';
import DetailedNavigation from './DetailedNavigation';

import classes from './Navigation.module.scss';

function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
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
    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  const forwardData = (forwardedData) => {
    setShowMenu(forwardedData);
  };

  console.log(forwardedData);

  return (
    <>
      <nav
        className={classes.nav_container}
        style={
          isVisible
            ? { backgroundColor: 'black' }
            : { backgroundColor: 'transparent' }
        }
      >
        {showMenu ? (
          <>
            <DetailedNavigation forwardData={forwardData} />
          </>
        ) : (
          <>
            <FaBars
              onClick={() => {
                setShowMenu(true);
              }}
            />
            <img style={{ opacity: 5 / height }} src="src/assets/logo.png" />
            <FaMapMarkedAlt />
          </>
        )}
      </nav>
    </>
  );
}

export default Navigation;
