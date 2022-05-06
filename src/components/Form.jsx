import React, { useState } from 'react'

export const Form = (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [confirm, setConfirm] = useState("");
    
    const [fnameError, setFnameError] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [confirmError, setConfirmError] = useState("");


    const handleFname = (e) => {
        setFname(e.target.value);
        if(e.target.value.length < 2) {
            setFnameError("First name must be more than 2 characters")
        } else {
            setFnameError(true)
        }
    }
    const handleLname = (e) => {
        setLname(e.target.value);
        if(e.target.value.length < 2) {
            setLnameError("Last name must be more than 2 characters")
        } else {
            setLnameError(true)
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email name must be more than 5 characters")
        } else {
            setEmailError(true)
        }
    }
    const handlePass = (e) => {
        setPass(e.target.value);
        if(e.target.value.length < 8) {
            setPassError("Password name must be more than 8 characters")
        } else {
            setPassError(true)
        }
    }
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if(e.target.value !== password) {
            setConfirmError("Password must match")
        } else {
            setConfirmError(true)
        }
    }

  return (
    <form action="">
        <div>
            <label htmlFor="fname">First Name:</label>
            <input type="text" name="fname" onChange={handleFname} value={fname}/>
            {   // if fnameError is true
                fnameError? <p style={{color:'red'}}>{fnameError}</p>:""
            }
        </div>
        <div>
            <label htmlFor="lname">Last Name:</label>
            <input type="text" name="lname" onChange={handleLname} value={lname}/>
            {   // if fnameError is true
                lnameError? <p style={{color:'red'}}>{lnameError}</p>: "" 
            }
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" onChange={handleEmail} value={email}/>
            {   // if fnameError is true
                emailError? <p style={{color:'red'}}>{emailError}</p>: "" 
            }
        </div>
        <div>
            <label htmlFor="pass">Password:</label>
            <input type="text" name="pass" onChange={handlePass} value={password}/>
            {   // if fnameError is true
                passError? <p style={{color:'red'}}>{passError}</p>: "" 
            }
        </div>
                <div>
            <label htmlFor="confirm">Confirm Password:</label>
            <input type="text" name="confirm" onChange={handleConfirm} value={confirm}/>
            {   // if fnameError is true
                confirmError? <p style={{color:'red'}}>{confirmError}</p>: "" 
            }
        </div>

    </form>
  )
}
