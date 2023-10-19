import { useState } from 'react'
import useTokens from 'hooks/useTokens'
import { useUser } from 'context/userContext'
import useRequestHandlers from 'hooks/useUserRequestHandlers'
import { inputInitialValues, InputProps } from 'interfaces/shared/input'
import { InputPasswordProps, passwordInitialValues } from 'interfaces/shared/inputPassword'

const useTeacherLogin = () => {
    const { userDispatch } = useUser()
    const { storeUserTokens } = useTokens()
    const { loginHandler } = useRequestHandlers()
    const [loading, setLoading] = useState<boolean>(false)
    const [pageErrors, setPasswordErrors] = useState<any>([])
    const [userName, setUserName] = useState<InputProps>(inputInitialValues)
    const [password, setPassword] = useState<InputPasswordProps>(passwordInitialValues)
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    // Get username from user
    const userNameHandler = (newValue: string) => {
        setUserName({
            value: newValue.trim(),
            length: newValue.trim().length,
            error: false,
            helperText: '',
        })
    }

    // Get password from user
    const passwordHandler = (newValue: string) => {
        setPassword((password) => ({
            ...password,
            value: newValue,
            length: newValue.trim().length,
            error: false,
            helperText: '',
        }))
    }

    // Get password from user
    const showPasswordHandler = () => {
        setPassword((password) => ({
            ...password,
            show: !password.show,
        }))
    }

    // Get remember me state
    const rememberMeHandler = () => {
        setRememberMe(!rememberMe)
    }

    // Validate data before collect it
    const validation = () => {
        let state = true

        if (!userName.length) {
            state = false
            setUserName((password) => ({
                ...password,
                error: true,
                helperText: 'يجب ادخال اسم المستخدم',
            }))
        }

        if (!password.length) {
            state = false
            setPassword((password) => ({
                ...password,
                error: true,
                helperText: 'يجب ادخال الرقم السري',
            }))
        } else if (password.length < 8) {
            state = false
            setPassword((password) => ({
                ...password,
                error: true,
                helperText: 'الرقم السري غير صحيح',
            }))
        }

        return state
    }

    // Collect data to submit it
    const collectData = () => {
        const data = {
            email: userName.value,
            password: password.value,
        }

        return data
    }

    // Submit data to api
    const submit = async () => {
        if (validation()) {
            try {
                setLoading(true)
                const data = collectData()
                const res = await loginHandler(data)
                storeUserTokens(res, rememberMe)
                userDispatch({
                    type: 'setTokens',
                    payload: {
                        accessToken: res.token,
                        refreshToken: res.refreshToken,
                        accessTokenExpiry: new Date(res.tokenExpiryTime),
                        refreshTokenExpiry: new Date(res.refreshTokenExpiryTime),
                    },
                })
            } catch (error) {
                setPasswordErrors([
                    {
                        name: 'loginError',
                        value: 'اسم المستخدم او الرقم السري غير صحيح',
                    },
                ])
            } finally {
                setLoading(false)
            }
        }
    }

    return {
        states: {
            loading,
            userName,
            password,
            pageErrors,
            rememberMe,
        },
        actions: {
            userNameHandler,
            passwordHandler,
            showPasswordHandler,
            rememberMeHandler,
            submit,
        },
    }
}

export default useTeacherLogin
