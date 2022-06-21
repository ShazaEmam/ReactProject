import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/" className="ps-4">Watch<span className="text-warning fw-bold ">IT</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" className="mx-3 text-light" style={{ textDecoration: "none" }} >Home</Link>
                        <Link to="/movies" className="mx-3 text-light" style={{ textDecoration: "none" }}>Movie</Link>
                    </Nav>
                  {/*   <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}
export default Header;