function ForgotPassword({email,onclick}){
    return(
        <div>
            <h1>Email Recovery</h1>
            <div className="send-otp">
                <h2>Sending OTP</h2>
                <p className="description">Sent a One Time Pin to  {email}</p>
                <button className="send" onClick={onclick}>Confirm</button>
            </div>
        </div>
    )
}

export default ForgotPassword
