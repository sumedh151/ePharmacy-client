import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCartDetails, removeItemFromCart } from '../../../actions/cartDetails.actions';
import { addToCart } from '../../../actions/eCommerceProcess.actions';

export class index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            detailsReceived : false, 
        }
    }

    componentDidMount() {
        this.props.getCartDetails();
    }

    componentWillReceiveProps(nextprops) {
        if(nextprops.cartDetails) {
            this.setState({
                detailsReceived : true,
                cartItems: nextprops.cartDetails.items
            })

            console.log(this.cartItems)
        }
    }

    addItemToCart(add_url, index) {
        this.props.addToCart(add_url);

        this.state.cartItems[index].quantity = this.state.cartItems[index].quantity + 1;
        this.forceUpdate();
    }

    removeSingleItemFromCart(remove_url, index) {
        this.props.removeItemFromCart(remove_url);

        this.state.cartItems[index].quantity = this.state.cartItems[index].quantity - 1;
        this.forceUpdate();
    }

    removeFromCart(remove_url, index) {
        this.props.removeItemFromCart(remove_url);

        document.getElementById(index).style.display = "none";
    }

    render() {
        return (
            <div className="dashboard-container ">
                <div className="mx-auto text-center">
                    <h2 className="h2 font-weight-bold">
                        Cart Items
                    </h2>
                </div>
                <div className="mx-auto py-3">
                    
                    <div className="container-box">
                    
                        {this.props.loading &&
                            <h4 className="alert alert-info">Loading.....</h4>
                        }

                        {
                            !this.props.loading && this.props.error && this.props.cartDetails.response.status !== 400 &&                        
                            <p>
                                <span className="alert alert-danger">
                                    Some error has occurred! Couldn't load cart details.
                                    <br />
                                    
                                </span>

                            </p>
                        }

                        {!this.props.loading && this.props.error && (this.props.cartDetails.response.status === 400 || this.props.cartDetails.items.length === 0) &&
                            <div className="alert alert-warning text-center py-5">
                                <h4 className="h1">
                                    <i className="twa twa-shopping-trolley"></i>
                                    {'   '}Your cart is empty!
                                </h4>
                                <br />
                                <p>
                                    <a className="muted-text h6" href="/upload-prescription"> Start shopping now! </a>
                                </p>
                            </div>
                        }

                        {
                            !this.props.loading && !this.props.error && this.state.detailsReceived && 
                            this.state.cartItems !== [] &&
                            
                                // {console.log(this.props.cartDetails)}
                                <>
                                <table className="table table-responsive table-borderless table-hover" id="cart-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Per Item Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total Price</th>
                                            <th scope="col">&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    
                                        {this.state.cartItems.map((item, index) => {
                                            return (
                                                <tr key={index} id={index}>
                                                    <td scope="row">{index+1}</td>
                                                    <td>
                                                        {item.drug_name}
                                                    </td>
                                                    <td>{item.price}</td>
                                                    <td>
                                                        <div className="input-group mx-auto">
                                                            <div className="input-group-prepend">
                                                                <button 
                                                                    class="btn-outline-secondary btn-sm" 
                                                                    type="button" 
                                                                    id="button-addon1"
                                                                    onClick = {() => this.removeSingleItemFromCart(item['remove single item from cart url'], index)}
                                                                >
                                                                    -
                                                                </button>
                                                            </div>
                                                            <input 
                                                                type="text" 
                                                                class="form-control" 
                                                                aria-label="Amount (to the nearest dollar)" 
                                                                min="0"
                                                                value = {item.quantity}
                                                                // style = {{textAlign : 'center'}}
                                                                disabled
                                                                id = "cart-quantity-input"
                                                            />
                                                            <div className="input-group-append">
                                                                <button 
                                                                    class="btn-outline-secondary btn-sm" 
                                                                    type="button" 
                                                                    id="button-addon1"
                                                                    onClick = {() => this.addItemToCart(item['add to cart url'], index)}
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{item.total_item_price}</td>
                                                    <td>
                                                        <button 
                                                            className="btn btn-default" 
                                                            style={{backgroundColor: 'transparent', borderColor: 'transparent'}}
                                                            onClick = {() => this.removeFromCart(item['remove from cart'], index)}
                                                        >
                                                            <i className="twa twa-cross-mark"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            // <p key={index}>{item.drug_name}</p>
                                            )
                                        })}

                                    </tbody>
                                </table>
                                <br />
                                <a className="btn btn-primary-self" href="/process/2"
                                    // disabled = {document.getElementById('cart-table') !== null ? true : false }
                                >
                                    Checkout
                                </a>
                                
                                </>
                        }

                        {
                            !this.props.loading && !this.props.error && this.state.detailsReceived && 
                            this.state.getCartDetails === [] &&
                            <p className="text-danger">
                                Your cart is empty!
                                <br />
                                <a className="btn btn-default btn" href="/upload-prescription">Start Shopping</a>
                            </p>
                        }
                    </div>
                </div>          
            </div>
        )
    }

}

index.propTypes = {
    getCartDetails: PropTypes.func.isRequired,
    cartDetails: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    added: PropTypes.bool,
    removeItemFromCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    cartDetails: state.getCartDetails.cartDetails,
    loading: state.getCartDetails.loading,
    error: state.getCartDetails.error,
    added: state.addToCart.added
});

export default connect(mapStateToProps, { getCartDetails, addToCart, removeItemFromCart })(index)
