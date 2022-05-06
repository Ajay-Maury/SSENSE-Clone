import './menswear.css';
import { useEffect , useState } from "react"
import axios from "axios";

export const Everything= ()=>{
    const [data,setData] = useState([])
    useEffect (()=>{
        axios.get("https://ssense-api.herokuapp.com/mensWear").then(({data})=>{
            setData(data.mensWears)
        })
    },[])
    return(

            <div className="whole">
            <>
            <div className="left">
                <div className='upperleft'>
                    <nav role="navigation" aria-label="All categories" className="plp-left-nav__categories--wrapper">
                        <div className="plp-menu-level__list" id="category-list">
                            <ul className="designer-left">
                                <li className="plp-menu-level__list-title">
                                    <h2 className="header">ALL CATEGORIES</h2>
                                </li> 
                                <li className="plp-menu-level__list-title">ACCESSORIES</li>
                                <li className="plp-menu-level__list-title">BAGS</li>
                                <li className="plp-menu-level__list-title">CLOTHING</li>
                                <li className="plp-menu-level__list-title">SHOES</li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='lowerleft'>
                    <nav aria-label="All designers" className="plp-left-nav__designers--wrapper">
                        <ul className="designer-list">
                            <li className="plp-left-nav__list-item">
                                <h2 className="header">ALL DESIGNERS</h2>
                            </li>
                            <li className="plp-left-nav__list-item"><span className="s-text">032c</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">1017 ALYX 9SM</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">11 by Boris Bidjan Saberi</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">132 5. ISSEY MIYAKE</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">3.1 Phillip Lim</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">3MAN</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">424</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">44 Label Group</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">4SDESIGNS</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">99% IS</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">A PERSONAL NOTE 73</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">A-COLD-WALL*</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">A. A. Spectrum</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">A.P.C.</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">AAPE by A Bathing Ape</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">Acne Studios</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">ACRONYM</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">ADER error</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">adidas Originals</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">adidas x Humanrace by Pharrell Williams</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">adidas x IVY PARK</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">Adieu</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">ADISH</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">Advisory Board Crystals</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">ADYAR</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">AFFXWRKS</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">Afield Out</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">Agnona</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">AGR</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">Ahluwalia</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">Ahluwalia &amp;PaulSmith</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">AIREI</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">Aitor Throup’s TheDSA</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">Alan Crocetti</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">Alchemist</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">Alexander McQueen</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">Alighieri</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">All Blues</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">AMBUSH</span></li>
                            <li className="plp-left-nav__list-item"><span className="s-text">AMI Alexandre Mattiussi</span></li>
                        </ul>
                    </nav>
                </div>
            </div>
            </>

            <>
            <div className="middle">
                {data.map((d)=>(
                    <div className='product'>
                        <img src={d.img_url}></img>
                        <div className='product-title_description'>
                        <p>{d.product}</p>
                        <p>{d.pro_desc}</p>
                        <p>${d.price}</p>
                        </div>
                    </div>
                ))}

                
            </div>
            </>

            <>
            <div className="right">
                
                    
                        <div className="lefttop">
                            <nav data-v-7a8efc38="" aria-label="Sort" className="plp-right-nav__nav">
                                <div data-v-7a8efc38="" id="s-accordion__sort">
                                        <button className="s-accordion__title">
                                            <span className="header">SORT</span>
                                        </button>
                                    <ul data-v-7a8efc38="" className="accordion-links-right-nav__list">
                                        <li className="accordion-links-right-nav__list-item"><a href="/en-ca/men" className="router-link-exact-active router-link-active accordion-links-right-nav__link accordion-links-right-nav__link--active" data-test="plpLatestArrivalsLink" rel="noindex, follow"><span className="s-text">Latest arrivals</span></a></li>
                                        <li className="accordion-links-right-nav__list-item"><a href="/en-ca/men?sort=popularity-desc" className="accordion-links-right-nav__link" data-test="plpTrendingLink" rel="noindex, follow"><span className="s-text">Trending</span></a></li>
                                        <li className="accordion-links-right-nav__list-item"><a href="/en-ca/men?sort=price-asc" className="accordion-links-right-nav__link" data-test="plpPriceAscendingLink" rel="noindex, follow"><span className="s-text">Price: Low to high</span></a></li>
                                        <li className="accordion-links-right-nav__list-item"><a href="/en-ca/men?sort=price-desc" className="accordion-links-right-nav__link" data-test="plpPriceDescendingLink" rel="noindex, follow"><span className="s-text">Price: High to low</span></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                            <div data-v-7a8efc38="" className="lefttop">
                                <nav data-v-7a8efc38="" aria-label="Colors" className="plp-right-nav__nav">
                                    <div data-v-7a8efc38="" id="s-accordion__colors">
                                        <button className="s-accordion__title s-accordion--collapsible"><span className="header">COLORS</span>
                                            <div><svg  width="9px" height="6px" aria-labelledby="open" fill="none" role="presentation" viewBox="0 0 9 6"><path d="M1 1L4.5 4.5L8 1" stroke="black"></path></svg>
                                            </div>
                                        </button>
                                        <ul data-v-7a8efc38="" className="accordion-links-right-nav__list">
                                            <li className="accordion-links-right-nav__list-item"><a href="/en-ca/men" className="router-link-exact-active router-link-active accordion-links-right-nav__link accordion-links-right-nav__link--active" rel="noindex, follow"><span className="s-text">ALL COLORS</span></a></li>
                                            <li className="accordion-links-right-nav__list-item"><span className="s-text">black</span></li>
                                            <li className="accordion-links-right-nav__list-item"><span className="s-text">blue</span></li>
                                            <li className="accordion-links-right-nav__list-item"><span className="s-text">brown</span></li>
                                            <li className="accordion-links-right-nav__list-item"><span className="s-text">burgundy</span></li>
                                            <li className="accordion-links-right-nav__list-item"><span className="s-text">gray</span></li>
                                            <li className="accordion-links-right-nav__list-item"><span className="s-text">green</span></li>
                                            <li className="accordion-links-right-nav__list-item"><span className="s-text">navy</span></li>
                                            <li className="accordion-links-right-nav__list-item"><span className="s-text">orange</span></li>
                                            <li className="accordion-links-right-nav__list-item"><span className="s-text">pink</span></li>
                                            <li className="accordion-links-right-nav__list-item"><span className="s-text">purple</span></li>
                                            <li className="accordion-links-right-nav__list-item"><span className="s-text">red</span></li>
                                            <li className="accordion-links-right-nav__list-item"><span className="s-text">tan</span></li>
                                            <li className="accordion-links-right-nav__list-item"><span className="s-text">white</span></li>
                                            <li className="accordion-links-right-nav__list-item"><span className="s-text">yellow</span></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div data-v-7a8efc38="" className="plp-right-nav__sizes--wrapper">
                        </div>

                
            </div>
            </>
        </div>
    )
}