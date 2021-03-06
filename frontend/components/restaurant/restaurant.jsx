import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndex from '../review/review_index_container'
import WriteReview from '../review/write_review_container'
import Map from '../map/map'

class Restaurant extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurant: {photos: [], tags: []}
        };
    };

    componentDidMount() {
        // debugger
        window.scrollTo(0, 0);
        this.props.fetchRestaurant(this.props.match.params.restaurantId).then(restaurant => {
            this.setState({restaurant: restaurant.restaurant})
        });
        document.getElementById("restaurant-head") ? document.getElementById("restaurant-head").style.position = "relative" : 0
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

        

        // const pic1 = this.state.restaurant.photoURL[0]
        // const pic2 = this.state.restaurant.photoURL[1]
        // const pic3 = this.state.restaurant.photoURL[2]
        // const pic4 = this.state.restaurant.photoURL[3]

        const length = this.state.restaurant.tags.length - 1
        const invisible = length === 0 ? "invisible" : ""
        // debugger
        return (
        <div>
            <div className="r-pic-container">
            {this.state.restaurant.photos.map((photo, idx) => {
                return (<div key={idx} className="r-pic"><img  className="r-inside" src={photo}/></div>);
            })}
                {/* <div className="r-pic">
                    <img className="r-inside" src={this.state.restaurant.photos[0]}/>
                </div>
                <div className="r-pic">
                    <img className="r-inside" src={this.state.restaurant.photoURL}/>
                </div>
                <div className="r-pic">
                    <img className="r-inside" src={this.state.restaurant.photoURL}/>
                </div>
                <div className="r-pic">
                    <img className="r-inside" src={this.state.restaurant.photoURL}/>
                </div> */}
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
                                <div className="r-review-count">{this.state.restaurant.review_count} Reviews</div>
                            </div>
                            <div className="r-info">
                                <div className="r-cost">{this.state.restaurant.cost} </div>
                                <div className="r-tags"> 
                                    {this.state.restaurant.tags.slice(length - 1, length).map((tag, idx) => {
                                        return (<div className={invisible} key={idx} >{tag.tag},&nbsp; </div>);
                                    })}
                                    {this.state.restaurant.tags.slice(length).map((tag, idx) => {
                                        return (<div key={idx} >{tag.tag} </div>);
                                    })}
                                </div>
                            </div>
                            <div className="r-info">
                                    <Link className="r-top-review" to={`/restaurant/${this.state.restaurant.id}/reviews/create`}>
                                        <i className="fas fa-star"></i> Write a Review
                                    </Link>
                            </div>
                        </div>
                        <div className="r-breakline"></div>
                        <div className="r-section-label">Location {"&"} Hours</div>
                        <div className="rlh">

                            <div>
                                <Map coords={this.state.restaurant.coordinates} type="restaurant"></Map>
                                <div className="r-location-wrapper">
                                    <div className="r-location">{this.state.restaurant.address}</div>
                                    <a target="blank" href={"https://www.google.com/maps/search/"+this.state.restaurant.name+" "+this.state.restaurant.address}  className="r-sticky-label">Get directions</a>
                                </div>
                            </div>
                            <div className="r-hours">
                                <div className="r-bold" > Mon  </div>
                                <div className="r-bold"> Tue </div>
                                <div className="r-bold"> Wed </div>
                                <div className="r-bold"> Thu </div>
                                <div className="r-bold"> Fri </div>
                                <div className="r-bold"> Sat </div>
                                 <div className="r-bold"> Sun </div>
                            </div>
                            <div className="r-hours">
                                <div> 7:00 pm - 10:00 pm </div>
                                <div> 7:00 pm - 10:00 pm </div>
                                <div> 7:00 pm - 10:00 pm</div>
                                <div> 7:00 pm - 10:00 pm</div>
                                <div> 7:00 pm - 11:00 pm</div>
                                <div> 9:00 pm - 11:00 pm </div>
                                <div> Closed </div>
                            </div>
                        </div>

                        <div className="r-breakline"></div>
                        <div className="r-section-label">About</div>
                        <div className="r-about">{this.state.restaurant.about}</div>
                        <div className="r-breakline"></div> 
                        <div className="r-section-label">Reviews</div>  
                        <div className="r-reviews"> </div>
                        <div className="r-breakline"></div> 
                                {/* <ReviewIndex wildcard={this.props.match.params.restaurantId}></ReviewIndex> */}
                                <ReviewIndex wildcard={this.state.restaurant.id}></ReviewIndex>
                        
                    </div>
                    <div className="r-sticky-info">
                        <div  className="r-website">
                            <i className="fas fa-external-link-alt fa-lg"></i> 
                            <a target="blank" href={this.state.restaurant.website} className="r-sticky-label">{this.state.restaurant.website}</a>
                        </div>
                        <div  className="r-phone">
                            <i className="fas fa-phone-alt fa-lg"></i>
                            <a className="r-sticky-label-phone">{this.state.restaurant.phone}</a>
                        </div>
                        <div className="r-directions">
                            <i className="fas fa-directions fa-lg"></i> 
                            <a target="blank" href={"https://www.google.com/maps/search/"+this.state.restaurant.name+" "+this.state.restaurant.address}  className="r-sticky-label">Get Directions</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src={this.state.restaurant.photoURL}/> */}

            {/* <div><WriteReview></WriteReview></div> */}
        </div>
        )
    }
}

export default Restaurant;