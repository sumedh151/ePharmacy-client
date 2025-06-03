import React, { Component } from 'react';
import { AddressForm } from '../../forms';

export class NewAddress extends Component {
    
    handleNewAddressFormSubmit = (formData) => {

    }

    render() {
        return (
            <div className="left-9 right-10">
                <div className="address-form-center">
                    <AddressForm 
                        handleNewAddressFormSubmit = {this.handleNewAddressFormSubmit}
                    />    
                </div>
                
            </div>
        )
    }
}

export default NewAddress
