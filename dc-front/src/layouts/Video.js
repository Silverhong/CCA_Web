import React from 'react';

class Video extends React.Component {

    render(){
        return(
            <>
            {/*============================== video-area-start ================================*/}
                <section className="video-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                        <div className="video-area-border-content">
                            <div className="col-md-6 col-sm-6">
                            <div className="video-area-content-detail">
                                <iframe width={100} height={320} src="https://www.youtube.com/embed/mZb_gat5YCY" allowFullScreen />
                            </div>
                            </div>
                            <div className="col-md-6 fix col-sm-6">
                            <div className="video-content-text">
                                <a href className="art">video</a>
                                <h4><a href="single-posts.html">Awesome video</a></h4>
                                <span className="art">12 jan, 2016</span>
                                <p>Lorem Ipsum is simply dummy text of the printing and typ setting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                                <div className="category-link"><a href="category.html">read more</a></div>
                                <div className="share-comment-section">
                                <div className="comment">
                                    <i className="fa fa-heart-o"><span>25</span></i>
                                    <i className="fa fa-comment-o"><span>19</span></i>
                                </div>
                                <div className="share">
                                    <span>share:</span>
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
                        <div className="col-md-4">
                        <div className="instagram-content">
                            <div className="row">
                            <div className="col-md-12"><div className="instagram-title"><h4>Instagram</h4></div></div>
                            </div>
                            <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div id="instafeed" />
                            </div>
                            </div>
                            <div className="row">
                            <div className="follow-me-section">
                                <div className="follow-me-title"><h4>follow me on</h4></div>
                                <div className="follow-me-social-link">
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
                    </div>
                </section>  
            </>
        );
    }
}

export default Video;