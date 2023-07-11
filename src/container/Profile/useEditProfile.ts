import Urls from "constant/urls";
import { useEffect, useState } from "react";
import { useUser } from "context/userContext";
import useRequestsHandlers from "hooks/useRequestsHandlers";
import { convertFileToBase64 } from "utils/converters";

const useEditProfile = () => {
    const { userState } = useUser()
    const [ pageData, setPageData ] = useState<any>(null)
    const { getHandler, loading } = useRequestsHandlers()
    const [ coverImage, setCoverImage ] = useState<any>(null)
    const [ profileImage, setProfileImage ] = useState<any>(null)

    useEffect(() => {
        if(userState.tokens?.accessToken) {
            console.log(userState.tokens?.accessToken)
            getPageData()
        }
    }, [userState.tokens?.accessToken])

    const getPageData = async () => {
        try {
            const response = await getHandler(userState.tokens?.accessToken!, Urls.URL_PROFILE)
            setPageData(response)
            console.log(response)
        } catch(error) {
            console.log(error)
        }
    }

    const ProfileImageHandler = async (value: any) => {
        const [fileToConvert] = value
        const convertedImage: any = await convertFileToBase64(fileToConvert)
        const image = {
            data: convertedImage,
            extension: `.${value[0].type.slice(6)}`,
        }
        console.log(image)
        setProfileImage(convertedImage)
    } 

    const CoverImageHandler = (value: string) => {
        console.log(value)
        setCoverImage(value)
    } 

    return {
        data: {
            pageData
        }, 
        states: {
            loading,
            profileImage,
            coverImage
        },
        actions: {
            ProfileImageHandler,
            CoverImageHandler,
        }
    };
}
 
export default useEditProfile;