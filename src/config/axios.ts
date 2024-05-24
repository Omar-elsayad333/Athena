import axios from 'axios'

// Axios without token
const axiosInstance = axios.create({
    baseURL: 'https://athenaserver.azurewebsites.net/',
    headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'ar',
    },
})

// Axios with token
const createAxiosInstance = (token: string) => {
    const instance = axios.create({
        baseURL: 'https://athenaserver.azurewebsites.net/',
        
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'Accept-Language': 'ar',
        },
    })

    return instance
}

export { createAxiosInstance, axiosInstance }

