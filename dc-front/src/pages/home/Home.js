import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { Col, Row } from 'react-bootstrap';
import $ from "jquery";

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
  
class Home extends React.Component {

    render(){
        return (
            <div style={{
                backgroundImage: "url('assets/img/backround.jpg')",
                backgroundColor: "#cccccc",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
                }}>
            <Header />
            <section className="container-fluid">
                <Row>
                    <Col md={6} xs={12} sm={12}>
                        <div className="home-text-group">
                            <div className="home-text">
                            <StyleRoot>
                                <div className="test" style={styles.slideInLeft}>
                                    <span className="w">w</span>
                                    <span className="cometo">elcome to</span>
                                </div>
                            </StyleRoot>
                            </div>
                            <div className="heightline" />
                                <StyleRoot>
                                    <div className="test" style={styles.zoomIn}>
                                        <span className="cca">CCA </span>
                                        <span className="cosmtic-assistatn">Consmetics Of Consultant Association</span>
                                    </div>
                                </StyleRoot>
                        </div>
                    </Col>

                    <Col md={6} xs={12} sm={12}>
                        <StyleRoot>
                            <div className="test" style={styles.fadeInDown}>
                                <img className="home-banner" src="assets/img/9970.png"/>
                            </div>
                        </StyleRoot>
                    </Col>
                </Row>
                <br/><br/>
                <Row style={{padding: "25px", borderRadius: "20px"}}>
                    <Col>
                      <Row>
                        <Col md={6} xs={12} sm={12}>
                        <>
                        {/* Start WOWSlider.com BODY section */}
                        <div id="wowslider-container1">
                        <div className="ws_images">
                                <ul>
                                <li><img src="assets/img/data1/images/1.jpg" alt={1} title="" id="wows1_0" /></li>
                                <li><img src="assets/img/data1/images/2.jpg" alt={2} title="" id="wows1_1" /></li>
                                <li><img src="assets/img/data1/images/3.jpg" alt={3} title="" id="wows1_2" /></li>
                                </ul>
                            </div>
                        <div className="ws_bullets"><div>
                            <a href="#"><span><img src="assets/img/data1/tooltips/1.jpg" alt={1} /></span></a>
                            <a href="#"><span><img src="assets/img/data1/tooltips/2.jpg" alt={2} /></span></a>
                            <a href="#"><span><img src="assets/img/data1/tooltips/3.jpg" alt={3} /></span></a>
                            <a href="#"><span><img src="assets/img/data1/tooltips/4.jpg" alt={4} /></span></a>
                            <a href="#"><span><img src="assets/img/data1/tooltips/25092015admin26_1.jpg" alt="25-09-2015Admin26_1" /></span></a>
                            </div></div>
                        </div>	
                        {/* End WOWSlider.com BODY section */}
                        </>
                        </Col>
                        <Col md={6} xs={12} sm={12} style={{textAlign: "justify", fontFamily: "Khmer OS Bokor"}}>
                              <p style={{fontSize: "20px", lineHeight: "3"}}>ប្រការ១៖ គោលបំណង</p>
                              <div className="option-top">
                                <p>សមាគមអ្នកប្រឹក្សាយោបលគ្រឿងសម្អាងមានគោលបំពណងដូចខាងក្រោម៖</p>
                                <p>- ចូលរួមសហការជាមួយអជ្ញាធរ  ស្ថាប័នពាក់ព័ន្ធ លើកកម្ពស់ និងទប់ស្កាត់គ្រឿងសម្អាងក្លែងក្លាយដែលកំពុងបំផ្លាញសុខភាពអ្នកប្រើប្រាស់។</p>
                                <p>- គាំទ្រដល់ផលិតផល ដែលនាំចូលដោយមានការចុះបញ្ជីត្រឹមត្រូវ និងទទួលស្គាល់ដោយមន្ទីពាក់ព័ន្ធរបស់កម្ពុជា។</p>
                                <p>- រកទីផ្សា កន្លែងតាំងពិព័រណ៌ និងបង្កើតទីផ្សារ សម្រាប់ដាក់តាំងលក់ផលិតផលគ្រឿងសម្អាងក្នុងស្រុក និងក្រៅស្រុក។</p>
                                <p>- ជួយគាំពារ និងលើកកម្ពស់ដល់អាជីវករដែលជាម្ចាស់ផលិតផលគ្រឿងសម្អាងក្មុងស្រុកឲ្យមានការទទួលស្គាល់ជាផ្លូវការពីក្រស្ថាប័នពាក់ព័ន្ធដែលជាសក្ដានុពល ឆ្ពោះទៅរកការប្រកួតប្រជែងផលិតផលិតផលគ្រឿងសម្អាងកម្ពុជានៅលើទីផ្សា។</p>
                              </div>

                              <p style={{ fontSize: "20px", lineHeight: "3"}}>ប្រការ២៖ បេសកម្ម</p>
                              <div className="option-bottom">
                                <p>- គាំទ្រការខ្សែរសង្វាក់ផលិតផលិតផលគ្រឿងសម្អាងក្នុងស្រុក ដែលមានការទទួលស្គាល់ពូមន្ទីពិសោធន៍ជាតិ។លើការផលិតតាមបច្ចេកទេសឲ្យបានត្រឹមត្រូវតាមស្ដាងដាក្រសួងពាក់ព័ន្ធ។</p>
                                <p>- លើកស្ទួននូវផលិតផលក្នុងស្រុកចំពោះម្ចាស់កម្មសិទ្ធករ ដែលបានចុះបញ្ជីការទទួលស្គាល់គ្រប់ស្ថាប័នពាក់ព័ន្ធ 
                                    ក្នុងការស្វែងរកទីផ្សារ ជៀសវាងការផលិត 
                                    ឬវេចខ្ចប់ផលិតផលគ្រឿងសម្អាងក្លែងក្លាយ។</p>
                                <p>- ផ្ដល់​ការប្រឹក្សាផ្លូវច្បាប់ ដោះស្រាយវិវាទដែលជាហានិភ័យរវាងម្ចាស់អាជីវកម្មគ្រឿងសម្អាងស្របច្បាប់នៅកម្ពុជា។</p>
                              </div>
                          </Col>
                      </Row>
                    </Col>
                </Row>
            </section>
            <Footer />
            <br/><br/><br/><br/><br/>
            </div>
        )
    }
}

export default Home;