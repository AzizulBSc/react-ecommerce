import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header';

function UpdateProduct(props) { 
const [name,setName] = useState("");
const [price,setPrice] = useState("");
const [description,setDesc] = useState("");
const [file,setFile] = useState("");
const [data,setData] = useState([]);
     useEffect(async ()=>{
        var result = await fetch("http://localhost:8000/api/product/"+props.match.params.id,{
            method:'GET'
          });
          var result = await result.json();
          setData(result);
        },[])
        async function upDate(){
         const id = props.match.params.id;
         const formData = new  FormData();
         formData.append('name',name);
         formData.append('price',price);
         formData.append('description',description);
         formData.append('file',file);
         formData.append('id',id);
         let result = await fetch("http://localhost:8000/api/update",{
             method:'POST',
             body:formData

          });
          alert("Product Update Successfully");
         }
    return ( 
    <>
        <Header/>
        <>
        <div className="row">
                <div className = "col-sm-6 offset-sm-3">
                    <br/>
                <h1>Product Update Form</h1>
                <br/>

<input className ="form-control"  type = "text" onChange = {(e)=>setName(e.target.value)}  defaultValue = {data.name}  /><br/>
<input className ="form-control"  type = "text" onChange = {(e)=>setPrice(e.target.value)}  defaultValue = {data.price}/><br/>
<input className ="form-control"  type = "text" onChange = {(e)=>setDesc(e.target.value)} defaultValue = {data.description} /><br/>
<input className ="form-control"  type = "file" onChange = {(e)=>setFile(e.target.value)}  defaultValue = {data.file_path}/><br/>
<img style={{ width: 80 }} src={"http://localhost:8000/" +data.file_path}/><br/><br/>
<button onClick = {upDate} className="btn btn-primary">Update Product</button>
        </div> 
        </div> 
        </>
        </>
    )
}
export default withRouter(UpdateProduct)
