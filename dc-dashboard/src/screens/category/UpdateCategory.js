import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
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
    CLabel
  } from '@coreui/react';

  const baseUrl = 'http://localhost:81';

class UpdateCategory extends React.Component { 

    constructor(props){
        super(props);
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href ="http://localhost:3000/#/login";
        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: '',
            category: []
        }
    }

    handleChange  = (changeObject) => {
        this.setState(changeObject);
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.put(`${baseUrl}`+`/api/v1/category/${this.state.id}`, {
            name: this.state.name,
            description: this.state.description
        })
          .then(function () {
             window.location.href = "http://localhost:3000/#/category";
          })
          .catch( error => {
            console.log(error);
          })
    }

    componentDidMount(){
        // Get Category Option
        axios.get(`${baseUrl}`+`/api/v1/category/${this.state.id}`)
          .then((response) => {
              this.setState({ category: response.data.data });
              this.state.category.map(item => {
                  this.setState({
                      name: item.name,
                      description: item.description
                  })
              });
          })
          .catch(function (error) {
            console.log(error);
          }) 
    }

    render(){
        return(
            <CCard>
                <CCardBody>
                    <CForm onSubmit={ this.submitHandler }>
                        <CRow>
                            <CCol className="md-12 xs-12z">
                                <CFormGroup>
                                    <CLabel>Name <span className="text-danger">*</span></CLabel>
                                    <CInput
                                    className="form-control"
                                    placeholder="Enter Name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={(e) => this.handleChange({ name: e.target.value }) }
                                    />
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel>Description</CLabel>
                                    <CTextarea
                                    className="form-control"
                                    placeholder="Enter Description"
                                    name="description"
                                    value={this.state.description}
                                    onChange={(e) => this.handleChange({ description: e.target.value }) }
                                    />
                                </CFormGroup>
                            </CCol>
                        </CRow>
                        <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                                <CButton to="/category" className="float-right">Cancel</CButton>
                                <CButton type="submit" className="float-right">Save Change</CButton>
                             </CFormGroup>
                         </CCol>
                     </CRow>
                    </CForm>
                </CCardBody>
            </CCard>
        );
    }
}
export default UpdateCategory;