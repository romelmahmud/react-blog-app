import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Topbar.module.css'

const Topbar = () => {
   const user = false;
  return (
     <div className={classes.top}>
        <div className={classes.topLeft}>
           <i className={`${classes.topIcon} fa-brands fa-facebook-square`}></i>
           <i className={`${classes.topIcon} fa-brands fa-twitter-square`}></i>
           <i className={`${classes.topIcon} fa-brands fa-instagram-square`}></i>
           <i className={`${classes.topIcon} fa-brands fa-pinterest-square`}></i>
         </div>
        <nav className={classes.topCenter}>
           <ul className={classes.topList}>
              <li className={ classes.topListItem}><Link to='/' className='link' >Home</Link></li>
              <li className={ classes.topListItem}><Link to='/settings' className='link'>About</Link></li>
              <li className={ classes.topListItem}><Link to='/settings' className='link'>Contact</Link></li>
              <li className={ classes.topListItem}><Link to='/write' className='link'>Write</Link></li>
              <li className={ classes.topListItem}><Link to='/settings' className='link'>{user && 'LOGOUT'}</Link></li>
           </ul>
        </nav> 
        <div className={classes.topRight}>
           {
              user ? (
               <img className={classes.topImg } src="https://images.pexels.com/photos/6388988/pexels-photo-6388988.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6388988.jpg&fm=jpg" />
              ) : (<ul className={classes.topList}>
                    <li className={classes.topListItem}>
                       
                    <Link to='/login' className='link'>Login</Link>
                    </li>
                    <li className={classes.topListItem}>
                       
                    <Link to='/register' className='link'>Register</Link>
                    </li>
                    </ul>
              )
             
                    
           }
           
           <i className={`${classes.topSearchIcon} fa-solid fa-magnifying-glass`}></i>

        </div>
     </div>
  )   
}

export default Topbar