import React, {Component} from "react";
import {Figure} from "react-bootstrap";

class Contact extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Figure>
                    <Figure.Image
                        width={250}
                        height={220}
                        alt="contact us"
                        src="advantages-and-disadvantages-of-telephone-interview-surveys-1080x675.jpg"
                    />
                    <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>
            </div>
        );
    }
}

export default Contact;