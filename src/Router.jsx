import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Navigation from './components/layout/Navigation/Navigation';
import Curation from './pages/Curation';
import Questions from './components/Auth/CurationPage/Questions';

const Router = () => {
  return (
    <>
      <BrowserRouter>
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
