import React from 'react'
import './brands.css'
import canbeCreative from "../../../public/images/brands/canbeCreative.png";
import designerDaily from "../../../public/images/brands/designerDaily.png";
import designModo from "../../../public/images/brands/designModo.png";
import digitalJournal from "../../../public/images/brands/digitalJournal.png";
import queness from "../../../public/images/brands/queness.png";
import sandySowards from "../../../public/images/brands/sandySowards.png";
import superDev from "../../../public/images/brands/superDev.png";
import webDesigner from "../../../public/images/brands/webDesigner.png";
import wpExp from "../../../public/images/brands/wpExp.png";

export default function Brands() {
  return (
    <div className='container-fluid brands px-5 mt-5' >
      <h2 >موثوق به من قبل كبار القادة
      </h2>
      <div className="row  py-5 gap-5" style={{justifyContent:'center'}}>
      <div className="col-lg-2 col-md-4 col-6">
                   <img className='w-100'  src={superDev} alt="" />
       
        </div>
        <div className="col-lg-2 col-md-4 col-6">
            <img  className='w-100' src={webDesigner} alt="" />
        </div>
        <div className="col-lg-2 col-md-4 col-6">
            <img className='w-100'  src={wpExp} alt="" />
        </div>
        <div className="col-lg-2 col-md-4 col-6">
            <img className='w-100'  src={canbeCreative} alt="" />
        </div>
        <div className="col-lg-2 col-md-4 col-6">
            <img  className='w-100'src={designerDaily} alt="" />
        </div>
        <div className="col-lg-2 col-md-4 col-6">
            <img className='w-100' src={designModo} alt="" />
        </div>
     
        <div className="col-lg-2 col-md-4 col-6">
            <img className='w-100' src={queness} alt="" />
        </div>
        <div className="col-lg-2 col-md-4 col-6">
            <img className='w-100' src={sandySowards} alt="" />
        </div>
 
      </div>
    </div>
  )
}
