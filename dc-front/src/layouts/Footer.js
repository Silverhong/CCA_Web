import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import ServiceApi from '../Service';
import { Col, Row } from 'react-bootstrap';

class Footer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            recentPost: [],
            companies: []
        }
    }

    render(){
        return(
            <>
            {/*============================== footer-top-area-start ================================*/}  
                <section className="footer-top-area">
                    <Row>
                        <Col md={12}>
                            <ul className="footer-menu">
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Search</a></li>
                                <li><a href="#">Top</a></li>
                            </ul>
                            <ul className="footer-menu-copyright">
                              © 2019 Cosmetics of Consultant Association, All rights reserved.
                            </ul>
                        </Col>
                    </Row>
                </section>
            </>
        );
    }
}

export default Footer;