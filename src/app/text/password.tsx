"use client"
import EventEmitter from 'events'
import React, { useState } from 'react'

function page() {
  const [userName, setUserName] = useState ("")
  const [password, setPassword] = useState ("")
  const [display, setDisplay] = useState(false)
  const handleLogin = () =>{
    if(!userName){
      alert("Insert Username")
    }else if(!password){
      alert("Insert Password")
    }
    else {
      setDisplay(true)
    }
  }
  const clear = () => {
    setUserName("") 
    setPassword("")
    setDisplay(false)
  }

  return (
    <div>
      <input type="text" value={userName} onChange={(event)=> setUserName(event.target.value)} placeholder='Enter Username'/>
      <input type="password" value={password} onChange={(event)=> setPassword(event.target.value)} placeholder='Enter Password'/>
      <button onClick={handleLogin}>Login</button>
      <button onClick={clear}>Clear</button>
      {display? <div>
        <li>Username: {userName}</li>
        <li>Password: xxxxx</li>
      </div>: <p>no data</p>

      }
    </div>
  )
}

export default page
