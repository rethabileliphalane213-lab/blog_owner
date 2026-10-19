function ForgotPassword({email,onclick}){
    return(
        <div>
            <h1>Email Recovery</h1>
            <div className="send-otp">
                <h2>Sending OTP</h2>
                <p className="description">Sent a One Time Pin to  {email}</p>
                <button className="send" onClick={onclick}>Confirm</button>
            </div>

            <div className="confirm-otp-pin-container">
                <label htmlFor="pin">ENTER OTP</label>
                <input type="number" id="pin"  name="otp-pin"/>
                <button >Send Otp</button>
            </div>

            <div className="new-password-container">
                <label htmlFor="new-password">Enter new password</label>
                <input type="text" id="new-password" />
            </div>
        </div>
    )
}

export default ForgotPassword
