import Urls from 'constant/urls'
import { axiosInstance, createAxiosInstance } from 'config/axios'

const useUserRequestHandlers = () => {
    // Actions to login for user and admin
    const loginHandler = async (data: object) => {
        try {
            const response = await axiosInstance.post(Urls.URL_AUTH_TOKENS, data)
            return response.data
        } catch (error: any) {
            throw Error(error.response.data.error)
        }
    }

    // Handle refresh token request
    const getRefreshToken = async (data: any) => {
        try {
            const response = await axiosInstance.post(Urls.URL_AUTH_TOKENS_REFRESH, data)
            return response.data
        } catch (error: any) {
            throw Error(error.response.data.error)
        }
    }

    // Handle get user data
    const getUserData = async (token: string) => {
        const axiosInstanceWithToken = createAxiosInstance(token)

        try {
            const response = await axiosInstanceWithToken.get(Urls.URL_DASHBOARD_TEACHERS_BASE)
            return response.data
        } catch (error: any) {
            throw Error(error.response.data.error)
        }
    }

    return { loginHandler, getRefreshToken, getUserData }
}

export default useUserRequestHandlers
