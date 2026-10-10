import { Link } from "react-router-dom";

function Login({ onChange, onclick,notification }) {
     let element
    if(notification.errorMsg){
        element=<h4 className="error-msg">${notification.errorMsg}</h4>
    }
    if(notification.succesMsg){
        element=<h4 className="succes-msg">${notification.succesMsg}</h4>
    }
    return (
        <form onSubmit={onclick}>
            <div>
                <h2>Log in here!</h2>
   {element}
                <div>
                    <label htmlFor="email">Enter email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={onChange}
                    />
                </div>

                <div>
                    <label htmlFor="password">Enter your Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={onChange}
                    />
                </div>
            </div>

            <button type="submit">Log In</button>

            <p>
                Don't have an account? <Link to="/">Sign in</Link>
            </p>
        </form>
    );
}

export default Login;