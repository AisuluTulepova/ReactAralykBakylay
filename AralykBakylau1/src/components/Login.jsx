import React, { useState } from "react";

function Login(){
    
    const [count, setCount] = useState()
    
    return(
        <div className="loginBox">
           <button onClick={()=>{
            alert ("open Email and Password")
            return (
                <>
                <form>
                    <label htmlFor="">Login</label>
                    <input type="text" placeholder=" Email" required/>
                    <input type="password" placeholder="Password" required/>
                </form>
                </>
            )
           }}><h4>Login</h4></button>
           
        </div>
    )
}
export default Login