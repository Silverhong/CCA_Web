import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import ProductPost from '../../layouts/ProductPost';

class Home extends React.Component {
    render(){
        return(
            <>
            <Header />
            <br/><br/>
            <br/><br/>
            <ProductPost />
            <br/><br/><br/>
            <Footer />
            </>
        );
    }
}

export default Home;