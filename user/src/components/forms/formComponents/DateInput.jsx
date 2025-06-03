import React, { Component } from 'react'

export class DateInput extends Component {
    
    handleChange = (event) => {
        event.preventDefault();
        this.props.handleChange(event);
    }

    render() {
        return (
            <div className="form-group">
                <input type="date" className="form-date-input" onChange={this.handleChange} value={this.props.value} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} aria-labelledby={this.props.aria_label} required={this.props.required}/>
            </div>
        )
    }
}

export default DateInput
