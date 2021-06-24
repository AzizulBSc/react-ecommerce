import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
export default function Header() {
    const history = useHistory();
    if(localStorage.getItem('user-info'))
    { 
    var user = JSON.parse(localStorage.getItem('user-info'));
    var username = user.name;
    }
    if(!localStorage.getItem('user-info'))
    { 
         var username = " "

    }
    const user_name = username;
    function logout(){
      localStorage.clear();
      history.push("/register");

    }
    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand to="/home">Navbar</Navbar.Brand>
    <Nav className="mr-auto navwrapper">
      {
        localStorage.getItem('user-info')? 
        <> 
        <Link to="/add">Add Product</Link>
        <Link to="/update">Update Product</Link> 
      
        </>
        :
        <> 
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </>
      }
      
     
    </Nav>{
    localStorage.getItem('user-info')? 
        <> 
        <Nav>
           <NavDropdown title ={user_name}>
           <NavDropdown.Item onClick = {logout}>Logout</NavDropdown.Item>
           </NavDropdown>
         </Nav>
        </>
        :
        <>
        </>
        }
    
  </Navbar>
</>
    )
}
