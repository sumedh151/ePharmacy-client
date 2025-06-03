import React, { Component } from 'react';

import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export class index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        )
    }
}

export default index;
