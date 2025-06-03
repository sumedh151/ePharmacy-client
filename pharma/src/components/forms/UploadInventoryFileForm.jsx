import React, { Component } from 'react'
import FileInput from './formComponents/FileInput';
import { inventoryManagementServices } from '../../services/inventory';

export class UploadInventoryFileForm extends Component {
    
    constructor(props) {
        super(props);

        this.formData = {};
        this.state = {
            submitted: false,
            error: false,
        }
    }
    
    handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        switch (e.target.name) {
            case 'inventory_file':
                this.formData = {
                    'file' : e.target.files[0]
                }
                console.log(this.formData)
            //   this.setState({ 'file' : e.target.files[0] });
                break;
            default:
                this.setState({ [e.target.name]: e.target.value });
          }
        console.log(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault();

        inventoryManagementServices.uploadInventory(this.formData)
        .then(data => {
                console.log(data)
                this.setState({
                    submitted: true,
                    error: false
                })
            },
            error => {
                console.log(error.message)
                this.setState({
                    error: true,
                })
            }
        )

    }
    
    render() {
        return (
            <form className="form" method="post" onSubmit={this.handleSubmit}>
                <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-xs-12">
                    <FileInput 
                        handleChange = {this.handleChange}
                        name = "inventory_file"
                        value = {this.formData["inventory_file"]}
                        id = "inventory_file"
                        placeholder = "Inventory File"
                        aria-labelledby = "Inventory File"
                        required={true}
                    />
                    {
                        this.state.error ? <div className="my-1 alert alert-danger">Upload Failed! Try again and check your file</div> : 
                        this.state.submitted ? <div className="my-1 alert alert-success">Success!</div> : <></>
                    }
                </div>
                <br />
                <button className="btn btn-primary-self">Upload</button>
            </form>
        )
    }
}

export default UploadInventoryFileForm
