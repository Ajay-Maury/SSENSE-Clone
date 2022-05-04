import React from "react";
import { Label } from "../StyledComponents/Label";

const LargeArticle = (props) => {
  return (
    <div style={{display:"flex" ,margin:"2%"}}>
      <div style={{flex:1}}>
        <img style={{width:"100%"}} src={props.img} alt="" />
      </div>
      <div style={{ flex: 1, padding:"2%"}}>
              <h5>{props.heading}</h5>
              <Label >{props.category}</Label >
        <p style={{margin:"5% auto"}} >{props.text}</p>
        
      </div>
    </div>
  );
};

export default LargeArticle;
