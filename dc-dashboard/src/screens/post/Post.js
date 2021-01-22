import React from 'react';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import Moment from 'react-moment';
import ServiceApi from "../../Service";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CDataTable
  } from '@coreui/react';

class Post extends React.Component {

    constructor(props){
        super(props);
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href =`${window.origin}/#/login`;
        this.state = {
            id: '',
            posts: [],
            show: false
        }
    }
    fields = [
        { key: 'id', label: 'ID', _style: { width: '10%' } },
        { key: 'title', label: 'Product Name', _style: { width: '15%'} },
        { key: 'thumbnail', label: 'Thumbnail', _style: { width: '5%'} },
        { key: 'barcode', label: 'Barcode', _style: { width: '10%'} },
        // { key: 'createdBy', label: 'Recorder', _style: { width: '10%'} },
        { key: 'createdAt', label: 'Record Date',  _style: { width: '5%'} },
        // { key: 'updatedBy', label: 'Modifier', _style: { width: '10%'} },
        { key: 'updatedAt', label: 'Modify Date', _style: { width: '5%'} },
        { key: 'action', _style: { width: '15%'} }
    ];

    componentDidMount(){
        // Get Post All
        axios.get(`${ServiceApi}/api/v1/post`).then( respone => {
            this.setState({ posts: respone.data.data });
            console.log(this.state.posts)
        }).catch( error =>  console.log(error))
    }

    postDelete = () => {
        axios.delete(`${ServiceApi}/api/v1/post/${this.state.id}`)
          .then(() => {
              this.setState({ show: false });
              window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          }) 
    }

    hideAlert = () => {
        this.setState({ show: false });
    }

    render(){
        return(
            <CCard>
                <CCardHeader>
                    <CButton to="/post/create" className="float-right">+ New</CButton>
                </CCardHeader>
                <CCardBody>
                     <CDataTable
                     items={this.state.posts}
                     fields={this.fields}
                     tableFilter={true}
                     itemsPerPageSelect
                     itemsPerPage={5}
                     hover
                     sorter
                     pagination
                     scopedSlots = {{
                        'action':
                          (item)=>(
                            <td>
                                <CButton to={`/post/edit/${item.id}`} className="btn btn-secondary mr-2" size='sm'>
                                   Edit
                                </CButton>
                                <CButton onClick={ () => this.setState({ show: true, id: item.id })} className="btn btn-danger sm" size='sm'>
                                   Delete
                                </CButton>
                            </td>
                        ),
                        'thumbnail':
                          (item)=>(
                            <td>
                                <a href={`${ServiceApi}/uploads/${item.thumbnail}`}><img className="img-fluid rounded" width="60%" height="60%" src={`http://localhost:81/uploads/${item.thumbnail}`} /></a>
                            </td>
                        ),
                        'createdAt':
                          (item)=>(
                            <td>
                                <Moment format="YYYY/MMM/DD">{ item.createdAt }</Moment>
                            </td>
                        ),
                        'updatedAt':
                          (item)=>(
                            <td>
                                <Moment format="YYYY/MMM/DD">{ item.updatedAt }</Moment>
                            </td>
                        )
                    }}
                     >
                     </CDataTable>
                </CCardBody><SweetAlert
                    show={this.state.show}
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    cancelBtnBsStyle="default"
                    title="Are you sure?"
                    onConfirm={this.postDelete}
	                onCancel={this.hideAlert}
                />
            </CCard>
        );
    }
}

export default Post;