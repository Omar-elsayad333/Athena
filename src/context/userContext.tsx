import useTokens from 'hooks/useTokens'
import { userReducer } from 'reducers/userReducer'
import useUserRequestHandlers from 'hooks/useUserRequestHandlers'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { initialState, UserContextType, UserProviderProps } from 'interfaces/testUserInterface'

export const UserContext = createContext<UserContextType>({
    logout: () => {},
    userDispatch: () => {},
    userState: initialState,
})

export const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
    const { clearUserTokens } = useTokens()
    const { getUserData } = useUserRequestHandlers()
    const [userState, userDispatch] = useReducer(userReducer, initialState)

    // Check if there is any tokens in local or session stroage
    useEffect(() => {
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
            new Date(accessTokenExpiry) > new Date() &&
            new Date(refreshTokenExpiry) > new Date()
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
            userDateHandler(accessToken)
        } else {
            storage.removeItem('athena_access_token')
            storage.removeItem('athena_refresh_token')
            storage.removeItem('athena_access_exp')
            storage.removeItem('athena_refresh_exp')
        }
    }, [])

    const userDateHandler = async (token: string) => {
        try {
            const userData = await getUserData(token)
            userDispatch({
                type: 'setUser',
                payload: userData,
            })
        } catch (error) {
            logout()
        }
    }

    // Print user tokens in console
    useEffect(() => {
        console.table(userState.tokens)
    }, [userState.tokens])

    // Print user data in console
    useEffect(() => {
        console.table(userState.user)
    }, [userState.user])

    // Logout user
    const logout = () => {
        clearUserTokens()
        userDispatch({ type: 'clearTokens' })
        location.reload()
    }

    return (
        <UserContext.Provider value={{ userState, userDispatch, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
