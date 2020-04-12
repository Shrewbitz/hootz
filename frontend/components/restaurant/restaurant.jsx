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
        window.scrollTo(0, 0);
        this.props.fetchRestaurant(this.props.match.params.restaurantId).then(restaurant => {
            this.setState({restaurant: restaurant.restaurant})
        });
    }



    render() {
        const claimed = this.state.restaurant.id ? <div className="r-claimed"><i className="fas fa-check-circle "></i><div className="r-claim-text">Claimed</div></div>  : ""

        const rating = this.state.restaurant.review_avg;

        const stars = ( (rating === 5) ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div> :
        (rating >= 4.5) ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></div> :
        (rating >= 4) ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></div> :
        (rating >= 3.5) ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i></div> :
        (rating >= 3) ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div> :
        (rating >= 2.5) ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i></div> :
        (rating >= 2) ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div> :
        (rating >= 1.5) ? <div><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div> :
        <div><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div> );

        

        


        return (
        <div>
            <div className="r-pic-container">
                <div className="r-pic">pic1</div>
                <div className="r-pic">pic2</div>
                <div className="r-pic">pic3</div>
                <div className="r-pic">pic4</div>
            </div>
            
            <div className="r-mid">
                <div className="r-main">
                    <div className="r-vertical">
                        <div className="r-info-container">
                            <div className="r-info">
                                <div className="r-name">{this.state.restaurant.name}</div>
                                <div className="r-dropdown">
                                    <div className="r-claim">{claimed}</div>
                                    <div className="claimClassTriangle">
                                        <div className="claimClass">
                                            This business has been claimed by the owner or a representative.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="r-info">
                                <div className="r-stars">{stars}</div>
                                <div className="r-review-count">{this.state.restaurant.review_count} reviews</div>
                            </div>
                            <div className="r-info">
                                <div className="r-cost">{this.state.restaurant.cost} </div>
                                <div className="r-tags"> tags go here</div>
                            </div>
                            <div className="r-info">
                                <div className="r-top-review"><i className="fas fa-star"></i> Write a Review</div>
                            </div>
                        </div>
                        <div className="r-breakline"></div>
                        <div className="r-section-label">Location {"&"} Hours</div>
                        <div className="r-location">{this.state.restaurant.address}</div>
                        <div className="r-breakline"></div>
                        <div className="r-section-label">About</div>
                        <div className="r-about">{this.state.restaurant.about}</div>
                        <div className="r-breakline"></div> 
                        <div className="r-section-label">Reviews</div>  
                        <div className="r-reviews"> The food was great!</div>
                        <div className="r-breakline"></div> 

                        
                    </div>
                    <div className="r-sticky-info">
                        <div  className="r-website">
                            <i class="fas fa-external-link-alt fa-lg"></i> 
                            <a href={this.state.restaurant.website} class="r-sticky-label">{this.state.restaurant.website}</a>
                        </div>
                        <div href="https://www.google.com/maps" className="r-directions">
                            <i class="fas fa-directions fa-lg"></i> 
                            <a href="https://www.google.com/maps"  class="r-sticky-label">Get Directions</a>
                        </div>
                    </div>
                    {/* <div className="claimClassTriangle">
                            <div className="claimClass">
                                hi
                            </div>
                        </div> */}
                </div>
            </div>


        </div>
        )
    }
}

export default Restaurant;