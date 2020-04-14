import React, {Component} from "react";
import {Carousel} from "react-bootstrap";

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Home;