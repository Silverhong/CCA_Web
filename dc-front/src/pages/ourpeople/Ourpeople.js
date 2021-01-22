import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import DetailOurPeople from '../../layouts/DetailOurPeople';

class Ourpeople extends React.Component {
    render(){
        return(
            <div>
            <Header />
            <br/><br/>
                <DetailOurPeople />
            <Footer />
            </div>
        );
    }
}

export default Ourpeople;