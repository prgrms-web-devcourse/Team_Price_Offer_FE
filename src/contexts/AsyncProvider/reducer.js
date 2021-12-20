import { LOADING_ON, LOADING_OFF } from './type'

const AsyncReducer = (state, { type }) => {
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

export default AsyncReducer
