import React from 'react'
import { useState } from 'react'

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [err, setErr] = useState("")

  
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!name) {
      setErr('Name cannot be empty')
    } else if(!email.includes('@')) {
      setErr('Please provide valid email')
    } else if(!message) {
      setErr('Message cannot be empty')
    }
  }
 
  return (
    <div className='contact_page'>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
       <label>Name</label>
       <input type="text" onChange={(e)=> setName(e.target.value)} />
       <label>Email Address</label>
       <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
       <label>Message</label>
       <textarea onChange={(e)=> setMessage(e.target.value)}>
        Message here
        </textarea>
        {err && <p>{err}</p>}
      <button>Submit</button> 
      </form>
    </div>
  )
}

export default Contact