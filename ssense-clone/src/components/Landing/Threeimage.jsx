import React from 'react'
import styled from 'styled-components'

const Card1 = styled.div`
display:flex;
flex-direction:column;

.image{
    height:85%;
}
img{
    height:95%;
    width:90%;
}
.category {

 display:flex;
 gap:5%;
 margin-left:5%;
}
.name{
 font: lighter normal 1.1895rem/1.625rem "Favorit SSENSE Inter1";
 letter-spacing: -0.015625rem;
 color:black;
 text-align: left;
 
}
.desc{
    font: lighter normal 0.72rem/1.625rem "JHA Times Now";
    letter-spacing: -0.003125rem;
    margin-left:-5%;
    margin-bottom:3%;
    margin-top:1%;
    color:gray;
    // border:1px solid red;
}

`
const Container = styled.div`
 width:99%;
 // border: 1px solid black;
 display:flex;
 // margin-top: 10px;
`
const product = [{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1650377394/ha1cgclezmw9lz2etg2r.jpg",
    category:"RECENT",
    name:"HAIR AND HIGHER POWER WITH JAWARA WAUCHOPE",
    description:"Fashion | Apr 21",
    id:1
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1649855761/ppbhaz8aoqykgmmxcv1e.jpg",
    category:"RECENT",
    name:"THE MOON IS LATE",
    description:"Culture | Apr 18", 
    id:2
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1649856548/gybenblahd5neaqr4auz.jpg",
    category:"RECENT",
    name:"FLOWER TIME",
    description:"Market | Apr 14",
    id:3 
}]


const Threeimage = (props) => {
    return (
        <Container>
           {/* <h1>Twoimage</h1>  */}
           {product.map((elem)=>{ return (
               <Card1 key={elem.id}>
                   <div className='image'>
                       <img src={elem.img}/>
                    </div>
                   <div className='category'>
                       <span>{elem.category}</span>
                       <span className='name'>{elem.name}</span>
                   </div>
                   <div>
                   <p className='desc'>{elem.description}</p>
                   </div>
               </Card1>
           )
           })}
        </Container>
    )
}
export default Threeimage
