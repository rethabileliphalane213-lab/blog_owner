import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./signinForm";
import Login from "./loginComponent";

function Main() {
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

        const response = await fetch(
            "https://verbose-guacamole-5g7qv6jqvw9wcp4vw-4000.app.github.dev/signin/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...general })
            }
        );

        const data = await response.json();

        console.log(data);
    }
    async function loginClick(e){
        e.preventDefault()
        try{
             const response = await fetch(
            "https://verbose-guacamole-5g7qv6jqvw9wcp4vw-4000.app.github.dev/login/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({...logger  })
            }
        );

        const data = await response.json();

        console.log(data);

        }catch(e){
            console.log(e)
        }
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
                        />
                    }
                />

                <Route
                    path="/login"
                    element={<Login 
                         onChange={loghandleChange}
                            onclick={loghandleChange} />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default Main;