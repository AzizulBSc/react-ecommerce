import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand to="/home">Navbar</Navbar.Brand>
    <Nav className="mr-auto navwrapper">
       <Link to="/add">Add Product</Link>
      <Link to="/update">Update Product</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </Nav>
  </Navbar>
</>
    )
}
