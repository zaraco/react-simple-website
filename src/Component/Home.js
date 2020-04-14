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
                            className="d-block w-100"
                            src="ElPaso-Marquees1.jpg"
                            alt="First Refinery"
                            style={{width: "100%", height: "350px", objectFit: "cover"}}
                        />

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="Oil-Refinery-Dusk.jpg"
                            alt="Second Refinery"
                            style={{width: "100%", height: "350px", objectFit: "cover"}}

                        />

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="Refining.jpg"
                            alt="Third Refinery"
                            style={{width: "100%", height: "350px", objectFit: "cover"}}

                        />

                    </Carousel.Item>
                </Carousel>

                <br/>

                <h1 style={{fontWeight: "bold", color: "pink"}}> Who we are ? </h1>
                <p style={{textAlign: "justify", textJustify: "inter-word", fontWeight: "bold"}}>Power Component Co. is established in order to provide Engineering Services,
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