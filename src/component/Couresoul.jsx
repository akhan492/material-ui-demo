import React, {useState} from 'react'
import "./corussel.css"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {iamges} from '../helper'
function Couresoul() {
  const [currImg,setCurrImg] = useState(0)
  return (
    <div className='carusel'>
       <div className="carouselInner"  style={{backgroundImage : `url(${iamges[currImg].url})`}}>
         <div className="left" onClick={()=>currImg > 0 && setCurrImg(currImg-1)}><KeyboardArrowLeftIcon/></div>
         <div className="center"></div>
         <div className="right" onClick={()=>currImg < iamges.length-1 && setCurrImg(currImg+1)}>
         <NavigateNextIcon/>
           
         </div>
         </div>
    </div>
  )
}

export default Couresoul