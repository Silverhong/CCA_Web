import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import ServiceApi from '../../Service';
import { Col, Row } from 'react-bootstrap';

import FontAwesome from 'react-fontawesome'

import { bounce, slideInLeft, zoomIn, fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    slideInLeft: {
      animation: 'x 1s',
      animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    },
    zoomIn: {
        animation: 'x 3s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
      },
      fadeInDown: {
        animation: 'x 3s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
      }
  }

class Contact extends React.Component {

    constructor(props){
        super(props);
    }

    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

    render(){
        return (
            <div>
            <Header style={{
                backgroundImage: "url('assets/img/backround.jpg')",
                backgroundColor: "#cccccc",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
                }}/>
            <br/><br/>
            <section className="container-fluid">
                <Row>
                    <Col md={12} xs={12}>
                        <Row>
                            <Col md={12} xs={12} sm={12}>
                                <Row>
                                    <Col className="partner">
                                        <span style={{fontSize: "50px"}}>C</span>
                                        <span>ONTACT US</span>
                                    </Col>
                                </Row>
                                <div className="heightline-contact"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} xs={12} sm={12}>
                                <div className="contact-box">
                                    <FontAwesome
                                        className="super-crazy-colors"
                                        name="map"
                                        // cssModule={faStyles}
                                        size="2x"
                                        // spin
                                        style={{ textShadow: '0 4px 0 rgba(0, 0, 0, 0.1)', color: "#4764ad" }}
                                    />
                                    <p className="contact-title">អាសយដ្ឋាន ៖ </p>
                                    <div className="contact-content-box">
                                       <p>ផ្ទះលេខ៤៥អ៊ី៨E2 ផ្លូវ វត្ថអង្គតាមិញ សង្កាត់កាកាប១ ខណ្ឌពោធិ៍សែនជ័យ រាជធានីភ្នំពេញ</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} xs={12} sm={12}>
                                <div className="contact-box">
                                    <FontAwesome
                                        className="super-crazy-colors"
                                        name="phone"
                                        // cssModule={faStyles}
                                        size="2x"
                                        // spin
                                        style={{ textShadow: '0 4px 0 rgba(0, 0, 0, 0.1)', color: "#4764ad" }}
                                    />
                                    <p className="contact-title">ទូរសព្ទ័លេខ ៖ </p>
                                    <div className="contact-content-box">
                                        <p>012589111</p>
                                        {/* <img className="contact-img" src="assets/img/22-04-201927_1.jpg" /> */}
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="contact-box">
                                    <FontAwesome
                                        className="super-crazy-colors"
                                        name="send"
                                        // cssModule={faStyles}
                                        size="2x"
                                        // spin
                                        style={{ textShadow: '0 4px 0 rgba(0, 0, 0, 0.1)', color: "#4764ad", }}
                                    />
                                    <p className="contact-title">អ៊ីមែល​​​ ៖ </p>

                                    <div className="contact-content-box">
                                        <p><a href="mailto:nfo@ccacambodia.org.kh">nfo@ccacambodia.org.kh</a></p>
                                        <p><a href="mailto:director@ccacambodia.org.kh">director@ccacambodia.org.kh</a></p>
                                        <p><a href="mailto:board@ccacambodia.org.kh">board@ccacambodia.org.kh</a></p>
                                        <p><a href="mailto:ccacambodia2019@gmail.com">ccacambodia2019@gmail.com</a></p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
            <br/><br/>
            <br/><br/>
            <Footer />
            </div>
        )
    }
}

export default Contact;