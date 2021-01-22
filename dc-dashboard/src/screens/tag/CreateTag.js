import React from 'react';
import axios from 'axios';
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
  } from '@coreui/react';
 
  const baseUrl = 'http://localhost:81';

  class CreateTag extends React.Component {
    
    constructor(props){
        super(props);
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href ="http://localhost:3000/#/login";
        this.state = {
            messageError: '',
            name: '',
            description: ''
        }
    }

    handleChange  = (changeObject) => {
        this.setState(changeObject);
    }

    submitHandler = (e) => {
        e.preventDefault();
        if(this.state.name == '' || this.state.name == undefined ){
         this.setState({ messageError: 'Name is required'});
        }else{
            axios.post(`${baseUrl}`+`/api/v1/tag`, {
                name: this.state.name,
                description: this.state.description
            })
            .then(function () {
            window.location.href = "http://localhost:3000/#/tag";
            })
            .catch( error => {
                console.log(error);
            })
        }
    }

    render(){
        return(
            <CCard>
                <CCardBody>
                     <CForm>
                     <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                            <CLabel>Name <span className="text-danger">*</span></CLabel>
                             <CInput
                             className="form-control"
                             placeholder="Enter Name"
                             name="name"
                             onChange={(e) => this.handleChange({ name: e.target.value }) }
                             />
                             <small className="text-danger">{this.state.messageError}</small>
                             </CFormGroup>
                         </CCol>
                     </CRow>
                     <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                             <CLabel>Description</CLabel>
                                 <CTextarea placeholder="Enter Description"
                                  name="description"
                                  onChange={(e) => this.handleChange({ description: e.target.value }) }
                                  />
                             </CFormGroup>
                         </CCol>
                     </CRow>
                     <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                                <CButton to="/tag" className="float-right">Cancel</CButton>
                                <CButton type="submit" onClick= { this.submitHandler } className="float-right">Save Change</CButton>
                             </CFormGroup>
                         </CCol>
                     </CRow>
                     </CForm>
                </CCardBody>
            </CCard>
        );
    }
  }
  export default CreateTag;