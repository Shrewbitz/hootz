import React from 'react';

class Map extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
            marks: []
           
        };
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

            let coords = []
            for (let i = 0; i < this.props.coords.length - 1; i++) {
                coords.push(this.props.coords.pop())
            }
            const spot = {lat: coords[0].x, lng: coords[0].y}
            const mapOptions = {
                center: spot,
                zoom: 13
            };
            this.map = new google.maps.Map(this.mapNode, mapOptions);
            
            this.state.marks.forEach(marker => {
                debugger
                marker.setMap(null);
            })
            
            this.state.marks = [];

            for (let i = 0; i < coords.length - 1; i++) {
                const marker = new google.maps.Marker({
                    position: {lat: coords[i].x, lng: coords[i].y},
                    label: `${i+1}`
                });
                this.state.marks.push(marker)
                
                marker.setMap(this.map)
            }
            
        }
    }


    render() {
        return (
            <div id="map" ref={ map => this.mapNode = map } />
        )
    }

}


export default Map;