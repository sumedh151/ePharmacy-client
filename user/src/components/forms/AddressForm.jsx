import React, { Component } from 'react';
import TextInput from './formComponents/TextInput';
import { addressServices } from '../../services/addresses';
import ThirdStep from '../dashboard/eCommerceSteps/ThirdStep';

/**
 * 
 * Class Component
 * Usage : New shipping / billing address
 */
export class AddressForm extends Component {
    constructor(props) {
        super(props);

        this.formData = this.props.address ? this.props.address : {};
        this.state = {
            submitted: false,
            error: false,
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.formData[e.target.name] = this.formData[e.target.value]
        console.log(this.formData)
        this.forceUpdate();
        // console.log(this.props)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.formData)
        // Edit Address
        if(this.props.address) {
            console.log(this.formData);
            addressServices.editSavedAddress(this.props.index, this.formdata)
            .then(
                data => {
                    this.setState({
                        submitted: true,
                        error: false,
                    })

                    this.forceUpdate()
                },
                error => {
                    this.setState({
                        submitted: false,
                        error: true
                    })

                    this.forceUpdate()
                }
            );

            if(this.state.submitted) {
                this.props.handleEditFormSubmit(this.props.submitIndex, this.formData);
            }
            
        }
        // New Address
        else {
            addressServices.saveNewAddress(this.formData)
            .then(
                data => {
                    this.setState({
                        submitted: true,
                        error: false,
                    })

                    this.forceUpdate();
                    this.props.handleNewAddressFormSubmit(this.formData);
                },
                error => {
                    this.setState({
                        submitted: false,
                        error: true
                    })

                    this.forceUpdate()
                }
            )
        }

        this.setState({
            submitted: true,
            error: false
        })
    }

    render() {
        return (
            <form className="form" method="post" onSubmit={this.handleSubmit}>
                {this.state.error && <p className="alert alert-danger">Some error has occurred!</p>}
                {this.state.submitted && <p className="alert alert-success">Successful Submission!</p>}
                <div className="row">
                    <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-xs-12">
                        {/* Address Line 1 */}
                        <TextInput 
                            handleChange = {this.handleChange}
                            name = "address_line_1"
                            value = {this.formData["address_line_1"]}
                            id = "address_line_1"
                            placeholder = "Address Line 1"
                            aria-labelledby = "Address Line 1"
                            required={true}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-xs-12">
                        
                        {/* Address Line 2 */}
                        <TextInput 
                            handleChange = {this.handleChange}
                            name = "address_line_2"
                            value = {this.formData["address_line_2"]}
                            id = "address_line_2"
                            placeholder = "Address Line 2"
                            aria-labelledby = "Address Line 2"
                            required={false}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-12">
                        {/* City */}
                        <TextInput 
                            handleChange = {this.handleChange}
                            name = "city"
                            value = {this.formData["city"]}
                            id = "city"
                            placeholder = "City"
                            aria-labelledby = "City"
                            required={true}
                        />
                    </div>

                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-12">
                        {/* State */}
                        <TextInput 
                            handleChange = {this.handleChange}
                            name = "state"
                            value = {this.formData["state"]}
                            id = "state"
                            placeholder = "State"
                            aria-labelledby = "State"
                            required={true}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-12">
                        {/* Country */}
                        <TextInput 
                            handleChange = {this.handleChange}
                            name = "country"
                            value = {this.formData["country"]}
                            id = "country"
                            placeholder = "Country"
                            aria-labelledby = "Country"
                            required={true}
                        />
                    </div>

                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-12">
                        {/* Postal Code */}
                        <TextInput 
                            handleChange = {this.handleChange}
                            name = "postal_code"
                            value = {this.formData["postal_code"]}
                            id = "postal_code"
                            placeholder = "Postal Code"
                            aria-labelledby = "Postal Code"
                            required={true}
                        />
                    </div>
                </div>

                <div className="row">
                    <div style={{marginLeft:'1vw'}}>
                        <button type="submit" className="btn btn-primary-self">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddressForm
