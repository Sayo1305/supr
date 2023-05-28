import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResourcePage from './pages/ResourcePage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/projects' element={<ProjectPage/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Resources' element={<ResourcePage/>}></Route>
      </Routes>
    </div>
  );

};

export default App;
