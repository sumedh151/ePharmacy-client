import React, { Component } from 'react'

export class Textarea extends Component {
    handleChange = (event) => {
        event.preventDefault();
        this.props.handleChange(event);
    }

    render() {
        return (
            // <div className="form-control">
                <textarea
                    rows = "4"
                    onChange={this.handleChange}
                    name={this.props.name} 
                    id={this.props.id} 
                    placeholder={this.props.placeholder} 
                    aria-labelledby={this.props.aria_label}
                    className="form-control"
                >
                    {this.props.value}
                </textarea>
            // </div>
        )
    }
}

export default Textarea
