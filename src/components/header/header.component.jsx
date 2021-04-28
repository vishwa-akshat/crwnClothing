import React from 'react'
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utilis';
import { ReactComponent as Logo } from '../../assets/crown.svg'

import { connect } from 'react-redux';

import './header.styles.scss';

function Header({currentUser}) {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>

            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>
                {
                    currentUser ?
                    <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                    : <Link className="option" to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
};

const mapStatetoProps = state =>({
    currentUser: state.user.currentUser
});

export default connect(mapStatetoProps)(Header)