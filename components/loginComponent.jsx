import { Link } from "react-router-dom";

function Login({ onChange, onclick }) {
    return (
        <form onSubmit={onclick}>
            <div>
                <h2>Log in here!</h2>

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