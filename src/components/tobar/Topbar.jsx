import React from 'react'
import classes from './Topbar.module.css'

const Topbar = () => {
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
              <li className={ classes.topListItem}>HOME</li>
              <li className={ classes.topListItem}>ABOUT</li>
              <li className={ classes.topListItem}>CONTACT</li>
              <li className={ classes.topListItem}>WRITE</li>
              <li className={ classes.topListItem}>LOGOUT</li>
           </ul>
        </nav>
        <div className={classes.topRight}>
           <img className={classes.topImg } src="https://images.pexels.com/photos/6388988/pexels-photo-6388988.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6388988.jpg&fm=jpg" />
           <i className={`${classes.topSearchIcon} fa-solid fa-magnifying-glass`}></i>

        </div>
     </div>
  )   
}

export default Topbar