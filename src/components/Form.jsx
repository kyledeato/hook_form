import React, { useState } from 'react'

export const Form = (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirm, setConfirm] = useState("");



  return (
    <form action="">
        <div>
            <label htmlFor="fname">First Name:</label>
            <input type="text" name="fname" onChange={(e) => setFname(e.target.value)} value={fname}/>
        </div>
        <div>
            <label htmlFor="lname">Last Name:</label>
            <input type="text" name="lname" onChange={(e) => setLname(e.target.value)} value={lname}/>
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
        <div>
            <label htmlFor="pass">Password:</label>
            <input type="text" name="pass" onChange={(e) => setPass(e.target.value)} value={pass}/>
        </div>
                <div>
            <label htmlFor="confirm">Confirm Password:</label>
            <input type="text" name="confirm" onChange={(e) => setConfirm(e.target.value)} value={confirm}/>
        </div>
        <p>First name: {fname}</p>
        <p>Last name: {lname}</p>
        <p>Email: {email}</p>
        <p>Password: {pass}</p>
        <p>Confirm Password: {confirm}</p>
    </form>
  )
}
