import React from 'react';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CDataTable
  } from '@coreui/react';

  const baseUrl = 'http://localhost:81';

  class Tag extends React.Component {

    constructor(props){
        super(props);
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href ="http://localhost:3000/#/login";
        this.state = {
            id: this.props.match.params.id,
            show: false,
            name: '',
            description: '',
            tags: []
        }
    }

    fields = [
        { key: 'id', _style: { width: '10%'} },
        { key: 'name', _style: { width: '10%'} },
        { key: 'description', _style: { width: '10%'} },
        { key: 'createdBy', label: 'Recorder', _style: { width: '10%'} },
        { key: 'createdAt', label: 'Record Date',  _style: { width: '5%'} },
        { key: 'updatedBy', label: 'Modifier', _style: { width: '10%'} },
        { key: 'updatedAt', label: 'Modify Date', _style: { width: '5%'} },
        { key: 'action', _style: { width: '15%'} }
    ]

    componentDidMount(){
        // Get Tags All
        axios.get(`${baseUrl}`+`/api/v1/tag`)
          .then((response) => {
            this.setState({ tags: response.data.data });
          })
          .catch(function (error) {
            console.log(error);
          }) 
    }

    tagDelete = () => {
        axios.delete(`${baseUrl}`+`/api/v1/tag/${this.state.id}`)
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
                    <CButton to="/tag/create" className="float-right">+ New</CButton>
                </CCardHeader>
                <CCardBody>
                    <CDataTable
                    items={this.state.tags}
                    fields={this.fields}
                    tableFilter
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                    scopedSlots = {{
                        'action':
                            (item)=>(
                            <td>
                                <CButton to={`/tag/edit/${item.id}`} className="btn btn-secondary mr-2" size='sm'>
                                    Edit
                                </CButton>
                                <CButton onClick={ () => this.setState({ show: true, id: item.id })} className="btn btn-danger sm" size='sm'>
                                    Delete
                                </CButton>
                            </td>
                        )}}
                    />
                </CCardBody>
                <SweetAlert
                    show={this.state.show}
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    cancelBtnBsStyle="default"
                    title="Are you sure?"
                    onConfirm={this.tagDelete}
	                onCancel={this.hideAlert}
                />
            </CCard>
        );
    }
}
  export default Tag;