import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col, Carousel, Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";

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
                                        <Nav.Link href="/About">About</Nav.Link>
                                        <Nav.Link href="/Contact">Contact</Nav.Link>
                                        <NavDropdown title="Products" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#">MV Cable</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Cable Tray</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Tower Component</NavDropdown.Item>
                                            <NavDropdown.Divider/>
                                            <NavDropdown.Item href="#">MV Switchgear</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br/>

                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-75"
                                        src="download (1).jpeg"
                                        alt="First Refinery"
                                    />

                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-75"
                                        src="download (2).jpeg"
                                        alt="Second Refinery"
                                    />

                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-75"
                                        src="download (3).jpeg"
                                        alt="Third Refinery"
                                    />

                                </Carousel.Item>
                            </Carousel>
                            <Router>
                                <Switch>
                                    <Route path="/"/>
                                    <Route path="/Home" component={Home}/>
                                    <Route path="/About" component={About}/>
                                    <Route path="/Contact" component={Contact}/>
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
