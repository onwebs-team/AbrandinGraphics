import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home/home-route';
import Banners from './routes/banners/banners-route';
import Landing from './routes/landingPage/landingPage-route';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/banners' element={<Banners />}></Route>
        <Route path='/landing' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
