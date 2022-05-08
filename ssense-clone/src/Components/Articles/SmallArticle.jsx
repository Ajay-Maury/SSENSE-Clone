import React from 'react'
import { Label } from '../StyledComponents/Label';

const SmallArticle = (props) => {
  return (
    <>
      <div style={{ display: "flex", margin: "2%" ,textAlign:"left", paddingLeft:"2%"}}>
        <div style={{ flex: 1 ,height:"100px"}}>
          <img style={{ width: "100%" ,height:"99px"}} src={props.img} alt="" />
        </div>
        <div style={{ flex: 2 , paddingLeft:"2%"}}>
          <h6 >{props.heading}</h6>
          <Label style={{ marginTop: "20%" }} >{props.category}</Label>
        </div>
      </div>
      <hr/>
    </>
  );
}

export default SmallArticle
