import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    Container,
    Row,
    Col,
    Carousel,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Image, ModalFooter
} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Products from './Component/Products'
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
    constructor() {
        super();
        const products = [
            {
                name: 'mv cable',
                image: 'images (1).jpeg',
                url: ''
            },
            {
                name: 'cable tray',
                image: 'download (4).jpeg',
                url: ''
            },
            {
                name: 'tower component',
                image: 'download (6).jpeg',
                url: ''
            },
        ]

        this.state = {

            products: products,
            filtered: [],
            search: ''

        }
    }

    changeHandlerSearch = (e) => {
        let filtered = []
        if(e.target.value!='') {
            this.state.products.forEach((product) => {
                if (product.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                    filtered.push(product)
                }
            })
        }
        this.setState({
            search: e.target.value,
            filtered: filtered
        })
    }


    render() {

        let productsMenu = this.state.products.length ? this.state.products.map((product) =>
            <NavDropdown.Item href="/products">{product.name}</NavDropdown.Item>
            ): ''

        let productsList = this.state.filtered.length ? this.state.filtered.map((product) =>
            <ListGroup.Item>

                <a href="/products"><img src={product.image} style={{width: "40px"}}/> {product.name}</a>
            </ListGroup.Item>
        ) : ''
        return (
            <>
                <br/>

                <Container>
                    <Row>
                        <Col>
                            <Navbar bg="light" expand="lg">
                                <Navbar.Brand href="/home">
                                    <Image src="power-logo-19324008.jpg" style={{
                                        width: "40px"
                                    }}>

                                    </Image></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/home">Home</Nav.Link>
                                        <Nav.Link href="/About">About Us</Nav.Link>
                                        <NavDropdown title="Products" id="basic-nav-dropdown"> {productsMenu}

                                        </NavDropdown>
                                        <Nav.Link href="/Contact">Contact Us</Nav.Link>

                                    </Nav>
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.changeHandlerSearch}/>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <div style={{position: "absolute", top: "50px", right: "50px", zIndex: "10"}}>
                                <ListGroup>
                                    {productsList}
                                </ListGroup>
                            </div>
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
                <ModalFooter>
                    <div style={{textAlign: "center", width: "100%"}}>
                        Copyright ©2020 Power Component Co. IT Dept.
                    </div>
                </ModalFooter>
            </>
        );


    }
}

export default App;
