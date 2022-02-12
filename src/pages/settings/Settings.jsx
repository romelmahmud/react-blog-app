import classes from './Settings.module.css'
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
  return (
     <div className={classes.settings}>
        <div className={classes.settingsWrapper}>
           <div className={classes.settingsTitle}>
            <span className={classes.settingsUpdateTitle}>Update Account</span>
              <span className={classes.settingsDeleteTitle}>Delete Account</span>
           </div>
           <form className={classes.settingsForm}>
              <label htmlFor="">Profile Picture</label>
              <div className={classes.settingsPP}>
                 <img src="https://images.pexels.com/photos/6388988/pexels-photo-6388988.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6388988.jpg&fm=jpg" alt="" />
                 <label htmlFor="fileInput">
                 <i class={`${classes.profileIcon}  fa-regular fa-circle-user`}></i>
                 </label>
                 
              </div>
              <input type="file" name="" id="fileInput" style={{ display: "none" }} />
                 <label htmlFor="username">Username</label>
                  <input type="text" name="" id="username" placeholder='Romel' />
                  <label htmlFor="email">Email</label>
                  <input type="email" name="" id="email" placeholder='romel@gmail.com' />
                  <label htmlFor="password">Password</label>
                  <input type="password" name="" id="password" />
                  <button className={ classes.settingSubmit}>Update</button>
              
           </form>
        </div>
           <Sidebar/>
     </div>
  )
}

export default Settings