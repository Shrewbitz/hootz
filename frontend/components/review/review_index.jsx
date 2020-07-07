import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndex extends React.Component {

    constructor(props) {
        super(props)
        // debugger
        this.state = {
            stars: []

            // restaurants: []
        };
        this.deleteReview = this.deleteReview.bind(this)
        // this.render = this.render.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)
    };


    componentDidMount() {
        window.scrollTo(0, 0);
        // this.props.fetchReviews(10)
        this.props.fetchReviews((this.props.wildcard))
        // debugger
        // .then(restaurants => {
        //         this.setState({restaurants: restaurants.restaurants})
        //     });;
    }


    componentDidUpdate(prevProps) {
        window.scrollTo(0, 0);
        // debugger
        if (Object.keys(prevProps.restaurants).length > 0) {
            if (Object.keys(this.props.reviews).length === 0) {
                // this.props.fetchReviews(10)
                this.props.fetchReviews((this.props.wildcard))
            }
        }
        // }
        // .then(restaurants => {
        //         this.setState({restaurants: restaurants.restaurants})
        //     });;
            // debugger
    }

    deleteReview(e) {
        let review = {id: Number(e.currentTarget.getAttribute('value')), restaurant_id: this.props.wildcard}
        this.props.deleteReview(review);
    }



    render() {
        // debugger
        // if (Object.keys(this.props.reviews).length === 0) {
        if (this.props.reviews === undefined) {
            return <div>test</div>
        }
        
        const reviews = this.props.reviews


        Object.values(reviews).map((review) => {
            let rating = review.score 
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

        
        // debugger

        // debugger
        return (
            <div className="empty-placeholder">
                {
                    Object.values(reviews).map((review, idx) =>
                    (<div key={idx} className="rev-box">
                        <div className="user-box">
                            {/* {review.user ? <div></div> : window.location.reload()} */}
                            {/* not a real fix */}
                        <div className="user-name">{review.user.first_name} {review.user.last_name.slice(0,1)}.</div>
                        <div className="user-info" ><div className="user-redstar"><i className="fas fa-star"></i></div> <strong>&nbsp;{review.review_count}&nbsp;</strong> reviews</div>
                        </div>
                        <div className="feedback-box">
                            <div className="feedback-top">
                                <div className="user-redstar2">{this.state.stars.shift()}</div>
                                <div className="user-date">{review.date}</div>
                           { review.user_id === this.props.user ?
                           <div className="delete-review" value={review.id} onClick={this.deleteReview}><i className="fa fa-close"></i></div> :
                           <div></div> 
                            }
                            </div>
                            <div>
                                {review.body}
                            </div>
                        </div>
                         
                    </div>))
                }
            </div>
        )
    }
}


export default ReviewIndex;