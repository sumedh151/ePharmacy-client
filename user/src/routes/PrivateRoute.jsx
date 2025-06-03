import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class PrivateRoute extends React.Component {

    render() {

        if(!this.props.loggedIn) {
            return <Redirect to="/login"/>
        }


        let params = this.props.computedMatch.params ? this.props.computedMatch.params : {};

        return (
          
            <Route {...this.props} exact>
                {
                   React.Children.map(this.props.children, child => {
                        return React.cloneElement(child, {
                            params: params,
                        })
                    })
                }
            </Route>
            
        );
    }
}

function mapStateToProps(state) {
    const { loggedIn } = state.authentication;
    return {
        loggedIn,
    }
}

const connectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);
export { connectedPrivateRoute as PrivateRoute  }