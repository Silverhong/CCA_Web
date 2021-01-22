import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import ServiceApi from '../../Service';

import { Col, Row } from 'react-bootstrap';

class About extends React.Component {

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
            <br/><br/>
            <section class="about-area">
                <div class="container">
                    <div class="row">
                        <Row>
                            <Col className="partner">
                                <span style={{fontSize: "50px"}}>A</span>
                                <span>BOUT US</span>
                            </Col>
                        </Row>
                        <div className="heightline-about"/>
                        <div class="about-information-area-border">
                            <div class="about-information-area-content">
                                <div class="col-md-8 col-sm-8">
                                    <div>
                                        <p style={{fontSize: "18px", marginBottom: "10px", fontWeight: "bold", lineHeight: "4"}}>ជំពូកទី២</p>

                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>អំពីការដាក់ឈ្មោះ ទីស្នាក់ការ អត្តសញ្ញាណ សញ្ញាសម្គាល់ និងត្រា</p>

                                        <p style={{fontSize: "18px", marginBottom: "10px", fontWeight: "bold", lineHeight: "4"}}>ប្រការ៣៖ អំពីការដាក់ឈ្មោះ</p>

                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>សមាគមនេះមានឈ្មោះជាភាសាខ្មែរថា«សមាគមអ្នកប្រឹក្សាយោបល់គ្រឿងសម្អាង»សរសេរជាអក្សរកាត់ថា ស.អ.ប.យ.គ.ស. និងមានឈ្មោះជាអក្សារឡាតាំង Cosmetics of Consultant  Association ជាអក្សរកាត់ C.C.A។</p>

                                        <p style={{fontSize: "18px", marginBottom: "10px", fontWeight: "bold", lineHeight: "4"}}>ប្រការ ៤៖ទីស្នាក់ការ</p>

                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>សមាគមអ្នកប្រឹក្សាយោបល់គ្រឿងសម្អាង មានទីស្នាក់ការកណ្ដាលតាំងនៅរាជធានីភ្នំពេញ។ សមាគមអាចមានទីស្នាក់ការសាខានៅតាមបនណ្ដាខេត្តទូទាព្រះរាជាណាចក្រកម្ពុជាញ តាមតម្រូវការចំបាច់របស់សមាគម។ ទីស្នាក់ការសាខា និងទីស្នាក់ការកណ្ដាលអាចផ្លាស់ប្ដូរបានក្នុងករណីចាំបាច់តាមការសម្រេចចិត្តពីប្រធានសមាគម។</p>

                                        <p style={{fontSize: "18px", marginBottom: "10px", fontWeight: "bold", lineHeight: "4"}}>ប្រការ ៥៖ អំពីអត្តសញ្ញាណ </p>

                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>សមាគមអ្នកប្រឹក្សាយោបល់គ្រឿងសម្អាង គឺជាសមាគមអព្យាក្រឹត មិនស្វែងរកប្រាក់កម្រៃជាឯកជន មិនប្រកាន់ពូជសាសន៍ មិនប្រកាន់សាសនា មិនប្រកាន់និន្នាការនយោបាយ មិនធ្វើនយោបាយ មិនធ្វើឧបករណ៍គណបក្សនយោបាយ ក្នុងនោះមិនផ្ដល់ជាសម្ភារៈ ហិរញ្ញវត្ថុ ធនធានមនុស្សគាំទ្រគណបក្សនយោបាយ ញឬបេក្ខជន ឬអ្នកគាំទ្រណាមួយឡើយ។</p>

                                        <p style={{fontSize: "18px", marginBottom: "10px", fontWeight: "bold", lineHeight: "4"}}>រការ ៦៖ សញ្ញាសម្គាល់ និងត្រា</p>

                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>សញ្ញាសម្គាល់របស់ សមាគមអ្នកប្រឹក្សាយោបលគ្រឿងសម្អាង ចែងក្នុងឧបសម្ព័ន្ធដោយឡែក។ ត្រាតបស់សមាគមអ្នកប្រឹក្សាយោបល់គ្រឿងសម្អាង មានចែកក្នុងឧបសម្ព័ន្ធដោយឡែក ដែលត្រាំមានទំហំ ៣៤ មម ប្រើទឹកត្រាពណ៌ខៀវ។</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br/><br/>
            <br/><br/>
            <Footer />
            </>
        );
    }
}

export default About;