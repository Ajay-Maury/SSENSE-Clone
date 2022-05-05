import React from 'react';
import styled from 'styled-components'

const Navbarcenter = styled.div`
    
    a {
        padding-left: 160px;
        margin-top: -10px;
        text-decoration: none;
        color: black;
    }
`

const NavbarWrapper = styled.div`
    // background-color: #ffe0b2;
    width:100%;
    padding-top:20px;
    top:0;
    height: 20px;
    display:flex;
    line-height: normal;
    
    &.wrapper > *{
        flex:1;
        display:flex;
        gap: 30px;
    }
`

const NavbarLeft = styled.div`
    padding-left: 30px;
    display:block;
    a {
        text-decoration: none;
        color : grey;
    }
`

const NavbarRight = styled.div`
    text-align: right;
    // padding-right:-90px;
    color : grey; 
`

const Navbar=()=>{
   return(
       <NavbarWrapper className="wrapper">
           <NavbarLeft>
           <a><h5>MENSWEAR</h5></a>
           <a><h5>WOMENSWEAR</h5></a>
           <a><h5>EVERYTHING ELSE</h5></a>
           <a><h5>SEARCH</h5></a>
           </NavbarLeft>

           <Navbarcenter>
           <a><h1>SSENSE</h1></a>
           </Navbarcenter>

           <NavbarRight>
           <a><h5>ENGLISH</h5></a>
           <a><h5>LOGIN</h5></a>
           <a><h5>WISHLIST</h5></a>
           <a><h5>SHOPPING BAG(0)</h5></a>
           </NavbarRight>

       </NavbarWrapper>
   )
}

export {Navbar}