import React from 'react';
import axios from 'axios';
import { userConstants } from '../../constants/';

import '../static/css/component/orderhistory.css';

export default class OrderView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        axios({
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).access,
                'Content-Type': 'multipart/form-data',
            },
            url:  userConstants.API_HEADER + '/products/order-history/' + (this.props.params.id ? this.props.params.id : -1),
         }).then(res => {
             this.setState({
                 data: res.data,
             });
         }).catch(err => {
             console.log(err);
             this.setState({
                 error: true,
             });
         })
    }

    render() {

        if (this.state.error) {
            return (
                <div className="container-fluid h-100 w-100">
                <div className="container h-100 w-100">
                    <div className="row h-100 justify-content-center align-items-center">
                    <div className="h-75 col-xl-10 col-lg-12 col-md-9">
                        <div className="card h-100 o-hidden border-0 shadow-lg">
                        <div className="card-body h-100 p-0">
                            <div className="row h-100">
                            <div className="col-lg-12 align-self-center">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h1 font-weight-bold text-gray-900 mb-4">Oh no!</h1>
                                        <h4 className="h5 text-muted">We encountered an error while fetching your order. Please check your order ID again</h4>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
        } else if (!this.state.data) {
            return (
                <div className="container-fluid h-100 w-100">
                <div className="container h-100 w-100">
                    <div className="row h-100 justify-content-center align-items-center">
                    <div className="h-75 col-xl-10 col-lg-12 col-md-9">
                        <div className="card h-100 o-hidden border-0 shadow-lg">
                        <div className="card-body h-100 p-0">
                            <div className="row h-100">
                            <div className="col-lg-12 align-self-center">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h1 font-weight-bold text-gray-900 mb-4">We're working on it!</h1>
                                        <h4 className="h5 text-muted">Fetching your order right now! Retry if this takes time.</h4>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
        }

        return(
            <React.Fragment>
                <div className="container py-5">
                    <div className="row pt-3 pb">
                        <div className="col-12 col-md-6">
                            {
                                this.state.data.purchase_details.status == 'shipped' ? <><h1 className="font-weight-bold">Delivered on</h1>
                                <h1 className="font-weight-bold">14th December 2020</h1></> 
                                :
                                    this.state.data.purchase_details.status == 'refunded' ? <><h1 className="font-weight-bold">Cancelled</h1></>
                                :
                                    <><h1 className="font-weight-bold">Order<br/>Processed</h1></>
                            }

                        </div>
                        <div className="col-12 col-md-6 text-right">
                            <h1 className="font-weight-bold text-muted">Seller:</h1>
                            <h3 className="font-weight-bold text-muted">ABC Pharama</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <strong>
                                Order placed on 12th December 2020
                            </strong>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col h3 text-muted">
                            <strong>Delivery Address:</strong> 18, Streetname, area code
                        </div>
                    </div>

                </div>

                <div className="container py-3">
                    <div className="row p-3 bg-baby-blue rounded">
                        <h3 className="text-white">Order Details:</h3>
                    </div>
                    <table className="table table-borderless mt-3">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Item Cost</th>
                            <th scope="col">Net Cost</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.data.items.map((item, id) => {
                                    return (<React.Fragment key={id}>
                                        <tr>
                                            <th scope="row">{id}</th>
                                            <td>{item.drug_name}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.retail_price_per_item}</td>
                                            <td>{item.total_item_price}</td>
                                        </tr>
                                    </React.Fragment>)
                                })
                            }
                            <tr>
                                <td colSpan="4">
                                    <hr className="font-weight-bold"/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4">Shipping Cost</td>
                                <td><strong>{this.state.data.purchase_details.shipping_total}</strong></td>
                            </tr>
                            <tr>
                                <td colSpan="4"><strong>Total Cost</strong></td>
                                <td><strong>{this.state.data.purchase_details.total}</strong></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}
