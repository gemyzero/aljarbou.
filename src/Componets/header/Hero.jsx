import React from "react";
import hero from "../../../public/images/hero.png";

export default function Hero() {
  return (
    <div className=" hero px-5">
      <div className="row px-4 ">
        <div className="col-lg-6">
          <div className="info-hero">
            <h1>قم بإنشاء تطبيقات تسوق جوالة جميلة لتعزيز مبيعاتك            </h1>
            <p>
            وداعًا لمبيعات الجوال الفائتة - أطلق تطبيق التسوق الإلكتروني الخاص بك اليوم لتحقيق مبيعات مضاعفة دون الحاجة إلى برمجة أو دمج الموقع الإلكتروني!

            </p>
            <button className="">ابدأ مجانًا            </button>
            <span>تجربة مجانية لمدة 14 يومًا | لا حاجة لبطاقة ائتمان </span>
          </div>
        </div>
        <div className="col-lg-6 img-hero">
            <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}
