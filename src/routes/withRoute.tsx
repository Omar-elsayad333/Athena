import { Routes } from './Routes'
import { useRouter } from 'next/router'
import useTokens from 'hooks/useTokens'
import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import Loading from 'components/Loading/Loading'
import { NextComponentType, NextPageContext } from 'next'

type ComponentNext = NextComponentType<NextPageContext, any, {}>

export const withPublic = (WrappedComponent: ComponentNext) => (props: any) => {
    const router = useRouter()
    const { userState } = useUser()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        userState.tokens?.accessToken ? router.replace(Routes.teacherHome) : setIsLoading(false)
    }, [userState.tokens?.accessToken])

    if (isLoading) {
        return <Loading />
    }

    // If the user is not authenticated, render the wrapped component
    return <WrappedComponent {...props} />
}

export const withAuth = (WrappedComponent: React.ComponentType<any>) => {
    const WrapperComponent: React.FC<any> = (props) => {
        const router = useRouter()
        const { userState, userDispatch } = useUser()
        const { refreshTokens, checkAccessTokenExpiration, checkRefreshTokenExpiration } =
            useTokens()
        const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {
            checForTokens()
        }, [userState.tokens])

        const checForTokens = async () => {
            const storage = localStorage.getItem('athena_access_token')
                ? localStorage
                : sessionStorage
            if (!userState.tokens && !storage.getItem('athena_access_token')) {
                // Redirect to login page if user or tokens are not available
                router.replace(Routes.teacherLogin)
            } else {
                if (userState.tokens?.accessToken && checkAccessTokenExpiration(userState.tokens)) {
                    setIsLoading(false)
                } else if (
                    userState.tokens?.refreshToken &&
                    checkRefreshTokenExpiration(userState.tokens)
                ) {
                    const res = await refreshTokens(userState.tokens)
                    res
                        ? userDispatch({
                              type: 'setTokens',
                              payload: {
                                  accessToken: res.data.token,
                                  refreshToken: res.data.refreshToken,
                                  accessTokenExpiry: new Date(res.data.tokenExpiryTime),
                                  refreshTokenExpiry: new Date(res.data.refreshTokenExpiryTime),
                              },
                          })
                        : router.replace(Routes.teacherLogin)
                }
                setIsLoading(false)
            }
        }

        if (isLoading) {
            // Show loading component while checking for user data or refreshing tokens
            return <Loading />
        }

        return <WrappedComponent {...props} />
    }

    return WrapperComponent
}
