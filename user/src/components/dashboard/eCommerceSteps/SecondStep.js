import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

import CurrentLocation from '../addressOptions/CurrentLocation';
import SavedAddress from '../addressOptions/SavedAddress';
import AddressForm from '../addressOptions/NewAddress';

const pharmacy_details = [
    {"pharmacy_name" : "Udaipur", "address" : "City, State, Country", "price" : "$5.99", position : {lat: 24.571270,lng: 73.691544}},
    {"pharmacy_name" : "ABC Pharmacy", "address" : "City, State, Country", "price" : "$5.99", position : {lat: 19.571270,lng: 73.691544}},
    {"pharmacy_name" : "Mumbai", "address" : "City, State, Country", "price" : "$5.99", position : {lat: 19.07283,lng: 72.88261}},
    {"pharmacy_name" : "ABC Pharmacy", "address" : "City, State, Country", "price" : "$5.99", position : {lat: 20.07283,lng: 72.88261}},
    {"pharmacy_name" : "ABC Pharmacy", "address" : "City, State, Country", "price" : "$5.99", position : {lat: 19.07283,lng: 74.88261}},
]

export default class SecondStep extends Component {
    constructor(props){
        super(props);

        this.toggleClass = this.toggleClass.bind(this);
        this.renderMarkers = this.renderMarkers.bind(this);

        this.state = {
            active: 0,
            mapCenter: pharmacy_details[0]['position'],
            markerText: pharmacy_details[0]['pharmacy_name'],
            activeAddressOption: 0,
            userLocation: {lat: 19, lng: 72,},
            userLocationLoading: true,
            userLocationError: false,
        };
    }

    renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: this.state.mapCenter,
            map,
            title: this.state.markerText
        });

        this.setState({
            map: map,
            maps: maps,
            marker: marker
        })

        return marker;
    };

    toggleClass(index) {
        // const currentState = this.state.active
        // this.setState({
        //     active : index, 
        //     mapCenter: pharmacy_details[index]['position'],
        //     markerText: pharmacy_details[index]['pharmacy_name'],
        // })

        // Direct Mutate for the marker to update along with the map
        this.state.active = index;
        this.state.mapCenter = pharmacy_details[index]['position'];
        this.state.markerText = pharmacy_details[index]['pharmacy_name'];

        this.forceUpdate();
        this.state.map.setCenter(pharmacy_details[index]['position'])
        this.state.marker.setMap(null)
        this.renderMarkers(this.state.map, this.state.maps)
        // const map = this.state.map;
    }

    /**
     * Displaying the address option
     */
    displayAddressOption() {
        if( this.state.activeAddressOption === 0) {
            return <CurrentLocation 
                userLocation= {this.state.userLocation}
                loading={this.state.userLocationLoading}
                error={this.state.userLocationError}
                savedAddress={[]}
            />
        }

        else if(this.state.activeAddressOption === 1) {
            return <SavedAddress 
                onChange = {this.onChange}
            />
        }

        else if(this.state.activeAddressOption === 2) {
            return <AddressForm />
        }  
    }

    /**
     * 
     * @param {int} index : The clicked address option
     */
    toggleAddressOption(index) {
        this.setState({
            activeAddressOption: index,
        })
        this.displayAddressOption()
    }

    /**
     * onchange of form
     */
    onChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }

    componentDidMount(props) {
        if("geolocation" in navigator) {
            try{
                navigator.geolocation.getCurrentPosition(
                    position => {
                        this.setState({
                            userLocationError: false,
                            userLocationLoading: false,
                            userLocation: {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                            }
                        })
                    }
                )
            } catch(error) {
                this.setState({
                    userLocationError: true,
                    userLocationLoading: false,
                })
            }
        }
        else {
            this.setState({
                userLocationError: false,
                userLocationLoading: true,
            })
        }
    }

    render() {
        return (
            <div className="grid-row">
                <div className="select-address-type-container">
                    <section className="select-address-type-section">
                        {/* Use Current Location */}
                        <button 
                            className = {
                                this.state.activeAddressOption === 0 
                                ? "btn-select-address-type address-type-selected" 
                                : "btn-select-address-type"
                            } 
                            onClick = {() => this.toggleAddressOption(0)}
                        >
                            Use Current Location
                        </button>

                        {/* Use a saved address */}
                        <button 
                            className = {
                                this.state.activeAddressOption === 1 
                                ? "btn-select-address-type address-type-selected" 
                                : "btn-select-address-type"
                            } 
                            onClick = {() => this.toggleAddressOption(1)}
                        >
                            Use Saved Address
                        </button>

                        {/* Enter a new Address */}
                        <button 
                            className = {
                                this.state.activeAddressOption === 2 
                                ? "btn-select-address-type address-type-selected" 
                                : "btn-select-address-type"
                            } 
                            onClick = {() => this.toggleAddressOption(2)}
                        >
                            Enter a New Address
                        </button>
                    </section>
                    {
                        this.displayAddressOption() 
                    }
                </div>
                <div className="grid-col">
                    <div className="grid-row select-pharmacy">
                        <span className="pharmacy-heading drug-action-subtitle">In Stock in <strong>n</strong> Pharmacies : </span>
                        <div className="pharmacy-filters">
                            <span className="selection-filter selected">By price</span>
                            <span className="selection-filter">By availability</span>    
                        </div>
                        <div className="pharmacy-list">
                            {pharmacy_details.map((pharmacy, index) => {
                                return (
                                    <div className="pharmacy-list-item" key={index}>
                                        <div className={this.state.active === index ? 'card selected' : 'card'} onClick={() => this.toggleClass(index)} >
                                            <div className="card-body">
                                                <div className="card-title">{pharmacy.pharmacy_name}</div>
                                                <div className="card-subtitle">{pharmacy.address}</div>
                                                <div className="card-text">
                                                    Price : <strong>{pharmacy.price}</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />    
                                    </div>
                                )
                            })}
                            
                        </div>
                    </div>
                    <div className="select-pharmacy-map">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                            defaultCenter={this.state.mapCenter}
                            defaultZoom={16}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={({ map, maps}) => this.renderMarkers(map, maps)}
                        >
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        )
    }
}
