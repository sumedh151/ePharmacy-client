// All Routes are defined here

import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';

// components
import Login from '../components/Login';
import Register from '../components/Register';
import err404 from '../components/errors/err404';

import Navbar from '../components/landingPage/navbar';
import Footer from '../components/landingPage/Footer';
import ManageInventory from '../components/inventory';
import Dashboard from '../components/dashboard/';

import { OrderHistory } from '../components/orders/OrderHistory';
import OrderView from '../components/orders/OrderView';

export default class index extends Component {

    constructor(props) {
        super(props);
               
        this.state = {
            isauth: true,
        };
    }

    render() {

        let HomeComponent = Dashboard;
        
        // if (this.state.isauth) {
        //     HomeComponent = Dashboard;
        // }
        return (
            <Router>
                <Navbar isauth={this.state.isauth}/>
                <Switch>

                    
                    {/* Manage Inventory */}
                    {/* <Route 
                        exact = {true}
                        path = "/manage-inventory"
                        component = {ManageInventory}
                    /> */}
                    <PrivateRoute path="/manage-inventory" isauth={this.state.isauth}>
                        <ManageInventory/>
                    </PrivateRoute>

                    {console.log(ManageInventory)}
                    {/* Landing Page */}
                    <Route 
                        exact = {true}
                        path = "/"
                        component = {HomeComponent}
                    />

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

                    <Route
                        component = {err404}
                    />

                </Switch>
                <Footer />
            </Router>
        )
    }
}
