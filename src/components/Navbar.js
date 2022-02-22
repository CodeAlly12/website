import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
  const [click,setClick]=useState(false)
  const [button,setButton] =useState (true)

  const handleClick = ()=>setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const showButton = ()=>   {
    if (window.innerWidth<=960){
      setButton(false)
    } else {
      setButton(true)
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize',showButton);

  
  return( <>
   <nav className="navbar"><div className="navbar-container">
       <Link to='/' className='navbar-logo' onClick = {closeMobileMenu} > 
       LET'S EAT <i className='fab fa-earlybirds'/> 
       </Link>
       <div className='menu-icon'  onClick={handleClick}>
         <i className={ click ? 'fas fa-times':'fas fa-bars'}/>

       </div>
       <ul className={click? 'nav-menu active': 'nav-menu'}>
         { <li className='nav-item  '>
           <Link to= '/Home'className='nav-links' onClick={closeMobileMenu}>
             Home
           </Link>
           </li> }
          <li className='nav-item  '>
           <Link to= '/Reservation'className='nav-links' onClick={closeMobileMenu}>
             Reservation
           </Link>

         </li>
         <li className='nav-item  '>
           <Link to= '/Menu'className='nav-links' onClick={closeMobileMenu}>
             Menu
           </Link>

         </li>
         <li className='nav-item  '>
           <Link to= '/Shop'className='nav-links' onClick={closeMobileMenu}>
             Shop
           </Link>

         </li>
         {/* <li className='nav-item  '>
           <Link to= '/Contact'className='nav-links' onClick={closeMobileMenu}>
             Contact
           </Link>

         </li> */}
         <li className='nav-item  '>
           <Link to= '/Sign Up'className='nav-links-mobile' onClick={closeMobileMenu}>
             SIGN UP
           </Link>

         </li>
       </ul>
       {button &&<Button buttonStyle='btn--primary'
       >SIGN UP</Button>}
       
   </div>
   </nav>
  
  </>

  ) 
}

export default Navbar;
