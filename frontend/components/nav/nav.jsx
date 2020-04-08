import React from 'react';
import {Link} from 'react-router-dom';

export default ({currentUser, logout})=> {
    const display = currentUser ? (
        <div>
            <p>This should be way different</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div className="main-signup-login">
            <Link className="main-login" to="/login">Log In</Link>
            <Link className="main-signup" to="/signup">Sign Up</Link>
        </div>
    );

    return (
        <>
        <header className="nav-bar">
            <h1 className="hootz">hootz</h1>
            <div>
                {display}
            </div>
            <div className="diner-pic-container">
            <img  className="diner-pic" src={window.diner}/>
            </div>
        </header>
            <div className="empty-placeholder"></div>
        </>    
    );
};