import React from 'react'
import logo from '../../../public/images/Logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    // 
      
      <div className='N'> 
     <div className='navbar  px-4 py-lg-3  py-md-4 '>
     <div className=" logo  py-lg-1  px-lg-5 d-flex justify-content-center">
            <img src={logo} alt="" className=''/>
        </div>  
        <div className= " py-lg-1  start-for-free me-lg-5 px-lg-5 d-flex">   
               <Link to='/RegisterPage'    className='mx-1 '>ابدأ مجانًا            </Link>
               <Link to='/RegisterPage'    className=' mx-1'> إنشاء حساب  </Link>

        </div>
     </div>
      </div>

  )
}
