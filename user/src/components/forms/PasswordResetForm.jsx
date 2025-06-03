import React from 'react';
import { userService } from '../../services';

import PasswordInput from './formComponents/PasswordInput';

export default class PasswordResetForm extends React.Component {
    constructor(props) {
        super(props);      
        this.state = {
            error: "",
            formData: {
            },
            success: "",
        }    
        this.formData = {};
    }

    handleChange = (event) => {
        event.preventDefault();
        this.formData[event.target.id] = event.target.value;
        this.setState({
            formData: this.formData,
        })
        if (this.state.formData["new_password"] !== this.state.formData["confirm_new_password"]) {
            this.setState({
                error: "Passwords Don't Match",
            })
        } else {
            this.setState({
                error: "",
            })
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.error !== "") {
            this.setState({
                error: "Fix errors first!",
            })
        } else if (this.state.formData["new_password"] === "" || !this.state.formData["new_password"]) {
            this.setState({
                error: "Enter a new password!",
            });
        } else {
            userService.passwordReset(this.state.formData["current_password"], this.state.formData["new_password"])
            .then((res) => {
                if (res.data.current_password) {
                    res.data.current_password.map((el) => {
                        this.setState({
                            error: el,
                        })
                    })
                } else if (res.data.new_password) {
                    res.data.new_password.map((el) => {
                        this.setState({
                            error: el,
                        })
                    })
                } else {
                    this.setState({
                        error: "",
                        success: "Success!"
                    })
                }
            })
            .catch(err => {
                this.setState({
                    error: err,
                })
            });
        }
    }

    render() {
        return (
        <>
        <p className="text-danger my-2">{this.state.error}</p>
        <p className="text-success my-2">{this.state.success}</p>
        <form className="form-group" onSubmit={this.handleSubmit}>
             <PasswordInput id="current_password" handleChange={this.handleChange} name="current_password" value={this.state.formData["current_password"]} placeholder="Current Password" aria_label="Current Password" required={true}/>
             <PasswordInput id="new_password" handleChange={this.handleChange} name="new_password" value={this.state.formData["new_password"]} placeholder="New Password" aria_label="New Password" required={true}/>
             <PasswordInput id="confirm_new_password" handleChange={this.handleChange} name="confirm_new_password" value={this.state.formData["confirm_new_password"]} placeholder="Confirm New Password" aria_label="Confirm New Password" required={true}/>
            <br/>
            <button type="submit" className="btn btn-primary-self">Reset</button>
        </form>
        </>
        );
    }
}