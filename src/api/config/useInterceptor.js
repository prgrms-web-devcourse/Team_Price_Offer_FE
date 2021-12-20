import React, { useCallback } from 'react'
import useStorage from '@hooks/useStorage'
import { useLoadingContext } from '@hooks/useLoadingContext'

const useInterceptor = () => {
  const { getItem } = useStorage()
  const { handleLoadingOn, handleLoadingOff } = useLoadingContext()

  const convertResponse = useCallback(res => {
    const response = {
      code: '',
      message: '',
      data: null,
    }

    try {
      if (!res.data.code) {
        throw new Error('404 Error')
      }

      response.code = res.data.code
      response.message = res.data.message
      response.data = res.data.data
    } catch (e) {
      response.code = '600'
      response.message = '알 수 없는 에러가 발생했습니다!'
      response.data = null
    }

    return response
  }, [])

  const setInterceptors = useCallback((withAuth, instance) => {
    if (withAuth) {
      instance.interceptors.request.use(
        config => {
          const token = getItem('token')?.replaceAll('"', '') || null

          config.headers = {
            token: token || null,
          }

          handleLoadingOn()
          return config
        },
        error => convertResponse(error.response),
      )
    } else {
      instance.interceptors.request.use(
        config => {
          handleLoadingOn()
          return config
        },
        error => convertResponse(error.response),
      )
    }

    instance.interceptors.response.use(
      config => {
        handleLoadingOff()
        return convertResponse(config)
      },
      error => {
        Promise.reject(error.response)
        return convertResponse(error.response)
      },
    )

    return instance
  }, [])

  return { convertResponse, setInterceptors }
}

export default useInterceptor
