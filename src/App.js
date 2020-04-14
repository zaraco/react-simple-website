import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col, Carousel, Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Products from './Component/Products'

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Navbar bg="light" expand="lg">
                                <Navbar.Brand href="/home">Power Component</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/home" >Home</Nav.Link>
                                        <Nav.Link href="/About">About Us</Nav.Link>
                                        <NavDropdown title="Products" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/products">MV Cable</NavDropdown.Item>
                                            <NavDropdown.Item href="/products">Cable Tray</NavDropdown.Item>
                                            <NavDropdown.Item href="/products">Tower Component</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="/Contact">Contact Us</Nav.Link>

                                    </Nav>
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br/>

                            <Router>
                                <Switch>
                                    <Route path="/home" component={Home}/>
                                    <Route path="/about" component={About}/>
                                    <Route path="/products" component={Products}/>
                                    <Route path="/contact" component={Contact}/>
                                </Switch>
                            </Router>

                        </Col>
                    </Row>
                </Container>
            </>
        );


    }
}

export default App;
