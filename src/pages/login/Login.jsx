import classes from './Login.module.css'

const Login = () => {
  return (
     <div className={classes.login}>
        {/* <div className={classes.loginFromWraper}> */}
       <span className={classes.loginTitle}>Login</span>
        <form className={classes.loginForm}>
           <label htmlFor="email">Email</label>
           <input type="text" id='email' placeholder='Enter your email...' />
           <label htmlFor="password">Password</label>
           <input type="password" id='password' placeholder='Enter your password...' />
           <button className={classes.loginButton}>Login</button>
           <p className={classes.register}>Don't have account? Register now:</p>
           <button className={classes.loginRegisterButton}>Register</button>
        </form>
        
           
         {/* </div> */}
     </div>
  )
}

export default Login