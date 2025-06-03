import React, { Component } from 'react';
import {ElementsConsumer, CardElement} from '@stripe/react-stripe-js';
import { services } from '../../../../services/refreshToken';
import axios from 'axios';

import CardSection from './CardSection';
// import { paymentServices } from '../../../../services/payments';

export class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            processing: false,
            error: false,
            client_secret: '',
            loading: false,
        }
    }

    // Call to server side
    stripeTokenHandler = (token) => {
        services.refreshToken()
        console.log({
            'token': token,
            'use_saved_card': false,
        })
        return axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/products/payment/',
            data: {
                'token': token.id,
                'use_saved_card': false,
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).access,
            }
        }).then(services.handleResponse)
        .then(data => {
            console.log(data)
            return data
        })

    }

    handleSubmit = async(event) => {
        event.preventDefault();

        const { stripe, elements } = this.props;

        if(!stripe || !elements) {
            // Stripe not loaded
            // Form disbabled
            this.setState({
                loading: true,
                error: true,
                errorMessage: 'Stripe Not Loaded',
            });
            return;
        }

        // Stripe has loaded
        this.setState({
            error: false,
            processing: true,
            loading: false,
            processed: false,
        })

        const card = elements.getElement(CardElement);

        // Get the stripe token
        const result = await stripe.createToken(card);
        if (result.error) {
            // Show error to your customer.
            this.setState({
                error: true,
                processing: false,
                loading: false,
                processed: false,
                errorMessage: result.error.message
            })
          } else {
            // Send the token to your server.
            // This function does not exist yet; we will define it in the next step.
            this.stripeTokenHandler(result.token)
            .then(data => {
                this.setState({
                    error: false,
                    processing: false,
                    loading: false,
                    processed: true,
                    // errorMessage: result.error.message
                },
                error => {
                    this.setState({
                        error: true,
                        processing: false,
                        loading: false,
                        processed: false,
                        errorMessage: error
                    })
                    console.log("error")
                })
            })

            console.log(this.state)
          }
    }

    render() {
        return (
            <div>
                {/* Error */}
                {this.state.error && (
                    <p className="alert alert-danger">
                        {this.state.errorMessage}
                    </p>
                )}

                {/* Successful Payment */}
                {this.state.processed && !this.state.error && (
                    <p className="alert alert-success">
                        Successful Submission!
                    </p>
                )}

                <form 
                    onSubmit={this.handleSubmit}
                >
                    <CardSection />
                    {/* <DesignedCardSection /> */}
                    <br />
                    <button 
                        // disabled={!this.props.stripe || this.state.processing}
                        disabled={!this.props.stripe} 
                        type="submit"
                        className="btn btn-primary-self"
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default function InjectedCheckoutForm() {
    return (
      <ElementsConsumer>
          {/* {console.log(this.props)} */}
        {({stripe, elements}) => (
          <CheckoutForm  stripe={stripe} elements={elements}/>
        )}
      </ElementsConsumer>
    );
}
