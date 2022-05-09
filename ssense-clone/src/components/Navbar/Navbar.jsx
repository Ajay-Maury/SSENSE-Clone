import "./Navbar.css"
import React, {useState} from 'react'
 import { Link } from 'react-router-dom';
//  import {Routes, Route} from 'react-router-dom'
 // import Button from './LeftBar';
// import './Dropdown';
// import {Logo} from "./Ssense_logo.svg"
// import {Menswear } from "../products/menswear";
// import { Womenswear } from "../products/Womenswears";
// import Landing from "../Landing/Landing";
// import {Everything} from "../products/everything"
// import Footer  from '../Footer/Footer';
// import { useSelector } from "react-redux";
 const Navbar = () => {
const [click, setClick] =useState(false);

const handelClick =()=>setClick(!click);

  return (
    <>
    <nav className='navbar'>

        <ul className='navbar_list'>
            <li className='left_of_navbar'>
                <Link to='/menswear'  className='link'>
                    MENSWEAR
                </Link>
                <Link to='/womenswear'  className='link'>
                    WOMENSWEAR
                </Link>
                <Link to='/everything'  className='link'>
                    EVERYTHINGELSE
                </Link>
                <Link to='/'
                 className='link'
                 >
                    SEARCH
                </Link>
            </li>
            <li>
            <Link to='/'  className='link'>
            <img src="https://res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg" />
        </Link>
            </li>
            <li className='right_of_navbar'>
            <Link to='/'  className='link' id='language'>
               <span>ENGLISH</span>
                <ul className='drop_down'>
                        <li>
                            FRANCHIES
                        </li>
                        <li>日本語</li>
                        <li>中文</li>
                        <li>한국어</li>
                    </ul>
                    
                </Link>
                <Link to='/login'  className='link'>
                LOGIN
                </Link>
                <Link to='/' className='link'>
                WISHLIST
                </Link>
                <Link to='/checkout'  className='link'>
                    SHOPPING BAG
                </Link>
            </li>
        </ul>
       
      
    </nav>
  
    </>
  )
}
export default Navbar
