import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import {Col, Container, Row} from "react-bootstrap";

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
                            <Router>
                                <Switch>
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
