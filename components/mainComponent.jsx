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
   const [submit,setSubmit]=useState(false)


   async function btnClick(){
    
    const infoObj={...general}
    for(const info of infoObj){
        if(card.trim()===""){
            setSubmit(false)
            return
        }
         setSubmit(true)   
    }
if(submit){
    await fetch("./signin/users",{
        method: post
    })
}
   }

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