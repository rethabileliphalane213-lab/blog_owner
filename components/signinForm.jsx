import { Link } from "react-router-dom";

function Signin({ general, onChange, onclick }) {
    return (
        <div>
            <form onSubmit={onclick}>

                <h1>welcome to blog</h1>

                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={general.name}
                        onChange={onChange}
                    />
                </div>

                <div>
                    <label htmlFor="surname">Surname</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={general.surname}
                        onChange={onChange}
                    />
                </div>

                <div>
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={general.email}
                        onChange={onChange}
                    />
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={general.password}
                        onChange={onChange}
                    />
                </div>

                <div>
                    <label htmlFor="confirm">confirm password</label>
                    <input
                        type="password"
                        id="confirm"
                        name="confirm"
                        value={general.confirm}
                        onChange={onChange}
                    />
                </div>

                <button type="submit">Sign In</button>
<p>
    Already have an account? <Link to="/login">Login</Link>
</p>
            </form>
        </div>
    );
}

export default Signin;



