import axios from 'axios';
import { userConstants } from '../constants';

import { services } from './refreshToken';
 
export const userService = {
    login,
    logout,
    passwordReset
};

function login(email, password) {
    let bodydata = new FormData();
    bodydata.append('email', email);
    bodydata.append('password', password);
    return axios({
        method:"POST",
        url: userConstants.API_HEADER + "/onboarding/auth/jwt/create/",
        data: bodydata,
        headers: {'Content-Type': 'multipart/form-data' },
    })
    .then(handleResponse)
    .then(user => {
        // login successful if there's a jwt token in the response
        if (user.access) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            console.log("SUCCESS");
            var path = window.location.protocol + '//' + window.location.host + '/';
            window.location.replace(path);
        }

        return user;
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}


function handleResponse(response) {

    // console.log(response);
    if(response.status !== 200) {
        if (response.status === 401) {
            // logout();
            // window.location.reload(true);
        }

        return response;
    }

    return response.data;
}

function passwordReset(cur_pass, new_pass) {
    let bodydata = new FormData();
    bodydata.append('current_password', cur_pass);
    bodydata.append('new_password', new_pass);
    return services.refreshToken().then(() => {
        return axios({
        method: "POST",
        url: userConstants.API_HEADER + "/onboarding/users/set_pass/",
        data: bodydata,
        headers: {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).access,
            'Content-Type': 'multipart/form-data',
        },
    })})
}
