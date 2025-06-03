import React, { Component } from 'react'

export class Select extends Component {

    handleChange = (event) => {
        event.preventDefault();
        this.props.handleChange(event);
    }

    render() {
        return (
            <div className="form-group">
                <select name={this.props.name} id={this.props.id} onChange={this.handleChange} className="form-control">
                    {this.props.options.map((option, index) => {
                        return (
                        <option 
                            key = {index} 
                            value={option}
                            selected = {this.props.value === option ? true : false}
                        >
                            {option}
                        </option> )
                    })}
                </select>
            </div>
        )
    }
}

export default Select
