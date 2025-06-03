import React from 'react';

export default class CheckboxInput extends React.Component {

    handleChange = (event) => {
        event.preventDefault();
        this.props.handleChange(event);
    }
    
    render() {
        return (
            <div className="form-group">
                <div className="custom-control custom-checkbox small">
                    <input type="checkbox" className="custom-control-input" onMouseDown={this.handleChange} id={this.props.id} name={this.props.name} aria-label={this.props.aria_label}/>
                    <label className="custom-control-label" for={this.props.name}>Remember Me</label>
                </div>
            </div>
        );
    }

}