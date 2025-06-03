import { userConstants } from '../constants';

let user = localStorage.getItem('user');
export const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        loggedIn: false,
        user: action.user,
        error: false,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        loggingIn: true,
        user: action.user,
        error: false,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggingIn: false,
        loggedIn: false,
        error: true,
      };
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
      };
    default:
      return state
  }
}