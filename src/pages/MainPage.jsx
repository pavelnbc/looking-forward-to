import React  from 'react';

import Header from '../components/Header';
import DesireListContainer from '../containers/DesireListContainer';
import Footer from '../components/Footer';


function MainPage() {
    return (
        <main className="main-page">
            <Header/>
            <DesireListContainer/>
            <Footer/>
        </main>
    )
}

export default MainPage