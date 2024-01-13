import React from 'react'
import { Link } from 'react-router-dom'
import '../style/navbar.css'
import navlogo from '../assets/img 3.jpg'
import navimg from '../assets/img 4.jpg'

const Navbar = () => {
  return (
    
    <nav className='border-bottom border-primary border-2'>

    
      
      <div className='container d-flex justify-content-between align-items-center'>

      <div>
        <Link to="/"><img src={navlogo} alt="" className='image'/></Link>
      </div>

       
        <div>
       <ul className='d-flex align-items-center gap-5 list-unstyled'>
        <Link to="/NewUser" className='link'><li>NewUser</li></Link>
        <Link to="/AllUser" className='link'><li>AllUser</li></Link>
        <li><img src={navimg} alt="" className=' rounded-pill d-none d-lg-block img-fluid'/></li>
        </ul>
        </div>
       </div>

       

    </nav>
    
  )
}

export default Navbar