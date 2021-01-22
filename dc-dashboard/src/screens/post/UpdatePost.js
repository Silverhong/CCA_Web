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

class UpdatePost extends React.Component {

    constructor(props){
        super(props);
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href =`${window.origin}/#/login`;
        this.state = {
            id: this.props.match.params.id,
            content: props.content,
            handleWYSIWYGInput: props.handleWYSIWYGInput,
            editor: ClassicEditor,
            title: '',
            barcode: '',
            file: [],
            description: '',
            body: '',
            fileName: '',
            url: 'avatars/no_image.png',
            category: '',
            categoryOption: [],
            tagOption: []
        }
    }

    handleChange  = (changeObject) => {
        this.setState(changeObject);
    }

    handleUploadChange(event) {
        this.setState({
          file: event.target.files[0],
          url: URL.createObjectURL(event.target.files[0])
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        let postOject = [];
        if(!(this.state.file == '')){
            ///Delete old file
            axios.delete(`${ServiceApi}/api/v1/delete/file/${this.state.fileName}`);

            // Upload file
            let fd = new FormData();
            fd.append('file', this.state.file);

            axios.post(`${ServiceApi}/api/v1/upload`, fd, config)
            .then( respone => {
                this.setState({ file: respone.data.filename})
                postOject = {
                    title: this.state.title,
                    barcode: this.state.barcode,
                    thumbnail: this.state.file,
                    description: this.state.description,
                    body: this.state.body,
                    category_id: this.state.category_id,
                }
                
                // Update post
                axios.put(`${ServiceApi}`+`/api/v1/post/${this.state.id}`, postOject)
                .then(function () {
                    window.location.href = `${window.origin}/#/post`;
                })
                .catch( error => {
                    console.log(error);
                })
            })
            .catch( error => console.log(error))
        }else{
            postOject = {
                title: this.state.title,
                barcode: this.state.barcode,
                description: this.state.description,
                body: this.state.body,
                category_id: this.state.category_id
            }

            // Update post
            axios.put(`${ServiceApi}`+`/api/v1/post/${this.state.id}`, postOject)
            .then(function () {
                window.location.href = `${window.origin}/#/post`;
            })
            .catch( error => {
                console.log(error);
            })
        }
    }

    componentDidMount(){
        // Get Post edit
        axios.get(`${ServiceApi}/api/v1/post/${this.state.id}`)
        .then((respone) => {
            this.setState({
                posts: respone.data.data
            });
            this.state.posts.map(item => {
                this.setState({ 
                    category: item.category_id,
                    description: item.description,
                    body: item.body,
                    title: item.title,
                    url: `${ServiceApi}/uploads/${item.thumbnail}`,
                    barcode: item.barcode,
                    fileName: item.thumbnail
                 });
            })
        })
        .catch( error => {
            console.log(error);
        })
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
        // Get Tag
        axios.get(`${ServiceApi}/api/v1/tag`)
        .then((respone) => {
            this.setState({
                tagOption: respone.data.data
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
                                    value={this.state.title}
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
                                    value={this.state.barcode}
                                    onChange={(e) => this.handleChange({ barcode: e.target.value }) }
                                    />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol className="md-12 xs-12">
                                    <CFormGroup>
                                    <CLabel>Description</CLabel>
                                    <CTextarea
                                    className="form-control"
                                    placeholder="Enter Description"
                                    name="description"
                                    rows="6"
                                    cols="4"
                                    value={ this.state.description }
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
                                        console.log(this.state.body)
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
                                                {
                                                    this.state.categoryOption.map(option => {
                                                     return  <option selected={this.state.category == option.id} key={option.id} value={option.id}>{option.name}</option>
                                                    })
                                                }
                                            </CSelect>
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
export default UpdatePost;