import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            restaurants: []
        };
    };

    componentDidMount() {
        // debugger
        this.props.fetchRestaurants().then(restaurants => {
            this.setState({restaurants: restaurants.restaurants})
        });;
    }


    render() {
        const { restaurants} = this.state
        // debugger
        return (
            <div className="empty-placeholder">
                {
                    Object.values(restaurants).map((restaurant, idx) =>
                    (<Link key={idx} className="link" to={`/restaurants/${restaurant.id}`}> {restaurant.name} </Link>))
                }
            </div>
        )
    }
}


export default RestaurantIndex;