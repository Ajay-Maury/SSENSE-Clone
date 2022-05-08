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
    margin-left:21%;
    margin-bottom:3%;
    margin-top:1%;
    color:gray;
}

`
const Container = styled.div`
 width:99%;
 // border: 1px solid black;
 display:flex;
 // margin-top: 10px;
`
const product = [{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1648043578/rx9qrqkbfbni3ajifbqh.jpg",
    category:"RECENT",
    name:"DANGER BY DEFINITION: Lựu Đạn IS HUNG LA'S NEW LOOK",
    description:"Fashion | Mar 25",
    id:1
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1647547426/tzzdf7zjmdbd7qzilrys.jpg",
    category:"RECENT",
    name:"HIT SNOOZE!",
    description:"Market | Mar 22", 
    id:2
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1647452231/e9fr0eotztm7xdu4cx9h.jpg",
    category:"RECENT",
    name:"PERSONAL SPACE WITH JOSH ITIOLA",
    description:"Culture | Mar 18", 
    id:3
}]


const Threeimage2 = (props) => {
    return (
        <Container>
           {/* <h1>Twoimage</h1>  */}
           {product.map((elem)=>{ return (
               <Card1 key={elem.id}>
                   <div className='image'>
                       <img src={elem.img} width="90%" height="95%"/>
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
export default Threeimage2
