import classes from './Post.module.css'

const Post = () => {
  return (
     <div className={classes.post}>
        <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Lake" />
        <div className={classes.postInfo}>
           <div className={classes.postCategories}>
            <span className={classes.postCategory}>Nature</span>
              <span className={classes.postCategory}>Life</span>
           </div>
           <span className={classes.postTitle}>Lorem ipsum dolor sit amet</span>
           <hr />
           <span className={ classes.postDate}>1 houre ago</span>
           <p className={classes.postDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ea recusandae, sed optio earum dolore sit incidunt quae iure autem suscipit eius ullam commodi facilis doloribus vel tempore. Dolor, earum!
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ea recusandae, sed optio earum dolore sit incidunt quae iure autem suscipit eius ullam commodi facilis doloribus vel tempore. Dolor, earum</p>

        </div>
     </div>
  )
} 

export default Post