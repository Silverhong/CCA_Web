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

class User extends React.Component {

    constructor(props){
        super(props);
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href =`${window.origin}/#/login`;
        this.state = {
            id: this.props.match.params.id,
            users: [],
            show: false,
            messageAlert: ''
        }
    }

    fields = [
        { key: 'id', label: 'ID', _style: { width: '10%' } },
        { key: 'username', label: 'Username', _style: { width: '10%'} },
        { key: 'email', label: 'Email', _style: { width: '10%'} },
        // { key: 'role_id', label: 'Role', _style: { width: '10%'} },
        // { key: 'createdBy', label: 'Recorder', _style: { width: '10%'} },
        { key: 'createdAt', label: 'Record Date',  _style: { width: '20%'} },
        // { key: 'updatedBy', label: 'Modifier', _style: { width: '10%'} },
        { key: 'updatedAt', label: 'Modify Date', _style: { width: '20%'} },
        { key: 'action', _style: { width: '15%'} }
    ]

    componentDidMount() {
        // Get User All
        axios.get(`${ServiceApi}`+`/api/v1/user`)
          .then((response) => {
            this.setState({ users: response.data.data });
            console.log(this.state.users);
          })
          .catch(function (error) {
            console.log(error);
          }) 
    }

    userDelete = () => {
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
                {/* <CCardHeader>
                    <CButton to="/user/create" className="float-right">+ New</CButton>
                </CCardHeader> */}
                <CCardBody>
                     <CDataTable
                     items={this.state.users}
                     fields={this.fields}
                    //  tableFilter
                    //  itemsPerPageSelect
                    //  itemsPerPage={5}
                    //  hover
                     sorter
                    //  pagination
                     scopedSlots = {{
                        'action':
                          (item)=>(
                            <td>
                                <CButton to={`/user/edit/${item.id}`} className="btn btn-secondary mr-2" size='sm'>
                                   Edit
                                </CButton>
                                {/* <CButton onClick={ () => this.setState({ show: true, id: item.id })} className="btn btn-danger sm" size='sm'>
                                   Delete
                                </CButton> */}
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
                </CCardBody>
                <SweetAlert
                    show={this.state.show}
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    cancelBtnBsStyle="default"
                    title="Are you sure?"
                    onConfirm={this.userDelete}
	                onCancel={this.hideAlert}
                />
            </CCard>
        );
    }
}

export default User;