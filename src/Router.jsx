import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Navigation from './components/layout/Navigation/Navigation';
import Curation from './pages/Curation';
import Overlay from './components/layout/Overlay';
import { useContext } from 'react';
import OverlayContext from './context/overlay-context';
import Questions from './components/Auth/CurationPage/Questions';

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
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/curation" element={<Curation />}>
            {/* <Route path="/:questionsId" element={<Questions />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
