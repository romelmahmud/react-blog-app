import classes from './Write.module.css'

const Write = () => {
  return (
     <div className={classes.write}>
        <form className={classes.writeForm}>
           <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" srcset="" className={classes.inputImage} />
        <div className={`${classes.writeFromGroup} ${classes.writeUpload}`}>
              <p className={classes.imageUpload}>Uplaod Image</p>
              <label htmlFor="fileInput">
              
              <i className={`${classes.writeIcon} fa-solid fa-plus`}></i>
              </label>
              <input type="file"  id="fileInput" style={{display: "none"}} />
           </div>
           <div className={classes.writeFromGroup}>
              
              <input type="text" placeholder='Title' className={classes.writeInput} autoFocus={true} />
            
           </div>
           
           <div className={classes.writeFromGroup}>
              <textarea placeholder='Tell your story...' type="text" className={`${classes.writeInput} ${classes.writeText}`}></textarea>
           </div>
           
           <button className={ classes.writeSubmit}>Publish</button>
        </form>
     </div>
  )
}

export default Write