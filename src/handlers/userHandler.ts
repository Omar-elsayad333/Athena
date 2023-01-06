import axios from "axios";
import { 
    URL_MAIN,
    URL_TOKENS,
    URL_TOKENS_REFRESH,
    URL_TEACHERS_BASE
} from 'constant/url';

// Actions to login for user and admin
export const loginHandler = (data: object) => {
    return new Promise ((resolved, rejected) => {
        axios({
            url: `${URL_MAIN}${URL_TOKENS}`,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },  
            data: data
        })
        .then(
            (res) => {
                localStorage.setItem('athena-token', res.data.token);
                resolved(res.data.token);
            },
            (rej) => {
                rejected(rej);
            }
        )
    });
}; 

// Actions to get user base
export const userObjectHandler = (Authorization:any ) => {
    return new Promise ((resolved, rejected) => {
        axios({
            url: `${URL_MAIN}${URL_TEACHERS_BASE}`,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization' : `Bearer ${Authorization}`
            },  
        })
        .then(
            (res) => {
                resolved(res.data);
            },
            (rej) => {
                rejected(rej);
            }
        )
    });
}; 

// Actions to get user base
export const photoHandler = (imagePath: any, Authorization: any) => {
    return new Promise ((resolved, rejected) => {
        axios({
            url: `${URL_MAIN}/${imagePath}`,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization' : `Bearer ${Authorization}`
            },  
        })
        .then(
            (res) => {
                resolved(res);
            },
            (rej) => {
                rejected(rej);
            }
        )
    });
}; 

// Actions to refresh the user token
export const refreshTokenHandler = () => {
    // function variables
    let error = true;

    // function logic
    axios({
        url: `${URL_MAIN}${URL_TOKENS_REFRESH}`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
            "refreshToken": localStorage.getItem('refreshToken')
        }
    })
    .then((res) => {
        localStorage.setItem('refreshToken', res.data.refreshToken);

        res.data.roles == 'Admin'? 
            localStorage.setItem('admin-token', res.data.accessToken): 
            localStorage.setItem('user-token', res.data.accessToken);

        error = false;
    })
    .catch((err) => {
        console.log(err);
    })

    return error
};

// Actions to regester for user
export const signUpHandler = (data: object) => {
    return new Promise ((resolved, rejected) => {
        axios({
            // url: `${URL_MAIN}${REGISTER_URL}`,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data
        })
        .then(
            (res) => {
                localStorage.setItem('role', res.data.roles)
                localStorage.setItem('token', res.data.accessToken);
                resolved(res);
            },
            (rej) => {
                rejected(rej.response.data);
            }
        );
    });
};

export const logout = () => {
    localStorage.removeItem('athena-token');
}