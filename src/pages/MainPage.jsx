import React  from 'react';

import HeaderContainer from '../containers/HeaderContainer';
import DesireListContainer from '../containers/DesireListContainer';
import Footer from '../components/Footer';


function MainPage() {
    return (
        <main className="main-page">
            <HeaderContainer/>
            <DesireListContainer/>
            <Footer/>
        </main>
    )
}

export default MainPage