import axios from 'axios'

// Axios without token
const axiosInstance = axios.create({
    baseURL: 'https://athena.linkers.at',
    headers: {
        'Content-Type': 'application/json',
    },
})

// Axios with token
const createAxiosInstance = (token: string) => {
    const instance = axios.create({
        baseURL: 'https://athena.linkers.at',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })

    return instance
}

export { createAxiosInstance, axiosInstance }
