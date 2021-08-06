import './App.css';
import About from './Components/About/About';
import Background from './Components/Background/Background';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Project from './Components/Project/Project';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <div className="app">
      <Header/>
      <Background/>
      {/* <About/>
      <Slider/>
      <Project/>
      <Footer/> */}
    </div>
  );
}

export default App;
