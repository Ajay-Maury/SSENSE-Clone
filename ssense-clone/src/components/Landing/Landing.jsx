import React from 'react'
import styled from 'styled-components'
import Twoimage from './Twoimage'
import Threeimage from './Threeimage'
import Twoimage1 from './Twoimage1'

const Fourthdiv= styled.div`
   margin-top:70px;
   `

const Landing = (props) => {
    return (
        <div>
            <Twoimage/>
            <Threeimage/>
            <Twoimage1/>
            <Fourthdiv className="wrapper">
            <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_1280,q_90,f_auto,dpr_auto/v1651607142/chawdetcbaoy3mftfqca.gif"/>
            </Fourthdiv>
        </div>
    )
}

export default Landing
