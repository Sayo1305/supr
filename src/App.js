import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import HeroSection from './components/HeroSection';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );

};

export default App;
