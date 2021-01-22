import React from 'react';
import axios from 'axios';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CDataTable
  } from '@coreui/react';

  const baseUrl = 'http://localhost:81';

class Category extends React.Component {

    constructor(props){
        super(props);
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href ="http://localhost:3000/#/login";
        this.state = {
            menus: []
        }
    }

    fields = [
        { key: 'id', label: 'ID', _style: { width: '10%' } },
        { key: 'name', label: 'Name', _style: { width: '10%'} },
        { key: 'description', label: 'Description', _style: { width: '10%'} },
        { key: 'createdBy', label: 'Recorder', _style: { width: '10%'} },
        { key: 'createdAt', label: 'Record Date',  _style: { width: '5%'} },
        { key: 'updatedBy', label: 'Modifier', _style: { width: '10%'} },
        { key: 'updatedAt', label: 'Modify Date', _style: { width: '5%'} },
        { key: 'action', _style: { width: '10%'} }
    ]

    componentDidMount(){
        axios.get(`${baseUrl}`+`/api/v1/menu/1`)
          .then((response) => {
            this.setState({ menus: response.data.data });
            console.log(this.state.menus);
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
                     items={this.state.menus}
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
                                <CButton to={`/menu/edit/${item.id}`} className="btn btn-secondary mr-2" size='sm'>
                                   Edit
                                </CButton>
                            </td>
                        )}}
                     >
                     </CDataTable>
                </CCardBody>
            </CCard>
        );
    }
}

export default Category;