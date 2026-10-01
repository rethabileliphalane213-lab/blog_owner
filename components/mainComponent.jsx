
import { useState } from "react";
import Signin from "./signinForm";

function Main() {
    const [general, setGeneral] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirm: ""
    });

    const generalChnage = (event) => {
        setGeneral({
            ...general,
            [event.target.name]: event.target.value
        });
    };

    async function btnClick(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:4000/signin/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...general })
        });

        const data = await response.json();

        console.log(data);
    }

    return (
        <div>
            <Signin
                general={general}
                onChange={generalChnage}
                onclick={btnClick}
            />
        </div>
    );
}

export default Main;