import React, { Component } from 'react';
import StripeCheckoutForm from '../paymentOptions/stripeCardPayment';
import SavedCardsCheckout, { UseSavedCards } from '../paymentOptions/UseSavedCards';

export default class FourthStep extends Component {

    render() {
        return (
            <>
                <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-xs-12 left-9 right-10">
                    <h4 className="muted-text">Payment</h4>
                    <div className="alert alert-warning">
                        Currently, payment on delivery is in beta mode. Soon it will be available.
                    </div>
                    <p className="muted-text">Please fill your card details</p>
                    <StripeCheckoutForm />
                    <br />
                    <UseSavedCards />
                    {/* <p className="alert alert-info">We do not save your card details.</p> */}
                </div>
            </>
        )
    }
}
