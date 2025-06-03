import { userConstants } from '../constants';

export function order(state = {orders: [], loading: false}, action) {
  switch (action.type) {
    case userConstants.ALL_ORDER_REQUEST:
      return {
          loading: true,
          orders: [],
          error: false,
      };
    case userConstants.ALL_ORDER_SUCCESS:
        return {
            loading: false,
            orders: action.payload,
            error: false,
        };
    case userConstants.ALL_ORDER_FAILURE:
        return {
            loading: false,
            error: true,
            orders: [],
        };
    case userConstants.SINGLE_ORDER_REQUEST:
      return {};
    case userConstants.SINGLE_ORDER_SUCCESS:
        return {};
    case userConstants.SINGLE_ORDER_FAILURE:
        return {};
    default:
      return state
  }
}