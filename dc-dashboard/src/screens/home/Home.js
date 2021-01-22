import React from 'react';
import axios from 'axios';
import ServiceApi from "../../Service";

class Home extends React.Component {

    constructor(props){
        super(props);
        const userId = localStorage.getItem('uuid');
        if(userId == '' || userId == undefined) window.location.href =`${window.origin}/#/login`;
        this.state = {
            userCount: 0,
            postCount: 0
        }
    }

    componentDidMount(){
        // Get Count User
        axios.get(`${ServiceApi}/api/v1/user/count/all`)
        .then((respone) => {
            this.setState({
                userCount: respone.data.data
            });
        })
        .catch( error => {
            console.log(error);
        })

        // Get Count Post
        axios.get(`${ServiceApi}/api/v1/post/count/all`)
        .then((respone) => {
            this.setState({
                postCount: respone.data.data
            });
        })
        .catch( error => {
            console.log(error);
        })
    }

    render(){
        return(
            <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="card text-white bg-gradient-primary">
                    <div className="card-body card-body pb-0 d-flex justify-content-between align-items-start">
                        <div>
                        <div className="text-value-lg">{this.state.postCount} post</div>
                        <div>Posts online</div>
                        </div>
                        <div className="btn-group">
                        <button className="btn btn-transparent p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg className="c-icon">
                            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-settings" />
                            </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a></div>
                        </div>
                    </div>
                    <div className="c-chart-wrapper mt-3 mx-3" style={{height: 70}}><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
                        <canvas className="chart chartjs-render-monitor" id="card-chart1" height={70} style={{display: 'block', width: 204, height: 70}} width={204} />
                    </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <div className="card text-white bg-gradient-info">
                        <div className="card-body card-body pb-0 d-flex justify-content-between align-items-start">
                            <div>
                                <div className="text-value-lg">{this.state.userCount} user</div>
                                <div>Users online</div>
                            </div>
                            <div className="btn-group">
                            <button className="btn btn-transparent p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg className="c-icon">
                                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-settings" />
                                </svg>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a></div>
                            </div>
                        </div>
                        <div className="c-chart-wrapper mt-3 mx-3" style={{height: 70}}><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
                            <canvas className="chart chartjs-render-monitor" id="card-chart2" height={70} width={204} style={{display: 'block', width: 204, height: 70}} />
                        </div>
                    </div>
                </div>
                </div> 
        );
    }
}

export default Home;