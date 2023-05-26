import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MentorSection from './components/MentorSection';
import ResourcesSection from './components/ResourcesSection';

import CardSection from './components/CardSection';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <MentorSection/>
      <ResourcesSection/>
      <CardSection/>
    </div>
  );
}

export default App;
