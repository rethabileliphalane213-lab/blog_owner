import { useState } from "react";
import Signin from "./signinForm";



function Main(){
   const [general,setGeneral]=useState({
    name:"",
    surname:"",
    email:"",
    password:"",
    confirm:""
   })



    const generalChnage=(event)=>{
        setGeneral({[event.target.name]:[event.target.value]})
    }


    return(
     <div>
        <Signin general={general} onChanage={generalChnage} />
     </div>
    )

}


export default Main