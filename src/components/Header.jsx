import React from 'react';
import { NavLink } from 'react-router-dom';

import SummaryContainer from '../containers/SummaryContainer';
import Button from './Button';

function Header({ closeDesires }) {
    return (
        <header className="header">
            <img src="/img/hiking.png" alt="hiking" className="main-logo"/>

            <h3 className="title">Looking forward to...</h3>

            <SummaryContainer/>

            <NavLink to="/new-desire">
                <Button icon="plus" action={closeDesires}/>
            </NavLink>
        </header>
    )
}

export default Header