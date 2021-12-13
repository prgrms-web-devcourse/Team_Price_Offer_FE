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
        userData: { ...state.userData, ...payload.userData },
        token: payload.token,
      }
    case LOGIN_EMAIL:
      return {
        ...state,
        userData: { ...state.userData, ...payload.userData },
        token: payload.token,
      }
    case LOGIN_KAKAO:
      return {
        ...state,
        userData: { ...state.userData, ...payload.userData },
        token: payload.token,
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
        userData: { ...state.userData, ...payload.userData },
      }
    case MODIFY_USERINFO:
      return {
        ...state,
        userData: { ...state.userData, ...payload.userData },
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
      throw new Error(`액션에 정의된 타입이 없습니다! ${type}`)
  }
}

export default AuthReducer
