import React from 'react';
import axios from 'axios';
import $ from "jquery";
import {
    CCard,
    CCardBody,
    CRow,
    CCol,
    CInput,
    CFormGroup,
    CForm,
    CButton,
    CTextarea,
    CLabel,
    CTabs,
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane
  } from '@coreui/react';

  const baseUrl = 'http://localhost:81';

  class UpdateMenu extends React.Component {

    constructor(props){
        super(props);
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href ="http://localhost:3000/#/login";
        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: '',
            categories: [],
            categoryCheck: [],
            isChecked: true
        }
    }

    handleChange  = (changeObject) => {
        this.setState(changeObject);
    }

    handleCheckBoxChange = (e) => {
        const checkObj = this.state.categoryCheck;
        let index;
        if(e.target.checked){
            checkObj.push(e.target.value);
            console.log(checkObj);
        }else{
            index = checkObj.indexOf(e.target.value)
            checkObj.splice(index, 1)
            console.log(checkObj);
        }
        this.setState({categoryCheck: checkObj});
    }

    submitHandler = (e) => {
        e.preventDefault();
        // console.log(this.state.categoryCheck)
        // return
        // Replace MenuHasCategory
        axios.delete(`${baseUrl}/api/v1/menuHasCategory/${this.state.id}`).catch( error => console.log(error));

        // Get All checked insert to MenuHasCategory
        this.state.categoryCheck.map( item => {
            axios.post(`${baseUrl}/api/v1/menuHasCategory`, {
                menu_id: this.state.id,
                category_id: item
            }).catch( error => console.log(error))
        })
        // Update Menu
        axios.put(`${baseUrl}`+`/api/v1/menu/${this.state.id}`, {
            name: this.state.name,
            description: this.state.description
        })
          .then(function () {
            window.location.href = "http://localhost:3000/#/menu";
          })
          .catch( error => {
              console.log(error);
          })
    }

    componentDidMount(){
        // Get MenuHasCategory All
        axios.get(`${baseUrl}/api/v1/menuHasCategory`).then( respone => {
            this.setState({ categoryCheck: respone.data.data });
        }).catch( error => console.log(error))

        // Get Menu edit
        axios.get(`${baseUrl}/api/v1/menu/${this.state.id}`)
        .then((respone) => {
            this.setState({
                menus: respone.data.data
            });
            this.state.menus.map( item => {
                this.setState({
                    name: item.name,
                    description: item.description
                });
            });
        })
        .catch( error => {
            console.log(error);
        })

        // Get Category All for fetch
        axios.get(`${baseUrl}/api/v1/category`)
        .then((respone) => {
            this.setState({
                categories: respone.data.data
            });
        })
        .catch( error => {
            console.log(error);
        })
    }

    render(){
        return(
            <CCard>
                <CCardBody>
                <CTabs activeTab="home">
                    <CNav variant="tabs">
                        <CNavItem>
                        <CNavLink data-tab="home">
                            Info
                        </CNavLink>
                        </CNavItem>
                        <CNavItem>
                        <CNavLink data-tab="category">
                            categories
                        </CNavLink>
                        </CNavItem>
                        <CNavItem>
                        </CNavItem>
                    </CNav>
                    <CForm onSubmit={ this.submitHandler }>
                    <CTabContent>
                            <CTabPane data-tab="home">
                                    <CRow>
                                        <CCol className="md-12 xs-12">
                                            <CFormGroup>
                                            <CLabel>Name <span className="text-danger">*</span></CLabel>
                                            <CInput
                                            className="form-control"
                                            placeholder="Enter Name"
                                            value={this.state.name}
                                            onChange={(e) => this.handleChange({ name: e.target.value }) }
                                            />
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol className="md-12 xs-12">
                                            <CFormGroup>
                                            <CLabel>Description</CLabel>
                                                <CTextarea 
                                                placeholder="Enter Description"
                                                name="description"
                                                value={this.state.description}
                                                onChange={(e) => this.handleChange({ description: e.target.value }) }
                                                />
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                            </CTabPane>
                            <CTabPane data-tab="category">
                            <CRow>
                                <CCol className="md-12 xs-12">
                                    <CFormGroup>
                                        <CLabel>Categories</CLabel>
                                    </CFormGroup>
                                    <CFormGroup>
                                       { this.state.categories.map( (item) => {
                                            return <CLabel key={item.id} className="mr-5">
                                                <input name="categoryCheck" className="mr-2" value={item.id} type="checkbox"
                                                onChange={ (e) => this.handleCheckBoxChange(e) }
                                                />
                                                { item.name }
                                            </CLabel>
                                        })
                                       }
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            </CTabPane>
                        </CTabContent>
                        <CRow>
                            <CCol className="md-12 xs-12">
                                <CFormGroup>
                                    <CButton to="/menu" className="float-right">Cancel</CButton>
                                    <CButton type="submit" className="float-right">Save Change</CButton>
                                </CFormGroup>
                            </CCol>
                        </CRow>
                    </CForm>
                    </CTabs>
                </CCardBody>
            </CCard>
        );
    }
  }
  export default UpdateMenu;