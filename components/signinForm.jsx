
import { Link } from "react-router-dom";

function Signin({ general, onChange, onclick, notification }) {
    let element;

    if (notification.errorMsg) {
        element = (
            <h4 className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {notification.errorMsg}
            </h4>
        );
    }

    if (notification.succesMsg) {
        element = (
            <h4 className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                {notification.succesMsg}
            </h4>
        );
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-12">

            <div className="w-full max-w-lg">

             
                <div className="mb-8 text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
                        Developer Journal
                    </p>

                    <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Welcome to
                        <span className="mt-1 block text-cyan-700">
                            The Full-Stack Journal
                        </span>
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                        Create your account and join the conversation.
                    </p>
                </div>

            
                <form
                    onSubmit={onclick}
                    className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-9"
                >

                    <div>
                        <h2 className="text-xl font-bold text-slate-900">
                            Create an account
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Enter your details below to get started.
                        </p>
                    </div>

                    {element && element}

                   
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                            First name
                        </label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={general.name}
                            onChange={onChange}
                            required
                            placeholder="Enter your first name"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                        />
                    </div>

                  
                    <div>
                        <label
                            htmlFor="surname"
                            className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                            Surname
                        </label>

                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            value={general.surname}
                            onChange={onChange}
                            required
                            placeholder="Enter your surname"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                        />
                    </div>

                   
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                            Email address
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={general.email}
                            onChange={onChange}
                            required
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                        />
                    </div>

                
                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={general.password}
                            onChange={onChange}
                            required
                            placeholder="Create a password"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="confirm"
                            className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                            Confirm password
                        </label>

                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            value={general.confirm}
                            onChange={onChange}
                            required
                            placeholder="Confirm your password"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                        />
                    </div>

                 
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-cyan-700 px-6 py-3.5 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-800 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-cyan-500/20"
                    >
                        Create Account
                    </button>

                 
                    <p className="border-t border-slate-100 pt-5 text-center text-sm text-slate-500">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-bold text-cyan-700 transition hover:text-cyan-900 hover:underline"
                        >
                            Login
                        </Link>
                    </p>

                </form>

                <p className="mt-6 text-center text-xs text-slate-400">
                    The Full-Stack Journal · Developer Community
                </p>

            </div>
        </div>
    );
}

export default Signin;
