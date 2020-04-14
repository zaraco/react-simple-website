import React, {Component} from "react";
import {Figure, Container, Row, Col, Image} from "react-bootstrap";

class Contact extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Figure inline>
                                <Figure.Image
                                    width={250}
                                    height={220}
                                    alt="showing the products"
                                    src="images (1).jpeg"
                                />
                                <Figure.Caption>
                                    Medium Voltage Power Cable
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col xs={6} md={4}>
                            <Figure inline>
                                <Figure.Image
                                    width={250}
                                    height={220}
                                    alt="showing the products"
                                    src="download (4).jpeg"
                                />
                                <Figure.Caption>
                                    Cable Tray
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col xs={6} md={4}>
                            <Figure inline>
                                <Figure.Image
                                    width={250}
                                    height={220}
                                    alt="showing the products"
                                    src="download (6).jpeg"
                                />
                                <Figure.Caption>
                                   Tower Component
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Contact;