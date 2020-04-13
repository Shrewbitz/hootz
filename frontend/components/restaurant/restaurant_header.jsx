import React from 'react';
import {Link} from 'react-router-dom';

export default ({currentUser, logout})=> {
    const display = currentUser ? (
        <div >
            {/* <p>This should be way different</p> */}
            <button className="restaurant-logout" onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link className="restaurant-login" to="/login">Log In</Link>
            <Link className="restaurant-signup" to="/signup">Sign Up</Link>
        </div>
    );

    return (
        <div>
        {/* <div>{this.state.restaurant.name}</div> */}

        <div className="restaurant-head-container">
            <div className="restaurant-top-container">
                <div className="restaurant-left-margin">
                    <Link className="restaurant-logo-container" to="/"><img className="restaurant-logo" src={window.hootz}/></Link>
                </div>
                <div className="restaurant-mid-head-container">
                    <div className="restaurant-search">
                            <form className="restaurant-nav-search">
                                <input className="restaurant-searchbar-rest" type="search"  placeholder="Restaurants"/>
                                <div className="restaurant-searchborder"></div>
                                {/* <div className="searchborder"></div> */}
                                <input className="restaurant-searchbar-loc"type="search"  placeholder="Location"/>
                                <button><i className="fas fa-search fa-lg"></i></button>
                            </form>
                    </div>
                </div>
                    <div className="restaurant-right-container">
                        <div className="restaurant-top-link">Write a Review</div>
                        <div className="restaurant-signup-login">{display}</div>
                    </div>
            </div>
        </div>

    </div>
    );
};