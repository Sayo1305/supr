import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeroSection from './components/HeroSection';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Login' element={<HeroSection/>}></Route>
      </Routes>
    </div>
  );

};

export default App;
