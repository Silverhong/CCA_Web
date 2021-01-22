import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import ServiceApi from '../Service';
import { Col, Row } from 'react-bootstrap';

class DetailOurPeople extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <section className="container-fluid">
                <Row>
                    <Col md={12} xs={12}>
                            <Row>
                                <Col className="partner">
                                    <span style={{fontSize: "50px"}}>P</span>
                                    <span>ARTNERS  </span>
                                </Col>
                            </Row>
                            <div className="heightline-ourpeople"/>
                            <div className="ourpeople-area">
                            <Row>
                                <Col md={4} xs={12} lg={4}>
                                    <div>
                                        <img className="img-thumbnail-ourpeople" src="/assets/img/photo.jpg" alt />
                                    </div>
                                </Col>
                                <Col md={8} xs={12} lg={8}>
                                    <div className="ourpeople-content" style={{fontFamily: "Khmer OS Bokor"}}>
                                        <p className="ourpeople-title">តេង ប៊ុនថុន</p>
                                        <div className="ourpeople-group-thumnail">
                                            <p>ប្រធានក្រុមប្រឹក្សាភិបាល</p>
                                        <p>លេខទូរស័ព្ទ ៖ 012 320 320</p>
                                        <p>អ៊ីម៉ែល ៖ <a href="mailto:board@ccacambodia.org.kh">board@ccacambodia.org.kh</a></p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </section> 
            </div>
        );
    }
}

export default DetailOurPeople;