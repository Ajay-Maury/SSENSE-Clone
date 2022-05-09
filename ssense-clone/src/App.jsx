import logo from './logo.svg';
import './App.css';
import Landing from "./Components/Landing/Landing";
import { Menswear } from "./Components/products/menswear";
import { Womenswear } from "./Components/products/Womenswears";
import { Everything } from "./Components/products/everything";
import { Routes, Route } from "react-router-dom";

import { Checkout } from "./Components/checkout/CheckOut";
// import { Login } from './components/login/login'
// import {Register} from "./components/register/register"
import {MenDetails}from "./Components/products/MenDetails";
import {WomenDetails} from "./Components/products/WomenDetails";
import {EveryDetails} from "./Components/products/EveryDetails";


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menswear" element={<Menswear />} />
        <Route path="/Womenswear" element={<Womenswear />} />
        <Route path="/everything" element={<Everything />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route> */}
      <Route path="/menswear/:id" element={<MenDetails/>}></Route>
         <Route path="/womenswear/:id" element={<WomenDetails/>}></Route>
        <Route path="/everything/:id" element={<EveryDetails/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
