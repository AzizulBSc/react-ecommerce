import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';

export default function Register() {
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
          history.push("/add")
        }
    },[])
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const history = useHistory();
    async function signUp(){
        let user = {name,password,email};
        console.log(user.password)
        let result = await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'Content-Type'
            }
        })
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/add")

    }
    return (
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">
         <h1>Admin Register</h1> 
         <br/> 
         <input className="form form-control" onChange ={(e)=>setName(e.target.value)} value ={name} type = "text" name = "name" placeholder="Enter Your Name"></input> 
         <br/> 
       <input className="form form-control" onChange ={(e)=>setPassword(e.target.value)} value ={password} type = "password" name = "password" placeholder="Enter Your Password"></input> 
         <br/> 
         <input className="form form-control" onChange={(e)=>setEmail(e.target.value)} vlaue = {email} type = "email" name ="email"  placeholder="Enter Your Name"></input> 
         <br/> 
         <button onClick = {signUp} className="btn btn-primary" type="submit">Submit</button>
         <br/> 
        </div>
    </> 
        )
}
