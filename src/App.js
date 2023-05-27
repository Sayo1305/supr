import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Contributions from './components/Contributions';
import ProjectHelpSection from './components/ProjectHelpSection';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Contributions/>
      <ProjectHelpSection/>
    </div>
  );
};

export default App;
