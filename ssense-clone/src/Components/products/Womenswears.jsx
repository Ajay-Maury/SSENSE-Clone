import React from 'react'
import "./menswear.css"
// import "../App.css"

import  {Link } from 'react-router-dom'
//import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "axios"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'

export const Womenswear = () => {

    const [data,setData] = useState([])
    useEffect (()=>{
        axios.get("https://ssense-api.herokuapp.com/womensWear").then(({data})=>{
           
            setData(data.womensWear)
        })
    },[])
    
    const handleSort = (e) => {
     
        let data2 = data.sort((a, b) => {
        
        if (e === 'lowest')
         { return a.price - b.price;
            } else if (e === 'highest') {
                return b.price - a.price;
      }
        })
       // console.log(data2)
       setData([...data2])
      
    }
   
  return (
    <div>
        <Navbar />
        <div className="menswear-container">

            <div className="mens-category">
                <div>
                    <div className="mens-category-title">
                        <h5>ALL CATEGORIES </h5>
                    </div>
                    <div className="mens-category-list">
                        <ul> ACCESSORIES</ul>
                        <ul> BAGS </ul>
                        <ul> CLOTHING </ul>
                        <ul> SHOES </ul>
                        </div>
                </div>
                <div>
                    <div className="mens-category-title">
                        <h5>ALL DESIGNERS </h5>
                    </div>
                    <div className="mens-category-list">
                        <ul> 032c</ul>
                        <ul> 1017 ALYX 9SM </ul>
                        <ul> 11 by Boris Bidjan Saberi</ul>
                        <ul> 132 5. ISSEY MIYAKE </ul>
                        <ul> 3.1 Phillip Lim</ul>
                        <ul> 3MAN</ul>
                        <ul> 424</ul>
                        <ul> 44 Lable Group</ul>
                        <ul> 4SDESIGNS</ul>
                        <ul> 99% IS</ul>
                        <ul> A PERSONAL NOTE 73</ul>
                        <ul> A-COLD-WALL* </ul>
                        <ul> A.A. Spectrum</ul>
                        <ul> A.P.C.</ul>
                        <ul> AAPE by ABathing Ape</ul>
                        <ul> Acen Studios</ul>
                        <ul> ACRONYM</ul>
                        <ul> ADER error</ul>
                        <ul> adidas Originals</ul>
                        <ul> adidas x Humanrace by Pharrell</ul>
                        <ul> Williams </ul>
                        <ul> adidas x IVY PARK </ul>
                        <ul> Adieu</ul>
                        <ul> ADISH</ul>
                        <ul> Advisory Board Crystals</ul>
                        <ul> ADYAR</ul>
                        <ul> AFFXWRKA</ul>
                        <ul> Afield Out</ul>
                        <ul> Agnona</ul>
                        <ul> AGR</ul>
                        <ul> Ahluwalia</ul>
                        <ul> Ahluwalia & PaulSmith</ul>
                        <ul> Balenciaga</ul>
                        <ul> Balmain</ul>
                        <ul> Bao Bao Lssey Miyake</ul>
                        <ul> BAPE</ul>
                        <ul> Barbour</ul>
                        <ul> Bless</ul>
                        <ul> Bloke</ul>
                        <ul> Cartier</ul>
                        <ul> CAYL</ul>
                        <ul> CDLP</ul>
                        <ul> CFCL</ul>
                        <ul> Chen Peng</ul>
                        <ul> Chet Lo</ul>
                        <ul> Chimi</ul>
                        <ul> Chin Teo</ul>
                        <ul> Christian Louboutin</ul>
                        <ul> Clarks Originals</ul>
                        <ul> Diesel</ul>
                        <ul> Dime</ul>
                        <ul> Dita</ul>
                        <ul> Dion Lee</ul>
                        <ul> Doublet</ul>
                        <ul> Dr. Martens</ul>
                        <ul> Drake's</ul>
                        <ul> Drole DE Monsieur</ul>
                        <ul> Endless Joy </ul>
                        <ul> Erdem</ul>
                        <ul> ERL</ul>
                        <ul> Etro</ul>
                        <ul> Evisu</ul>
                        <ul> Etudes</ul>
                        <ul> Factor's</ul>
                        <ul> F-LAGSTUF-F</ul>
                        <ul> F.A.S.T.</ul>
                        <ul> F.A.S.T. by F.A.S.T.</ul>
                        <ul> Gimaguas</ul>
                        <ul> Givenchy</ul>
                        <ul> Golden Goose</ul>
                        <ul> GR10K</ul>
                        <ul> Grey Ant</ul>
                        <ul> Gucci</ul>
                        <ul> Guidi</ul>
                        <ul> Han Kjobenhavn</ul>
                        <ul> Hannah Jewett</ul>
                        <ul> HANREJ</ul>
                        <ul> HARAGOA</ul>
                        <ul> Harmony</ul>
                        <ul> Hatton Labs</ul>
                        <ul> Hed Mayner</ul>
                        <ul> Helmut Lang</ul>
                        <ul> Herno</ul>
                        <ul> Juun.J</ul>
                        <ul> JW Anderson</ul>
                        <ul> Junya Watanabe</ul>
                        <ul> Kanghyuk</ul>
                        <ul> Kenzo</ul>
                        <ul> KIDILL</ul>
                        <ul> Kids Worldswide</ul>
                        <ul> KidSuper</ul>
                        <ul> Kiko Kostadinov</ul>
                        <ul> King & Tuckfield</ul>
                        <ul> Lable Under Construction</ul>
                        <ul> Laburm</ul>
                        <ul> Lacoste</ul>
                        <ul> Lanvin</ul>
                        <ul> Le Gramme</ul>
                        <ul> Levi's</ul>
                        <ul> Li-Ning</ul>
                        <ul> Lillie</ul>
                        <ul> Lillie & Co</ul>
                        <ul> Liberal Youth Ministry</ul>
                        <ul> ZENGA</ul>
                        






                        </div>
                </div>
                
                

            </div>

            <div className='mens-data'>

               
                    {data.map((e)=>
                        {return (
                        <Link key={e._id} className="mens-data-item" to={`${e._id}`}>
                            <img src={e.img_url} className="menimage" alt="missing"/>
                            <p>{e.product}</p>
                            <p>{e.pro_desc}</p>
                            <p>$ {e.price}</p>
                            </Link>
                            )}
                    )}
                

            </div>
            <div className='mens-sort'>
                <div>
                    <div className="mens-category-title">
                            <h5>SORT </h5>
                    </div>
                    <div className="mens-category-list">
                            <ul> Latest arrivals</ul>
                            <ul> Trending</ul>
                            <ul onClick={()=>handleSort("lowest")} value="lowest"> Price: Low to high</ul>
                            <ul onClick={()=>handleSort("highest")} value="highest"> Price: High to low </ul>
                    </div>
                    <div className="mens-category-title">
                            <h5>COLORS</h5>
                    </div>
                    <div className="mens-category-list">
                            <ul className='uderline'> ALL COLORS </ul>
                            <ul> Black</ul>
                            <ul> Blue</ul>
                            <ul> Brown</ul>
                            <ul> Burgundy </ul>
                            <ul> Gray</ul>
                            <ul> Green</ul>
                            <ul> Navy </ul>
                            <ul> Pink </ul>
                            <ul> Purple</ul>
                            <ul> Red </ul>
                            <ul> Tan</ul>
                            <ul> White</ul>
                            <ul> Yellow</ul>

                            
                    </div>
                </div>
                
            </div>

        </div>


        <Footer />    
        
    </div>
  )
}

