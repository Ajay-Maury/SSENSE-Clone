import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import Twoimage from './components/Landing/Twoimage';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      {/* <h1>navbar</h1> */}
      <Navbar/>
      {/* <Twoimage/> */}
      <Landing/>
    </div>
  );
}

export default App;
