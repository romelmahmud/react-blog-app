import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'

import classes from './Home.module.css'

const Home = () => {
   return (
     <>
      <Header />
         <div className={classes.home}>
            <Posts />
            <Sidebar/>
     </div>
     </>
     
  )
}

export default Home