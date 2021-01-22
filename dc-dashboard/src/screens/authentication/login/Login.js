import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import ServiceApi from "../../../Service";
import CIcon from '@coreui/icons-react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react';

const backgroundImage = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(/avatars/background.jpg)"
}

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      users: [],
      show: false,
      message: ''
    }
  }

  handleChange  = (changeObject) => {
    this.setState(changeObject);
  }

  hideAlert = () => {
    this.setState({ show: false });
  }

  formReset = () => {
    document.getElementById("userForm").reset();
  }

  handleSubmitLogin = (e) => {
    e.preventDefault();

    // check login 
    let email = this.state.email;
    let password = this.state.password;

    // Get User Data
    axios.post(`${ServiceApi}/api/v1/login`, {
      email: email,
      password: password
    }).then( respone => {

      this.setState({ users: respone.data.data });
      if(!respone.data.message == 0){
        // Store User seesion ID
        localStorage.setItem('uuid', this.state.users);

        // Set TimeOut alert
        this.setState({ 
          show: true,
          message: 'Login Successfully.'
        });
        setTimeout(function(){
          window.location.href = `${window.origin}/#/home`;
        }, 2000);
      }else{
        this.setState({ 
          show: true,
          message: 'Your email and password is incorrect!'
        });
      }
    })
  }

  render(){
    return (
      <div style={ backgroundImage } className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="6">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm id="userForm" onSubmit={this.handleSubmitLogin}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" 
                        name="email" 
                        placeholder="Enter Email" 
                        autoComplete="email"
                        onChange={(e) => this.handleChange({ email: e.target.value }) }
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" 
                        name="password"
                        placeholder="Enter Password" 
                        autoComplete="current-password"
                        onChange={(e) => this.handleChange({ password: e.target.value }) }
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton type="submit" color="secondary" className="px-4">Login</CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                        <CButton color="danger" onClick={() => this.formReset() } className="px-4">Reset</CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
          {/* Sweet Alert */}
          <SweetAlert
                    show={this.state.show}
                    warning
                    showCancel
                    confirmBtnText="Okay"
                    confirmBtnBsStyle="danger"
                    cancelBtnBsStyle="default"
                    title={this.state.message}
                    onConfirm={this.hideAlert}
	                  onCancel={this.hideAlert}
                />
        </CContainer>
      </div>
    )
  }
}
export default Login;