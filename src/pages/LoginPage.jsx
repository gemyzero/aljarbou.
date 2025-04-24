import React, { useState } from 'react'
import logo from '../../public/images/Logo.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      let isValid = true;
  
      if (!email.trim()) {
        setEmailError('البريد الإلكتروني مطلوب');
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setEmailError('بريد إلكتروني غير صالح');
        isValid = false;
      } else {
        setEmailError('');
      }
  
      if (!password.trim()) {
        setPasswordError('كلمة المرور مطلوبة');
        isValid = false;
      } else {
        setPasswordError('');
      }
  
      if (isValid) {
        // هنا ممكن تبعت بيانات تسجيل الدخول للخادم
        console.log('محاولة تسجيل الدخول:', { email, password });
      }
    };
  
    return (
     <div className="bg-white d-flex justify-content-center py-5 align-items-center " style={{height:'100vh'}}>
  
 
   
       <div className=" row     ">
       <div className=" logo  text-center py-lg-1  mb-5  px-lg-5">
              <img src={logo} alt="" className='' style={{width:'150px'}}/>
          </div>
        <div className= " row   card p-4 mb-5 shadow-lg" >
          <h2 className="text-center mb-3">مرحباً مرة أخرى</h2>
          <form onSubmit={handleSubmit}>
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
                  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    setEmailError('بريد إلكتروني غير صالح');
                  } else {
                    setEmailError('');
                  }
                }}
                required
              />
              {emailError && <div className="text-danger">{emailError}</div>}
            </div>
            <div className="mb-3 text-end position-relative">
              <label htmlFor="password" className="form-label">* كلمة المرور</label>
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => !password.trim() && setPasswordError('كلمة المرور مطلوبة')}
                required
              />
              <button
                type="button"
                className="btn btn-outline-primary    position-absolute  start-0 translate-middle-y "
                onClick={togglePasswordVisibility}
                style={{top:'50px'}}
              >
                <i >{passwordVisible ? <FaEyeSlash />:<FaEye /> } </i>
              </button>
              {passwordError && <div className="text-danger">{passwordError}</div>}
            </div>
            <button type="submit" className="btn btn-primary w-100">تسجيل الدخول</button>
          </form>
          <button className="btn btn-danger w-100 mt-2">
            <span className="me-2"></span> تسجيل الدخول باستخدام Google
          </button>
          <div className="mt-3 text-center">
            <Link to='/RegisterPage'>            <a href="#" className="text-decoration-none">ليس لديك حساب؟ التسجيل</a>
            </Link>
          </div>
          <div className="text-center mt-2">
            <a href="#" className="text-decoration-none">نسيت كلمة المرور؟</a>
          </div>
        </div>
      </div>
     </div>
    );
  }
}
