import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { axiosInstance } from 'config/axios'
import { useUser } from 'context/userContext'

const useTokens = () => {
    const router = useRouter()
    const { userState } = useUser()

    // Check the tokens expirys
    const checkTokenExpiration = async () => {
        // Check if tokens are present and access token is expired
        if (
            userState.tokens &&
            userState.tokens!.accessTokenExpiry &&
            new Date(userState.tokens!.accessTokenExpiry) <= new Date()
        ) {
            if (
                userState.tokens.refreshTokenExpiry &&
                new Date(userState.tokens.refreshTokenExpiry) <= new Date()
            ) {
                console.log('refresh token not good')
                router.replace(Routes.teacherLogin)
            } else {
                // Access token has expired, try refreshing tokens
                console.log('refresh token good')
                await refreshTokens({
                    token: userState.tokens.accessToken,
                    refreshToken: userState.tokens.refreshToken,
                })
            }
        }
    }

    // Call api for new tokens
    const refreshTokens = async (tokens?: any) => {
        try {
            console.log({
                token: tokens.accessToken || userState.tokens?.accessToken,
                refreshToken: tokens.refreshToken || userState.tokens?.refreshToken,
            })
            // Make API call to refresh tokens using the refresh token
            const res: any = await axiosInstance.post('/api/auth/tokens/refresh', {
                token: tokens.accessToken || userState.tokens?.accessToken,
                refreshToken: tokens.refreshToken || userState.tokens?.refreshToken,
            })
            // Update tokens in local or session storage and UserContext
            const storage = localStorage.getItem('athena_access_token') ? true : false
            storeUserTokens(res.data, storage)
            return res
        } catch (err: any) {
            throw Error(err)
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
        checkTokenExpiration,
        refreshTokens,
        storeUserTokens,
        clearUserTokens,
    }
}

export default useTokens
