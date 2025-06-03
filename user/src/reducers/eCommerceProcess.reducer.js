import { userConstants } from '../constants';
import { initialState } from './authentication.reducer';

/**
 * 
 * This files includes all the reducers related to the e-Commerce Process
 * 1. prescriptionUpload
 * 2. addToCart
 * 3. selectPharmacy
 * 4. checkout
 * 5. payment
 * 
 */

export function prescriptionUpload(state = initialState, action) {

    switch(action.type){
        /** 
         * Prescription upload 
        */ 
        case userConstants.PRESCRIPTION_UPLOAD_REQUEST:
            return {
                loading: true,
                medicines: [],
                error: false
            };
        
        case userConstants.PRESCRIPTION_UPLOAD_FAILURE:
            return {
                loading: false,
                medicines: action.request,
                error: true,
            };
        
        case userConstants.PRESCRIPTION_UPLOAD_SUCCESS:
            return {
                loading: false,
                medicines: action.request,
                error: false,
            };

        // Doesn't match any of the defined types
        default:
            return state;
    }
}


export function addToCart(state = initialState, action) {

    switch(action.type){
        /**
         * Add to Cart
         */
        case userConstants.ADD_TO_CART_FAILURE:
            return {
                added: false,
                data: action.payload,
            };
        
        case userConstants.ADD_TO_CART_SUCCESS:
            return {
                added: true,
                data: action.payload,
            }
        
        default:
            return state;
    }
}