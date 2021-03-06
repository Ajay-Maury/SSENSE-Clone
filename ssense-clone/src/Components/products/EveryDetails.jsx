import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./MenDetails.css"
import {useCart} from "react-use-cart"
import Navbar from '../Navbar/Navbar'


export const EveryDetails = () => {
  const { id } = useParams() ;
  const { addItem, items } = useCart();
  const [ product , setProduct] = useState({})
  
// console.log(addItem)


  let handleAdd = (product)=>{
    addItem(product,1);

  }
  console.log("getItems",items);
   localStorage.setItem("Items",JSON.stringify(items))
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    
    const data1 = await fetch(`https://ssense-api.herokuapp.com/pageElse`)
    let data2 = await data1.json()
    //   setMens(data2)
    // console.log("data2" ,data2)
    const detailData = data2.pageElse.filter((e) => {
      return e._id === id
    })
    const maindata=detailData[0]
     console.log("mainData",maindata)
    setProduct(maindata)

  }
 
  return (
    <div>
      
      <Navbar/>
    <div className='Main-div'>
     
                 <div className="mens-category1">
               
                        <h5>{product.product}</h5>
                    
                    {/* <div className="mens-category-list"> */}
                        <p>{product.pro_desc}</p>
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
                        <img className='img' img src={product.img_url} alt="mens" />
                  </div> 
                  <div className="mens-category1">
               
                        <h5>{product.price} USD</h5>
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
                          <button className="add-to-cart" onClick={()=>{handleAdd(product)}}>Add to Bag</button>
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

