import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import MentorSection from './components/MentorSection';
import ResourcesSection from './components/ResourcesSection';
import CardSection from './components/CardSection';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <CardSection/>
      <MentorSection/>
      <ResourcesSection/>
      <Footer/>
    </div>
  );
}
export default App;
