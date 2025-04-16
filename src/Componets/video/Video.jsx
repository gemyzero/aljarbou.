import React, { useEffect } from 'react'
import './video.css'
import video from "../../../public/images/STACKS.mp4";
import { Link } from 'react-router-dom';
import Aos from 'aos';

export default function Video() {
    useEffect(() => {
      Aos.init({
        // اختيارات التهيئة (اختيارية)
        duration: 1000, // مدة الحركة بالمللي ثانية
        easing: 'ease-in-out', // نوع الحركة (ease, ease-in, ease-out, linear, الخ.)
        once: false, // هل يتم تشغيل الحركة مرة واحدة فقط؟
      });
    }, []);
  return (
    <div className='video mt-5 py-5' >
        <div className="head-video text-center mt-5 mx-auto">
        <h2 className='fw-bold'>لم يكن إنشاء تطبيق التسوق بهذه البساطة من قبل </h2>
        <p className='px-5 py-4 '>يتيح لك مُنشئ السحب والإفلات إنشاء تجارب تطبيقات مُخصصة تحمل علامتك التجارية، سواءً لنظامي iOS أو Android. لا يتطلب الأمر أي مهارات برمجة أو معرفة تقنية.        </p>
        </div>
{/* <video autoplay='true' src={video}></video> */}

<div className='video-video mt-5' data-aos="fade-up">
<video className='mx-auto' width="90%" height="100%" autoPlay muted loop>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
</div>

<Link to='https://meister.stacksmarket.co/'    className=' '>ابدأ مجانًا            </Link>
</div>
  )
}
