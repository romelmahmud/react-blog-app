import { Link } from 'react-router-dom'
import classes from './Register.module.css'


const Register = () => {
  return (
     <div className={classes.register}>
        {/* <div className={classes.registerFromWraper}> */}
       <span className={classes.registerTitle}>Register</span>
        <form className={classes.registerForm}>
        <label htmlFor="username">Username</label>
           <input type="text" id='username' placeholder='Enter your username...' />
           <label htmlFor="email">Email</label>
           <input type="text" id='email' placeholder='Enter your email...' />
           <label htmlFor="password">Password</label>
           <input type="password" id='password' placeholder='Enter your password...' />
           <button className={classes.registerButton}><Link to="/register" className='formLink'>Register</Link></button>
           <p className={classes.loginText}>Already ready have an account? Login now:</p>
           <button className={classes.registerLoginButton}><Link to="/login" className='formLink'>Login</Link></button>
        </form>
        
           
         {/* </div> */}
     </div>
  )
}

export default Register