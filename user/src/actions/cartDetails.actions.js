import { userConstants } from '../constants';
import { cartDetailServices } from '../services/cartDetails';

/**
 * 
 * This files includes all the actions related to retrieving cart details of a user 
 * 
**/

/**
 * 
 * getCartDetails : Retrieves users cart details
 * Basically, all the items that were added to the cart
 * 
 */
export function getCartDetails() {
    return dispatch => {
        
        // Dispatch action
        cartDetailServices.getCartDetails()
        .then(
            data => {
                dispatch({
                    type: userConstants.GET_CART_DETAILS_SUCCESS, payload: data,
                })
            },
            error => {
                dispatch({
                    type: userConstants.GET_CART_DETAILS_FAILURE, payload: error,
                })
            }
        )
    };
}

export function removeItemFromCart(remove_url) {
    return dispatch => {

        cartDetailServices.removeItemFromCart(remove_url)
        .then(
            data => {
                dispatch({
                    type: userConstants.REMOVE_FROM_CART_SUCCESS, data: data,
                })
            },
            error => {
                dispatch({
                    type: userConstants.REMOVE_FROM_CART_FAILURE, data: error,
                })
            }
        )

    }
}