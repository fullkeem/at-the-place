import React, { useState } from 'react';

const OverlayContext = React.createContext({
  language: 'en',
  setLanguage: () => {},
});

export const OverlayContextProvider = (props) => {
  const setLanguage = (language) => {
    setState({ ...state, language: language });
  };

  const initState = {
    language: 'en',
    setLanguage: setLanguage,
  };

  const [state, setState] = useState(initState);
  console.log(state);
  return (
    <OverlayContext.Provider value={state}>
      {props.children}
    </OverlayContext.Provider>
  );
};

export default OverlayContext;
