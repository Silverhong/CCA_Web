import React from 'react';
import axios from 'axios';
import ServiceApi from "../../Service";
// import bcrypt from 'bcrypt';
import {
    CCard,
    CCardBody,
    CRow,
    CCol,
    CInput,
    CFormGroup,
    CForm,
    CButton,
    CSelect,
    CTextarea,
    CLabel
  } from '@coreui/react';

class CreateUser extends React.Component {

    constructor(props){
        super(props);
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href =`${window.origin}/#/login`;
        this.state = {
            rolesOption: [],
            username: '',
            email: '',
            password: '',
            role: '',
            description: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        // const rounds = 10;
        // bcrypt.hash(password, rounds, (err, hash) => {
        //     if (err) {
        //       console.error(err)
        //       return
        //     }
        //     console.log(hash)
        // })

        axios.post(`${ServiceApi}`+`/api/v1/user`, {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role,
            description: this.state.description
        })
          .then(function () {
            window.location.href = `${window.origin}/#/user`;
          })
    }
    
    handleChange  = (changeObject) => {
        this.setState(changeObject);
    }

    componentDidMount(){
        //   Get Role Option
        axios.get(`${ServiceApi}`+`/api/v1/role`)
          .then((response) => {
            this.setState({ rolesOption: response.data.data });
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    render(){
        return(
            <CCard>
                <CCardBody>
                     <CForm>
                     <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                            <CLabel>Username <span className="text-danger">*</span></CLabel>
                             <CInput
                             className="form-control"
                             placeholder="Enter Username"
                             name="username"
                             onChange={(e) => this.handleChange({ username: e.target.value }) }
                             />
                             </CFormGroup>
                         </CCol>
                     </CRow>
                     <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                             <CLabel>Email</CLabel>
                             <CInput
                             className="form-control"
                             name="email"
                             placeholder="Enter Email"
                             onChange={(e) => this.handleChange({ email: e.target.value }) }
                             />
                             </CFormGroup>
                         </CCol>
                     </CRow>
                     <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                             <CLabel>Password <span className="text-danger">*</span></CLabel>
                             <CInput
                             className="form-control"
                             placeholder="Enter Password"
                             name="password"
                             onChange={(e) => this.handleChange({ password: e.target.value }) }
                             />
                             </CFormGroup>
                         </CCol>
                     </CRow>
                     {/* <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                                 <CLabel>Role</CLabel>
                                 <CSelect className="form-select"
                                 onChange={(e) => this.handleChange({ role: e.target.value }) }
                                 name="role">
                                     <option>Select Option</option>
                                     {
                                        this.state.rolesOption.map((option) => {
                                            return <option key={ option.id } value={ option.id }>{ option.name }</option>
                                        })
                                     }
                                 </CSelect>
                             </CFormGroup>
                         </CCol>
                     </CRow> */}
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
                                <CButton to="/user" className="float-right">Cancel</CButton>
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

export default CreateUser;