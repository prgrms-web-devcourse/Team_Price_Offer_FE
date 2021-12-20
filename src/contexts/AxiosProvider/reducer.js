import { SET_AXIOS_INSTANCE } from './types'

const AxiosReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_AXIOS_INSTANCE:
    default:
      return {
        ...state,
        ...payload,
      }
  }
}

export default AxiosReducer
