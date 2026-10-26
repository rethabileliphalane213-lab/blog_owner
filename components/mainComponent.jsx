import { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";



import Signin from "./signinForm";
import Login from "./loginComponent";
import Posts from "./postsComponent";
import ForgotPassword from "./forgotPasswod";
import HomePage from "./homePage";

function Main() {
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    ////////////////////////////////////////////////
    const[token,setToken]=useState(localStorage.getItem("token")||"")
    const [crudOptionsShow, setCrudOptionsShow] = useState(null);
    const [showInput,setShowInput]=useState({
        otpPin:false,
        showPassword:false
    })
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
    post:"",
    file:null
})
const [fetchPost,setFetchPost]=useState([])
const[goToLog,setGoToLog]=useState(false)
const [otpRecovery,setOtpRecovery]=useState({
    pin:0,
    newPassword:""
})
//////////////////////////////////////////////////////////////////////////////////////////
useEffect(()=>{
    if(!errorOrSucess.errorMsg && !errorOrSucess.succesMsg){
        return
    }
    const timer=setTimeout(()=>{
        setErrorOrSucces({
            errorMsg:"",
            succesMsg:""
        })
        return ()=>{
            clearTimeout(timer)
        }
    },3000)
},[errorOrSucess])



useEffect(() => {
    if (!token) return;

    async function fetchPosts() {
        try {
            const response = await fetch(
                `${backendUrl}/posT`,
                {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            );

            const data = await response.json();

            if (!response.ok || data.error) {
                setErrorOrSucces({
                    errorMsg: data.error || "Failed to fetch posts. Please try again.",
                    succesMsg: ""
                });
                return;
            }

            // Store the retrieved posts in state
            setFetchPost(data.posts);
            console.log(data.posts)

        } catch (e) {
            console.error(e);

            setErrorOrSucces({
                errorMsg: "Unable to connect to the server",
                succesMsg: ""
            });
        }
    }

    fetchPosts();
}, [token]);

///////////////////////////////////////////////////////////////////////////////////////////
    const generalChnage = (event) => {
        setGeneral({
            ...general,
            [event.target.name]: event.target.value
        });
    };
    function newPsswordChange(e){
        setOtpRecovery({
            ...otpRecovery,
           [ e.target.name]:e.target.value
        })
    }
function loghandleChange(event){

    setLogger({
        ...logger,
         [event.target.name]: event.target.value
    })
}
function postHandleChange(e){
    const{name,files,value}=e.target
setPost({
    ...post,
[name]: name==="file"?files[0]:value
})
}
 function addPosthandleChange(e){
    setPost({
        ...post,
        [e.target.name]:e.target.value
    })
 }
 function toogleCrudOptions(id) {
    setCrudOptionsShow(crudOptionsShow === id ? null : id);
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
            `${backendUrl}/signin/users`,
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
        localStorage.setItem("token", data.token);
setToken(data.token);

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
async function deleteReq(id) {
    try{
        const response=await fetch(`${backendUrl}/posts/delete/${id}`,
            {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: id
    }
        )
        const data=await response.json()
        if (!response.ok || data.error) {
    setErrorOrSucces({
        errorMsg: data.error || "Failed to delete post. Please try again.",
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

    }catch(e){
          console.error(e);

        setErrorOrSucces({
            errorMsg: "Unable to connect to the server",
            succesMsg: ""
        });
    }
    
}
async function AddPostBtnClick(e){
    e.preventDefault()
    if(!post.title||!post.post||post.file===null){
         setErrorOrSucces({
            errorMsg: "Input Field cannot be Empty",
            succesMsg: ""
        });
        return
    }
    
try{
 
      const formData = new FormData();

formData.append("title", post.title);
formData.append("post", post.post);
formData.append("file", post.file);

const response = await fetch(
    `${backendUrl}/post`,
    {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: formData
    }
);

const data = await response.json();

if (!response.ok || data.error) {
    setErrorOrSucces({
        errorMsg: data.error || "Failed to upload post. Please try again.",
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

}


 catch (e) {
        console.error(e);

        setErrorOrSucces({
            errorMsg: "Unable to connect to the server",
            succesMsg: ""
        });
    }

}


async function sendOtpPin(e){
    e.preventDefault();

try{
    if(!otpRecovery.pin.trim()){
       setErrorOrSucces({
            errorMsg: "Cannot Send an Empty OTP",
            succesMsg: ""
        });
        return
}

      const response = await fetch(
            `${backendUrl}/login/pin_confirm`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    pin: otpRecovery.pin
                })
            }
        );

        const data = await response.json();
        if (!response.ok || data.error) {
            setErrorOrSucces({
                errorMsg: data.error || "failed t Send OTP",
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
if(data.succes==="Your Password has Been Reset.Enter new Password"){
    setShowInput({
        ...showInput,
        showPassword:true
    })
}


} catch (e) {
        console.error(e);

        setErrorOrSucces({
            errorMsg: "Unable to connect to the server",
            succesMsg: ""
        });
    }


}
async function passwordRecovery(e) {
    e.preventDefault();

    if (logger.email.trim() === "") {
        setErrorOrSucces({
            errorMsg: "Please enter your email address",
            succesMsg: ""
        });
        return;
    }

    try {
        const response = await fetch(
            `${backendUrl}/login/recovery`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: logger.email
                })
            }
        );

        const data = await response.json();

        if (!response.ok || data.error) {
            setErrorOrSucces({
                errorMsg: data.error || "Password recovery failed",
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
        if(data.succes==="If an account exists, a recovery OTP will be sent."){
            setShowInput({
                ...showInput,
                otpPin:true
            })
        }

    } catch (e) {
        console.error(e);

        setErrorOrSucces({
            errorMsg: "Unable to connect to the server",
            succesMsg: ""
        });
    }
}


async function newPassword(){
    if(otpRecovery.newPassword.trim()===""){
       setErrorOrSucces({
            errorMsg: "Please enter password",
            succesMsg: ""
        });
        return
    }

    try{
         const response = await fetch(`${backendUrl}/login/password_reset`, 
            { method: "POST",
                 headers: { 
                    "Content-Type": "application/json"
                 }, 
                 body: JSON.stringify({newPassword:otpRecovery.newPassword,
                    email:logger.email
                  }) } ); 
                

const data = await response.json();
 if (!response.ok || data.error) {
            setErrorOrSucces({
                errorMsg: data.error || "Failed to set new password",
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
        if(data.succes=="Password Changed"){
            setGoToLog(true)
        }


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
        const response = await fetch( `${backendUrl}/login/users`, 
            { method: "POST",
                 headers: { 
                    "Content-Type": "application/json"
                 }, 
                 body: JSON.stringify({...logger }) } ); 
                

const data = await response.json();

if (!response.ok || data.error || !data.token) {
    setErrorOrSucces({
        errorMsg: data.error || "Login failed",
        succesMsg: ""
    });
    return;
}

localStorage.setItem("token", data.token);
setToken(data.token);

setErrorOrSucces({
    errorMsg: "",
    succesMsg: data.succes || "Login successful"
});

                 }catch(e){ 
                    console.log(e) } 
                }


    if(token){
        return(
            //<Posts  logout={logout} onChange={postHandleChange} onClick={AddPostBtnClick}   notification={errorOrSucess} />
           <HomePage posts={fetchPost} onClick={toogleCrudOptions} options={crudOptionsShow} deleteReq={deleteReq} />
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
                    path="/recover_password"
                    element={<ForgotPassword 
                         onChange={newPsswordChange}
                            onclick={passwordRecovery}
                             notification={errorOrSucess}
                             email={logger.email}
                             otpRecovery={otpRecovery}
                             onClick={sendOtpPin}
                             newPassword={newPassword}
                             showInput={showInput}
                            />}
                             
                />
                
            </Routes>
        </BrowserRouter>
    );
}

export default Main;