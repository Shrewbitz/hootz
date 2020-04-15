import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // restaurants: []
            search: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    // componentDidMount() {
    //     // debugger
    //     this.props.searchRestaurants().then(restaurants => {
    //         this.setState({restaurants: restaurants.restaurants})
    //     });;
    // }


    handleInput(type) {
        return(e) => {
            this.setState({[type]: e.target.value})
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.searchRestaurants(this.state)        
    };

    //()  => this.props.history.push('/'), 


    render() {

        // debugger
        return (
                <form className="nav-search">
                    <div className="psuedo-rest">Find</div>
                    <input className="searchbar-rest" type="search" defaultValue="" placeholder="Restaurants" onChange={this.handleInput('search')}/>
                    <div className="searchborder"></div>
                    <div className="psuedo-loc">Near</div>
                    <input className="searchbar-loc"type="search"  placeholder="Location"/>
                    <button onClick={this.handleSubmit}><i className="fas fa-search fa-lg"></i></button>
                </form>
        )
    }
}


export default SearchBar;