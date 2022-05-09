import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useCart} from "react-use-cart"
import "./MenDetails.css"
import Navbar from "../Navbar/Navbar"

export const WomenDetails = () => {
  const { id } = useParams() ;
  const [ women , setWomen] = useState({})
  const { addItem, items } = useCart();

  let handleAdd = (women)=>{
    addItem(women,1);

  }
  console.log("getItems",items);
   localStorage.setItem("Items",JSON.stringify(items))
  const getData = async () => {
    
    const data1 = await fetch(`https://ssense-api.herokuapp.com/womensWear`)
    let data2 = await data1.json()
    //   setMens(data2)
    console.log("data2" ,data2)
    const detailData = data2.womensWear.filter((e) => {
      return e._id === id
    })
    console.log(detailData[0])
    setWomen(detailData[0])

  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <Navbar/>
    <div className='Main-div'>
     
                 <div className="mens-category1">
               
                        <h5>{women.product}</h5>
                    
                    {/* <div className="mens-category-list"> */}
                        <p>{women.pro_desc}</p>
                        <h6>Padded polyester satin jacket</h6>
                        <p>. Half-Zip closure at stand collar</p>
                        <p>. Welt pockets</p>
                        <p>. Concealed zip vent at side-seam</p>
                        <p>. Rubberizes logo patch at back collar</p>
                        <p>. Single press-stud tab at back hem</p>
                        <p>. Elasticized cuffs and hem</p>
                        <p>. Fully lined</p>
                        <br />
                        <p> Please note that this item may not be shipped within the EU.</p>
                        <br />
                        <p> Supplier Color: OaK</p>
                        <br />
                        <p>Body: 100% polyester. Fill: 100%  polyester. Lining: 100% polyester.</p>
                        <br />
                        <p>221161M180032</p>
                   
                  </div> 
                  <div className="mens-details-img">
                        <img className='img' img src={women.img_url} alt="mens" />
                  </div> 
                  <div className="mens-category1">
               
                        <h5>{women.price} USD</h5>
                        <select name="" id="size">
                          <option value="">Select Size</option>
                          <option value="XXS">XXS</option>
                          <option value="XS">SX</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                          <option value="XXL">XXL</option>
                        </select>
                        <div className='Add-to-cart-div'>
                          <button className="add-to-cart" onClick={()=>{handleAdd(women)}}>Add to Bag</button>
                          <button className="add-to-wish">Add to Wishlist</button>
                        </div>
                        <div className='Add-to-cart-div2'>
                          <p className='p1'>Fit Predictor</p>
                          <p className='p2'> Calculate your size</p>
                        </div>
                        <p className='p3'>Model is 6ft 1" and wear size L. SIZE GUIDE</p>
                        <p className='p4'>India : Free shipping on orders over $500 USD</p>
                       
                       
                    
                   
                  </div> 
      
    </div>
    </div>
    
  )
}


 
