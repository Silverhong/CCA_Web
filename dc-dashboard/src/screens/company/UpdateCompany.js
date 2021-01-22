import React from 'react';
import axios from 'axios';
import ServiceApi from "../../Service";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
    CCard,
    CCardBody,
    CRow,
    CCol,
    CInput,
    CFormGroup,
    CForm,
    CButton,
    CLabel,
    CCardFooter
  } from '@coreui/react';

  const config = {
    headers: {
        'content-type': 'multipart/form-data',
        'Accept': '*'
    }
};

  class UpdateCompany extends React.Component {
    
    constructor(props){
        super(props);
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href =`${window.origin}/#/login`;
        this.state = {
            id: this.props.match.params.id,
            handleWYSIWYGInput: props.handleWYSIWYGInput,
            editor: ClassicEditor,
            name: '',
            description: '',
            address: '',
            file: [],
            url: 'avatars/no_image.png',
            fileName: '',
            image: [],
            email: '',
            phone: '',
            company: []
        }
    }

    handleChange  = (changeObject) => {
        this.setState(changeObject);
    }

    handleUploadChange(event) {
        this.setState({
          file: event.target.files[0],
          url: URL.createObjectURL(event.target.files[0]),
        })
      }

    submitHandler = (e) => {
        e.preventDefault();
        let companyObject = [];
        if(!(this.state.file == '')){
            ///Delete old file
            axios.delete(`${ServiceApi}/api/v1/delete/file/${this.state.fileName}`);
            
            // Upload file
            let fd = new FormData();
            fd.append('file', this.state.file);

            axios.post(`${ServiceApi}/api/v1/upload`, fd, config)
            .then( respone => {
                this.setState({ file: respone.data.filename})
                companyObject = {
                    name: this.state.name,
                    email: this.state.email,
                    phone: this.state.phone,
                    logo:  this.state.file,
                    address: this.state.address,
                    description: this.state.description
                }
                
                // Update logo
                axios.put(`${ServiceApi}`+`/api/v1/company/${this.state.id}`, companyObject)
                .then(function () {
                    window.location.href = `${window.origin}/#/company`;
                })
                .catch( error => {
                    console.log(error);
                })
            })
            .catch( error => console.log(error))
        }else{
            companyObject = {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                address: this.state.address,
                description: this.state.description
            }

            // Update logo
            axios.put(`${ServiceApi}`+`/api/v1/company/${this.state.id}`, companyObject)
            .then(function () {
                window.location.href = `${window.origin}/#/company`;
            })
            .catch( error => {
                console.log(error);
            })
        }
    }

    componentDidMount(){
        // Get companies
        axios.get(`${ServiceApi}/api/v1/company/${this.state.id}`)
        .then((respone) => {
            this.setState({ company: respone.data.data });
            this.state.company.map( item => {
                this.setState({
                    name: item.name,
                    description: item.description,
                    address: item.address,
                    email: item.email,
                    phone: item.phone,
                    url: `${ServiceApi}/uploads/${item.logo}`,
                    fileName: item.logo
                });
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
                     <CForm onSubmit={ this.submitHandler } >
                         <CRow>
                             <CCol className="col-md-8 col-xs-8">
                                <CRow>
                                    <CCol className="md-12 xs-12">
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
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol className="md-12 xs-12">
                                        <CFormGroup>
                                        <CLabel>Email</CLabel>
                                        <CInput
                                        className="form-control"
                                        placeholder="Enter Name"
                                        name="email"
                                        value={this.state.email}
                                        onChange={(e) => this.handleChange({ email: e.target.value }) }
                                        />
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol className="md-12 xs-12">
                                        <CFormGroup>
                                        <CLabel>Phone </CLabel>
                                        <CInput
                                        className="form-control"
                                        placeholder="Enter Name"
                                        name="phone"
                                        value={this.state.phone}
                                        onChange={(e) => this.handleChange({ phone: e.target.value }) }
                                        />
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol className="md-12 xs-12">
                                        <CFormGroup>
                                        <CLabel>Address </CLabel>
                                        <CInput
                                        className="form-control"
                                        placeholder="Enter Name"
                                        name="address"
                                        value={this.state.address}
                                        onChange={(e) => this.handleChange({ address: e.target.value }) }
                                        />
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol className="md-12 xs-12">
                                        <CFormGroup>
                                        <CLabel>Description</CLabel>
                                        <CKEditor
                                            editor={ ClassicEditor }
                                            data={this.state.description}
                                            
                                            onChange={ ( event, editor ) => {
                                                const data = editor.getData();
                                                this.setState({ description: data});
                                            } }
                                        />
                                    </CFormGroup>
                                    </CCol>
                                </CRow>
                                </CCol>
                             <CCol className="col-md-4 col-xs-4 input-group mb-3">
                                 <CCard>
                                     <CCardBody>
                                     <CRow>
                                        <CCol className="md-12 xs-12">
                                            <CFormGroup>
                                                <img src={`${this.state.url}`} alt="logo" className="img-fluid"></img>
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                     </CCardBody>
                                     <CCardFooter>
                                     <CRow>
                                        <CCol className="md-12 xs-12">
                                            <CFormGroup>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Upload</span>
                                                    </div>
                                                    <div className="custom-file">
                                                    <input type="file" 
                                                    className="custom-file-input" id="inputGroupFile01"
                                                    className="custom-file-input"
                                                    onChange={(e) => this.handleUploadChange(e)}
                                                    />
                                                    <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                                                    </div>
                                                </div>
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                     </CCardFooter>
                                 </CCard>
                             </CCol>
                         </CRow>
                         <CRow>
                            <CCol className="md-12 xs-12">
                                <CFormGroup>
                                    <CButton to="/company" className="float-right">Cancel</CButton>
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
  export default UpdateCompany;