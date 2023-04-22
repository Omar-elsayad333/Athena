import { UserState, UserAction } from 'interfaces/userInterfaces'

export const userReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case 'setTokens':
            return {
                ...state,
                tokens: {
                    accessToken: action.payload.accessToken,
                    refreshToken: action.payload.refreshToken,
                    accessTokenExpireAt: action.payload.accessTokenExpireAt,
                    refreshTokenExpireAt: action.payload.refreshTokenExpireAt,
                },
            }
        case 'clearTokens':
            return {
                ...state,
                user: null,
                tokens: {
                    accessToken: null,
                    refreshToken: null,
                    accessTokenExpireAt: null,
                    refreshTokenExpireAt: null,
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
