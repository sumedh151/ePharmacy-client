import React, { Component } from 'react'

export default class FileInput extends Component {
    handleChange = (event) => {
        event.preventDefault();
        this.props.handleChange(event);
    }
    
    render() {
        return (
            <div className="form-control">
                <input type="file" className="form-control-file form-control-user" onChange={this.handleChange} value={this.props.value} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} aria-labelledby={this.props.aria_label} required={this.props.required}/>
                {/* <label className="custom-file-label" for="customFile">Upload Prescription</label> */}
            </div>
        );
    }
}
