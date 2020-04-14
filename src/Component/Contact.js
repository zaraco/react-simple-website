import React, {Component} from "react";
import {Figure, Jumbotron} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook, faMailBulk} from "@fortawesome/free-solid-svg-icons"
import {faTwitter, faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons'

class Contact extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <Figure>
                        <Figure.Image
                            width={350}
                            height={200}
                            alt="contact us"
                            src="advantages-and-disadvantages-of-telephone-interview-surveys-1080x675.jpg"
                        />

                        <Figure.Caption>
                            <FontAwesomeIcon icon={faMailBulk} inline/>
                            <span> zahra69@gmail.com</span>
                        </Figure.Caption>
                        <br/>
                        <FontAwesomeIcon icon={faAddressBook} inline/>
                        <span> Liguria,
                            Genova,
                            Italy
                        </span>

                        <br/>
                        <br/>

                        <FontAwesomeIcon icon={faFacebookSquare}/>
                        <span> @ZAHRA </span>

                        <br/>
                        <br/>

                        <FontAwesomeIcon icon={faTwitter}/>
                        <span> @ZAHRA90 </span>

                        <br/>
                        <br/>

                        <FontAwesomeIcon icon={faInstagram}/>
                        <span> @ZAHRA90 </span>
                    </Figure>
                </Jumbotron>
            </div>
        );
    }
}

export default Contact;