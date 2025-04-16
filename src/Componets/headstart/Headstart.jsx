import React, { useEffect } from 'react'
import examples from "../../../public/images/examples.png";
import './headstart.css'
import SecHeadstart from './SecHeadstart';
import { Link } from 'react-router-dom';
import Aos from 'aos';

export default function Headstart() {
    useEffect(() => {
      Aos.init({
        // اختيارات التهيئة (اختيارية)
        duration: 1000, // مدة الحركة بالمللي ثانية
        easing: 'ease-in-out', // نوع الحركة (ease, ease-in, ease-out, linear, الخ.)
        once: false, // هل يتم تشغيل الحركة مرة واحدة فقط؟
      });
    }, []);
  return (
 

    <>
       <div className='Headstart  text-center py-5 my-5'  data-aos="fade-up-right">
     <div className="container-fluid py-5 ">
     <div className='description-head mt-2'>
<h1>احصل على بداية جيدة مع قوالب التطبيقات المصممة باحترافية لمتجرك</h1>
    <p className='py-4'>مع أكثر من 20 قالبًا مصممًا بشكل جميل للاختيار من بينها، فمن المؤكد أنك ستجد المظهر الذي يتناسب تمامًا مع علامتك التجارية واحتياجات البيع الخاصة بك.
    </p>
    <Link to='https://meister.stacksmarket.co/'    className=' '>ابدأ مجانًا            </Link>

      </div>
      <div className='img-head row'>
<img src={examples} alt="" />
      </div>
     </div>
    </div>
    <div className="" data-aos="fade-down-left">
    <SecHeadstart></SecHeadstart>

      </div>
    </>
  )
}
