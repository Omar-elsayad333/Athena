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
                resolved(res);
            },
            (rej) => {
                rejected(rej);
            }
        )
    });
}; 