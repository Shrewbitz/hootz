import React from 'react';
import {withRouter} from 'react-router-dom'

class SearchPageBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // restaurants: []
            search: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    };



    handleInput(type) {
        return(e) => {
            this.setState({[type]: e.target.value})
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.searchRestaurants(this.state).then (() => {
            this.props.history.push('/search')})    
    }

    //()  => this.props.history.push('/'), 


    render() {

        // debugger
        return (


                            <form className="restaurant-nav-search">
                                <input className="restaurant-searchbar-rest" type="search"  placeholder="Restaurants" onChange={this.handleInput('search')}/>
                                <div className="restaurant-searchborder"></div>
                                <input className="restaurant-searchbar-loc"type="search"  placeholder="Location" onChange={this.handleInput('search')}/>
                                <button onClick={this.handleSubmit}><i className="fas fa-search fa-lg"></i></button>
                            </form>
        )
    }
}


export default withRouter(SearchPageBar);
