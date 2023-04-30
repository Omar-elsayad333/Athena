import { Routes } from './Routes'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useTokens from 'hooks/useTokens'
import { useUser } from 'context/userContext'
import { NextComponentType, NextPageContext } from 'next'
import Loading from 'components/Loading/Loading'

type ComponentNext = NextComponentType<NextPageContext, any, {}>

export const withPublic = (WrappedComponent: ComponentNext) => (props: any) => {
    const router = useRouter()
    const { checkTokens } = useTokens()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        typeof window != 'undefined' && checkTokens()
            ? router.replace(Routes.teacherHome)
            : setIsLoading(false)
    }, [])

    if (isLoading) {
        return <Loading />
    }

    // If the user is not authenticated, render the wrapped component
    return <WrappedComponent {...props} />
}

export const withAuth = (WrappedComponent: ComponentNext) => (props: any) => {
    const router = useRouter()
    const { userState } = useUser()
    const { checkTokens } = useTokens()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        typeof window !== 'undefined' && !checkTokens()
            ? router.replace(Routes.teacherLogin)
            : setIsLoading(false)
    }, [userState.tokens.accessToken])

    if (isLoading) {
        return <Loading />
    }

    // If the user is authenticated, render the wrapped component
    return <WrappedComponent {...props} />
}
