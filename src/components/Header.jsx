import React from 'react';
import { NavLink } from 'react-router-dom';

import Summary from './Summary';
import Button from './Button';

function Header({ desires }) {
    return (
        <header className="header">
            <img src="/img/Hiking.png" alt="hiking" className="main-logo"/>

            <h3 className="title">Looking forward to...</h3>

            <Summary desires={desires}/>

            <NavLink to="/new-desire">
                <Button icon="plus"/>
            </NavLink>
        </header>
    )
}

export default Header