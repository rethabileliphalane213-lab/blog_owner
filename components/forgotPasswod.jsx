
import { Navigate } from "react-router-dom";

function ForgotPassword({
    email,
    onclick,
    onClick,
    onChange,
    notification,
    newPassword,
    showInput
}) {
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

    const divContainer = (
        <div className="space-y-4 border-t border-slate-100 pt-6">
            <div>
                <label
                    htmlFor="pin"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                >
                    Enter OTP
                </label>

                <input
                    type="number"
                    id="pin"
                    name="pin"
                    onChange={onChange}
                    placeholder="Enter your OTP"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                />
            </div>

            <button
                type="button"
                onClick={onClick}
                className="w-full rounded-xl bg-cyan-700 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-800 hover:shadow-md"
            >
                Verify OTP
            </button>
        </div>
    );

    const passWordContainer = (
        <div className="space-y-4 border-t border-slate-100 pt-6">
            <div>
                <label
                    htmlFor="new-password"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                >
                    Enter new password
                </label>

                <input
                    type="password"
                    id="new-password"
                    name="newPassword"
                    onChange={onChange}
                    placeholder="Enter your new password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                />
            </div>

            <button
                type="button"
                onClick={newPassword}
                className="w-full rounded-xl bg-cyan-700 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-800 hover:shadow-md"
            >
                Update Password
            </button>
        </div>
    );

    if (notification.succesMsg === "Password Changed") {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-12">

            <div className="w-full max-w-lg">

                {/* Branding */}
                <div className="mb-8 text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
                        Developer Journal
                    </p>

                    <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Account Recovery
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                        Recover access to your Full-Stack Journal account.
                    </p>
                </div>

                {/* Recovery Card */}
                <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-9">

                    <div>
                        <h2 className="text-xl font-bold text-slate-900">
                            Reset your password
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Follow the verification steps below to create a new password.
                        </p>
                    </div>

                    {/* Notifications */}
                    {element && element}

                    {/* Email Confirmation */}
                    <div className="space-y-4 rounded-xl bg-slate-50 p-5">
                        <div>
                            <p className="text-sm font-semibold text-slate-700">
                                Account email
                            </p>

                            <p className="mt-1 break-all text-sm text-cyan-700">
                                {email}
                            </p>
                        </div>

                        <p className="text-sm leading-6 text-slate-500">
                            We'll send a One-Time Password (OTP) to this email address to verify your account.
                        </p>

                        <button
                            type="button"
                            className="w-full rounded-xl bg-cyan-700 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-800 hover:shadow-md"
                            onClick={onclick}
                        >
                            Send OTP
                        </button>
                    </div>

                    {/* OTP Verification */}
                    {showInput.otpPin && divContainer}

                    {/* New Password */}
                    {showInput.showPassword && passWordContainer}

                </div>

                <p className="mt-6 text-center text-xs text-slate-400">
                    The Full-Stack Journal · Account Security
                </p>

            </div>
        </div>
    );
}

export default ForgotPassword;
