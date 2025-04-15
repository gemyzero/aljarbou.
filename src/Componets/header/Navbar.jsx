import React from 'react'
import logo from '../../../public/images/Logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    // 
      
      <div className='N'> 
     <div className='navbar  px-4 py-lg-3  py-md-4 '>
     <div className=" logo  py-lg-1  px-lg-5">
            <img src={logo} alt="" />
        </div>  
        <div className= " py-lg-1  start-for-free me-lg-5 px-lg-5">
                
               <Link to='https://meister.stacksmarket.co/'    className=' '>ابدأ مجانًا            </Link>
          
        </div>
     </div>
      </div>

  )
}
