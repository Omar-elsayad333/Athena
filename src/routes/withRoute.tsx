import { Routes } from './Routes'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useTokens from 'hooks/useTokens'
import { useUser } from 'context/userContext'
import { NextComponentType, NextPageContext } from 'next'

type ComponentNext = NextComponentType<NextPageContext, any, {}>

export const withPublic = (WrappedComponent: ComponentNext) => (props: any) => {
    const router = useRouter()
    const { checkTokens } = useTokens()

    useEffect(() => {
        if (typeof window != 'undefined' && checkTokens()) {
            // If the user is authenticated, do not render the wrapped component
            router.replace(Routes.teacherHome)
        }
    }, [])

    // if (typeof window != 'undefined' && checkTokens()) {
    //     return <Loading />
    // }

    // If the user is not authenticated, render the wrapped component
    return <WrappedComponent {...props} />
}

export const withAuth = (WrappedComponent: ComponentNext) => (props: any) => {
    const router = useRouter()
    const { userState } = useUser()
    const { checkTokens } = useTokens()
    useEffect(() => {
        if (typeof window != 'undefined') {
            if (!checkTokens()) {
                router.replace(Routes.teacherLogin)
            }
        }
    }, [userState.tokens.accessToken])

    // If the user is authenticated, render the wrapped component
    return <WrappedComponent {...props} />
}
