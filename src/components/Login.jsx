import React, {useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';

export default function Login() {
    const history = useHistory();
     useEffect(()=>{
     if(localStorage.getItem('user-info'))
     { 
          history.push("/add")

    }
     },[])
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");
     async function login(){
         let user = {email,password};
         console.log(user.password)
         let result = await fetch("http://localhost:8000/api/login",{
             method:'POST',
             body:JSON.stringify(user),
             headers:{
                 "Content-Type": 'application/json',
                 "Accept": 'Content-Type'
             }
         })
         result = await result.json();
         if(result.status=='false'){
            alert("Pass/Email does not match");history.push("/login")
         }
         else
         {
            localStorage.setItem("user-info",JSON.stringify(result));
            history.push("/add")
         }
        
 
     }
     return (
         <>
         <Header/>
         <div className="col-sm-6 offset-sm-3">
          <h1>Admin Login</h1>  
          <br/> 
          <input className="form form-control" onChange={(e)=>setEmail(e.target.value)} vlaue = {email} type = "email" name ="email"  placeholder="Enter Your Email"></input> 
          <br/> 
        <input className="form form-control" onChange ={(e)=>setPassword(e.target.value)} value ={password} type = "password" name = "password" placeholder="Enter Your Password"></input> 
         
          <br/> 
          <button onClick = {login} className="btn btn-primary" type="submit">Submit</button>
          <br/> 
         </div>
     </> 
    )
}
