import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export class index extends Component {
    
    constructor(props) {
        super(props);

        this.formData = {};

        this.state = {
            modalOpen: false
        }
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
    
    handleChange = (e) => {
        e.preventDefault();
        this.formData[e.target.name] = e.target.value
        console.log(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.formData)
        this.toggleModal();
    }

    render() {
        return (
            <>
                <form className="form form-inline" onSubmit={this.handleSubmit} id="serachbar-form">
                    <div className="input-group mb-3" id="searchbar-input-group">
                        <input type="text" className="form-control" value={this.formData["search"]} name="search" id="searchbar"  placeholder="Search..." aria-label="Search..." onChange={this.handleChange} />
                        <div className="input-group-append">
                            <button className="btn btn-icon-searchbar" type="submit"><i className="twa twa-mag"></i></button>
                        </div>
                    </div>
                </form>

                <Modal isOpen={this.state.modalOpen} fade={false} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Search Results for {this.formData['search']}
                    </ModalHeader>
                    
                    <ModalBody>
                        
                        <div className="card">
                            <div className="card-header">
                                drug_name
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-xs-12">
                                        Drug Image
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-xs-12">
                                        Drug Details
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-xs-12">
                                        <a className="btn btn-primary-self" href="/upload-prescription">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </ModalBody>
                    
                    {/* <ModalFooter> */}
                        {/* <Button color="primary" onClick={this.toggleModal} className="float-left">Do Something</Button> */}
                        {/* <Button color="secondary" onClick={this.toggleModal}>&times;</Button> */}
                    {/* </ModalFooter> */}
                </Modal>
            </>
        )
    }
}

export default index
