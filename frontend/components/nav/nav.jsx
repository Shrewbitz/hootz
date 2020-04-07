import React from 'react';
import {Link} from 'react-router-dom';

export default ({currentUser, logout})=> {
    const display = currentUser ? (
        <div>
            <p>hello {currentUser.first_name}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link className="but" to="/signup">Sign Up</Link>
            <Link className="but" to="/login">Log In</Link>
        </div>
    );

    return (
        <header className="nav-bar">
            <h1 className="logo">hootz</h1>
            <div>
                {display}
            </div>
        </header>
    );
};