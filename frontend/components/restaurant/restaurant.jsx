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
            <div>restaurant show page yay</div>
            <div>{this.state.restaurant.name}</div>
        </div>
        )
    }
}

export default Restaurant;