import axios from "axios";
import { 
    URL_MAIN,
} from 'constant/url';

// Actions to login for user and admin
export const postHandler = (authorization: string, path: string, data: any) => {
    return new Promise ((resolved, rejected) => {
        axios({
            url: `${URL_MAIN}${path}`,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': `Bearer ${authorization}`
            },  
            data
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

// Actions to login for user and admin
export const getHandler = (authorization: string, path: string) => {
    return new Promise ((resolved, rejected) => {
        axios({
            url: `${URL_MAIN}${path}`,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': `Bearer ${authorization}`
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

// Actions to login for user and admin
export const getHandlerById = (id: string | string[] | undefined, authorization: string, path: string) => {
    return new Promise ((resolved, rejected) => {
        axios({
            url: `${URL_MAIN}${path}/${id}`,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authorization}`
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

// Actions to login for user and admin
export const putHandler = (id: string | string[] | undefined, authorization: string, path: string, data: any) => {
    return new Promise ((resolved, rejected) => {
        axios({
            url: `${URL_MAIN}${path}/${id}`,
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authorization}`
            },
            data
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

// Actions to login for user and admin
export const deleteHandler = (id: string | string[] | undefined, authorization: string, path: string) => {
    return new Promise ((resolved, rejected) => {
        axios({
            url: `${URL_MAIN}${path}/${id}`,
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authorization}`
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