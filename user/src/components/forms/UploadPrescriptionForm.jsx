import React, { Component } from 'react';
import FileInput from './formComponents/FileInput';

export class UploadPrescriptionForm extends Component {

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
        this.formData[e.target.name] = this.formData[e.target.value]
        console.log(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.formData);
        this.setState({
            submitted: true,
            error: false
        })

        var path = window.location.protocol + '//' + window.location.host + '/process/1';
        window.location.replace(path);
    }

    render() {
        return (
            <form className="form" method="post" onSubmit={this.handleSubmit}>
                <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-xs-12">
                    {/* <label for="prescription_file">
                        Upload File
                    </label> */}
                    <FileInput 
                        handleChange = {this.handleChange}
                        name = "prescription_file"
                        value = {this.formData["prescription_file"]}
                        id = "prescription_file"
                        placeholder = "Prescription File"
                        aria-labelledby = "Prescription File"
                        required={true}
                    />
                </div>
                <br />
                <button className="btn btn-primary-self">Upload</button>
            </form>
        )
    }
}

export default UploadPrescriptionForm
