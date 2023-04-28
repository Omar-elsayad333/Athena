import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import useTokens from 'hooks/useTokens'
import { userReducer } from 'reducers/userReducer'
import useRequestHandlers from 'handlers/useRequestHandlers'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { initialState, UserContextType, UserProviderProps } from 'interfaces/userInterfaces'

type Props = {
    children: React.ReactElement<any, any> & React.ReactNode
}

const UserContext = createContext<UserContextType>({
    getUser: () => null,
    logoutUser: () => null,
    userState: initialState,
    userDispatch: () => null,
})

export const UserProvider: React.FC<Props> = ({ children }: UserProviderProps) => {
    const router = useRouter()
    const { getUserData } = useRequestHandlers()
    const [userState, userDispatch] = useReducer(userReducer, initialState)
    const {
        checkTokens,
        getNewTokens,
        clearUserTokens,
        checkAccessTokensExp,
        checkRefreshTokensExp,
    } = useTokens()

    // // Check for user tokens
    // useEffect(() => {
    //     if (typeof window != 'undefined') {
    //         userDispatch({
    //             type: 'setTokens',
    //             payload: {
    //                 accessToken:
    //                     localStorage.getItem('athena_access_token') ||
    //                     sessionStorage.getItem('athena_access_token') ||
    //                     null,
    //                 refreshToken:
    //                     localStorage.getItem('athena_refresh_token') ||
    //                     sessionStorage.getItem('athena_refresh_token') ||
    //                     null,
    //                 accessTokenExpireAt:
    //                     localStorage.getItem('athena_access_exp') ||
    //                     sessionStorage.getItem('athena_access_exp') ||
    //                     null,
    //                 refreshTokenExpireAt:
    //                     localStorage.getItem('athena_refresh_exp') ||
    //                     sessionStorage.getItem('athena_refresh_exp') ||
    //                     null,
    //             },
    //         })
    //     }
    // }, [])

    // Check if user tokens is good to use
    useEffect(() => {
        if (typeof window !== 'undefined' && checkTokens()) {
            if (!checkAccessTokensExp()) {
                if (checkRefreshTokensExp()) {
                    getNewTokens()
                }
            } else if (typeof window !== 'undefined') {
                userDispatch({
                    type: 'setTokens',
                    payload: {
                        accessToken:
                            localStorage.getItem('athena_access_token') ||
                            sessionStorage.getItem('athena_access_token') ||
                            null,
                        refreshToken:
                            localStorage.getItem('athena_refresh_token') ||
                            sessionStorage.getItem('athena_refresh_token') ||
                            null,
                        accessTokenExpireAt:
                            localStorage.getItem('athena_access_exp') ||
                            sessionStorage.getItem('athena_access_exp') ||
                            null,
                        refreshTokenExpireAt:
                            localStorage.getItem('athena_refresh_exp') ||
                            sessionStorage.getItem('athena_refresh_exp') ||
                            null,
                    },
                })
            }
        }
    }, [])

    useEffect(() => {
        if (userState.tokens.accessToken) {
            getUser(userState.tokens.accessToken)
        }
    }, [userState.tokens.accessToken])

    // Get user data
    const getUser = async (token: string) => {
        try {
            userDispatch({ type: 'activeLoading' })
            const response: any = await getUserData(token)
            userDispatch({
                type: 'setUser',
                payload: response,
            })
        } catch (error) {
            clearUserTokens()
            userDispatch({ type: 'clearTokens' })
            router.push(Routes.home)
        } finally {
            userDispatch({ type: 'disactiveLoading' })
        }
    }

    // Logout user from system
    const logoutUser = () => {
        clearUserTokens()
        userDispatch({ type: 'clearUser' })
        userDispatch({ type: 'clearTokens' })
    }

    return (
        <UserContext.Provider value={{ userState, userDispatch, getUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    )
}

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext)
