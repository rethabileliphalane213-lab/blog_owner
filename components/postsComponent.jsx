function Posts({logout}){

    return(
        <div className="stand-still">
            <button onClick={logout}>Log out</button>
            <h1>You are logged in</h1>
           
           <div className="posts-container">
            <div className="posts-row">
                <div className="posts-col">
                    <div className="title-container">
                        <label htmlFor="post-title">Title</label>
                    <input type="text" id="post-title" name="title" />
                    </div>
                    <div className="msg-container">
                        <label htmlFor="post">Message</label>
                        <textarea id="post" ></textarea>
                    </div>
                    
                </div>
            </div>
           </div>

        </div>
    )
}

export default Posts