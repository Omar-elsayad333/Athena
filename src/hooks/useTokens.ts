import { axiosInstance } from 'config/axios'
import Urls from 'constant/urls'
import { useUser } from 'context/userContext'

const useTokens = () => {
    const { userState } = useUser()

    const checkAccessTokenExpiration = (tokens: any) => {
        // Check if tokens are present and access token is expired
        if (tokens?.accessTokenExpiry && new Date(tokens?.accessTokenExpiry) <= new Date()) {
            return false
        } else {
            return true
        }
    }

    const checkRefreshTokenExpiration = (tokens: any) => {
        if (tokens?.refreshTokenExpiry && new Date(tokens?.refreshTokenExpiry) <= new Date()) {
            return false
        } else {
            return true
        }
    }

    // Call api for new tokens
    const refreshTokens = async (tokens?: any) => {
        try {
            // Make API call to refresh tokens using the refresh token
            const res: any = await axiosInstance.post(Urls.URL_AUTH_TOKENS_REFRESH, {
                token: tokens.accessToken || userState.tokens?.accessToken,
                refreshToken: tokens.refreshToken || userState.tokens?.refreshToken,
            })
            // Update tokens in local or session storage and UserContext
            const storage = localStorage.getItem('athena_access_token') ? true : false
            storeUserTokens(res.data, storage)
            return res
        } catch (err: any) {
            return false
        }
    }

    // Store user token on local storage
    const storeUserTokens = (tokens: any, remeberMe: boolean) => {
        const storage = remeberMe ? localStorage : sessionStorage
        storage.setItem('athena_access_token', tokens.token)
        storage.setItem('athena_refresh_token', tokens.refreshToken)
        storage.setItem('athena_access_exp', tokens.tokenExpiryTime)
        storage.setItem('athena_refresh_exp', tokens.refreshTokenExpiryTime)
    }

    // Clear user tokens from local storage
    const clearUserTokens = () => {
        if (typeof localStorage != 'undefined') {
            localStorage.removeItem('athena_access_token')
            localStorage.removeItem('athena_refresh_token')
            localStorage.removeItem('athena_access_exp')
            localStorage.removeItem('athena_refresh_exp')
            sessionStorage.removeItem('athena_access_token')
            sessionStorage.removeItem('athena_refresh_token')
            sessionStorage.removeItem('athena_access_exp')
            sessionStorage.removeItem('athena_refresh_exp')
        }
    }

    return {
        refreshTokens,
        storeUserTokens,
        clearUserTokens,
        checkAccessTokenExpiration,
        checkRefreshTokenExpiration,
    }
}

export default useTokens
