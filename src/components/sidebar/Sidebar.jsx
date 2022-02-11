import classes from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarItem}>
        <span className={classes.sidebarTitle}>About Me</span>
        
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=325&w=470" alt="profile picture" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae aperiam hic, iste recusandae, alias, labore maiores quidem sed id expedita distinctio repudiandae.</p>
      </div>
      <div className={classes.sidebarItem}>
        <span className={classes.sidebarTitle}>Categories</span>
       
        <ul className={classes.sidebarList}>
          <li className={classes.sidebarListItem}>Life</li>
          <li className={classes.sidebarListItem}>Music</li>
          <li className={classes.sidebarListItem}>Style</li>
          <li className={classes.sidebarListItem}>Tech</li>
          <li className={classes.sidebarListItem}>Sport</li>
          <li className={classes.sidebarListItem}>Media</li>
       </ul>
    
      </div>
      
      <div className={classes.sidebarItem}>
        <span className={classes.sidebarTitle}>Follow Us</span>
        <div className={classes.sidebarSocial}>
           <i className={`${classes.sidebarIcon} fa-brands fa-facebook-square`}></i>
           <i className={`${classes.sidebarIcon} fa-brands fa-twitter-square`}></i>
           <i className={`${classes.sidebarIcon} fa-brands fa-instagram-square`}></i>
           <i className={`${classes.sidebarIcon} fa-brands fa-pinterest-square`}></i>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar