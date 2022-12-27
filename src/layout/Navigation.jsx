import { useState, useEffect } from 'react';

import classes from './Navigation.module.scss';

function Navigation() {
  const [isVisible, setIsVisible] = useState('');

  return (
    <div className={classes.logo_wrapper}>
      <img src="src/assets/logo.png" />
    </div>
  );
}

export default Navigation;
