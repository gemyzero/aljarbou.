import React from 'react'
import { MdNotificationsActive } from "react-icons/md";
import './higher.css'
import { FaTruckMoving } from 'react-icons/fa';
import { IoMdEye } from 'react-icons/io';
import { RxGlobe } from 'react-icons/rx';

export default function Higher() {
  return (
    <div className=' higher p-5 my-5'>
      <div className="head-higher text-center mt-4">
        <h2 className='fw-bold'>هل تعلم أن تطبيقات الهاتف المحمول تحقق معدلات تحويل أعلى بـ 2.3 مرة من مواقع الويب المحمولة؟
        </h2>
        <p className='p-3'>مع قضاء أكثر من 60% من الوقت على الأجهزة الرقمية الآن عبر الهواتف، فمن الضروري تحسين علامتك التجارية لتجربة التسوق أثناء ا لتنقل.        </p>
        </div>
      <div className="row m-auto" style={{width:'95%' ,alignItems:'center'}}>

<div className="col-lg-6 col-md-12">
    <div className="img-higher w-100">
        <img src="../../../public/images/Frame-conversions.png "  className='mx-auto' alt="" />
    </div>
</div>

<div className="col-lg-6 col-md-12">

    <div className="row my-4">
    <div className="col-lg-6 col-md-6 col-12 mx-auto my-3  ">
      <div className="  card p-4">
      <div className="">
        <i>      <MdNotificationsActive  /></i>
        </div> 
         <h4>دفع الإخطارات</h4>
        <p>    قم بالوصول إلى عملائك في أي مكان وأرسل لهم عروضًا وإصدارات منتجات جديدة        </p>
      </div>
        </div>
        <div className="col-lg-6  col-md-6 col-12 mx-auto my-3 ">
      <div className="  card p-4">
        <div className="">
        <i>      <FaTruckMoving  /></i>
        </div>
        <h4>تتبع طلباتك
 
        </h4>
        <p>زد مبيعاتك وتتبع طلباتك القادمة من تطبيق الهاتف المحمول        </p>
      </div>
        </div>
        <div className="col-lg-6  col-md-6 col-12 mx-auto my-3 ">
      <div className="  card p-4">
        <div className="">
        <i>      <IoMdEye  /></i>
        </div>
        <h4> مشاهدات غير محدودة
        </h4>
        <p>احصل على عدد غير محدود من المشاهدات وقل وداعًا للحدود أو الرسوم الإضافية المفروضة من قبل منشئي التطبيقات الآخرين.
        </p>
      </div>
        </div>
        <div className="col-lg-6  col-md-6 col-12 mx-auto my-3 ">
      <div className="  card p-4">
        <div className="">
        <i>      <RxGlobe  /></i>
        </div>
        <h4> تسجيل الدخول الاجتماعي
        </h4>
        <p>دمج تسجيل الدخول إلى Facebook مع تطبيقك لتسهيل حياة عملائك
        </p>
      </div>
        </div>
        <div className="col-lg-6  col-md-6 col-12 mx-auto my-3 ">
      <div className="  card p-4">
        <div className="">
        <i>      <MdNotificationsActive  /></i>
        </div>
        <h4> بوابات الدفع
        </h4>
        <p>إذا كانت بوابة الدفع تعمل مع WooCommerce، فسوف تعمل مع تطبيقك أيضًا.
        </p>
      </div>
        </div>
        <div className="col-lg-6  col-md-6 col-12 mx-auto my-3 ">
      <div className="  card p-4">
        <div className="">
        <i>      <MdNotificationsActive  /></i>
        </div>
        <h4> فريق دعم على مدار الساعة طوال أيام الأسبوع
        </h4>
        <p>فريق الدعم لدينا متاح دائمًا لحل أي مشكلة قد تواجهها
        </p>
      </div>
        </div>
        
    </div>
    
   
</div>


      </div>
      <div className="last-higher text-center mt-4">
        <h2 className='fw-bold'>هل أنت مستعد لتعزيز مبيعاتك عبر الهاتف المحمول؟
        </h2>
        <button className='my-4'>ابدأ مجانًا
        </button>

        </div>
      
    </div>
  )
}
