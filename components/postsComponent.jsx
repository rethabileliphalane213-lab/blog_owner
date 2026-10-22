function Posts({logout ,onChange,onClick,notification}){

      let element
    if(notification.errorMsg){
        element=<h4 className="error-msg">{notification.errorMsg}</h4>
    }
    if(notification.succesMsg){
        element=<h4 className="succes-msg">{notification.succesMsg}</h4>
    }

    

    return(
        <div className="stand-still">
            <button onClick={logout}>Log out</button>
            <h1>You are logged in</h1>
           
           <div className="posts-container">
            {element}
            <div className="posts-row">
                <div className="posts-col">
                    <div className="title-container">
                        <label htmlFor="post-title">Title</label>
                    <input type="text" id="post-title" name="title" onChange={onChange}/>
                    </div>
                    <div className="msg-container">
                        <label htmlFor="post">Message</label>
                        <textarea id="post" name="post" onChange={onChange}></textarea>
                    </div>

                    <div className="image-container">
                        <label htmlFor="cover">Upload Cover  Photo</label>
                        <input type="file" name="file" onChange={onChange} accept="image/*" />
                    </div>
                    
                </div>
            </div>
            <button onClick={onClick}>Submit Post</button>
           </div>

        </div>
    )
}

export default Posts