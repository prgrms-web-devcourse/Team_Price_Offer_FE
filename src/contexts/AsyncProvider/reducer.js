import { LOADING_ON, LOADING_OFF } from './type'

const AsyncReducer = (_, type) => {
  switch (type) {
    case LOADING_ON:
      return {
        isLoading: true,
      }
    case LOADING_OFF:
    default:
      return {
        isLoading: false,
      }
  }
}

export default AsyncReducer
