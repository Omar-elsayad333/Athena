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
        userState.tokens ? router.replace(Routes.teacherHome) : setIsLoading(false)
    }, [userState.tokens])

    if (isLoading) {
        return <Loading />
    }

    // If the user is not authenticated, render the wrapped component
    return <WrappedComponent {...props} />
}

export const withAuth = (WrappedComponent: React.ComponentType<any>) => {
    const WrapperComponent: React.FC<any> = (props) => {
        const router = useRouter()
        const { userState } = useUser()
        const { checkTokenExpiration } = useTokens()
        const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {
            if (!userState.tokens) {
                router.replace(Routes.teacherLogin) // Redirect to login page if user or tokens are not available
            } else {
                checkTokenExpiration()
                setIsLoading(false)
            }
        }, [userState.tokens])

        if (isLoading) {
            return <Loading /> // Show loading component while checking for user data or refreshing tokens
        }

        return <WrappedComponent {...props} />
    }

    return WrapperComponent
}
