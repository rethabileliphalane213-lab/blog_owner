function Login() {
    return (
        <form>
            <div>
                <h2>Log in here!</h2>

                <div>
                    <label htmlFor="email">Enter email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>

                <div>
                    <label htmlFor="password">Enter your Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                    />
                </div>
            </div>

            <button type="submit">Log In</button>
        </form>
    );
}

export default Login;