import axios from 'axios';

export const userService = {
    login,
    logout,
};

function login(email, password) {
    let bodydata = new FormData();
    bodydata.append('email', email);
    bodydata.append('password', password);
    console.log(bodydata, email, password);
    return axios({
        method:"POST",
        url:"http://localhost:8000/onboarding/auth/jwt/create/",
        data: bodydata,
        headers: {'Content-Type': 'multipart/form-data' },
    })
    .then(handleResponse)
    .then(user => {
        // login successful if there's a jwt token in the response
        console.log(user);
        if (user.access) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            console.log("SUCCESS");
            var path = window.location.protocol + '//' + window.location.host + '/user_logged_in';
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

    console.log(response);
    if(response.status !== 200) {
        if (response.status === 401) {
            logout();
            window.location.reload(true);
        }

        return Promise.reject(response.status);
    }

    return response.data;
}