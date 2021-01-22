import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import Moment from 'react-moment';
import ServiceApi from '../../Service';

class Detail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            postDetail: [],
            popularPost: []
        }
    }

    componentDidMount(){
        // Get Post All 
        axios.get(`${ServiceApi}/api/v1/post/${this.state.id}`).then( respone => {
            this.setState({ postDetail: respone.data.data });
        }).catch( error =>  console.log(error))

        // Get Popular Post
        axios.get(`${ServiceApi}/api/v1/post/limit`).then( respone => {
            this.setState({ popularPost: respone.data.data });
        }).catch( error =>  console.log(error))
    }

    render(){
        return(
            <>
            <Header />
            {/*============================== categories-area-start ================================*/}
            <br/><br/>
            <section className="categories-area">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 col-sm-12 col-xs-12">
                    {
                        this.state.postDetail.map(item => {
                            return <div className="category-border-content">
                            <div className="category-detail category">
                                <div className="category-img">
                                    <img className="img-product-detail" width="50%" height="auto" src={`${ServiceApi}/uploads/${item.thumbnail}`} alt />
                                </div>
                                <div className="category-text">
                                    <h4><a href={`/detail/${item.id}`}>{ item.title }</a></h4>
                                    <span style={ { color: "orange" } }>ID: {item.barcode}</span>&nbsp;&nbsp;&nbsp;
                                    <p className="art">
                                        <i class="fa fa-calendar" aria-hidden="true"></i> Date: <Moment format="YYYY/MMM/DD">{ item.createdAt }</Moment>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <i class="fa fa-clock-o" aria-hidden="true"></i> Time: <Moment format="hh:mm:ss A">{ item.createdAt }</Moment>
                                    </p>
                                    
                                    <hr/>
                                    <h5><a href="#">Description</a></h5>
                                    <div className="quote"><p><p>{item.description}</p></p></div>
                                    <p className="category-text-content"><div dangerouslySetInnerHTML={{__html: item.body }}></div></p>
                                    <div className="read-more-more clearfix"></div>
                                </div>
                            </div>
                        </div>
                        })
                    }
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                    <div className="sidebar-widget">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
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
                </div>
                </div>
            </section>
            <br/><br/>
            <br/><br/>
            <Footer />
            </>
        );
    }
}

export default Detail;