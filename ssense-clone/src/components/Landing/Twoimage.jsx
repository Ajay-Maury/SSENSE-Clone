import React from 'react'
import styled from 'styled-components'

const Card1 = styled.div`
   display:flex;
   flex-direction:column;
   img{
       height:95%;
       width:90%;
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
    color:grey;
    
}
.desc{
    font: lighter normal 1.38rem/1.625rem "JHA Times Now";
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
`
const product = [{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1651080120/xzrxkdrws3ypmtlw997z.jpg",
    category:"Fashion",
    name:"OUR SECRET LIVES THROUGH OBJECTS",
    description:"A Visual Catalog Of Everything Else",
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1650653292/uejok9zomnxkplf2b9go.jpg",
    category:"Market",
    name:"POCKETS, PLEASE !",
    description:"With Lemaire, Dries Van Noten, and Pushbutton", 
}]


const Twoimage = (props) => {
    return (
        <Container>
           {/* <h1>Twoimage</h1>  */}
           {product.map((elem)=>{ return (
               <Card1>
                   <div>
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
export default Twoimage
