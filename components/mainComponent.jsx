import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./signinForm";
import Login from "./loginComponent";

function Main() {
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
    localStorage.setItem("token",`${data.token}`)
    if(data.error){
      setErrorOrSucces({
    errorMsg: data.error,
    succesMsg: ""
});
    }
if(data.succes){
     setErrorOrSucces({
    errorMsg: "",
    succesMsg: data.succes
});
}
    console.log(data);
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
                 if(data.succes){
                    setToken(data.token)
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

            </Routes>
        </BrowserRouter>
    );
}

export default Main;