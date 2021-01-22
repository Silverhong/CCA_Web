import React from 'react';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import Moment from 'react-moment';
import ServiceApi from "../../Service";
import {
    CButton,
    CCardBody,
    CCardHeader,
    CDataTable,
    CCard
  } from '@coreui/react';

class Role extends React.Component {

    constructor(props){
        super(props)
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href =`${window.origin}/#/login`;
        this.state = {
            id: this.props.match.params.id,
            show: false,
            roles: []
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

    componentDidMount() {
        // Get Role Option
        axios.get(`${ServiceApi}`+`/api/v1/role`)
          .then((response) => {
            this.setState({ roles: response.data.data });
            console.log(this.state.users);
          })
          .catch(function (error) {
            console.log(error);
          }) 
    }

    roleDelete = () => {
        axios.delete(`${ServiceApi}`+`/api/v1/user/${this.state.id}`)
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
                    <CButton to="/role/create" className="float-right">+ New</CButton>
                </CCardHeader>
                <CCardBody>
                    <CDataTable
                    items={this.state.roles}
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
                                <CButton to={`/role/edit/${item.id}`} className="btn btn-secondary mr-2" size='sm'>
                                   Edit
                                </CButton>
                                <CButton onClick={ () => this.setState({ show: true, id: item.id })} className="btn btn-danger sm" size='sm'>
                                   Delete
                                </CButton>
                            </td>
                        ),
                        'createdAt':
                          (item)=>(
                            <td>
                                <Moment format="YYYY/MM/DD">{ item.createdAt }</Moment>
                            </td>
                        ),
                        'updatedAt':
                          (item)=>(
                            <td>
                                <Moment format="YYYY/MM/DD">{ item.updatedAt }</Moment>
                            </td>
                        )
                    }}
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
                    onConfirm={this.roleDelete}
	                onCancel={this.hideAlert}
                />
            </CCard>
        );
    }
}

export default Role;