import React, { useEffect } from "react";
import hero from "../../../public/images/hero.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
export default function Hero() {
  useEffect(() => {
    AOS.init({
      // اختيارات التهيئة (اختيارية)
      duration: 1000, // مدة الحركة بالمللي ثانية
      easing: 'ease-in-out', // نوع الحركة (ease, ease-in, ease-out, linear, الخ.)
      once: false, // هل يتم تشغيل الحركة مرة واحدة فقط؟
    });
  }, []);
  return (
    <div className=" hero px-5">
      <div className="row px-4 ">
        <div className="col-lg-6" data-aos="slide-left">
          <div className="info-hero "  >
            <h1>قم بإنشاء تطبيقات تسوق جوالة جميلة لتعزيز مبيعاتك            </h1>
            <p>
            وداعًا لمبيعات الجوال الفائتة - أطلق تطبيق التسوق الإلكتروني الخاص بك اليوم لتحقيق مبيعات مضاعفة دون الحاجة إلى برمجة أو دمج الموقع الإلكتروني!

            </p>
            <div className=" w-100 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-start">
               <Link to='https://meister.stacksmarket.co/'    className=' '>ابدأ مجانًا            </Link>

            </div>
            <span>تجربة مجانية لمدة 14 يومًا | لا حاجة لبطاقة ائتمان </span>
          </div>
        </div>
        <div className="col-lg-6 img-hero" data-aos="slide-right">
            <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}
