import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Signup from './pages/Singup';
import Mypage from './pages/Mypage';
import Navigation from './components/layout/Navigation/Navigation';
import Curation from './pages/Curation';
import EnterTheName from './components/CurationPage/EnterTheName';
import Overlay from './components/layout/Overlay';
import { useContext } from 'react';
import OverlayContext from './context/overlay-context';
import Questions from './components/CurationPage/Questions';

const Router = () => {
  const overlayCtx = useContext(OverlayContext);

  return (
    <>
      <BrowserRouter>
        {overlayCtx.clicked ? <Overlay /> : ''}
        <Navigation />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/curation" element={<Curation />}>
            <Route path=":curationId" element={<Questions />} />
          </Route>
          <Route path="/curation/enterthename" element={<EnterTheName />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
