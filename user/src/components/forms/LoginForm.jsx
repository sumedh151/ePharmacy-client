import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

import PasswordInput from './formComponents/PasswordInput';
import CheckboxInput from './formComponents/CheckboxInput';
import EmailInput from './formComponents/EmailInput';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.formData = {};
        this.props.dispatch(userActions.logout());
    }

    handleChange = (event) => {
        event.preventDefault();
        this.formData[event.target.id] = event.target.value;
        console.log(event.target.value);
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(userActions.login(this.formData["email"], this.formData["password"]))
    }

    render() {

        if(this.props.error) {
            this.formData = {};
        }

        if (this.props.loggingIn) {
            return (
                <div className="text-center">
                    <h1 className="h4 text-muted mb-4">Logging In...</h1>
                </div>
            );
        } else {
            return(
                <form className="user" method="post" onSubmit={this.handleSubmit}>
                    <EmailInput id="email" handleChange={this.handleChange} name="email" value={this.formData["email"]} placeholder="Email" aria_label="Email" required={true}/>
                    <PasswordInput id="password" handleChange={this.handleChange} name="password" value={this.formData["password"]} placeholder="Password" aria_label="Password" required={true}/>
                    {/* <CheckboxInput id="remember" handleChange={this.handleChange} name="remember" aria_label="Remember Me"/> */}
                    {
                        this.props.error ? <p className="alert alert-danger">
                            Error! Check username and password.
                        </p> : <></>
                    }
                    <button type="submit" className="btn btn-success">
                        Login
                    </button>
                </form>
            );            
        }
    }
}

function mapStateToProps(state) {
    const { loggingIn, error } = state.authentication;
    return {
        loggingIn,
        error,
    };
}

const connectedLoginForm = connect(mapStateToProps)(LoginForm);
export { connectedLoginForm as LoginForm }; 