import { useState } from 'react'
import { axiosInstance, createAxiosInstance } from 'config/axios'

const useRequestsHandlers = () => {
    const [loading, setLoading] = useState<boolean>(false)

    const postHandler = async (token: string, path: string, data: any) => {
        const axiosInstanceWithToken = createAxiosInstance(token)
        try {
            setLoading(true)
            const response = await axiosInstanceWithToken.post(path, data)
            return response.data
        } catch (error: any) {
            throw Error(error)
        } finally {
            setLoading(false)
        }
    }

    const postHandlerById = async (id: any, token: string, path: string, data?: any) => {
        const axiosInstanceWithToken = createAxiosInstance(token)
        try {
            setLoading(true)
            const response = await axiosInstanceWithToken.post(`${path}/${id}`, data)
            return response.data
        } catch (error: any) {
            throw Error(error)
        } finally {
            setLoading(false)
        }
    }

    const getHandler = async (token: string, path: string) => {
        const axiosInstanceWithToken = createAxiosInstance(token)
        try {
            setLoading(true)
            const response = await axiosInstanceWithToken.get(path)
            return response.data
        } catch (error: any) {
            throw Error(error)
        } finally {
            setLoading(false)
        }
    }

    const getHandlerById = async (id: any, token: string, path: string) => {
        const axiosInstanceWithToken = createAxiosInstance(token)
        try {
            setLoading(true)
            const response = await axiosInstanceWithToken.get(`${path}/${id}`)
            return response.data
        } catch (error: any) {
            throw Error(error)
        } finally {
            setLoading(false)
        }
    }

    const publicGetHandler = async (path: string) => {
        try {
            const response = await axiosInstance.get(path)
            return response.data
        } catch (error: any) {
            throw Error(error)
        } finally {
            setLoading(false)
        }
    }

    const putHandler = async (token: string, path: string, data?: any) => {
        const axiosInstanceWithToken = createAxiosInstance(token)
        try {
            setLoading(true)
            const response = await axiosInstanceWithToken.put(`${path}`, data)
            return response.data
        } catch (error: any) {
            throw Error(error)
        } finally {
            setLoading(false)
        }
    }

    const putHandlerById = async (id: any, token: string, path: string, data?: any) => {
        const axiosInstanceWithToken = createAxiosInstance(token)
        try {
            setLoading(true)
            const response = await axiosInstanceWithToken.put(`${path}/${id}`, data)
            return response.data
        } catch (error: any) {
            throw Error(error)
        } finally {
            setLoading(false)
        }
    }

    const deleteHandler = async (id: any, token: string, path: string) => {
        const axiosInstanceWithToken = createAxiosInstance(token)
        try {
            setLoading(true)
            const response = await axiosInstanceWithToken.delete(`${path}/${id}`)
            return response.data
        } catch (error: any) {
            throw Error(error)
        } finally {
            setLoading(false)
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
