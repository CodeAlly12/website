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
        WORK.IT<i className='fas fa-leaf'/> 
       </Link>
       <div className='menu-icon'  onClick={handleClick}>
         <i className={ click ? 'fas fa-times':'fas fa-bars'}/>

       </div>
       <ul className={click? 'nav-menu active': 'nav-menu'}>
         { <li className='nav-item  '>
           <Link to= '/'className='nav-links' onClick={closeMobileMenu}>
             Home
           </Link>
           </li> }
          <li className='nav-item  '>
           <Link to= '/projects'className='nav-links' onClick={closeMobileMenu}>
             Projects
           </Link>

         </li>
         <li className='nav-item  '>
           <Link to= '/contact'className='nav-links' onClick={closeMobileMenu}>
             Contact
           </Link>

         </li>
         <li className='nav-item  '>
           <Link to= '/Services'className='nav-links' onClick={closeMobileMenu}>
             Services
           </Link>

         </li>
         {/* <li className='nav-item  '>
           <Link to= '/Contact'className='nav-links' onClick={closeMobileMenu}>
             Contact
           </Link>

         </li> */}
         <li className='nav-item  '>
           <Link to= '/Sign Up'className='nav-links-mobile' onClick={closeMobileMenu}>
             Sign up
           </Link>

         </li>
       </ul>
       {button &&<Button buttonStyle='btn--large'
       >Sign up</Button>}
       
   </div>
   </nav>
  
  </>

  ) 
}

export default Navbar;
