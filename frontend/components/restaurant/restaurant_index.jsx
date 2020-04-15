import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // restaurants: []
        };
        // this.render = this.render.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)
    };





    componentDidMount() {
        // window.scrollTo(0, 0);
        // debugger
        // this.props.fetchRestaurants()
        // .then(restaurants => {
        //         this.setState({restaurants: restaurants.restaurants})
        //     });;
            // debugger
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.restaurants !== prevProps.props.restaurants ) {

    //     }
    // }



    render() {
        // debugger
        if (Object.keys(this.props.restaurants).length === 0) {
            return <div></div>
        }
        const restaurants = this.props.restaurants
        // this.state.restaurant.photos
        let x = Object.values(restaurants)
        // debugger
        return (
            <div className="empty-placeholder">
                {
                    Object.values(restaurants).map((restaurant, idx) =>
                    (<Link key={idx} className="link" to={`/restaurants/${restaurant.id}`}>
                        <div className="thumbnail-container">
                        <img className="thumbnail"  src={restaurant.photos[0]}/>
                        </div>
                        <div></div>
                        <div>{restaurant.name}</div>
                         
                    </Link>))
                }
            </div>
        )
    }
}


export default RestaurantIndex;