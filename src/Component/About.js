import React, {Component} from "react";
import {Figure} from "react-bootstrap";

class About extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1 style={{alignText: "center"}}>About Us</h1>
                <Figure>
                    <Figure.Image
                        width={300}
                        height={200}
                        alt="about us"
                        src="download.jpeg"
                    />
                    <Figure.Caption>
                        Engineering Services, Equipment Supply and  Implementation of EPC projects in Oil, Gas, Petrochemical, Steel and Power Plants.                    </Figure.Caption>
                </Figure>
                <p>
                    Power Component Co. is established in order to provide Engineering Services, Equipment Supply and  Implementation of EPC projects in Oil, Gas, Petrochemical, Steel and Power Plants.

                    Our company which has been qualified through its managers and engineers with more than 20 years of experience and in cooperation with domestic and foreign companies according to the international standards has provided the high quality services in EPC projects.

                    As EPC contractor of State Management and Planning Organization (MPO), the company has received

                    Second rank in fields of Oil, Gas, Transmission Lines, Oil Depots, Pumping Stations and Networks.
                    Fifth rank in fields of Power & Energy,
                    Fifth rank in fields Industry and Mining.
                    We are experts in forging partnerships to improve performance, reduce costs, and build strong, innovative businesses in order to satisfy our clients. Thus, we continue our development in order to supply the best services.

                    It is hoped that by relying on scientific and technical supports as well ceaseless efforts of managers and staff to have a small role for improving national industrial capabilities.
                </p>
            </div>
        );
    }
}

export default About;