import React from 'react';
import axios from 'axios';
import ServiceApi from '../Service';
import ScrollUpButton from "react-scroll-up-button";
import ScrollToTop from "react-scroll-to-top";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Col,
    Row,
    Container,
    ContainerFluid
} from 'react-bootstrap';
import serviceAPI from '../Service';

class Header extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            companies: []
        }
    }

    componentDidMount(){
        // Get Companies All
        axios.get(`${ServiceApi}/api/v1/company/1`).then( respone => {
            this.setState({ companies: respone.data.data });
            console.log(this.state.companies)
        }).catch( error =>  console.log(error))

        $(document).ready(function($) {
            // site preloader -- also uncomment the div in the header and the css style for #preloader
           $('#preloader').fadeOut('slow',function(){
               $(this).remove();
           });

           $('.ScrollUpButton__Container').on('click', function(){
                 window.scrollTo({top: 0, behavior: 'smooth'});
           })
       });
    }

    render(){
        return(
            <>
            <div id="preloader"></div>
                <div>
                    <div className="header-top">
                        <Row>
                            <Col xs={12} md={12}>
                                <Navbar bg="#ffffff" expand="lg" className="fixed-top">
                                    {
                                        this.state.companies.map( item => {
                                            return <Navbar.Brand href="/home"><img className="logo-top" src={`${serviceAPI}/uploads/${item.logo}`} /></Navbar.Brand>
                                        })
                                    }
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="mr-auto"></Nav>
                                        <Nav>
                                            <Nav.Link href="/home">Home</Nav.Link>
                                            <Nav.Link href="/ourpeople">Our People</Nav.Link>
                                            <Nav.Link href="/ourwork">Our Works</Nav.Link>
                                            <Nav.Link href="/product">Products</Nav.Link>
                                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                                            <Nav.Link href="/about">About Us</Nav.Link>
                                            <Nav.Link href="/publication">Publication</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                            </Col>
                        </Row>
                        {/* <ScrollUpButton
                        id="scrollTop"
                        StopPosition={0}
                        ShowAtPosition={150}
                        EasingType='easeOutCubic'
                        AnimationDuration={0}
                        ContainerClassName='ScrollUpButton__Container'
                        TransitionClassName='ScrollUpButton__Toggled'
                        style={{}}
                        ToggledStyle={{}}
                        /> */}
                        <ScrollToTop smooth color="#6f00ff" />
                    </div>
                </div>
            </>
        );
    }
}

export default Header;