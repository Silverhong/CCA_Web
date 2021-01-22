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
        animation: 'x 1s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
      },
      fadeInDown: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
      }
  }

class Ourwork extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{
                backgroundImage: "url('assets/img/backround.jpg')",
                backgroundColor: "#cccccc",
                // backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
                }}>
            <Header />
            <br/><br/>
            <section className="container-fluid">
                <Row>
                    <Col md={6} xs={12}>
                        <Row>
                            <Col className="partner">
                                <span style={{fontSize: "50px"}}>O</span>
                                <span>UR WORKS</span>
                            </Col>
                        </Row>
                        <div className="heightline-ourwork"/>
                        <div className="ourwork-one">
                            <p style={{fontSize: "20px", lineHeight: "3"}}>អត្ថប្រយោជន៏កាចូលជាសមាជិក</p>
                            
                            <p>-  ទទួលបានការប្រឹក្សាយោបល់អំពីកាដឹកនាំក្រុមហ៊ុន</p>
                            <p>-  ទទួលបានការរៀបច្បាប់ និង ប្រឹក្សាអំពីហានិភ័យក្រុមហ៊ុន</p>
                            <p>-  ពេលសមាជិកមានបញ្ហា សមាគម បញ្ជូនមេធាវីរបស់សមាគមទៅជួយការពារសិទ្ធិ</p>
                            <p>-  ប្រជុំប្រចាំខែដើម្បីធ្វើបច្ចុប្បន្នភាព និង ចែករំលែកបទពិសោធន៏</p>
                            <p>-  ការពារផលប្រយោជន៏ស្របច្បាប់របស់សមាជិក ពីការប្រកួតប្រជែងមិនស្មើភាពគ្នា និង ការលួចវាយប្រហាពីក្រោយខ្នង</p>
                            <p>-  ទទួលបានលិខិតបញ្ជាក់ពីសមាគមលើស្តង់ដាររបស់ក្រុមហ៊ុន</p>
                            <p>-  ទទួលបានលិខិតធានាលើទំនុកចិត្តពីសមាគមទៅដៃគូ និង រោងចក្រ</p>
                            <p>-  ផ្គូរផ្គងកិច្ចសហប្រតិបត្តិការបរទេស រវាងសមាជិក និង រោងចក្រ</p>
                            <p>-  ផ្សារផ្ជាប់ពាណិជ្ជកម្ម និង ពិពណ៌អន្តរជាតិ</p>
                        </div>
                    </Col>

                    <Col md={6} xs={12}>
                        <StyleRoot>
                                <div className="test" style={styles.zoomIn}>
                                  <img className="home-banner-ourwork ourwork-banner-top" src="assets/img/ourworkone.png"/>
                                </div>
                        </StyleRoot>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={12}>
                        <StyleRoot>
                                <div className="test" style={styles.zoomIn}>
                                    <img className="home-banner-ourwork ourwork-banner-bottom" src="assets/img/002.png"/>
                                </div>
                        </StyleRoot>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className="ourwork-one">
                            <p style={{fontSize: "20px", lineHeight: "3"}}>ប្រការ២៖ បេសកម្ម</p>

                            <p>- គាំទ្រការខ្សែរសង្វាក់ផលិតផលិតផលគ្រឿងសម្អាងក្នុងស្រុក ដែលមានការទទួលស្គាល់ពូមន្ទីពិសោធន៍ជាតិ។
                            លើការផលិតតាមបច្ចេកទេសឲ្យបានត្រឹមត្រូវតាមស្ដាងដាក្រសួងពាក់ព័ន្ធ។</p>
                            <p>- កស្ទួននូវផលិតផលក្នុងស្រុកចំពោះម្ចាស់កម្មសិទ្ធករ ដែលបានចុះបញ្ជីការទទួលស្គាល់គ្រប់ស្ថាប័នពាក់ព័ន្ធ
                            ក្នុងការស្វែងរកទីផ្សារ ជៀសវាងការផលិត ឬវេចខ្ចប់ផលិតផលគ្រឿងសម្អាងក្លែងក្លាយ។</p>
                            <p>- ផ្ដល់ការប្រឹក្សាផ្លូវច្បាប់ ដោះស្រាយវិវាទដែលជាហានិភ័យរវាងម្ចាស់អាជីវកម្មគ្រឿងសម្អាងស្របច្បាប់នៅកម្ពុជា។</p>
                        </div>
                    </Col>
                </Row>
            </section>
            <Footer />
            <br/><br/><br/><br/>
            </div>
        )
    }
}

export default Ourwork;