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
        };
    }

    handleChange = (e) => {
        this.setState({
            filter: e.target.value
        });
    }

    componentWillUpdate(state, newstate) {
        //fetch new data, set state.
    } 

    componentDidMount() {
        this.props.dispatch(orderActions.getAllOrders());
    }

    render() {
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
                                        <option>Accepted</option>
                                        <option>Delivered</option>
                                        <option>Rejected</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-block">
                {
                    !this.props.loading && !this.props.error ? this.props.orders.map((order, id) => {
                        return <OrderListItem {...order} key={id}/>
                    }) : ''
                }
                </div>

            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { orders, loading, error } = state.order;
    return {
        orders,
        loading,
        error,
    };
}

const connectedOrderHistory = connect(mapStateToProps)(OrderHistory);
export { connectedOrderHistory as OrderHistory }; 
