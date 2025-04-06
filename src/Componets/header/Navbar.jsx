import React from 'react'
import logo from '../../../public/images/Logo1.png'

export default function Navbar() {
  return (
    // 
      
  
       
      <div className='N'> 
     <div className='navbar  px-4 py-lg-3  py-md-4'>
     <div className=" logo  py-lg-1  px-lg-5">
            <img src={logo} alt="" />
        </div>  
        <div className= " py-lg-1  start-for-free me-lg-5 px-lg-5">
            <button className=' '>ابدأ مجانًا            </button>
        </div>
     </div>
      </div>

  )
}
