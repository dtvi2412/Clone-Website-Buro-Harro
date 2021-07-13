import './App.css';
import About from './Components/About/About';
import Background from './Components/Background/Background';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header/>
      <Background/>
      <About/>
    </div>
  );
}

export default App;
