import React, { useCallback } from 'react'
import useStorage from '@hooks/useStorage'
import { authApi } from '@api/apis'
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

const useActions = dispatch => {
  const handleEmailLogin = useCallback(async userInfo => {
    try {
    } catch (e) {}
  }, [])

  const handleKakaoLogin = useCallback(async userInfo => {
    try {
    } catch (e) {}
  }, [])

  const handleSignup = useCallback(async userInfo => {
    try {
    } catch (e) {}
  }, [])

  const handleWithDrawal = useCallback(async userInfo => {
    try {
    } catch (e) {}
  }, [])

  const handleLogout = useCallback(async userInfo => {
    try {
    } catch (e) {}
  }, [])

  const handleGetUserInfo = useCallback(async userInfo => {
    try {
    } catch (e) {}
  }, [])

  const handleLoadingOn = useCallback(async () => {
    dispatch({ type: LOADING_ON, payload: { isLoading: true } })
  }, [])

  const handleLoadingOff = useCallback(async () => {
    dispatch({ type: LOADING_OFF, payload: { isLoading: false } })
  }, [])

  return {
    handleEmailLogin,
    handleKakaoLogin,
    handleSignup,
    handleWithDrawal,
    handleLogout,
    handleGetUserInfo,
    handleLoadingOn,
    handleLoadingOff,
  }
}

export default useActions
