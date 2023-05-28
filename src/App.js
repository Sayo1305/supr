import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeroSection from './components/HeroSection';
import ResourcePage from './pages/ResourcePage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Login' element={<HeroSection/>}></Route>
        <Route path='/Resources' element={<ResourcePage/>}></Route>
      </Routes>
    </div>
  );

};

export default App;
