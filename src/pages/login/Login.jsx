import classes from './Login.module.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
     <div className={classes.login}>
        
       <span className={classes.loginTitle}>Login</span>
        <form className={classes.loginForm}>
           <label htmlFor="email">Email</label>
           <input type="text" id='email' placeholder='Enter your email...' />
           <label htmlFor="password">Password</label>
           <input type="password" id='password' placeholder='Enter your password...' />
           <button className={classes.loginButton}><Link to="/login" className='formLink'>Login</Link></button>
           <p className={classes.register}>Don't have account? Register now:</p>
           <button className={classes.loginRegisterButton}><Link to="/register" className='formLink'>Register</Link></button>
        </form>
        
           
  
     </div>
  )
}

export default Login