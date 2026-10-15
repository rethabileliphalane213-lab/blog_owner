function ForgotPassword(){
    return(
        <div>
            <h1>Email Recovery</h1>
            <div className="send-otp">
                <h2>OTP Sent!</h2>
                <p className="description">Sent a One Time Pin to  email</p>
                <button className="send">Confirm</button>
            </div>
        </div>
    )
}

export default ForgotPassword
