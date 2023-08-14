import React, { useState } from 'react'
import './Login.css'

export default function Login() {


    const [user, setuser] = useState('');
    const [pass, setpass] = useState('');
    const [tnc, settnc] = useState(false);
    const [passType, setpassType] = useState('password')


    function Show(event) {
        event.preventDefault();
        if (user && pass && tnc) {
            alert('you have submited the form!')
        }
        else {
            alert('please input user & password & accsept t&c!')
        }
    }

    function showpass() {
        if (passType === 'password') {
            setpassType('text')
        }
        else {
            setpassType('password')
        }
    }
    console.log('this web app is made by mohammad akbar')
    return (
        <form onSubmit={Show}>
            <h1 style={{ backgroundColor: null, color: '#fff' }}>login page</h1>

            <input type="text" value={user} placeholder='input user name' onChange={(e) => setuser(e.target.value)} />
            <br />
            <div className="passbox">
                <input type={passType} name="pass" id="pass" placeholder='input password' value={pass} onChange={(e) => setpass(e.target.value)} />
                <input type="checkbox" name="passEye" id="passEye" onChange={showpass} />
            </div>
            <br />
            <input type="checkbox" name="check" id="check" checked={tnc} onChange={() => settnc(true)} />
            <label htmlFor="check">term & conditons</label>
            <br />
            <button type="submit">submit</button>
        </form>
    )
}
