import React from "react";
import Eightdiv from "./Eightdiv";
import styled, { StyledComponent } from "styled-components";

const Wrapper  = styled.div`
display:flex;
flex-direction:column;

`

const MainDiv = styled.div`
display:flex
`
const EightdivGallery = () => {
  const data = [
    {
      id: 1,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1621277032/b4yuoitssxjipexpgdq2.jpg",
      heading:"MARKET RESEARCH: THE THERAGUN",
      category: "Fashion",
      
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1605550716/khorcajz01vqrgvdslah.jpg",
      heading: "MARKET RESEARCH: KHAITE'S SCARLET CARDIGAN AND EDA...",
      category: "Fashion",
    
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1605730247/x65svtgflz3ca6g8qcwz.jpg",
      heading: "MARKET RESEARCH: FEAR OF GOD",
      category: "Fashion",
      
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1615384903/mk8m97d6c8utcazhgnui.jpg",
      heading: "MARKET RESEARCH: LIGHT PHONE II",
      category: "Market",
      
    },
  ];
  return (
    <MainDiv >
      <hr />
      
      {data.map((d) => (
       <Wrapper key={d.id}>
          <div style={{borderTop:"1px solid grey"}}> </div> 
          <Eightdiv  img={d.img} heading={d.heading} category={d.category} />
          <div style={{borderTop:"1px solid grey"}}> </div> 
          </Wrapper>
      ))}
      
    </MainDiv>
  );
};

export default EightdivGallery;
