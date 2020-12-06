import React from 'react' ;

import './css/Header.css'

import{ Component } from 'react';
import Loginform from './LoginForm'

import {Form , FormControl, Button,Navbar,Nav, NavDropdown, Container , 
  Dropdown,DropdownButton
 } from 'react-bootstrap';



function Header(){
  
  

return (

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"> <img
        src="https://img2.freepng.fr/20180626/ilt/kisspng-linux-kernel-computer-icons-windows-subsystem-for-land-agent-5b329cde62b5d5.3721324015300436144043.jpg"
        width="80"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Container >
    <Nav className="mr-auto-right">
      <Nav.Link href="#features">الرئيسية</Nav.Link>
      <Nav.Link href="#pricing">من نحن</Nav.Link>
      <NavDropdown title="خدمات" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">خدمة</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">خدمة</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">خدمة</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">خدمة</NavDropdown.Item>
      </NavDropdown>
      
     
      
    </Nav>
   
    <Form inline  className="searchebox">
      <FormControl type="text" placeholder="ماذا تبحث" className="mr-sm-1"  />
      <Button variant="outline-light">ابحث</Button>
    </Form>
   
    </Container>
    
    <div>
      <DropdownButton id="dropdown-item-button" title="الدخول" variant="success"  >
  
  <Dropdown.Header className='DropDown'><Loginform/></Dropdown.Header>
</DropdownButton>
        
      </div>

  </Navbar.Collapse>
</Navbar>    
  





);



}

export default Header