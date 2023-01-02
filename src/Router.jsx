import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Navigation from './components/layout/Navigation/Navigation';
import Curation from './pages/Curation';
import Overlay from './components/layout/Overlay';

const Router = () => {
  let visible = true;
  // if(props.visible === false){
  //   let visible = false
  // }
  return (
    <>
      <BrowserRouter>
        {!visible ? <Overlay /> : ''}
        <Navigation />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/curation" element={<Curation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
