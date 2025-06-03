import React, { Component } from 'react'
import AddressForm from './NewAddress';

export class CurrentLocation extends Component {
    
    constructor(props) {
        super(props);
    }

    handleNewAddressFormSubmit = (formData) => {

    }

    render() {
        
        // No access to user location
        if(this.props.loading || this.props.error) {
            console.log(this.props.loading, this.props.error)
            return (
                <>
                    <div className="alert alert-danger left-9 right-10">
                        Allow us to access your location.
                    </div>
                    
                    {/* <form className="form" style={{marginLeft: '9vw', marginRight:'10vw'}}>
                        <input
                            type="text"
                            maxLength="6"
                            placeholder="Enter Pincode"
                        />
                    </form> */}
                </>
            )
        }
        
        return (
            <>
                <div className="alert alert-info left-9 right-10">
                    We have access to your location. Your current location is: 
                    <br />
                    Latitude: {this.props.userLocation.lat} <br />
                    Logitude: {this.props.userLocation.lng} <br />
                    <br />
                    {this.props.savedAddress.length === 0 && 
                    <div className="alert alert-danger">
                        No saved address found for this location. Please provide the address.
                    </div>}
                </div>

                {this.props.savedAddress.length === 0
                ? 
                <AddressForm 
                    handleNewAddressFormSubmit = {this.handleNewAddressFormSubmit}
                />
                : null
                }
            </>
        )
    }
}

export default CurrentLocation;
