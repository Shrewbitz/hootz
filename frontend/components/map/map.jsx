import React from 'react';

class Map extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
            marks: [],
        };
        this.aFunction = this.aFunction.bind(this)
        // this.render = this.render.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)
    };


    // componentDidMount() {

    //     // this.map = new google.maps.Map
      
    // }


    // initMap() {
    //     // The location of Uluru
    //     var uluru = {lat: -25.344, lng: 131.036};
    //     // The map, centered at Uluru
    //     var map = new google.maps.Map(
    //         document.getElementById('map'), {zoom: 4, center: uluru});
    //     // The marker, positioned at Uluru
    //     var marker = new google.maps.Marker({position: uluru, map: map});
    //   }


    // render() {
    //     return (
    //         <div id="map">hello</div>
    //     )
    // }
    componentDidMount() {
        this.componentDidUpdate()
    }

    componentDidUpdate() {
        if ((this.props.type != undefined) && (this.props.type === "restaurant")) {
            let coords = this.props.coords !== undefined ? this.props.coords : {x:0, y:0}
            const spot = {lat: coords.x, lng: coords.y}
            const mapOptions = {
                center: spot,
                zoom: 15
            };
            
            this.map = new google.maps.Map(this.mapNode, mapOptions);
            const marker = new google.maps.Marker({
                position: spot
            });
            
            marker.setMap(this.map)
        } else if ((this.props.type != undefined) && (this.props.type === "search")) {
            const restaurants = []
            const coords = []
            
            let length = this.props.restaurants.length
            for (let i = 0; i < length; i++) {
                restaurants.push(this.props.restaurants.pop())
                coords[i] = restaurants[i].coordinates
            }
            // debugger
            const spot = {lat: coords[0].x, lng: coords[0].y}
            const mapOptions = {
                center: spot,
                zoom: 13
            };
            this.map = new google.maps.Map(this.mapNode, mapOptions);
            
            this.state.marks.forEach(marker => {
                marker.setMap(null);
            })
            
            this.state.marks = [];
            for (let i = 0; i < length; i++) {
                const marker = new google.maps.Marker({
                    position: {lat: coords[i].x, lng: coords[i].y},
                    label: `${i+1}`,
                    title: `${i+1}. ${restaurants[i].name}`,
                    id: restaurants[i].id
                });
                // debugger    
                this.state.marks.push(marker)
                marker.addListener('click', (this.aFunction) )
                // marker.addListener('click', this.aFunction);
                marker.setMap(this.map)
            }
            
        }
    }

    aFunction(e) {
        // debugger
        let rid = this.state.marks[Number(e.tb.currentTarget.title[0])-1].id
        this.props.history.push(`/restaurant/${rid}`)    
    }

    render() {
        return (
            <div id="map" ref={ map => this.mapNode = map } />
        )
    }

}


export default Map;