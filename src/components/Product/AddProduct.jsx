import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
export default function AddProduct() {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDesc] = useState("");
    const [file,setFile] = useState("");
    const history = useHistory();

    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        { 
             history.push("/register");
    
        }
        },[]);
        async function addProduct(){
           // console.log(name,price,description,file);
         const formData = new  FormData();
         formData.append('name',name);
         formData.append('price',price);
         formData.append('description',description);
         formData.append('file',file);
         let result = await fetch("http://localhost:8000/api/product",{
             method:'POST',
             body:formData

          });
          alert("Product Added Successfully");
        
        }
    return ( <>
        <Header/>
        <div>
            <div className="row">
                <div className = "col-sm-6 offset-sm-3">
                    <br/>
                <h1>Product Add Form</h1>
                <br/>

<input className ="form-control"  type = "text" onChange = {(e)=>setName(e.target.value)} placeholder = "Enter Product Name" /> <br/>
<input className ="form-control"  type = "text" onChange = {(e)=>setPrice(e.target.value)} placeholder = "Enter Product Price" /> <br/>
<input className ="form-control"  type = "text" onChange = {(e)=>setDesc(e.target.value)} placeholder = "Enter Product description" /> <br/>
<input className ="form-control"  type = "file" onChange = {(e)=>setFile(e.target.files[0])} placeholder = "Enter Product Name" /> <br/>
<button className="btn btn-primary" onClick = {addProduct}>Add Product</button>
                </div>
            </div>
        </div>
        </>
    )
}
