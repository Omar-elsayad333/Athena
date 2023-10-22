import useTokens from 'hooks/useTokens'
import { userReducer } from 'reducers/userReducer'
import useUserRequestHandlers from 'hooks/useUserRequestHandlers'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { initialState, UserContextType, UserProviderProps } from 'interfaces/testUserInterface'
import { useRouter } from 'next/router'
import { Routes } from 'routes/Routes'
import Loading from 'components/Loading/Loading'

export const UserContext = createContext<UserContextType>({
    logout: () => {},
    userDispatch: () => {},
    userState: initialState,
})

export const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
    const router = useRouter()
    const { getUserData } = useUserRequestHandlers()
    const { clearUserTokens, refreshTokens } = useTokens()
    const [userState, userDispatch] = useReducer(userReducer, initialState)

    // Check if there is any tokens in local or session stroage
    useEffect(() => {
        checkForTokens()
    }, [])

    const checkForTokens = async () => {
        const storage = localStorage.getItem('athena_access_token') ? localStorage : sessionStorage
        const accessToken = storage.getItem('athena_access_token')
        const refreshToken = storage.getItem('athena_refresh_token')
        const accessTokenExpiry = storage.getItem('athena_access_exp')
        const refreshTokenExpiry = storage.getItem('athena_refresh_exp')

        // Check if tokens are present and not expired
        if (
            accessToken &&
            refreshToken &&
            accessTokenExpiry &&
            refreshTokenExpiry &&
            new Date(accessTokenExpiry) > new Date()
        ) {
            userDispatch({
                type: 'setTokens',
                payload: {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    accessTokenExpiry: new Date(accessTokenExpiry),
                    refreshTokenExpiry: new Date(refreshTokenExpiry),
                },
            })
        } else if (
            accessToken &&
            refreshToken &&
            refreshTokenExpiry &&
            new Date(refreshTokenExpiry) > new Date()
        ) {
            userDispatch({ type: 'activeLoading' })
            const res = await refreshTokens({
                accessToken: accessToken,
                refreshToken: refreshToken,
            })
            if (res) {
                userDispatch({
                    type: 'setTokens',
                    payload: {
                        accessToken: res.data.token,
                        refreshToken: res.data.refreshToken,
                        accessTokenExpiry: new Date(res.data.tokenExpiryTime),
                        refreshTokenExpiry: new Date(res.data.refreshTokenExpiryTime),
                    },
                })
                userDispatch({ type: 'disactiveLoading' })
            } else {
                clearUserTokens()
                userDispatch({ type: 'clearTokens' })
                userDispatch({ type: 'disactiveLoading' })
                router.replace(Routes.teacherLogin)
            }
        } else {
            clearUserTokens()
            userDispatch({ type: 'clearTokens' })
            router.replace(Routes.teacherLogin)
        }
    }

    const userDataHandler = async (token: string) => {
        try {
            userDispatch({ type: 'activeLoading' })
            const userData = await getUserData(token)
            userDispatch({
                type: 'setUser',
                payload: userData,
            })
        } catch (error) {
            logout()
        } finally {
            userDispatch({ type: 'disactiveLoading' })
        }
    }

    // Get user data
    useEffect(() => {
        if (userState.tokens?.accessToken) {
            userDataHandler(userState.tokens?.accessToken)
        }
    }, [userState.tokens?.accessToken])

    // Logout user
    const logout = () => {
        router.replace(Routes.teacherLogin)
        clearUserTokens()
        userDispatch({ type: 'clearTokens' })
    }

    return (
        <UserContext.Provider value={{ userState, userDispatch, logout }}>
            {userState.userLoading ? <Loading /> : children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
