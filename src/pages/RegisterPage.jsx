import React from 'react'
import { useState } from 'react';
import logo from '../../public/images/Logo.png'

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (!firstName.trim()) {
      setFirstNameError('الاسم الأول مطلوب');
      isValid = false;
    } else {
      setFirstNameError('');
    }

    if (!email.trim()) {
      setEmailError('البريد الإلكتروني مطلوب');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('بريد إلكتروني غير صالح');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!companyName.trim()) {
      setCompanyNameError('اسم الشركة أو النشاط مطلوب');
      isValid = false;
    } else {
      setCompanyNameError('');
    }

    if (!password.trim()) {
      setPasswordError('كلمة المرور مطلوبة');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('كلمة المرور يجب أن تكون 6 حروف أو أكثر');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      console.log('تم التسجيل بنجاح:', { firstName, lastName, email, phoneNumber, companyName, password });
    }
  };

  return (
<div className=" py-5 bg-white">
  
   <div className=" logo   py-lg-1  my-5  px-lg-5 d-flex justify-content-center align-items-center">
              <img src={logo} alt="" className='mb-2' style={{width:'150px'}}/>
          </div>  

<div className="container mt-0 d-flex   justify-content-center align-items-center vh-100 my-5">
      <div className="card p-4 shadow-lg  mt-5 w-50  ">
        <h2 className="text-center mb-3">إنشاء حساب</h2>
        <p className="text-center text-muted mb-3">أنت على بعد خطوة واحدة من تطوير عملك</p>
        <form onSubmit={handleSubmit} className=''>
          <div className="mb-3 text-end">
            <label htmlFor="firstName " className="form-label ">* الاسم الأول</label>
            <input
              type="text"
              className="form-control py-3"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={() => !firstName.trim() && setFirstNameError('الاسم الأول مطلوب')}
              required
            />
            {firstNameError && <div className="text-danger">{firstNameError}</div>}
          </div>
          <div className="mb-3 text-end">
            <label htmlFor="lastName" className="form-label">الاسم الأخير</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3 text-end">
            <label htmlFor="email" className="form-label">* البريد الإلكتروني</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {
                if (!email.trim()) {
                  setEmailError('البريد الإلكتروني مطلوب');
                } else if (!validateEmail(email)) {
                  setEmailError('بريد إلكتروني غير صالح');
                } else {
                  setEmailError('');
                }
              }}
              required
            />
            {emailError && <div className="text-danger">{emailError}</div>}
          </div>
          <div className="mb-3 text-end">
            <label htmlFor="phoneNumber" className="form-label">رقم الهاتف</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-3 text-end">
            <label htmlFor="companyName" className="form-label">* اسم الشركة أو النشاط</label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              onBlur={() => !companyName.trim() && setCompanyNameError('اسم الشركة أو النشاط مطلوب')}
              required
            />
            {companyNameError && <div className="text-danger">{companyNameError}</div>}
          </div>
          <div className="mb-3 text-end">
            <label htmlFor="password" className="form-label">* كلمة المرور</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => {
                if (!password.trim()) {
                  setPasswordError('كلمة المرور مطلوبة');
                } else if (password.length < 6) {
                  setPasswordError('كلمة المرور يجب أن تكون 6 حروف أو أكثر');
                } else {
                  setPasswordError('');
                }
              }}
              required
            />
            {passwordError && <div className="text-danger">{passwordError}</div>}
          </div>
          <button type="submit" className="btn btn-primary w-100">تسجيل</button>
        </form>
        <button className="btn btn-danger w-100 mt-2">
          <span className="me-2"></span> التسجيل عن طريق Google
        </button>
        <p className="mt-3 text-center">
          هل لديك حساب بالفعل؟ <a href="#">تسجيل الدخول</a>
        </p>
      </div>
    </div>
</div>
  );
}

 
