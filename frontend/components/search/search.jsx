import React from 'react';
import {withRouter} from 'react-router-dom'

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // restaurants: []
            search1: '',
            search2: ''
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
                <form className="nav-search">
                    <div className="psuedo-rest">Find</div>
                    <input className="searchbar-rest" type="text" defaultValue="" placeholder="Restaurants" onChange={this.handleInput('search1')}/>
                    <div className="searchborder"></div>
                    <div className="psuedo-loc">Near</div>
                    <input className="searchbar-loc"type="text"  placeholder="Location" onChange={this.handleInput('search2')}/>
                    <button onClick={this.handleSubmit}><i className="fas fa-search fa-lg"></i></button>
                </form>
        )
    }
}


export default withRouter(SearchBar);
