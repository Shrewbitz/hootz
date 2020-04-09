import React from 'react';
import {Link} from 'react-router-dom';

export default ({currentUser, logout})=> {
    const display = currentUser ? (
        <div>
            {/* <p>This should be way different</p> */}
            <button className="main-login" onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div className="main-signup-login">
            <Link className="main-login" to="/login">Log In</Link>
            <Link className="main-signup" to="/signup">Sign Up</Link>
        </div>
    );

    return (
        <>
        <div className="gray-top">
            <i className="fas fa-suitcase fa-xs"></i>
            <a className="gray-top-text" href="https://github.com/Shrewbitz/hoot/wiki">Go to the hootz GitHub</a>
        </div>
        <header className="nav-bar">
            <div className="nav-top">
                <div className="nav-bar-upper">
                    <div className="nav-buffer">
                        <div className="nav-bar-upleft">
                            Write a review
                        </div>
                    </div>
                    <div className="nav-bar-upright">
                        {display}
                    </div>
                </div>
            </div>
            <div className="nav-bottom">
                <h1 className="hootz">hootz</h1>
                <form className="nav-search">
                    <div className="psuedo-rest">Find</div>
                    <input className="searchbar-rest" type="search"  placeholder="Restaurants"/>
                    <div className="searchborder"></div>
                    <div className="psuedo-loc">Near</div>
                    <input className="searchbar-loc"type="search"  placeholder="location"/>
                    <button><i className="fas fa-search fa-lg"></i></button>
                </form>
            </div>
        </header>
            <div className="empty-placeholder"></div>
        </>    
    );
};