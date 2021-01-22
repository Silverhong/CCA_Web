import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';

const baseUrl = 'http://localhost:81';

class Popular extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        // Get Post All 
        axios.get(`${baseUrl}/api/v1/post`).then( respone => {
            this.setState({ posts: respone.data.data });
        }).catch( error =>  console.log(error))
    }

    render(){
        return(
            <>
            {/*============================== feature-post-area-start ================================*/}
            <section className="feature-post-area">
                <div className="container">
                <div className="row">
                {
                    this.state.posts.map( item => {
                        return <div className="col-md-4 col-sm-6">
                            <div className="category-border-content">
                                <div className="category-detail">
                                <div className="category-img">
                                    <img src={`http://localhost:81/uploads/${item.thumbnail}`} alt />
                                    <div className="category-overlay">
                                    </div>
                                </div>
                                <div className="category-text">
                                    {/* Title */}
                                    <h4><a href="category.html">{ item.title }</a></h4>
                                    <span className="art"><i class="fa fa-calendar" aria-hidden="true"></i> Date: <Moment format="YYYY/MM/DD">{ item.createdAt }</Moment></span>
                                    {/* Description */}
                                    <p>{ item.description }</p>
                                    <div className="category-link"><a href={`/index/detail/${item.id}`}>read more</a></div>
                                    <div className="share-comment-section">
                                    {/* <div className="comment">
                                        <i className="fa fa-heart-o"><span>25</span></i>
                                        <i className="fa fa-comment-o"><span>19</span></i>
                                    </div> */}
                                    <div className="share">
                                        <span>share: </span>
                                        <a href><i className="fa fa-facebook" /></a>
                                        <a href><i className="fa fa-twitter" /></a>
                                        <a href><i className="fa fa-pinterest" /></a>
                                        <a href><i className="fa fa-instagram" /></a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    })
                } 
                </div>
                </div>
            </section>
            </>
        );
    }
}

export default Popular;