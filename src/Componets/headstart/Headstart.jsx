import React from 'react'
import examples from "../../../public/images/examples.png";
import './headstart.css'
import SecHeadstart from './SecHeadstart';

export default function Headstart() {
  return (
 

    <>
       <div className='Headstart  text-center py-5 my-5'>
     <div className="container-fluid py-5 ">
     <div className='description-head mt-2'>
<h1>احصل على بداية جيدة مع قوالب التطبيقات المصممة باحترافية لمتجرك</h1>
    <p className='py-4'>مع أكثر من 20 قالبًا مصممًا بشكل جميل للاختيار من بينها، فمن المؤكد أنك ستجد المظهر الذي يتناسب تمامًا مع علامتك التجارية واحتياجات البيع الخاصة بك.
    </p>
    <button  className="mb-3">ابدأ مجانًا    </button>

      </div>
      <div className='img-head row'>
<img src={examples} alt="" />
      </div>
     </div>
    </div>
    <SecHeadstart></SecHeadstart>
    </>
  )
}
