import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Table } from "react-bootstrap";
import Header from "../Header";
import { Link } from "react-router-dom";
export default function ProductList() {
  const history =  useHistory();
  const [data, setData] = useState([]);
  useEffect( () => {
    getData();
  }, []);
   async function deleteProduct(id){
      var result = await fetch("http://localhost:8000/api/product/"+id,{
          method:'DELETE'
      });
      var result = await result.json();
      console.log(result);
      alert("Deleted Successfully");
      getData();
  }
  async function getData()
  {
    var result = await fetch("http://localhost:8000/api/product");
    var result = await result.json();
    setData(result);
  }
  return (
    <>
      <Header />

      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <br />
          <h1>Product List</h1>
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    <img
                      style={{ width: 80 }}
                      src={"http://localhost:8000/" + item.file_path}
                    />
                  </td>
                  <td>
                    <span onClick = {()=>deleteProduct(item.id)} className="delete">Delete</span>
                    <br/><br/>
                    <Link to= {"update/"+item.id}>
                       <span  className="update">Update</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
