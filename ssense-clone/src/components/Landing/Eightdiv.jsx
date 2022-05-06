import React from 'react'
import { Label } from '../StyledComponents/Label';

const Eightdiv = (props) => {
  // console.log(props)
  return (
    <>
      <div style={{ display: "flex", margin: "5%" }}>
    
        <div style={{ flex: 1 }}>
          <img style={{ width: "80%" }} src={props.img} alt="" />
        </div>
        <div style={{ flex: 2 ,padding:"3% auto"}}>
          <h6 >{props.heading}</h6>
          <Label style={{ marginTop: "20%" }} >{props.category}</Label>
        </div>
      </div>
    </>
  );
}

export default Eightdiv

