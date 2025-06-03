import React, { Component } from 'react'
import { eCommerceProcessServices } from '../../../services/eCommerceProcess';

export class UseSavedCards extends Component {

    constructor(props) {
        super(props)

        this.state= {
            loading: true,
            error: false,
        }
    }

    componentDidMount() {
        eCommerceProcessServices.getPaymentDetails()
        .then(
            data => {
                if(data.cards) {
                    this.setState({
                        loading: false,
                        error: false,
                        data: data.cards
                    })
                }
                else {
                    this.setState({
                        loading: false,
                        error: true,
                        errorMessage: "No saved cards found! Please use a new card."
                    })    
                }
                console.log(data)
            },
            error => {
                this.setState({
                    loading: false,
                    error: true,
                    errorMessage: error.messsage
                })
            }
        )
    }

    render() {
        if(this.state.loading) {
            return (
                <h3 classname="h3 text-center">Loading saved card details....<br/>Please wait.</h3>
            )
        }

        else if(this.state.error) {
            return (
                <div className="alert alert-danger text-center">
                    <h4 className="h4">
                        <i className="twa twa-2x twa-pensive"></i>
                    </h4>
                    <h3 className="h3">
                        Some error has occurred! Try refreshing the page or try again later.
                        <br />
                        Error message : {this.state.errorMessage}
                    </h3>
                </div>
            )
        }

        return (
            <div className="row">
                {this.state.data.map((card, index) => {
                    return (
                        <div className="col-md-3 col-sm-10 border rounded my-1 mx-1">
                            {card.brand}&nbsp;{card.last4}
                            <br />
                            {card.country}
                            <br />
                            {card.exp_month} / {card.exp_year}
                        </div>
                    )
                })}
                Use Saved Cards
            </div>
        )
    }
}

export default UseSavedCards
