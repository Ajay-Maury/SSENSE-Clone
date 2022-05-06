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
    color:black;
    
}
.desc{
    font: lighter normal 1.12rem/1.625rem "JHA Times Now";
    letter-spacing: -0.003125rem;
    // margin-right:62%;
    // margin-bottom:-3%;
    // margin-top:1%;
    color:black;
    border:1px solid grey;
    border-radius:9px;
    width:200px;
    height:30px;
    margin-left:4%;
}

`
const Container = styled.div`
    width:99%;
    // border: 1px solid black;
    display:flex;
    // margin-top: 4px;
`
const product = [{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1651497463/pusal5nzejoa0lqixtwk.jpg",
    category:"Featured",
    name:"PANGAIA",
    description:"SHOP MENSWEAR",
    id:1
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1651497465/bwxlocp5cskr5h9vzubj.jpg",
    category:"Featured",
    name:"PANGAIA",
    description:"SHOP WOMENSWEAR",
    id:2 
}]


const Twoimage2 = (props) => {
    return (
        <Container>
           {product.map((elem)=>{ return (
               <Card1 key={elem.id}>
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
export default Twoimage2
