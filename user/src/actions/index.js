import { userConstants } from '../constants';
import { userService } from '../services';

export const userActions = {
    login,
    logout,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { 
        // var path = window.location.protocol + '//' + window.location.host + '/login';
        // window.location.replace(path);
        return { type: userConstants.LOGIN_FAILURE, error } 
    }
}

function logout() {
    userService.logout();
    // var path = window.location.protocol + '//' + window.location.host + '/login';
    // window.location.replace(path);
    // window.location.reload();
    return { type: userConstants.LOGOUT };
}