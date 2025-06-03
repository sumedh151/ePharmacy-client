// All Routes are defined here

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

import { PrivateRoute } from './PrivateRoute';

// components
import LandingPage from '../components/landingPage';
import Dashboard from '../components/dashboard';
import Login from '../components/Login';
import Register from '../components/Register';
import { Logout } from '../components/Logout';
import err404 from '../components/errors/err404';
import { OrderHistory } from '../components/orders/OrderHistory';
import OrderView from '../components/orders/OrderView';
import ResetPassword from '../components/passwords/ResetPassword';
import Ecom from '../components/dashboard/pages/eCommerceProcess';
import Navbar from '../components/landingPage/navbar';
import Footer from '../components/landingPage/Footer';
import UploadPrescription from '../components/dashboard/uploadPrescription';
import Cart from '../components/dashboard/cart';
import Profile from '../components/dashboard/profile';

class Routes extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let HomeComponent = LandingPage;
        
        if (this.props.loggedIn) {
            HomeComponent = Dashboard;
        }

        return (
            <Router>
                <Navbar isauth={this.props.loggedIn}/>
                    <Switch>
                        {/* Landing Page */}
                        <Route 
                            exact = {true}
                            path = "/"
                            component = {HomeComponent}
                        />

                        {/* Dashboard */}
                        <PrivateRoute path="/user_logged_in">
                            <Dashboard/>
                        </PrivateRoute>

                        <PrivateRoute path="/process/:step">
                            <Ecom/>
                        </PrivateRoute>

                        {/* Login */}
                        <Route 
                            exact = {true}
                            path = "/login"
                            component = {Login}
                        />

                        {/* Register */}
                        <Route 
                            exact = {true}
                            path = "/register"
                            component = {Register}
                        />

                        {/* Order History */}
                        <PrivateRoute path="/order-history/order/:id">
                            <OrderView/>
                        </PrivateRoute>

                        {/* Order History */}
                        <PrivateRoute path="/order-history/">
                            <OrderHistory/>
                        </PrivateRoute>

                        <PrivateRoute path = "/order-history/order/">
                            <OrderView/>
                        </PrivateRoute>

                        <PrivateRoute path = "/reset-password">
                            <ResetPassword/>
                        </PrivateRoute>

                        <PrivateRoute path = "/upload-prescription">
                            <UploadPrescription/>
                        </PrivateRoute>                    
                        
                        {/* Cart */}
                        <PrivateRoute path = "/cart">
                            <Cart/>
                        </PrivateRoute>

                        {/* Profile */}
                        <PrivateRoute path = "/user-profile">
                            <Profile/>
                        </PrivateRoute>

                        <PrivateRoute path="/logout/">
                            <Logout/>
                        </PrivateRoute>

                        <Route
                            component = {err404}
                        />

                    </Switch>
                <Footer />
            </Router>
        )
    }
}

function mapStateToProps(state) {
    const { loggedIn } = state.authentication;
    return {
        loggedIn,
    }
}

const connectedRoutes = connect(mapStateToProps)(Routes);
export { connectedRoutes as Routes }