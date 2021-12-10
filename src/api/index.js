import axios from 'axios'
import { setInterceptors } from './config/interceptors'

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

export const instance = create(BASE_API_URL)
export const auth = createWithAuth(BASE_API_URL)
