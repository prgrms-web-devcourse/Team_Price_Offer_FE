import React from 'react'
import {
  SIGNUP,
  WITHDRAWAL,
  LOGIN_EMAIL,
  LOGIN_KAKAO,
  LOGOUT,
  GET_USERINFO,
  MODIFY_USERINFO,
  LOADING_ON,
  LOADING_OFF,
} from './types'

const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      return {
        ...state,
        userData: {},
        token: '',
      }
    case LOGIN_EMAIL:
      return {
        ...state,
        userData: {},
        token: '',
      }
    case LOGIN_KAKAO:
      return {
        ...state,
        userData: {},
        token: '',
      }
    case WITHDRAWAL:
    case LOGOUT:
      return {
        userData: null,
        token: null,
      }
    case GET_USERINFO:
      return {
        ...state,
        userData: {},
        token: null,
      }
    case MODIFY_USERINFO:
      return {
        ...state,
        userData: {},
      }
    case LOADING_ON:
      return {
        ...state,
        isLoading: true,
      }
    case LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

export default AuthReducer
