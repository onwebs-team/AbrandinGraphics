import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home/home-route';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
