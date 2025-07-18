import { userConstants } from '../constants';
import { orderService } from '../services/order';

export const orderActions = {
    getAllOrders,
};

function getAllOrders() {
    return dispatch => {
        dispatch(request());

        orderService.getAllOrders()
            .then(
                orders => { 
                    dispatch(success(orders));
                },
                error => {
                    console.log(error);
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: userConstants.ALL_ORDER_REQUEST } }
    function success(orders) { return { type: userConstants.ALL_ORDER_SUCCESS, payload: orders } }
    function failure(error) { return { type: userConstants.ALL_ORDER_FAILURE } }
}
