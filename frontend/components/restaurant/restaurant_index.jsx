import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stars: [],
            about: []
            // restaurants: []
        };
        // this.render = this.render.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)
    };

    

    render() {
        // debugger
        if (Object.keys(this.props.restaurants).length === 0) {
            return <div></div>
        }
        const restaurants = this.props.restaurants

        // debugger
        Object.values(restaurants).map((restaurant) => {
            let rating = restaurant.review_avg 
            let score = ( (rating === 5) ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div> :
            (rating >= 4.5) ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></div> :
            (rating >= 4) ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></div> :
            (rating >= 3.5) ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i></div> :
            (rating >= 3) ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div> :
            (rating >= 2.5) ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i></div> :
            (rating >= 2) ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div> :
            (rating >= 1.5) ? <div><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div> :
            <div><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div> );
            this.state.stars.push(score)
        })

        Object.values(restaurants).reverse().map((restaurant) => {
            let about = restaurant.about
            if (about === "none") {
                this.state.about.push("")
            } else if (about.length < 350) {
                this.state.about.push(about)
            } else {
                this.state.about.push('"'+about.slice(0,350)+"..."+'"')
            }
        })
        // this.state.restaurant.photos
        // debugger
        return (
            <div className="ri-container">
                {
                    Object.values(restaurants).map((restaurant, idx) =>
                    (<Link key={idx} className="link" to={`/restaurant/${restaurant.id}`}>
                        <div className="thumbnail-container">
                            <img className="thumbnail"  src={restaurant.photos[0]}/>
                        </div>
                        <div>
                            <div className="ri-top">
                                <div className="ri-top-container">
                                    <div>{restaurant.name}</div>
                                    <div className="ri-line1">
                                        <div className="ri-stars"> {this.state.stars.shift()}</div>
                                        <div className="ri-count" >{restaurant.review_count}</div>
                                    </div>
                                </div>
                                <div className="ri-top-right">
                                    <div>{restaurant.phone}</div>
                                    <div>{restaurant.address}</div>
                                </div>
                            </div>
                            
                            <div className="ri-line2">
                                <div>{restaurant.cost}</div>
                                <div className="ri-tags"> 
                                        {restaurant.tags.slice(restaurant.tags.length - 2, restaurant.tags.length - 1).map((tag, idx) => {
                                            return (<div  key={idx} >{tag.tag},&nbsp; </div>);
                                        })}
                                        {restaurant.tags.slice(restaurant.tags.length - 1).map((tag, idx) => {
                                            return (<div key={idx} >{tag.tag} </div>);
                                        })}
                                </div>
                            </div>
                            <div className="ri-about" >{this.state.about.pop()}</div>
                            
                        </div>
                         
                    </Link>))
                }
            </div>
        )
    }
}


export default RestaurantIndex;