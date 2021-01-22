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
    CSelect,
    CTextarea,
    CLabel
  } from '@coreui/react';

class UpdateUser extends React.Component {

    constructor(props){
        super(props);
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href =`${window.origin}/#/login`;
        this.state = {
            id: this.props.match.params.id,
            users: [],
            rolesOption: [],
            username: '',
            email: '',
            password: '',
            roleSelected: '',
            description: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        let userObject = [];
        if(this.state.password == '' || this.state.password == undefined ){
            userObject = {
                username: this.state.username,
                email: this.state.email,
                role_id: this.state.role,
                description: this.state.description
            }
        }else{
            userObject = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                role_id: this.state.role,
                description: this.state.description
            }
        }

        console.log(userObject);
        axios.put(`${ServiceApi}`+`/api/v1/user/${this.state.id }`, userObject )
          .then(function () {
            window.location.href=`${window.origin}/#/user`;
          })
    }
    
    handleChange  = (changeObject) => {
        this.setState(changeObject);
    }

    componentDidMount(){
        ////// Get roles
        axios.get(`${ServiceApi}`+`/api/v1/role`)
          .then((response) => {
            this.setState({ rolesOption: response.data.data });
          })
          .catch(function (error) {
            console.log(error);
          }) 

          ////// Get User one
          axios.get(`${ServiceApi}`+`/api/v1/user/${this.state.id}`)
          .then((response) => {
              this.setState({ users: response.data.data });
            this.state.users.map( item => {
                this.setState({
                    username: item.username,
                    email: item.email,
                    roleSelected: item.role_id,
                    description: item.description
                });
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
                     <CForm>
                     <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                            <CLabel>Username <span className="text-danger">*</span></CLabel>
                             <CInput
                             className="form-control"
                             placeholder="Enter Username"
                             name="username"
                             value= { this.state.username}
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
                             value= { this.state.email}
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
                             value= { this.state.password}
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
                                     {this.state.rolesOption.map((option) => (
                                        <option selected={this.state.roleSelected == option.id } key={option.id} value={option.id}>{option.name}</option>
                                    ))}
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
                                  value= { this.state.description}
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

export default UpdateUser;