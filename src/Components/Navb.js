import { useState } from "react";
import { Navbar,Nav,Button, Container, Modal, Form, Jumbotron } from "react-bootstrap";
import{Link} from 'react-router-dom';
import styled from 'styled-components';

const Styles=styled.div `
a, .navbar-brand, .navbar-nav, nav-link{
  
  color:#adb1b8;
  &:hover{
    color:white
  }
}
.prince{
  margin-left:500px
}
`



export function Navb(){

const [show,setShow]=useState(false);

const handleShow=()=>setShow(true);
const handleClose=()=>setShow(false);


  return(
    <>
    <Styles>
          <Navbar collapseOnSelect expand='lg' bg='dark' variant="dark">
            
            <Container>
              
            <Navbar.Brand> Webblog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav >
                          <Nav.Link><Link to='/'>Home</Link> </Nav.Link>
                          <Nav.Link><Link to='/users'>Users</Link> </Nav.Link>
                          <Nav.Link><Link to='/about'>About</Link> </Nav.Link>
                        </Nav>
                                <Nav className="prince">
                                        <Button variant="primary" className='mr-2' onClick={handleShow}>
                                          Log in
                                        </Button>
                                        <Button variant="primary"  onClick={handleShow}>  
                                          Sign out
                                        </Button>
                                </Nav>
                  </Navbar.Collapse>
                  
                  </Container>
          </Navbar>
          
          </Styles>
               <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Log in
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                      <Form.Group controlId="fromBasicEmail">
                        <Form.Label>
                          Email Adress
                        </Form.Label>
                        <Form.Control type="email" placeholder="enter email"  />
                        <Form.Text className="text-muted">
                          We all nevet share your email

                        </Form.Text>

                      </Form.Group>
                      <Form.Group controlId="fromBasicPassword">
                        <Form.Label>
                          password
                        </Form.Label>
                        <Form.Control type="password" placeholder="enter password"  />
                       

                      </Form.Group>
                      <Form.Group controlId="fromBasicCheckBox">
                        
                        <Form.Check type="checkbox" label='Remember me' />
                       

                      </Form.Group>
                    </Form>
                </Modal.Body>
               </Modal>
               
               </>
  )
}