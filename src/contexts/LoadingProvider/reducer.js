import { LOADING_ON, LOADING_OFF } from './types'

const LoadingReducer = (state, { type }) => {
  switch (type) {
    case LOADING_ON:
      return {
        ...state,
        isLoading: true,
      }
    case LOADING_OFF:
    default:
      return {
        ...state,
        isLoading: false,
      }
  }
}

export default LoadingReducer
