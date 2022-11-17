import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home/home-route';
import Websites from './routes/websites/websites-route';
import Banners from './routes/banners/banners-route';
import Landing from './routes/landingPage/landingPage-route';
import Print from './routes/print/print-route';
import Logos from './routes/logos/logos-route'
import Presentations from './routes/presentations/presentations-route'
import Signs from './routes/signs/signs-route'
import SocialMedia from './routes/socialMedia/socialMedia-route'
import Merchandise from './routes/merchandise/merchandise-route'

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='/websites' element={<Websites />}></Route>
        <Route path='/banners' element={<Banners />}></Route>
        <Route path='/landing' element={<Landing />}></Route>
        <Route path='/print' element={<Print />}></Route>
        <Route path='/logos' element={<Logos />}></Route>
        <Route path='/presentations' element={<Presentations />}></Route>
        <Route path='/signs' element={<Signs />}></Route>
        <Route path='/socialmedia' element={<SocialMedia />}></Route>
        <Route path='/merchandise' element={<Merchandise />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;