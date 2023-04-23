import { useUser } from 'context/userContext'
import useRequestHandlers from 'handlers/useRequestHandlers'

const useTokens = () => {
    const { userDispatch } = useUser()
    const { getRefreshToken, getUserData } = useRequestHandlers()

    // Check if the user have tokens
    const checkTokens = () => {
        if (typeof window !== 'undefined') {
            if (
                !localStorage.getItem('athena_access_token') &&
                !sessionStorage.getItem('athena_access_token')
            ) {
                return false
            }

            if (
                !localStorage.getItem('athena_refresh_token') &&
                !sessionStorage.getItem('athena_refresh_token')
            ) {
                return false
            }

            if (
                !localStorage.getItem('athena_access_exp') &&
                !sessionStorage.getItem('athena_access_exp')
            ) {
                return false
            }

            if (
                !localStorage.getItem('athena_refresh_exp') &&
                !sessionStorage.getItem('athena_refresh_exp')
            ) {
                return false
            }
        }

        return true
    }

    // Check for the expireation date of access token
    const checkAccessTokensExp = () => {
        const accessTokenExpireAt: string | null =
            localStorage.getItem('athena_access_exp') ||
            sessionStorage.getItem('athena_access_exp') ||
            null

        // Create a Date object from the API date string
        const apiDate = new Date(accessTokenExpireAt!)

        // Get the current date and time
        const currentDate = new Date()

        if (currentDate.getTime() >= apiDate.getTime()) {
            return false
        }

        return true
    }

    // Check for the expireation date of refresh token
    const checkRefreshTokensExp = () => {
        const refreshTokenExpireAt: string | null =
            localStorage.getItem('athena_refresh_exp') ||
            sessionStorage.getItem('athena_refresh_exp') ||
            null

        // Create a Date object from the API date string
        const apiDate = new Date(refreshTokenExpireAt!)

        // Get the current date and time
        const currentDate = new Date()

        if (currentDate.getTime() >= apiDate.getTime()) {
            clearUserTokens()
            return false
        }

        return true
    }

    // Give the user new tokens with the refresh token
    const getNewTokens = async () => {
        let rememberMe = true
        localStorage.getItem('athena_access_token') ? (rememberMe = true) : (rememberMe = false)

        const tokens = {
            token:
                localStorage.getItem('athena_access_token') ||
                sessionStorage.getItem('athena_access_token'),
            refreshToken:
                localStorage.getItem('athena_refresh_token') ||
                sessionStorage.getItem('athena_refresh_token'),
        }

        try {
            userDispatch({ type: 'activeLoading' })
            const newTokens: any = await getRefreshToken(tokens)
            const userData: any = await getUserData(newTokens.accessToken)
            storeUserTokens(newTokens, rememberMe)
            userDispatch({ type: 'setUser', payload: userData })
            userDispatch({
                type: 'setTokens',
                payload: {
                    accessToken: newTokens.token,
                    refreshToken: newTokens.refreshToken,
                    accessTokenExpireAt: newTokens.tokenExpiryTime,
                    refreshTokenExpireAt: newTokens.refreshTokenExpiryTime,
                },
            })
            return true
        } catch (error) {
            console.log(error)
            clearUserTokens()
            return false
        } finally {
            userDispatch({ type: 'disactiveLoading' })
        }
    }

    // Store user token on local storage
    const storeUserTokens = (tokens: any, remeberMe: boolean) => {
        if (remeberMe) {
            localStorage.setItem('athena_access_token', tokens.token)
            localStorage.setItem('athena_refresh_token', tokens.refreshToken)
            localStorage.setItem('athena_access_exp', tokens.tokenExpiryTime)
            localStorage.setItem('athena_refresh_exp', tokens.refreshTokenExpiryTime)
        } else {
            sessionStorage.setItem('athena_access_token', tokens.token)
            sessionStorage.setItem('athena_refresh_token', tokens.refreshToken)
            sessionStorage.setItem('athena_access_exp', tokens.tokenExpiryTime)
            sessionStorage.setItem('athena_refresh_exp', tokens.refreshTokenExpiryTime)
        }
    }

    // Clear user tokens from local storage
    const clearUserTokens = () => {
        localStorage.removeItem('athena_access_token')
        localStorage.removeItem('athena_refresh_token')
        localStorage.removeItem('athena_access_exp')
        localStorage.removeItem('athena_refresh_exp')
        sessionStorage.removeItem('athena_access_token')
        sessionStorage.removeItem('athena_refresh_token')
        sessionStorage.removeItem('athena_access_exp')
        sessionStorage.removeItem('athena_refresh_exp')
    }

    return {
        checkTokens,
        getNewTokens,
        storeUserTokens,
        clearUserTokens,
        checkAccessTokensExp,
        checkRefreshTokensExp,
    }
}

export default useTokens
