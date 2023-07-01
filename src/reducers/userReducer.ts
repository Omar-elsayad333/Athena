import { UserState, UserAction } from 'interfaces/testUserInterface'

export const userReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case 'setTokens':
            return {
                ...state,
                tokens: {
                    accessToken: action.payload!.accessToken,
                    refreshToken: action.payload!.refreshToken,
                    accessTokenExpiry: action.payload!.accessTokenExpiry,
                    refreshTokenExpiry: action.payload!.refreshTokenExpiry,
                },
            }
        case 'clearTokens':
            return {
                ...state,
                user: null,
                tokens: {
                    accessToken: null,
                    refreshToken: null,
                    accessTokenExpiry: null,
                    refreshTokenExpiry: null,
                },
            }
        case 'setUser':
            return {
                ...state,
                user: action.payload,
            }
        case 'clearUser':
            return {
                ...state,
                user: null,
            }
        case 'activeLoading':
            return {
                ...state,
                userLoading: true,
            }
        case 'disactiveLoading':
            return {
                ...state,
                userLoading: false,
            }
        default:
            throw new Error('Invalid action type')
    }
}
