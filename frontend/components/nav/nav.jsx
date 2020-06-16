import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../search/search_container'
// import { searchRestaurants } from '../../util/restaurant_api_util';

class Nav extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        // };
        // debugger
        // this.currentUser = this.currentUser.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)
        this.findSalad = this.findSalad.bind(this)
        this.findNoodles = this.findNoodles.bind(this)
        this.findBurgers = this.findBurgers.bind(this)
        this.findPizza = this.findPizza.bind(this)
    };

    
   findSalad (e) {
    window.scrollTo(0, 0);
        e.preventDefault();
        // debugger
        this.props.searchRestaurants({search: "vegetarian"}).then (() => {
            // debugger
            this.props.history.push('/search')}) 
   }

   findNoodles (e) {
    window.scrollTo(0, 0);
        e.preventDefault();
        this.props.searchRestaurants({search: "noodles"}).then (() => {
            // debugger
            this.props.history.push('/search')}) 
    }

    findBurgers (e) {
        window.scrollTo(0, 0);
        e.preventDefault();
        this.props.searchRestaurants({search: "burgers"}).then (() => {
            // debugger
            this.props.history.push('/search')}) 
    }

    findPizza (e) {
        window.scrollTo(0, 0);
        e.preventDefault();
        this.props.searchRestaurants({search: "pizza"}).then (() => {
            // debugger
            this.props.history.push('/search')}) 
    }

    render() {
       const {currentUser, logout} = this.props  
        
        
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
                <a className="gray-top-text" target="blank" href="https://github.com/Shrewbitz/hoot/wiki">Go to the Hootz GitHub</a>
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
                    <SearchBar></SearchBar>
                    {/* <form className="nav-search">
                        <div className="psuedo-rest">Find</div>
                        <input className="searchbar-rest" type="search"  placeholder="Restaurants"/>
                        <div className="searchborder"></div>
                        <div className="psuedo-loc">Near</div>
                        <input className="searchbar-loc"type="search"  placeholder="Location"/>
                        <button><i className="fas fa-search fa-lg"></i></button>
                    </form> */}
                </div>
            </header>
            <div >
            <div className="m1-section">
                <div className="m1-title">Find the Best Restaurants in Town</div>
                <div className="m1-categories">
                    <div  className="m1-category">
                        <div className="m1-pic"><img className="m1-image" src={window.salad} onClick={this.findSalad}  /></div>
                        <div className="m1-label">Vegetarian</div>
                    </div>
                    
                    <div className="m1-category">
                        <div className="m1-pic"><img className="m1-image" src={window.pasta} onClick={this.findNoodles} /></div>
                        <div className="m1-label">Noodles</div>
                    </div>
                    <div className="m1-category">
                        <div className="m1-pic"><img className="m1-image" src={window.burger} onClick={this.findBurgers}  /></div>
                        <div className="m1-label">Burgers</div>
                    </div>
                    <div className="m1-category">
                        <div className="m1-pic"><img className="m1-image" src={window.pizza} onClick={this.findPizza}  /></div>
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
};

export default Nav;