import { useState } from "react";


function Signin(general,onChange){

    return(

        <div>
            <h1>welcome to blog</h1>

            <div>
                <label for="name">Name</label>
                <input type="text" id="name" 
                 name="name" required
        value={general.name}
        onChange={onChange}/>
            </div>
            <div>
                <label for="surname">Surname</label>
                <input type="text" id="surname" 
                 name="surname"  required
        value={general.surname}
        onChange={onChange}
                />
            </div>

             <div>
                <label for="email">email</label>
                <input type="text" id="email" 
                 name="email"  required
        value={general.email}
        onChange={onChange}
                />
            </div>
             <div>
                <label for="password">password</label>
                <input type="text" id="password" 
                 name="password"   required
        value={general.password}
        onChange={onChange}
                />
            </div>
            
             <div>
                <label for="confirm">confirm password</label>
                <input type="text" id="confirm" 
                 name="confirm"   required
        value={general.confirm}
        onChange={onChange}
                />
            </div>
        </div>

    )
}


export default Signin