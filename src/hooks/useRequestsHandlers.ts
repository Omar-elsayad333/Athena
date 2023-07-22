import { useState } from 'react'
import { axiosInstance, createAxiosInstance } from 'config/axios'

const useRequestsHandlers = () => {
    const [loading, setLoading] = useState<boolean>(false)

    const postHandler = async (token: string, path: string, data: any, noLoading?: boolean) => {
        const axiosInstanceWithToken = createAxiosInstance(token)
        try {
            !noLoading && setLoading(true) 
            const response = await axiosInstanceWithToken.post(path, data)
            return response.data
        } catch (error: any) {
            throw Error(error)
        } finally {
            !noLoading && setLoading(false)
        }
    }

    const postHandlerById = async (id: any, token: string, path: string, data?: any, noLoading?: boolean) => {
        const axiosInstanceWithToken = createAxiosInstance(token)
        try {
            !noLoading && setLoading(true)
            const response = await axiosInstanceWithToken.post(`${path}/${id}`, data)
            return response.data
        } catch (error: any) {
            throw Error(error)
        } finally {
            !noLoading && setLoading(false)
        }
    }

    const getHandler = async (token: string, path: string, noLoading?: boolean) => {
        const axiosInstanceWithToken = createAxiosInstance(token)
        try {
            !noLoading && setLoading(true)
            const response = await axiosInstanceWithToken.get(path)
            return response.data
        } catch (error: any) {
            throw Error(error)
        } finally {
            !noLoading && setLoading(false)
        }
    }

    const getHandlerById = async (id: any, token: string, path: string, noLoading?: boolean) => {
        const axiosInstanceWithToken = createAxiosInstance(token)
        try {
            !noLoading && setLoading(true)
            const response = await axiosInstanceWithToken.get(`${path}/${id}`)
            return response.data
        } catch (error: any) {
            throw error
        } finally {
            !noLoading && setLoading(false)
        }
    }

    const publicGetHandler = async (path: string, noLoading?: boolean) => {
        try {
            !noLoading && setLoading(true)
            const response = await axiosInstance.get(path)
            return response.data
        } catch (error: any) {
            throw Error(error)
        } finally {
            !noLoading && setLoading(false)
        }
    }

    const putHandler = async (token: string, path: string, data?: any, noLoading?: boolean) => {
        const axiosInstanceWithToken = createAxiosInstance(token)
        try {
            !noLoading && setLoading(true)
            const response = await axiosInstanceWithToken.put(`${path}`, data)
            return response.data
        } catch (error: any) {
            throw Error(error)
        } finally {
            !noLoading && setLoading(false)
        }
    }

    const putHandlerById = async (id: any, token: string, path: string, data?: any, noLoading?: boolean) => {
        const axiosInstanceWithToken = createAxiosInstance(token)
        try {
            !noLoading && setLoading(true)
            const response = await axiosInstanceWithToken.put(`${path}/${id}`, data)
            return response.data
        } catch (error: any) {
            throw Error(error)
        } finally {
            !noLoading && setLoading(false)
        }
    }

    const deleteHandler = async (id: any, token: string, path: string, noLoading?: boolean) => {
        const axiosInstanceWithToken = createAxiosInstance(token)
        try {
            !noLoading && setLoading(true)
            const response = await axiosInstanceWithToken.delete(`${path}/${id}`)
            return response.data
        } catch (error: any) {
            throw Error(error)
        } finally {
            !noLoading && setLoading(false)
        }
    }

    return {
        loading,
        postHandler,
        publicGetHandler,
        postHandlerById,
        getHandler,
        getHandlerById,
        putHandler,
        putHandlerById,
        deleteHandler,
    }
}

export default useRequestsHandlers
