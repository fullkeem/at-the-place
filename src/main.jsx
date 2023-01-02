import React from 'react';
import ReactDOM from 'react-dom/client';
import { OverlayContextProvider } from './context/overlay-context';
import './index.scss';
import Router from './Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <OverlayContextProvider>
    <Router />
  </OverlayContextProvider>,
);
