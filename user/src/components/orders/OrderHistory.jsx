import React from 'react';
import { connect } from 'react-redux';

import OrderListItem from './OrderListItem';
import '../static/css/component/orderhistory.css';
import { orderActions } from '../../actions/orderActions';

class OrderHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            filter: 'All'
        };
    }

    handleChange = (e) => {
        this.setState({
            filter: e.target.value
        });
    }

    isFilterItem = (order) => {

        if (this.state.filter === 'All') {
            return true;
        }

        if (order.purchase_details.status === 'shipped' && this.state.filter === 'Delivered') {
            return true;
        } else if (order.purchase_details.status === 'refunded' && this.state.filter === 'Cancelled') {
            return true;
        } else if (order.purchase_details.status === 'created' && this.state.filter === 'Ongoing') {
            return true;
        } else {
            return false;
        }
    }

    componentDidMount() {
        this.props.dispatch(orderActions.getAllOrders());
    }

    render() {
        console.log(this.props)
        return(
            <React.Fragment>
                <div className="mx-auto semi-circle-peach">
                    <h1 className="h1 text-center font-weight-bold">Order History</h1>
                </div>
                <div className="mx-auto py-3">
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col text-right">
                                <form>
                                    <div class="form-group">
                                        <label>Filter By Status: </label>
                                        <select class="mx-3 form-control w-auto d-inline" id="filter" onChange={this.handleChange}>
                                        <option>All</option>
                                        <option>Ongoing</option>
                                        <option>Delivered</option>
                                        <option>Cancelled</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-block">
                {
                    !this.props.loading ? this.props.orders ? this.props.orders.map((order, id) => {
                        if (this.isFilterItem(order)) { return <OrderListItem {...order} key={id}/> } else return <></>
                    }) : <div className="m-5 text-center"><h1 className="text-muted">No orders yet!</h1></div> : <div className="m-5 text-center"><h1 className="text-muted">Fetching Data!</h1></div>
                }
                {
                    this.props.error ? <p className="alert alert-danger">
                        No orders yet! Refresh if you think this is an error
                    </p> : <></>
                }
                </div>

            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    console.log()
    const { orders, loading, error } = state.order;
    return {
        orders,
        loading,
        error
    };
}

const connectedOrderHistory = connect(mapStateToProps)(OrderHistory);
export { connectedOrderHistory as OrderHistory }; 