import React from 'react'
import AddProduct from "../../../public/images/Add-product.png";
import build from "../../../public/images/build.png";
import choose from "../../../public/images/choose-temp.png";
import './how.css'

export default function How() {
  return (
    <div className='container-fluid mt-5 how' >
   <div className="head-how text-center">
   <h1>كيف يعمل</h1>
   <p>مع منشئنا، هناك 3 خطوات بسيطة فقط لإنشاء تطبيق جوال
   </p>
   </div>
      <div className="row mx-auto mt-5">
        <div className="col-lg-4 text-center">
            <img className='mx-auto' src={choose} alt=""   style={{width:'80%'}}/>
            <p>1. اختر قالبًا</p>
        </div>
        <div className="col-lg-4 text-center">
            <img className='mx-auto' src={AddProduct} alt=""   style={{width:'80%'}}/>
            <p>2. إضافة المنتجات / الفئات
            </p>
        </div>
        <div className="col-lg-4 text-center">
            <img className='mx-auto' src={build} alt=""   style={{width:'80%'}}/>
            <p>3. قم بإنشاء تطبيقك
            </p>
        </div>
      </div>
    </div>
  )
}
