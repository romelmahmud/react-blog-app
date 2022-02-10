import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={ classes.headerTitles}>
        <span className={classes.titleSmall}>React & Node</span>
        <span className={classes.titleLarge}>Blog</span>
      </div>
      <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Nature Image" className={classes.headerImage}/>
    </div>
  )
}

export default Header