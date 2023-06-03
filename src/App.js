import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResourcePage from './pages/ResourcePage';
import ProjectDescriptionPage from './pages/ProjectDescriptionPage';
import Navbar from './components/Navbar';
import Mentor from './pages/Mentor';
import CreatePostPage from './pages/CreatePostPage';
import Profile from './pages/Profile';
import ResourceDescPage from './pages/ResourceDescPage';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/projects' element={<ProjectPage/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Resources' element={<ResourcePage/>}></Route>
        <Route path='/Mentors' element={<Mentor/>}></Route>
        <Route path ='/profile' element={<Profile/>}/>
        <Route path='/desc/:id' element={<ProjectDescriptionPage/>}></Route>
        <Route path='/postpage' element={<CreatePostPage/>}></Route>
        <Route path='/ResourceDesc/:id' element={<ResourceDescPage/>}></Route>
      </Routes>
    </div>
  );

};

export default App;
