import React, { useEffect } from 'react'
import card1 from "../../../../public/images/clients/card1.png";
import card2 from "../../../../public/images/clients/card2.png";
import card3 from "../../../../public/images/clients/card3.png";
import card4 from "../../../../public/images/clients/card4.png";
import card5 from "../../../../public/images/clients/card5.png";

import './clients.css'
import Aos from 'aos';

export default function Clients() {
      useEffect(() => {
        Aos.init({
          // اختيارات التهيئة (اختيارية)
          duration: 1000, // مدة الحركة بالمللي ثانية
          easing: 'ease-in-out', // نوع الحركة (ease, ease-in, ease-out, linear, الخ.)
          once: true, // هل يتم تشغيل الحركة مرة واحدة فقط؟
        });
      }, []);
  return (
    <div className='clients'>

<div className='container p-5 '>
      <h2  >ماذا يقول عملائنا الراضون الذين يزيد عددهم عن 1000 عميل؟
      </h2>
      <div className="row p-lg-5 p-md-5 p-sm--0 " style={{justifyContent:'center'}}>
        <div className="col-lg-4" data-aos="flip-right">
            <img src={card1} alt="" style={{width:'100%'}} />
        </div>
        <div className="col-lg-4" data-aos="flip-right">
            <img src={card2} alt="" style={{width:'100%'}} />
        </div>
        <div className="col-lg-4" data-aos="flip-right">
            <img src={card3} alt="" style={{width:'100%'}} />
        </div>
        <div className="col-lg-4" data-aos="flip-right">
            <img src={card4} alt="" style={{width:'100%'}} />
        </div>
        <div className="col-lg-4" data-aos="flip-right">
            <img src={card5} alt="" style={{width:'100%'}} />
        </div>
    </div>
    </div>
  
    </div>

  )
}
