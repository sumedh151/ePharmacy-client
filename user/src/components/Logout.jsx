import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {

    render() {
        this.props.dispatch(userActions.logout());
        return <Redirect to="/login"/>
    }
}

function mapStateToProps(state) {
    return {
    };
}

const connectedLogout = connect(mapStateToProps)(Logout);
export { connectedLogout as Logout }; 