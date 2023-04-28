import { Routes } from './Routes'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useTokens from 'hooks/useTokens'
import Loading from 'components/Loading/Loading'
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
    const { checkTokens, checkAccessTokensExp, checkRefreshTokensExp, getNewTokens } = useTokens()

    if (typeof window != 'undefined') {
        if (!checkTokens()) {
            router.replace(Routes.teacherLogin)
            return <Loading />
        }

        if (checkAccessTokensExp()) {
            // If the user is authenticated, render the wrapped component
            return <WrappedComponent {...props} />
        }

        if (!checkRefreshTokensExp()) {
            router.replace(Routes.teacherLogin)
            return <Loading />
        }

        if (!getNewTokens()) {
            router.replace(Routes.teacherLogin)
            return <Loading />
        }
    }

    // If the user is authenticated, render the wrapped component
    return <WrappedComponent {...props} />
}
