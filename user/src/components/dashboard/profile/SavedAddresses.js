import React, { Component } from 'react'
import { AddressForm } from '../../forms'
import { addressServices } from '../../../services/addresses';

export class SavedAddresses extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: false,
            data: [],
            editIndices: [], 
            newAddressClick: false,       
        }
    }

    handleEdit = (index) => {
        if(this.state.editIndices.includes(index)) {
            document.getElementById('address'+index).style.display = 'none';
            document.getElementById('p-address'+index).style.display = 'block';
            this.setState({
                editIndices: this.state.editIndices.filter(item => item!==index)
            })
        }
        else {
            this.setState({
                editIndices: [...this.state.editIndices, index]
            })
            var add = 'address'+index
            document.getElementById(add).style.display = 'block';
            document.getElementById('p-address'+index).style.display = 'none';
            console.log(index)
        }
    }

    handleEditFormSubmit = (index, formData) => {
        document.getElementById('address'+index).style.display = 'none';
        document.getElementById('p-address'+index).style.display = 'block';
        
        this.state.data[index] = formData;
        this.forceUpdate();
    
    }

    handleNewAddressFormSubmit = (formdata) => {
        this.setState({
            data : [...this.state.data, this.formData],
        })
    }

    handleDelete = (index) => {
        
        addressServices.deleteSavedAddress(index)
        .then(
            data => {
                
                if(this.state.data.length === 1) {
                    this.setState({
                        data : []
                    })
                    this.forceUpdate();
                }
                // document.getElementById('address-container'+index).style.display = 'none';
            },
            error => {
                this.setState({
                    deleteError: true,
                })
                this.forceUpdate();
            }
        )
    }

    componentDidMount() {
        addressServices.getSavedAddresses()
        .then(
            data => {
                
                for(var i=0; i<data.length;i++) {
                    Object.keys(data[i]).some(function(k) {
                        if(data[i][k] === undefined || data[i][k] === null) {
                            data[i][k] = null
                        }
                    })
                }
                
                this.setState(
                    { data : data }
                )
                
            },
            error => {
                this.setState({
                    error : true,
                })
            }
        );
        // console.log(this.state)
    }

    toggleNewAddressAdd(newAddressClick) {
        // const {newAddressClick} = this.state;
        if(newAddressClick) {
            // document.getElementById('add-new-address-btn').style = 'none';
            document.getElementById('new-address-form').style.display = 'block';
        } else {
            document.getElementById('new-address-form').style.display = 'none';
        }

        this.setState({
            newAddressClick: newAddressClick
        })
    }

    render() {
        const { data, error } = this.state

        return (
            <section className="profile-page-section" id="saved-address-settings">
                <fieldset className="border p-4">
                    <legend className="w-auto">
                        <h2 className="h2"> Saved Addresses </h2>
                    </legend>
                    {
                        this.state.deleteError 
                        ?
                        <p className="alert alert-danger">Could not delete!</p>
                        : null
                    }
                    {error &&
                        <p className="alert alert-danger">
                            Some error has occurred. Could not load saved addresses.
                        </p>
                    }

                    {!error && data.length === 0 ?
                        <>
                        <p className="alert alert-info">
                            Found no saved addresses.
                        </p>
                        <h5 className="h5">Add new address</h5>
                        <AddressForm 
                            handleNewAddressFormSubmit = {this.handleNewAddressFormSubmit}
                        />
                        </>
                        :
                    
                        <div className="grid-row">
                            {data.map((address, index) => {
                                var id = 'address-container' + address.pk, p = 'p-address'+address.pk, addressId = 'address'+address.pk;
                                console.log(address)
                                return (
                                    <div className="address-settings-container" id={id} key={index}>
                                        <div className='float-right'>
                                            <button className="btn-icon" onClick={() => this.handleEdit(address.pk)}> <i className="twa twa-pencil"></i> </button>
                                            <button className="btn-icon" onClick={() => this.handleDelete(address.pk)}> <i className="twa twa-cross-mark"></i> </button>
                                        </div>
                                        <p className="p-address" id={p}>
                                            <strong>{address.address_line_1},</strong> <br />
                                            {address.address_line_2 !== null? (<span>{address.address_line_2}<br /></span>) : null}
                                            {address.city}, {address.state}, {address.country} - {address.postal_code}.
                                        </p>
                                        <div style={{display:'none'}} id={addressId}>
                                                
                                            <br />
                                            <br />
                                            <AddressForm 
                                                key={index}
                                                index={address.pk}
                                                address={address}
                                                handleEditFormSubmit={this.handleEditFormSubmit}
                                                submitIndex={index}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                            <div id="new-address-form" style={{display:'none'}}>
                                <AddressForm 
                                    handleNewAddressFormSubmit = {this.handleNewAddressFormSubmit}
                                />
                            </div>
                            {!this.state.newAddressClick ?
                                <button className="btn btn-icon btn-default" id="add-new-address-btn" onClick={() => this.toggleNewAddressAdd(true)} style={{width:'min-content !important'}}>
                                    <span><i className="twa twa-heavy-plus-sign"></i>&nbsp;Address</span>
                                </button>
                            : 
                                <button className="btn btn-icon btn-default" id="add-new-address-btn" onClick={() => this.toggleNewAddressAdd(false)}>
                                    <span><i className="twa twa-cross-mark"></i>&nbsp;Cancel</span>
                                </button>
                            }
                        </div>
                    }
                    
                </fieldset>
                
            </section>
        )
    }
}

export default SavedAddresses
