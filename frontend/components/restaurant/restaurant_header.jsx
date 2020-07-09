import React from 'react';
import {Link} from 'react-router-dom';
import SearchPageBar from '../search/searchpage_container'

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

    // searchAll () {
    //     window.scrollTo(0, 0);
    //     this.props.searchRestaurants({search1: "shrewbitz", search2: ""}).then (() => {
    //         this.props.history.push('/search')}) 
    // }
    

    return (
        <div>
        {/* <div>{this.state.restaurant.name}</div> */}

        <div id="restaurant-head" className="restaurant-head-container">
            <div className="restaurant-top-container">
                <div className="restaurant-left-margin">
                    <Link className="restaurant-logo-container" to="/"><img className="restaurant-logo" src={window.hootz}/></Link>
                </div>
                <div className="restaurant-mid-head-container">
                    <div className="restaurant-search">
                        <SearchPageBar></SearchPageBar>
                            {/* <form className="restaurant-nav-search">
                                <input className="restaurant-searchbar-rest" type="search"  placeholder="Restaurants"/>
                                <div className="restaurant-searchborder"></div>
                                <input className="restaurant-searchbar-loc"type="search"  placeholder="Location"/>
                                <button><i className="fas fa-search fa-lg"></i></button>
                            </form> */}
                    </div>
                </div>
                    <div className="restaurant-right-container">
                        {/* <div onClick={thisearchAll} className="restaurant-top-link">Write a Review</div> */}
                        <div className="restaurant-signup-login">{display}</div>
                    </div>
            </div>
        </div>

    </div>
    );
};