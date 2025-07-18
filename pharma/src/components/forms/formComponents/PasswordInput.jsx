import React from 'react';

export default class PasswordInput extends React.Component {

    handleChange = (event) => {
        event.preventDefault();
        this.props.handleChange(event);
    }
    
    render() {
        return (
            <div className="form-group">
                <input type="password" className="form-control form-control-user" onChange={this.handleChange} value={this.props.value} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} aria-labelledby={this.props.aria_label}/>
            </div>
        );
    }

}