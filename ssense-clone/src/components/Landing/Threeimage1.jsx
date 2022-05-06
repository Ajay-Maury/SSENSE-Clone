import React from 'react'
import styled from 'styled-components'

const Card1 = styled.div`
   display:flex;
   flex-direction:column;
   .image{
    height:77%;
   }
   .category {
    // border: 1px solid black;
    display:flex;
    gap:5%;
    margin-left:5%;
}
.name{
    font: lighter normal 1.1895rem/1.625rem "Favorit SSENSE Inter1";
    letter-spacing: -0.015625rem;
    color:black;
    
}
.desc{
    font: lighter normal 1.12rem/1.625rem "JHA Times Now";
    letter-spacing: -0.003125rem;
    margin-right:32%;
    margin-bottom:-3%;
    margin-top:1%;
    color:gray;
}

`
const Container = styled.div`
    width:99%;
    // border: 1px solid black;
    display:flex;
    margin-top: 50px;
    gap:1%;
`
const product = [{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1649085943/qgmitaaam8j3zxnvejyd.jpg",
    category:"RECENT",
    name:"BLESSED IS THE BLOWOUT",
    description:"Culture | Apr 4",
    id:1
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1648162446/jq3ratinthvrzfaxnvyl.jpg",
    category:"RECENT",
    name:"MICHAEL THE III'S MURDER MYSTERY",
    description:"Culture | Mar 31", 
    id:2
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1648215108/ozh7gtxgk1zhdl2mkgls.jpg",
    category:"RECENT",
    name:"OUTSIDE INSPO, NATURALLY",
    description:"Market | Mar 29", 
    id:3
}]


const Threeimage1 = (props) => {
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
export default Threeimage1
