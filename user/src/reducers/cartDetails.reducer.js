import { userConstants } from '../constants';
import { initialState } from './authentication.reducer';

/**
 * 
 * This files includes all the reducers related to retrieving cart details of a user 
 * 
**/

/**
 * 
 * @param {object} state The state of the app. Initialised to the intialstate
 * @param {object} action The action that is dispatched
 */
export function getCartDetails(state = initialState, action) {

    switch(action.type) {
        
        // Requested Cart Details
        case userConstants.GET_CART_DETAILS_REQUEST:
            return {
                loading: true,
                error: false,
                cartDetails: [],
            };
        
        case userConstants.GET_CART_DETAILS_FAILURE:
            return {
                loading: false,
                error: true,
                cartDetails: action.payload,
            };
        
        case userConstants.GET_CART_DETAILS_SUCCESS:
            return {
                loading: false,
                error: false,
                cartDetails: action.payload,
            };

        default:
            return state;
    }

}

export function removeFromCart(state = initialState, action) {

    switch(action.type) {

        case userConstants.REMOVE_FROM_CART_FAILURE:
            return {
                removed: false,
            }
        
        case userConstants.REMOVE_FROM_CART_SUCCESS:
            return {
                removed: true,
            }
        
        default: return state;

    }

}