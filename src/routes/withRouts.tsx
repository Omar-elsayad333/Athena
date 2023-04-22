import { useRouter } from 'next/router'
import Loading from 'components/Loading/Loading'
import { NextComponentType, NextPageContext } from 'next'
import { Routes } from './Routes'
import useTokens from 'hooks/useTokens'

type ComponentNext = NextComponentType<NextPageContext, any, {}>

// export const withPublic = (Component: ComponentNext) => (props: any) => {
//     const router = useRouter()
//     const { authToken } = useUser()

//     if (typeof window !== 'undefined') {
//         if (
//             localStorage.getItem('athena-token') ||
//             localStorage.getItem('athena-token') ||
//             authToken
//         ) {
//             router.replace(Routes.teacherHome)
//             return <Loading />
//         }
//     }

//     return <Component {...props} />
// }

export const withProtected = (Component: any) => (props: any) => {
    const router = useRouter()
    // const { authToken } = useUser();

    if (typeof window !== 'undefined') {
        if (!localStorage.getItem('athena-token') && !sessionStorage.getItem('athena-token')) {
            router.replace(Routes.teacherLogin)
            return <Loading />
        }
    }

    return <Component {...props} />
}

export const withPublic = (WrappedComponent: ComponentNext) => (props: any) => {
    const router = useRouter()
    const { checkTokens } = useTokens()

    if (!checkTokens()) {
        // If the user is not authenticated, render the wrapped component
        return <WrappedComponent {...props} />
    }

    // If the user is authenticated, do not render the wrapped component
    return router.replace(Routes.home)
}

export const withAuth = (WrappedComponent: ComponentNext) => (props: any) => {
    const router = useRouter()
    const { checkTokens, checkAccessTokensExp, checkRefreshTokensExp, getNewTokens } = useTokens()

    if (!checkTokens()) {
        return router.replace(Routes.teacherLogin)
    }

    if (checkAccessTokensExp()) {
        // If the user is authenticated, render the wrapped component
        return <WrappedComponent {...props} />
    }

    if (!checkRefreshTokensExp()) {
        return router.replace(Routes.teacherLogin)
    }

    if (!getNewTokens()) {
        return router.replace(Routes.teacherLogin)
    }

    // If the user is authenticated, render the wrapped component
    return <WrappedComponent {...props} />
}
