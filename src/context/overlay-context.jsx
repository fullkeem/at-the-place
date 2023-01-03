import React, { useState } from 'react';

const OverlayContext = React.createContext({
  clicked: false,
  navClickedHandler: () => {},
});

export const OverlayContextProvider = (props) => {
  const [clicked, setClick] = useState(false);

  const navClickedHandler = (value) => {
    setClick(value);
  };

  const contextValue = {
    clicked,
    navClickedHandler,
  };
  console.log(clicked);
  return (
    <OverlayContext.Provider value={contextValue}>
      {props.children}
    </OverlayContext.Provider>
  );
};

export default OverlayContext;
