import {useState } from 'react'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import "./LoginSignupContainer.css"
const LoginSignupContainer = () => {

    const [login, setLogin] = useState(true)
 
    const handleClick = () => {
        setLogin(!login)
    }

    return (
        <div className='login-signup-container'>
            {
                login? <Login onClick={()=>setLogin(false)} />:null
            }
            <div className='side-div'>
                <button className='button' onClick={handleClick}>{login ? "Signup" : "Login"}</button>
            </div>
            <Signup onClick={()=>setLogin(true)}/>
        </div>

    )
}

export default LoginSignupContainer