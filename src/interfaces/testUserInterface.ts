import { ReactNode } from 'react'

export interface UserState {
    user: any
    userLoading: boolean
    tokens: {
        accessToken: string | null
        refreshToken: string | null
        accessTokenExpiry: string | null | Date
        refreshTokenExpiry: string | null | Date
    } | null
}

export type UserAction =
    | { type: 'clearUser' }
    | { type: 'clearTokens' }
    | { type: 'activeLoading' }
    | { type: 'disactiveLoading' }
    | { type: 'setUser'; payload: any }
    | { type: 'setTokens'; payload: UserState['tokens'] }

export type UserContextType = {
    userState: UserState
    userDispatch: Function
    logout: Function
}

export interface UserProviderProps {
    children: ReactNode
}

export const initialState: UserState = {
    user: null,
    tokens: null,
    userLoading: false,
}
