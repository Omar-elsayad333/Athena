import useTokens from 'hooks/useTokens'
import { userReducer } from 'reducers/userReducer'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { initialState, UserContextType, UserProviderProps } from 'interfaces/testUserInterface'

export const UserContext = createContext<UserContextType>({
    logout: () => {},
    userDispatch: () => {},
    userState: initialState,
})

export const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
    const { clearUserTokens } = useTokens()
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
        } else {
            storage.removeItem('athena_access_token')
            storage.removeItem('athena_refresh_token')
            storage.removeItem('athena_access_exp')
            storage.removeItem('athena_refresh_exp')
        }
    }, [])

    // Print user tokens in console
    useEffect(() => {
        console.table(userState.tokens)
    }, [userState.tokens])

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
