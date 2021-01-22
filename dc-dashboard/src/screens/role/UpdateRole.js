import React from 'react';
import axios from 'axios';
import ServiceApi from "../../Service";
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

  class CreateRole extends React.Component {

    constructor(props){
        super(props);
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href =`${window.origin}/#/login`;
        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: '',
            role: []
        }
    }

    handleChange  = (changeObject) => {
        this.setState(changeObject);
    }

    componentDidMount(){
        axios.get(`${ServiceApi}/api/v1/role/${this.state.id}`)
        .then((respone) => {
            this.setState({ role: respone.data.data });
            this.state.role.map( item => {
                this.setState({
                    name: item.name,
                    description: this.state.description
                });
            });
        })
        .catch( error => {
            console.log(error);
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        // Insert to role 
        axios.put(`${ServiceApi}`+`/api/v1/role/${this.state.id}`, {
            name: this.state.name,
            description: this.state.description
        })
          .then(function () {
            window.location.href = `${window.origin}/#/role`;
          })
          .catch( error => {
            console.log(error);
          })
        //   Insert to rolHasPermission
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
                        <CNavLink data-tab="permission">
                            Permission
                        </CNavLink>
                        </CNavItem>
                        <CNavItem>
                        </CNavItem>
                    </CNav>
                    <CForm onSubmit={this.submitHandler}>
                    <CTabContent>
                            <CTabPane data-tab="home">
                                    <CRow>
                                        <CCol className="md-12 xs-12">
                                            <CFormGroup>
                                            <CLabel>Name <star className="text-danger">*</star></CLabel>
                                            <CInput
                                            className="form-control"
                                            placeholder="Enter Name"
                                            name="name"
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
                            <CTabPane data-tab="permission">
                            <CRow>
                                <CCol className="md-12 xs-12">
                                    <CFormGroup>
                                        <CLabel>Permission</CLabel>
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel className="mr-5">
                                            <input className="mr-2" type="checkbox" />
                                            Manage All
                                        </CLabel>
                                        <CLabel className="mr-5">
                                            <input className="mr-2" type="checkbox" />
                                            Create
                                        </CLabel>
                                        <CLabel className="mr-5">
                                            <input className="mr-2" type="checkbox" />
                                            Edit
                                        </CLabel>
                                        <CLabel className="mr-5">
                                            <input className="mr-2" type="checkbox" />
                                            Delete
                                        </CLabel>
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            </CTabPane>
                        </CTabContent>
                        <CRow>
                            <CCol className="md-12 xs-12">
                                <CFormGroup>
                                    <CButton to="/role" className="float-right">Cancel</CButton>
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
  export default CreateRole;