import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./signinForm";
import Login from "./loginComponent";
import Posts from "./postsComponent";
import ForgotPassword from "./forgotPasswod";

function Main() {
    ////////////////////////////////////////////////
    const[token,setToken]=useState(localStorage.getItem("token")||"")
    const [general, setGeneral] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirm: ""
    });
    const [logger,setLogger]=useState({
        email:"",
        password:""
    })
  const [errorOrSucess, setErrorOrSucces] = useState({
    errorMsg: "",
    succesMsg: ""
});
const [post,setPost]=useState({
    title:"",
    post:""
})
///////////////////////////////////////////////////////////////////////////////////////////
    const generalChnage = (event) => {
        setGeneral({
            ...general,
            [event.target.name]: event.target.value
        });
    };
function loghandleChange(event){

    setLogger({
        ...logger,
         [event.target.name]: event.target.value
    })
}
function postHandleChange(e){
setPost({
    ...post,
[e.target.name]:e.target.value
})
}
////////////////////////////////////////////////////////////////////////////////////////////////
    async function btnClick(e) {
    e.preventDefault();

    if (general.password.trim() === "" || general.confirm.trim() === "") {
        setErrorOrSucces({
            errorMsg: "Passwords cannot be empty",
            succesMsg: ""
        });
        return;
    }

    if (general.password !== general.confirm) {
        setErrorOrSucces({
            errorMsg: "Passwords must match",
            succesMsg: ""
        });
        return;
    }

    setErrorOrSucces({
        errorMsg: "",
        succesMsg: ""
    });

    try {
        const response = await fetch(
            "http://localhost:4000/signin/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...general })
            }
        );

        const data = await response.json();

        if (!response.ok || data.error) {
            setErrorOrSucces({
                errorMsg: data.error || "Registration failed",
                succesMsg: ""
            });
            return;
        }

        if (data.succes) {
            setErrorOrSucces({
                errorMsg: "",
                succesMsg: data.succes
            });
        }
        console.log(data);
    } catch (e) {
        console.error(e);

        setErrorOrSucces({
            errorMsg: "Unable to connect to the server",
            succesMsg: ""
        });
    }
}

async function passwordRecovery(){
try{
    const response=await fetch("http://localhost:4000/login/users",
    {
        method:"POST",
        headers:{ 
        "content-type":"application/json"
        },
        body:{
            email:general.email
        }
    }
)
const data=await response.json()
if(data.succes){
                   
                     setErrorOrSucces({
    errorMsg: "",
    succesMsg: data.succes
});
                 }
                 if(data.error){
                   setErrorOrSucces({
    errorMsg: data.error,
    succesMsg: ""
});

}catch(e){
 console.error(e);

        setErrorOrSucces({
            errorMsg: "Unable to connect to the server",
            succesMsg: ""
        });

}
}




function logout(){
    localStorage.removeItem("token")
    setToken("")
}
async function loginClick(e){ 
    e.preventDefault() 
    try{ 
        const response = await fetch( "http://localhost:4000/login/users", 
            { method: "POST",
                 headers: { 
                    "Content-Type": "application/json"
                 }, 
                 body: JSON.stringify({...logger }) } ); 
                 const data = await response.json();
                 localStorage.setItem("token",data.token)
                 setToken(data.token)
                 if(data.succes){
                   
                     setErrorOrSucces({
    errorMsg: "",
    succesMsg: data.succes
});
                 }
                 if(data.error){
                   setErrorOrSucces({
    errorMsg: data.error,
    succesMsg: ""
});
                 }
                  console.log(data);
                 }catch(e){ 
                    console.log(e) } 
                }


    if(token){
        return(
            <Posts  logout={logout}/>
        )
     }
        
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={
                        <Signin
                            general={general}
                            onChange={generalChnage}
                            onclick={btnClick}
                          notification={errorOrSucess}
                        />
                    }
                />

                <Route
                    path="/login"
                    element={<Login 
                         onChange={loghandleChange}
                            onclick={loginClick}
                             notification={errorOrSucess}
                            />}
                             
                />

                  <Route
                    path="/recovery"
                    element={<ForgotPassword 
                         onChange={loghandleChange}
                            onclick={passwordRecovery}
                             notification={errorOrSucess}
                             email={general.email}
                            />}
                             
                />

            </Routes>
        </BrowserRouter>
    );
}

export default Main;