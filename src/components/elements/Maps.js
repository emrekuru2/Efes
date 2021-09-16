import React, { Component } from 'react';
import {Circle, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import CurrentLocation from "../../utils/CurrentLocation";

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <CurrentLocation
                centerAroundCurrentLocation
                google={this.props.google}
            >
                <Marker/>
                <Marker position={{ lat: 44.64048167397614, lng: -63.586474261514496}}/>
            </CurrentLocation>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyApAC1vfzRnRABQAY82M38HhxL26rCtH28'
})(MapContainer);