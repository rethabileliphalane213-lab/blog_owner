function Posts({logout}){

    return(
        <div>
            <button onClick={logout}>Log out</button>
            <h1>Add Blog Post</h1>
            <form method="POST">
                <div>
                    <label htmlFor="title">Post Title</label>
                    <input type="text" id="title" name="title"/>
                </div>
                   <div>
                    <label htmlFor="Post">Post</label>
               <textarea id="post" name="title"></textarea>
                </div>
<button type="submit">Submit Post</button>
            </form>

        </div>
    )
}

export default Posts