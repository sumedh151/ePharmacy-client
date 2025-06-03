import axios from 'axios';
import { userConstants } from '../constants';


export const services = {
    refreshToken,
    handleResponse,
}

/**
 * To refresh the JWT token everytime it expires
 */
function refreshToken() {
    // console.log("Refresh Token")
    const user = localStorage.getItem('user');

    if(user  !== null) {
        const userRefreshToken = JSON.parse(user).refresh;

        // console.log(userRefreshToken)

        return axios({
            method: 'POST',
            url: userConstants.API_HEADER + '/onboarding/auth/jwt/refresh/',
            data: JSON.stringify({refresh: userRefreshToken}),
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.data)
        .then(data => {
            // console.log("data",data.access);
            if(data.access) {
                // localStorage.removeItem('user');
                localStorage.setItem('user',JSON.stringify({
                    refresh: userRefreshToken,
                    access: data.access,
                }));

                return localStorage.getItem('user')
            }

            return 'error'
        });
    }
}


/**
 * 
 * @param {*} response
 * Returns data if response status is successful 
 */
function handleResponse(response) {
    if (response.status !== 200) {
        return Promise.reject(response.status)
    }
    return response.data
}