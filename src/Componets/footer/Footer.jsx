import React from 'react'
import './footer.css'
import { IoCheckmarkCircle } from "react-icons/io5";
export default function Footer() {
  return (
    <div className='footer'>
   <div className="container " style={{backgroundColor:'#453b2f '}}>
   <div className='row first py-4'>
        <h1>سعر شهري ثابت وبأسعار معقولة        </h1>
        <h3>فقط <span>$19.95</span>  كل شهر        </h3>
        <button className=''>ابدأ مجانًا
        </button>
        <p>تجربة مجانية لمدة 14 يومًا | لا حاجة لبطاقة ائتمان
        </p>
      </div>

<div className="row sec" style={{justifyContent:'center'}}>
<ul  className='col-lg-6  '> 
    <li>
    <div className='icon'>
            <h4>Payment Gateways</h4>
            <h6><IoCheckmarkCircle /></h6>

        </div>
    </li>
    <li>
    <div className='icon'>
            <h4>Payment Gateways</h4>
            <h6><IoCheckmarkCircle /></h6>

        </div>
    </li>
    <li>
    <div className='icon'>
            <h4>Payment Gateways</h4>
            <h6><IoCheckmarkCircle /></h6>

        </div>
    </li>
 </ul>
 <ul  className='col-lg-6 '> 
    <li>
    <div className='icon'>
            <h4>Payment Gateways</h4>
            <h6><IoCheckmarkCircle /></h6>

        </div>
    </li>
    <li>
    <div className='icon'>
            <h4>Payment Gateways</h4>
            <h6><IoCheckmarkCircle /></h6>

        </div>
    </li>
    <li>
    <div className='icon'>
            <h4>Payment Gateways</h4>
            <h6><IoCheckmarkCircle /></h6>

        </div>
    </li>
 </ul>
</div>
   </div>
    </div>
  )
}
