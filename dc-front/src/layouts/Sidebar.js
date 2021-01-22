import React from 'react';

class Sidebar extends React.Component {

    constructor(){
        super();
    }

    render(){
        return(
            <>
            ============================== slider-area-start ================================
            <section className="slider-area">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div id="carousel-example-generic" className="carousel slide carousel-fade" data-ride="carousel">
                        {/* Wrapper for slides */}
                        <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <div className="slider-content">
                            <div className="col-md-5 col-md-offset-6 col-sm-8 col-sm-offset-2 col-xs-12">
                                <div className="slide-text-border-content">
                                <div className="slide-text">
                                    <h2>ព្រះរាជាណាចក្រកម្ពុជាជាតិ សាសនា​ ព្រះមហាក្សត្រ</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua</p>
                                    <a href="category.html">read more</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-content-2">
                            <div className="col-md-5 col-md-offset-6 col-sm-8 col-sm-offset-2 col-xs-12">
                                <div className="slide-text-border-content">
                                <div className="slide-text">
                                    <h2>Welcome To My Blog!</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua</p>
                                    <a href="single-posts.html">read more</a>
                                </div>
                                </div>
                            </div>
                            </div> 
                        </div>
                        </div>
                        {/* Controls */}
                        <a className="left slide-control" href="#carousel-example-generic" role="button" data-slide="prev"><i className="fa fa-angle-right" />
                        </a>
                        <a className="right slide-control" href="#carousel-example-generic" role="button" data-slide="next"><i className="fa fa-angle-left" />
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*============================== about-area-start ================================*/}
            <section className="about-area">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="about-area-all-content">
                        <div className="about-area-content">
                        <div className="about-photo-content">
                            <img src="assets/img/post/25-09-2015Admin26_1" alt />
                        </div>
                        <div className="about-text-content">
                            <h4><a href="about-me.html">WELCOME TO CCA Cosmetics Of Consultant Association!</a></h4>
                            <p>
                            សមាគមអ្នកប្រឹក្សាយោបលគ្រឿងសម្អាងមានគោលបំពណងដូចខាងក្រោម៖

                        -ចូលរួមសហការជាមួយអជ្ញាធរ  ស្ថាប័នពាក់ព័ន្ធ លើកកម្ពស់ និងទប់ស្កាត់គ្រឿងសម្អាងក្លែងក្លាយដែលកំពុងបំផ្លាញសុខភាពអ្នកប្រើប្រាស។

                        -គាំទ្រដល់ផលិតផល ដែលនាំចូលដោយមានការចុះបញ្ជីត្រឹមត្រូវ និងទទួលស្គាល់ដោយមន្ទីពាក់ព័ន្ធរបស់កម្ពុជា។

                        -រកទីផ្សា កន្លែងតាំងពិព័រណ៌ និងបង្កើតទីផ្សារ សម្រាប់ដាក់តាំងលក់ផលិតផលគ្រឿងសម្អាងក្នុងស្រុក និងក្រៅស្រុក។

                        -ជួយគាំពារ និងលើកកម្ពស់ដល់អាជីវករដែលជាម្ចាស់ផលិតផលគ្រឿងសម្អាងក្មុងស្រុកឲ្យមានការទទួលស្គាល់ជាផ្លូវការពីក្រស្ថាប័នពាក់ព័ន្ធ ដែលជាសក្ដានុពល ឆ្ពោះទៅរកការប្រកួតប្រជែងផលិតផលិតផលគ្រឿងសម្អាងកម្ពុជានៅលើទីផ្សា។
                            </p>
                            <div className="social-link-about">
                            <a href><i className="fa fa-facebook" /></a>
                            <a href><i className="fa fa-twitter" /></a>
                            <a href><i className="fa fa-pinterest" /></a>
                            <a href><i className="fa fa-instagram" /></a>
                            <a href><i className="fa fa-google-plus" /></a>
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

export default Sidebar;