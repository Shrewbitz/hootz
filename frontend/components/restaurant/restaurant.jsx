import React from 'react';
import { Link } from 'react-router-dom';

class Restaurant extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurant: ""
        };
    };

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId).then(restaurant => {
            this.setState({restaurant: restaurant.restaurant})
        });
    }



    render() {


        return (
        <div>
            <div>{this.state.restaurant.name}</div>
{/* 
            <div className="restaurant-head-container">
                <div className="restaurant-top-container">
                    <div className="restaurant-logo-container"><img className="hootz-pic" src={window.hootz2}/></div>
                    <div className="restaurant-mid-head-container">
                        <div className="restaurant-search">
                            <form className="nav-search">
                                <input className="searchbar-rest" type="search"  placeholder="Restaurants"/>
                                <div className="searchborder"></div>
                                <input className="searchbar-loc"type="search"  placeholder="location"/>
                                <button><i className="fas fa-search fa-lg"></i></button>
                            </form>
                        </div>
                        <div className="restaurant-top-link">Write a Review</div>
                        <div>logout /sign in</div>
                    </div>
                </div>
                <div className="dropdowns">restaurant auto services more</div>
            </div> */}

        </div>
        )
    }
}

export default Restaurant;