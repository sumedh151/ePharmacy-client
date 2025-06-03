import React, { Component } from 'react'

export class SavedAddresses extends Component {
    render() {
        return (
            <section className="profile-page-section" id="saved-cards-settings">
                <fieldset className="border p-4">
                    <legend className="w-auto">
                        <h2 className="h2"> Saved Cards Details </h2>
                    </legend>
                    {/* <AddressForm /> */}
                    <p className="alert alert-warning">
                        In beta mode
                    </p>
                </fieldset>
                
            </section>
        )
    }
}

export default SavedAddresses
