import useStorage from '@utils/storage.js'

const { getItem } = useStorage()

const convertResponse = res => {
  const response = {
    code: '',
    message: '',
    data: null,
  }

  try {
    if (!res.data.code) {
      throw new Error('404 Error')
    }

    if (Number(res.data.code) !== 200) {
      alert(res.data.message)
    }

    response.code = res.data.code
    response.message = res.data.message
    response.data = res.data.data
  } catch (e) {
    response.code = '600'
    response.message = '알 수 없는 에러가 발생했습니다!'
    response.data = null

    alert(response.message)
  }

  return response
}

export const setInterceptors = (withAuth, instance) => {
  if (withAuth) {
    instance.interceptors.request.use(
      config => {
        const token = getItem('userToken')

        config.headers = {
          token: token || null,
        }
        return config
      },
      error => convertResponse(error.response),
    )
  }

  instance.interceptors.response.use(
    config => convertResponse(config),
    error => {
      Promise.reject(error.response)
      return convertResponse(error.response)
    },
  )

  return instance
}
