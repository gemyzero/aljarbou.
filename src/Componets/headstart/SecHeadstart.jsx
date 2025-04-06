import React from 'react'
import notifications from "../../../public/images/notifications.png";
import addProducts from "../../../public/images/add-products.png";
import insights from "../../../public/images/insights.png";
import smart from "../../../public/images/smart.png";


export default function SecHeadstart() {
  return (
    <div className='text-center container-fluid   secHeadstart'>
      <div className="row my-5 " > 
        <div className="col-lg-6 my-2  col-md-12 mx-md-auto  "  style={{overflow:'hidden'}}>
           <div className="add     " >
           <h2 >أضف عددًا غير محدود من المنتجات دون أي تكاليف إضافية
           </h2>
            <p className=' pt-4'>استفد من إشعارات الدفع لتجاوز ضوضاء الرسائل وتفاعل مع عملائك عبر الهاتف المحمول بشكل غير مسبوق. مع متوسط ​​معدلات فتح تزيد عن 50%، يُمكّنك الدفع من الوصول مباشرةً إلى المشتركين في أي وقت.
            </p>
<div className='add-img '>
<img src={addProducts} alt="" />

</div>
           </div>
        </div> 
        <div className="col-lg-6 my-2  col-md-12 mx-md-auto  " style={{overflow:'hidden'}}>
           <div className="notifications     ">
           <h2>تعزيز التحويلات باستخدام إشعارات الدفع المخصصة           </h2>
            <p  className=' pt-4'>دع التعقيدات والتكاليف جانبًا. لم يكن استيراد كتالوجك بالكامل إلى واجهة متجرك المحمول المخصصة أسهل من أي وقت مضى وبتكلفة معقولة.
            </p>
<div className='notifications-img '>
<img src={notifications} alt=" "  className=''/>

</div>
           </div>
        </div>
      </div>
      <div className="row  my-5" > 
       
        <div className="col-lg-6 my-2  col-md-12 mx-md-auto  " style={{overflow:'hidden'}}>
           <div className="   Make  p-sm-4 ">
           <h2>اتخذ قرارات تعتمد على البيانات لتعزيز مبيعاتك           </h2>
            <p  className='pt-4'>تتبع الرؤى والاتجاهات والمقاييس حول بيانات أداء التطبيق الخاص بك لاتخاذ قرارات تعتمد على البيانات.
            </p>
<div className='add-img'>
<img src={insights} alt=" "  className=''/>

</div>
           </div>
        </div>
        <div className="col-lg-6 my-2  col-md-12 mx-md-auto  "  style={{overflow:'hidden'}}>
           <div className="upkeep p-sm-4" >
           <h2>حافظ على تحديث تطبيقك مع الحد الأدنى من الصيانة</h2>
           <p className='pt-4'>يمكنك تعديل مخزونك وتحرير تصميمك وسيتم تحديثه في الوقت الفعلي لعملائك دون الحاجة إلى تحديث
           </p>
<div className='notifications-img '>
<img src={smart} alt="" />

</div>
           </div>
        </div>
      </div>
    </div>
  )
}
