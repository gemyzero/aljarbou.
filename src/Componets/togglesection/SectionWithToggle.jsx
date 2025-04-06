import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import "./SectionWithToggle.css";
export default function SectionWithToggle() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleSection1 = async () => {
    setIsOpen1(!isOpen1);
  };

  const toggleSection2 = async () => {
    setIsOpen2(!isOpen2);
  };

  const toggleSection3 = async () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div className="container toggleSection mb-5 ">
<h2 >الأسئلة الشائعة
</h2>


      <div>
        <div
          className={`section1 mx-auto ${isOpen1 ? "active" : ""}`}
          onClick={toggleSection1}
        >
          <div className={`section-header isOpen `}>
            <small>هل يمكنني إنشاء تطبيق دون أن يكون لدي موقع ويب؟
            </small>
            {isOpen1 ? (
              <i>
                <FaChevronUp />
              </i>
            ) : (
              <i>
                <FaChevronDown />
              </i>
            )}
          </div>
        </div>

        <div className={`section-content ${isOpen1 ? "active" : ""}`}>
        <p>صُمم هذا لتبسيط عملية إنشاء التطبيق، حيث أزلنا عناء الاستضافة وإدارة الموقع، وأتحنا إدارة كل ما يتعلق بالتطبيق من مكان واحد (لوحة تحكم المُنشئ). نواكب أحدث التقنيات لضمان أمان بياناتكم، حيث نعمل بدون خوادم، ونلبي توقعاتكم وتوقعات مستخدميكم بسرعة وميزات وانسيابية عالية.
        </p>
      </div>
      </div>
      <div>
        <div
          className={`section1 mx-auto ${isOpen2 ? "active" : ""}`}
          onClick={toggleSection2}
        >
          <div className={`section-header isOpen `}>
            <small>كيفية التحميل على Google Play ومتجر التطبيقات؟
            </small>
            {isOpen2 ? (
              <i>
                <FaChevronUp />
              </i>
            ) : (
              <i>
                <FaChevronDown />
              </i>
            )}
          </div>
        </div>

        <div className={`section-content ${isOpen2 ? "active" : ""}`}>
        <p>لا يشمل اشتراكنا حسابات المطورين التي تحتاج إلى تحميلها، بل يجب أن تكون ملكًا لك لأنها تمثل علامتك التجارية. باستخدام منشئ التطبيقات لدينا، يمكنك إنشاء ملفات AAB أو APK لنظام أندرويد لتحميلها على متجر جوجل بلاي، وملفات IPA لمتجر التطبيقات. هذا لا يتطلب معرفة برمجية، بل بضع نقرات فقط من منشئ Stacks.
        </p>
      </div>
      </div>

      <div>
        <div
          className={`section1 mx-auto ${isOpen3 ? "active" : ""}`}
          onClick={toggleSection3}
        >
          <div className={`section-header isOpen `}>
            <small>لماذا تختار منشئ تطبيقات الهاتف المحمول Stacks؟
            </small>
            {isOpen3 ? (
              <i>
                <FaChevronUp />
              </i>
            ) : (
              <i>
                <FaChevronDown />
              </i>
            )}
          </div>
        </div>

        <div className={`section-content ${isOpen3 ? "active" : ""}`}>
        <p>صُممت هذه الوحدة لتبسيط عملية إنشاء التطبيق، حيث أزلنا عناء الاستضافة وإدارة الموقع الإلكتروني، وأتحنا إدارة كل ما يتعلق بالتطبيق من مكان واحد (لوحة تحكم المُنشئ). نواكب أحدث التقنيات لضمان أمان بياناتكم، حيث نعمل بدون خوادم، ونلبي توقعاتكم وتوقعات مستخدميكم من حيث السرعة والميزات والانسيابية.
        </p>
      </div>
      </div>
  
    </div>
  );
}
