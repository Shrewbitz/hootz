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





    // handleInput(type) {
    //     return(e) => {
    //         this.setState({[type]: e.target.value})
    //     };
    // };

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.login(this.state)
    //     .then(() => this.props.history.push('/'), dberrors => { 
    //         this.setState({errors: dberrors.errors});
    //     });
    // };






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