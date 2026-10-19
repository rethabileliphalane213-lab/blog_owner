function ForgotPassword({email,onclick,onClick,onChange,notification,newPassword}){
       let element
    if(notification.errorMsg){
        element=<h4 className="error-msg">{notification.errorMsg}</h4>
    }
    if(notification.succesMsg){
        element=<h4 className="succes-msg">{notification.succesMsg}</h4>
    }
    const divContainer= <div className="confirm-otp-pin-container">
                <label htmlFor="pin">ENTER OTP</label>
                <input type="number" id="pin"  name="pin" onChange={onChange}/>
                <button onClick={onClick} >Send Otp</button>
            </div>
    const passWordContainer= <div className="new-password-container">
                <label htmlFor="new-password">Enter new password</label>
                <input type="text" id="new-password" name="newPassword" onChange={onChange} />
                <button onClick={newPassword}>Submit</button>
            </div>
    return(
        <div>

            <h1>Email Recovery</h1>
            {element}
            <div className="send-otp">
                <h2>Sending OTP</h2>
                <p className="description">Sent a One Time Pin to  {email}</p>
                <button className="send" onClick={onclick}>Confirm</button>
            </div>



            
            {notification.succesMsg==="If an account exists, a recovery OTP will be sent."?divContainer:""}
            {notification.succesMsg==="Your Password has Been Reset.Enter new Password"||notification.succesMsg==="Incorrect PIN!"?passWordContainer:""}


           
        </div>
    )
}

export default ForgotPassword
