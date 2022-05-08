import React from "react";
import { Label } from "../StyledComponents/Label";

const LargeArticle = (props) => {
  return (
    <div style={{display:"flex"}}>
      <div style={{flex:1}}>
        <img style={{width:"100%", height:"100%"}} src={props.img} alt="" />
      </div>
      <div style={{ flex: 1, padding:"2%" , textAlign:"left"}}>
              <h1>{props.heading}</h1>
              <Label >{props.category}</Label >
        <p style={{margin:" auto", fontSize:"inherit", marginTop:"20%"}} >{props.text}</p>
        
      </div>
    </div>
  );
};

export default LargeArticle;
