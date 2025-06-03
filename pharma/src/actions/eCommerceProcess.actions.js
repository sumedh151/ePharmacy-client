import { userConstants } from '../constants';
import { eCommerceProcessServices } from '../services/eCommerceProcess';

/**
 * The entire e-commerce process
 * The flow goes like this :
 * 1. Prescription Upload from frontend. On the backend, OCR and a response of list of medicines is sent.
 * 2. Adding the required medicines from the prescription to the cart (Add to cart functionality)
 * 3. Sending the shipping address / current location to the backend. The shipping address / current location 
 *    is geocoded to get the nearby pharmacies and the list of pharmacies is returned.
 * 4. A pharmacy is selected.
 * 5. According to the selected pharmacy, the price of the medicines (with the discount and taxes) is returned.
 * 6. User confirms the details and fills in the billing address (could be same as shipping address).
 * 7. Payment.
 */

/**
 * prescriptionUpload : Right now it has no params but when OCR
 * is added, params will be added the API endpoint will change.
 * There maybe change in some logic as well. 
 */
export function prescriptionUpload() {
    return dispatch => {
        
        // State change to prescription upload in process
        dispatch({type: userConstants.PRESCRIPTION_UPLOAD_REQUEST, request: 'In process'});

        // Dispatch action
        eCommerceProcessServices.prescriptionUpload()
        .then(
            data => {
                // console.log("Data from actions: ", data);
                dispatch({
                    type: userConstants.PRESCRIPTION_UPLOAD_SUCCESS, request: data
                });
            },
            error => {
                // console.log("Error from actions: ", error);
                dispatch({
                    type: userConstants.PRESCRIPTION_UPLOAD_FAILURE, request: error
                });
            }
        );
    }
}


/**
 * addToCart : Adds the item to the user cart
 * The add_to_cart_url is provided by the backend.
 * This url is used to add the item to the cart.
 */
export function addToCart(add_to_cart_url) {
    return dispatch => {

        // Disptach Action
        eCommerceProcessServices.addToCart(add_to_cart_url)
        .then(
            data => {
                // Successful API call
                dispatch({
                    type: userConstants.ADD_TO_CART_SUCCESS, payload: data
                })
            },

            error => {
                // Unsuccessful API call
                dispatch({
                    type: userConstants.ADD_TO_CART_FAILURE, payload: error
                })
            }
        )
    }
}