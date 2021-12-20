import React, { useMemo } from 'react'
import axios from 'axios'
import useInterceptor from '@api/config/useInterceptor'
import { SET_AXIOS_INSTANCE } from './types'

const useActions = dispatch => {
  const { setInterceptors } = useInterceptor()

  useMemo(() => {
    const BASE_API_URL = `${process.env.BASE_API_HOST}/api/v1`

    const create = (url, options) => {
      const instance = axios.create({
        baseURL: url,
        headers: {
          'Content-Type': 'application/json',
        },
        ...options,
      })
      setInterceptors(false, instance)
      return instance
    }

    const createWithAuth = (url, options) => {
      const instance = axios.create({
        baseURL: url,
        headers: {
          'Content-Type': 'application/json',
        },
        ...options,
      })
      setInterceptors(true, instance)
      return instance
    }

    const instance = create(BASE_API_URL)
    const auth = createWithAuth(BASE_API_URL)

    dispatch({ type: SET_AXIOS_INSTANCE, payload: { instance, auth } })
  }, [])
}

export default useActions
