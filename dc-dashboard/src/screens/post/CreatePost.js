import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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
    CLabel,
    CButton,
    CSelect,
    CCardFooter,
    CTextarea
  } from '@coreui/react';

  const config = {
    headers: {
        'content-type': 'multipart/form-data',
        'Accept': '*'
    }
};

class CreatePost extends React.Component {

    constructor(props){
        super(props);
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href =`${window.origin}/#/login`;
        this.state = {
            id: props.id,
            handleWYSIWYGInput: props.handleWYSIWYGInput,
            editor: ClassicEditor,
            title: '',
            barcode: '',
            file: [],
            description: '',
            body: '',
            url: 'avatars/no_image.png',
            category_id: '',
            category: '',
            categoryOption: [],
            tagOption: [],
            hidden: true
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
        if(this.state.category_id == ''){
            this.setState({hidden: false });
            return
        }

        let postOject = [];
        let fd = new FormData();
            fd.append('file', this.state.file);

        if(!(this.state.file == '')){
            // Upload image thumnail
            axios.post(`${ServiceApi}/api/v1/upload`, fd, config).then( respone => {
                this.setState({ file: respone.data.filename})

                postOject = {
                    title: this.state.title,
                    barcode: this.state.barcode,
                    thumbnail: this.state.file,
                    description: this.state.description,
                    body: this.state.body,
                    category_id: this.state.category_id,
                }

                // Create Post
                axios.post(`${ServiceApi}/api/v1/post`, postOject ).then(() => {
                    window.location.href=`${window.origin}/#/post`;
                }).catch( error => console.log(error))
            })
        }else{
            postOject = {
                title: this.state.title,
                barcode: this.state.barcode,
                description: this.state.description,
                body: this.state.body,
                category_id: this.state.category_id,
            }

            // Create Post
            axios.post(`${ServiceApi}/api/v1/post`, postOject ).then(() => {
                window.location.href=`${window.origin}/#/post`;
            }).catch( error => console.log(error))
        }
    }

    componentDidMount(){
        // Get Category All
        axios.get(`${ServiceApi}/api/v1/category`)
        .then((respone) => {
            this.setState({
                categoryOption: respone.data.data
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
                <CForm onSubmit={this.submitHandler}>
                    <CRow>
                        <CCol className="col-md-8 xs-8">
                            <CRow>
                                <CCol className="md-12 xs-12">
                                    <CFormGroup>
                                    <CLabel>Post Name <span className="text-danger">*</span></CLabel>
                                    <CInput
                                    className="form-control"
                                    placeholder="Enter Post Name"
                                    name="title"
                                    onChange={(e) => this.handleChange({ title: e.target.value }) }
                                    />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol className="md-12 xs-12">
                                    <CFormGroup>
                                    <CLabel>Post Code </CLabel>
                                    <CInput
                                    className="form-control"
                                    placeholder="Enter Post Code"
                                    name="barcode"
                                    onChange={(e) => this.handleChange({ barcode: e.target.value }) }
                                    />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol className="md-12 xs-12">
                                    <CFormGroup>
                                    <CLabel>Description </CLabel>
                                    <CTextarea
                                    className="form-control"
                                    placeholder="Enter Description"
                                    name="description"
                                    rows="6"
                                    cols="4"
                                    onChange={(e) => this.handleChange({ description: e.target.value }) }
                                    />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol className="md-12 xs-12">
                                    <CFormGroup>
                                    <CLabel>Content</CLabel>
                                    <CKEditor
                                    editor={ ClassicEditor }
                                    data={this.state.body}
                                    config={{ckfinder: {
                                        // Upload the images to the server using the CKFinder QuickUpload command
                                        // You have to change this address to your server that has the ckfinder php connector
                                        uploadUrl: `${ServiceApi}/api/v1/uploader`
                                    }}}
                                    
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        this.setState({ body: data});
                                        // console.log( { event, editor, data } );
                                    } }
                                />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                        </CCol>
                        <CCol className="col-md-4 col-xs-4">
                            <CCard>
                                <CCardBody>
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
                                                    name="image"
                                                    type="file"
                                                    className="custom-file-input"
                                                    onChange={(e) => this.handleUploadChange(e)}
                                                    />
                                                    <label className="custom-file-label" for="inputGroupFile01">Choose Image</label>
                                                    </div>
                                                </div>
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                     </CCardFooter>
                                 </CCard>
                                    <CRow>
                                        <CCol className="md-12 xs-12">
                                            <CFormGroup>
                                            <CLabel>Menu Post <span className="text-danger">*</span></CLabel>
                                            <CSelect 
                                            name="category_id"
                                            onChange={(e) => this.handleChange({ category_id: e.target.value }) }
                                            >
                                                <option value="0">Please select option</option>
                                                {
                                                    this.state.categoryOption.map(option => {
                                                     return  <option key={option.id} value={option.id}>{option.name}</option>
                                                    })
                                                }
                                            </CSelect>
                                            <small hidden={this.state.hidden} style={{color: "red"}}>Please select one</small>
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol className="md-12 xs-12">
                            <CFormGroup>
                                <CButton type="submit" className="float-right">Public</CButton>
                                <CButton to="/post" className="float-right">Cancel</CButton>
                            </CFormGroup>
                        </CCol>
                    </CRow>
                </CForm>
                </CCardBody>
            </CCard>
        );
    }
}
export default CreatePost;