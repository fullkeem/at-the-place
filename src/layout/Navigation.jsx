import React from 'react';

import classes from './Navigation.module.scss';

function Navigation() {
  return (
    <div className={classes.logo_wrapper}>
      <img src="src/assets/logo.png" />
    </div>
  );
}

export default Navigation;
