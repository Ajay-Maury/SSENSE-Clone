import logo from './logo.svg';
import './App.css';
import  Navbar  from './Components/Navbar/Navbar';
// import Landing from './Components/Landing/Landing';
import Footer  from './Components/Footer/Footer.jsx';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Landing/> */}
      <Footer/>
    </div>
  );
}

export default App;
