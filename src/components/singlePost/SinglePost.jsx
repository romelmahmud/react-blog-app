import classes from './SinglePost.module.css'

const SinglePost = () => {
  return (
     <div className={classes.singlePost}>
        
        <div className={classes.singlePostWraper}>
           <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Nature" className={classes.singlePostImg} />
           <h1 className={classes.singlePostTitle} >Lorem ipsum dolor sit amet
              <div className={classes.singlePostEdit}>
                 <i className={`${classes.singlePostIcon} fa-solid fa-pen-to-square`}></i>
                 <i className={`${classes.singlePostIcon} fa-solid fa-trash`}></i>
              </div>
           </h1>
           <div className={classes.singlePostInfo}>
              <span className={classes.singlePostAuthor}>Author: <strong>Romel</strong></span>
              <span className={classes.singlePostDate}>1 Hour ago
              </span>
           </div>
           <p className={classes.singlePostDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit voluptate a provident aspernatur possimus voluptatibus inventore, eos reprehenderit iure, enim ipsum, architecto veniam beatae quae magni adipisci repudiandae dolor saepe?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit voluptate a provident aspernatur possimus voluptatibus inventore, eos reprehenderit iure, enim ipsum, architecto veniam beatae quae magni adipisci repudiandae dolor saepe?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit voluptate a provident aspernatur possimus voluptatibus inventore, eos reprehenderit iure, enim ipsum, architecto veniam beatae quae magni adipisci repudiandae dolor saepe?

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit voluptate a provident aspernatur possimus voluptatibus inventore, eos reprehenderit iure, enim ipsum, architecto veniam beatae quae magni adipisci repudiandae dolor saepe?
           </p>
      </div>
     </div>
  )
}

export default SinglePost