import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Mypage from './pages/Mypage';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
