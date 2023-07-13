import Urls from 'constant/urls'
import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import { convertFileToBase64 } from 'utils/converters'
import { useEffect, useState, useReducer } from 'react'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { editProfileReducer } from 'reducers/editProfileReducer'
import { editProfileInitialValues } from 'interfaces/profile/editProfileInterface'

const useEditProfile = () => {
    const router = useRouter()
    const { userState } = useUser()
    const [pageData, setPageData] = useState<any>(null)
    const { getHandler, putHandler, loading } = useRequestsHandlers()
    const { setSuccessMessage, setWarningMessage, setErrorMessage } = useAlert()
    const [state, dispatch] = useReducer(editProfileReducer, editProfileInitialValues)

    useEffect(() => {
        if (userState.tokens?.accessToken) {
            console.log(state)
            getPageData()
        }
    }, [userState.tokens?.accessToken])

    const getPageData = async () => {
        try {
            const response = await getHandler(userState.tokens?.accessToken!, Urls.URL_PROFILE)
            setPageData(response)
        } catch (error) {
            console.log(error)
        }
    }

    const handleInput = (value: string, index: any, name: string) => {
        index
        if (name == 'summary') {
            value.length > 1000 || state.inputs.summary.length == 1000
                ? dispatch({
                      type: 'UPDATE_INPUT',
                      name: name,
                      inputPayload: {
                          ...state.inputs.summary,
                          helperText: 'لا يمكن اضافة المجز التعريفي اكبر من 1000 حرف',
                      },
                  })
                : dispatch({
                      type: 'UPDATE_INPUT',
                      name: name,
                      inputPayload: {
                          error: false,
                          helperText: '',
                          value: value,
                          length: value.length,
                      },
                  })
        } else {
            dispatch({
                type: 'UPDATE_INPUT',
                name: name,
                inputPayload: {
                    error: false,
                    helperText: '',
                    value: value,
                    length: value.length,
                },
            })
        }
    }

    const handleImageInput = async (value: any, name: string) => {
        const [fileToConvert] = value
        const convertedImage: any = await convertFileToBase64(fileToConvert)
        const image = {
            data: convertedImage,
            extension: `.${value[0].type.slice(6)}`,
        }
        dispatch({
            name: name,
            imagePayload: image,
            type: 'UPDATE_IMAGE_INPUT',
        })
    }

    const handleDateInput = async (value: any, name: string) => {
        dispatch({
            name: name,
            datePayload: {
                value: value.toISOString(),
                error: false,
                helperText: '',
            },
            type: 'UPDATE_DATE_INPUT',
        })
    }

    const collectData = () => {
        const dataToSubmit = {
            profileImage:
                state.imageInputs.profileImage.data && state.imageInputs.profileImage.extension
                    ? {
                          data: state.imageInputs.profileImage.data,
                          extension: state.imageInputs.profileImage.extension,
                      }
                    : null,
            coverImage:
                state.imageInputs.coverImage.data && state.imageInputs.coverImage.extension
                    ? {
                          data: state.imageInputs.coverImage.data,
                          extension: state.imageInputs.coverImage.extension,
                      }
                    : null,
            isProfileImageDeleted: false,
            isCoverImageDeleted: false,
            firstName: state.inputs.firstName.value || pageData.firstName,
            lastName: state.inputs.lastName.value || pageData.lastName,
            summary: state.inputs.summary.value || pageData.summary,
            birthDay: state.dateInputs.birthDay.value || pageData.birthDay,
            nationality: state.inputs.nationality.value || pageData.nationality,
            degree: state.inputs.degree.value || pageData.degree,
            school: state.inputs.school.value || pageData.school,
            teachingMethod: state.inputs.teachingMethod.value || pageData.teachingMethod,
            phone: state.inputs.phone.value || pageData.phone,
            email: state.inputs.email.value || pageData.email,
            webSite: state.inputs.webSite.value || pageData.webSite,
            facebook: state.inputs.facebook.value || pageData.facebook,
            twitter: state.inputs.twitter.value || pageData.twitter,
            youtube: state.inputs.youtube.value || pageData.youtube,
        }
        console.log(dataToSubmit)
        return dataToSubmit
    }

    const submit = async () => {
        try {
            console.log(state)
            const data = collectData()
            await putHandler(userState.tokens?.accessToken!, Urls.URL_PROFILE, data)
            setSuccessMessage('تعديل البيانات بنجاح')
            router.push(Routes.teacherProfile)
        } catch (error) {
            console.log(error)
            setErrorMessage('يوجد خطاء في البيانات')
        }
    }

    const cancelAction = () => {
        setWarningMessage('تم الغاء العمليه بنجاح')
        router.push(Routes.teacherProfile)
    }

    return {
        data: {
            pageData,
        },
        states: {
            loading,
            state,
        },
        actions: {
            handleInput,
            handleImageInput,
            handleDateInput,
            cancelAction,
            submit,
        },
    }
}

export default useEditProfile
