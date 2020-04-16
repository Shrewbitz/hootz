import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndex extends React.Component {

    constructor(props) {
        super(props)
        // debugger
        this.state = {

            // restaurants: []
        };
        // this.render = this.render.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)
    };


    componentDidMount() {
        // window.scrollTo(0, 0);
        // debugger
        // this.props.fetchReviews(10)
        this.props.fetchReviews((this.props.wildcard))
        // .then(restaurants => {
        //         this.setState({restaurants: restaurants.restaurants})
        //     });;
    }


    componentDidUpdate(prevProps) {
        // window.scrollTo(0, 0);
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

    // componentDidUpdate(prevProps) {
    //     if (this.props.restaurants !== prevProps.props.restaurants ) {

    //     }
    // }


    render() {
        // debugger
        // if (Object.keys(this.props.reviews).length === 0) {
        if (this.props.reviews === undefined) {
            return <div>test</div>
        }
        // debugger
        const reviews = this.props.reviews
        // this.state.restaurant.photos
        let x = Object.values(reviews)
        // debugger
        return (
            <div className="empty-placeholder">
                {
                    Object.values(reviews).map((review, idx) =>
                    (<div key={idx} className="link">
                        <div>
                            {review.user.first_name}
                        </div>
                       
                        <div>
                            {review.user.last_name}    
                        </div>
                      
                        <div>
                            {review.body}
                        </div>
                         
                    </div>))
                }
            </div>
        )
    }
}


export default ReviewIndex;