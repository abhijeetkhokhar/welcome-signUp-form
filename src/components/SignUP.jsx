import React, { useState } from 'react'
import styles from './SignUP.module.css';
export default function SignUP({userdata}) {
    const [name,setName]=useState('');
    const [pass,setPass]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const res=[name,pass,email,phone];
    function handleSubmit(e){
        e.preventDefault();
        alert(`Welcome ${name}`);
        userdata(res);
       console.log(res);
    }
    function handleChange(e){
      let check=e.target.id;
      if(check==='user'){
        setName(e.target.value)
      }else if(check==='pass'){
        setPass(e.target.value);
      } else if(check==='emailId'){
        setEmail(e.target.value);
      }else{
        setPhone(e.target.value);
      }
    }
  return (
    <div className={styles.signup}>
        <h1>SignUp form</h1>
       <form onSubmit={handleSubmit}>
        <label htmlFor="user"></label>
        <input type="text" id='user' value={name} onChange={handleChange} placeholder='username'/> <br />
        <br />
        <label htmlFor="pass"></label>
        <input type="password" id='pass' value={pass} onChange={handleChange} placeholder='password'/> <br />
        <br />
        <label htmlFor="phone"></label>
        <input type="text" id="phone"  value={phone} onChange={handleChange} placeholder='phone number'/> <br /> <br />
        <label htmlFor="emailId"></label>
        <input type="email"  id="emailId"  value={email} onChange={handleChange} placeholder='email'/>
        <br /> <br />
        <button>Login</button>
       </form>
    </div>
  )
}
