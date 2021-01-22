import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import ServiceApi from "../../Service";
import {
    CButton,
    CCard,
    CCardBody,
    CDataTable
  } from '@coreui/react';

class Company extends React.Component {

    constructor(props){
        super(props);
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href =`${window.origin}/#/login`;
        this.state = {
            companies: []
        }
    }

    fields = [
        { key: 'id', label: 'ID', _style: { width: '10%' } },
        { key: 'name', label: 'Name', _style: { width: '20%'} },
        { key: 'logo', label: 'Logo', _style: { width: '20%'} },
        { key: 'phone', label: 'Phone', _style: { width: '10%'} },
        { key: 'email', label: 'Email', _style: { width: '10%'} },
        // { key: 'createdBy', label: 'Recorder', _style: { width: '10%'} },
        { key: 'createdAt', label: 'Record Date',  _style: { width: '5%'} },
        // { key: 'updatedBy', label: 'Modifier', _style: { width: '10%'} },
        { key: 'updatedAt', label: 'Modify Date', _style: { width: '5%'} },
        { key: 'action', _style: { width: '15%'} }
    ]

    componentDidMount(){
        axios.get(`${ServiceApi}`+`/api/v1/company/1`)
          .then((response) => {
            this.setState({ companies: response.data.data });
            console.log(this.state.companies);
          })
          .catch(function (error) {
            console.log(error);
        }) 
    }

    render(){
        return(
            <CCard>
                <CCardBody>
                     <CDataTable
                     items={this.state.companies}
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
                                <CButton to={`/company/edit/${item.id}`} className="btn btn-secondary mr-2" size='sm'>
                                   Edit
                                </CButton>
                            </td>
                        ),
                        'logo':
                          (item)=>(
                            <td>
                                <a href={`${ServiceApi}/uploads/${item.logo}`}><img className="img-fluid rounded" width="100%" height="100%" src={`${ServiceApi}/uploads/${item.logo}`} /></a>
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
            </CCard>
        );
    }
}

export default Company;