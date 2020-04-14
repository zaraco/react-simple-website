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

                <h1>Who we are</h1>
                <p>Power Component Co. is established in order to provide Engineering Services,
                    Equipment Supply and Implementation of EPC projects in Oil, Gas, Petrochemical, Steel and Power
                    Plants.
                    Our company which has been qualified through its managers and engineers with more than 20 years of
                    experience
                </p>

            </div>

        );
    }
}

export default Home;