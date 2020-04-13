import React from 'react';
import {Link} from 'react-router-dom';

export default ({currentUser, logout})=> {
    // debugger
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
            <a className="gray-top-text" href="https://github.com/Shrewbitz/hoot/wiki">Go to the Hootz GitHub</a>
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
                <h1 className="hootz"><img src={window.hootz}/></h1>
                
                <form className="nav-search">
                    <div className="psuedo-rest">Find</div>
                    <input className="searchbar-rest" type="search"  placeholder="Restaurants"/>
                    <div className="searchborder"></div>
                    <div className="psuedo-loc">Near</div>
                    <input className="searchbar-loc"type="search"  placeholder="Location"/>
                    <button><i className="fas fa-search fa-lg"></i></button>
                </form>
            </div>
        </header>
        <div >
        <div className="m1-section">
            <div className="m1-title">Find the Best Restaurants in Town</div>
            <div className="m1-categories">
                <div className="m1-category">
                    <div className="m1-pic"><img className="m1-image" src={window.salad} /></div>
                    <div className="m1-label">Vegetarian</div>
                </div>
                
                <div className="m1-category">
                    <div className="m1-pic"><img className="m1-image" src={window.pasta} /></div>
                    <div className="m1-label">Noodles</div>
                </div>
                <div className="m1-category">
                    <div className="m1-pic"><img className="m1-image" src={window.burger} /></div>
                    <div className="m1-label">Burgers</div>
                </div>
                <div className="m1-category">
                    <div className="m1-pic"><img className="m1-image" src={window.pizza} /></div>
                    <div className="m1-label">Pizza</div>
                </div>
            </div> 

        </div>

        </div>
            
                {/* <Link className="link" to="/restaurants/1">  Ippudo NY </Link>
                <Link className="link" to="/restaurants/2">  Popeyes Louisiana Kitchen  </Link>
                <Link className="link" to="/restaurants/3">  DORADO Tacos {"&"} Quesadillas </Link>
                <Link className="link" to="/restaurants/4">  Joe's Pizza </Link>
                <Link className="link" to="/restaurants/5">  Taco Bell </Link>
                <Link className="link" to="/restaurants/6">  Blossom </Link> */}
            
        
        </>    
    );
};