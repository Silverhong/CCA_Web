import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import ServiceApi from '../Service';
import { Col, Row } from 'react-bootstrap';
import pageNotFound from '../components/pageNotFound';

class ProductPost extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            posts: [],
            popularPost: []
        }
    }

    componentDidMount(){
        // Get Post All
        axios.get(`${ServiceApi}/api/v1/post/pagination/${this.state.activePage}`).then( respone => {
            this.setState({ posts: respone.data.data });
            this.setState({totalItemsCount: respone.data.totalItems})
        }).catch( error =>  console.log(error))

        // Get Companies All
        axios.get(`${ServiceApi}/api/v1/post/limit`).then( respone => {
            this.setState({ popularPost: respone.data.data });
        }).catch( error =>  console.log(error))
    }

    render(){
        return(
            <div>
            {/*========================== categories-area-start ==========================*/}
            <section className="category-area">
                <div className="container-fluid">
                <br/>
                {
                    (this.state.popularPost.length != 0) ? <div className="row">
                    <div className="col-md-8">
                        {
                            this.state.posts.map( item => {
                                return <div className="category-detail category-border-content section-padding">
                                    <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                    <div className="category-img">
                                        <img className="img-fluid" width="338px" height="245px" src={`${ServiceApi}/uploads/${item.thumbnail}`} alt />
                                        <div className="category-overlay"></div>
                                    </div>
                                    </div>
                                    <div className="col-md-8 fix col-sm-6">
                                        <div className="video-content-text">
                                        <h5><a href={`/detail/${item.id}`}>{item.title}</a></h5>
                                        </div>

                                        <div className="video-content-text">
                                        <span class="art">{item.description}</span>
                                        <br/><br/>
                                        <p className="art">
                                            <i class="fa fa-calendar" aria-hidden="true"></i> Date: <Moment format="YYYY/MMM/DD">{ item.createdAt }</Moment>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <i class="fa fa-clock-o" aria-hidden="true"></i> Time: <Moment format="hh:mm:ss A">{ item.createdAt }</Moment>
                                        </p>
                                        </div>

                                        <div className="category-link"><a type="bottom" href={`/detail/${item.id}`}>View Detail</a></div>
                                    </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="col-md-4">
                    <div className="sidebar-widget">
                        <div className="row">
                            <div className="col-md-12 col-sm-12"></div>
                        </div>
                    </div>
                        <div className="sidebar-widget">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <div className="popular-post-border-content">
                                    <div className="popular-post-content">
                                        <div className="popular-post-title">
                                        <h5>New posts</h5>
                                        </div>
                                        {
                                            this.state.popularPost.map( item => {
                                                return <div className="category-detail popular-post-single top">
                                                        <div className="popular-post-single-img">
                                                            <a href={`${ServiceApi}/uploads/${item.thumbnail}`}>
                                                            <img className="img-fluid" width="89px" height="89px" src={`${ServiceApi}/uploads/${item.thumbnail}`} alt />
                                                            </a>
                                                        </div>
                                                        <div className="popular-post-single-text">
                                                        <p className="art">
                                                            <i class="fa fa-calendar" aria-hidden="true"></i> Date: <Moment format="YYYY/MMM/DD">{ item.createdAt }</Moment>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                            <i class="fa fa-clock-o" aria-hidden="true"></i> Time: <Moment format="hh:mm:ss A">{ item.createdAt }</Moment>
                                                        </p>
                                                            <br/><br/>
                                                            <a href={`/detail/${item.id}`}><h6>{item.title}</h6></a>
                                                        </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : <div className="App">
                            {/* <img style={{marginTop: "20%"}} src="/assets/img/pageNotFound/pageNotFound.png" alt /> */}
                        </div>
                }
                </div>
            </section>
            </div>
        )
    }
}

export default ProductPost;