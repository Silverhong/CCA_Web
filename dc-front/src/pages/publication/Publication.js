import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import ServiceApi from '../../Service';

import { Col, Row } from 'react-bootstrap';

import { bounce, slideInLeft, zoomIn, fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    slideInLeft: {
      animation: 'x 1s',
      animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    },
    zoomIn: {
        animation: 'x 0s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
      },
      fadeInDown: {
        animation: 'x 3s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
      }
  }

class Publication extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            companies: []
        }
    }

    componentDidMount(){
        // Get Companies All
        axios.get(`${ServiceApi}/api/v1/company/1`).then( respone => {
            this.setState({ companies: respone.data.data});
        }).catch( error =>  console.log(error))
    }

    render(){
        return(
            <>
            <Header />
            <section class="area-publication">
                <div class="container">
                    <Row>
                        <Col md={8} xs={12}>
                            <Row>
                                <Col md={8} xs={12} className="partner">
                                    <span style={{fontSize: "50px"}}>P</span>
                                    <span>UBLICATION</span>
                                </Col>
                            </Row>
                            <div className="heightline-publication"/>
                            <Row>
                                <Col md={8} xs={12}>
                                     <div className="publication-information-area-border">
                                        <ul>
                                            <li>បានបង្កើតនៅឆ្នាំ ២០១៩</li>
                                            <li>អាសយដ្ឋាន ៖ផ្ទះលេខ៤៥អ៊ី៨E2 ផ្លូវ វត្ថអង្គតាមិញ សង្កាត់កាកាប១ ខណ្ឌពោធិ៍សែនជ័យ រាជធានីភ្នំពេញ</li>
                                            <li>ទូរសព្ទ័លេខ ៖ 012589111</li>
                                            <li>អ៊ីមែល​​​ ៖ <a href="mailto:info@ccacambodia.org.kh">info@ccacambodia.org.kh</a></li>
                                        </ul>
                                     </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8} xs={12}>
                                    <StyleRoot>
                                        <div className="test" style={styles.zoomIn}>
                                            <img className="publication-img" width="432.25px" height="160px" src="/assets/img/logo/side.jpg"/>
                                        </div>
                                    </StyleRoot>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </section>
            <Footer />
            </>
        );
    }
}

export default Publication;