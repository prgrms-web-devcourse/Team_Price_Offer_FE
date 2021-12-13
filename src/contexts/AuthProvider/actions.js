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
  const { setItem, clear } = useStorage()

  const handleEmailLogin = useCallback(async userInfo => {
    try {
      dispatch({ type: LOADING_ON })
      const res = await authApi.loginEmail(userInfo)

      if (Number(res.code) !== 200) {
        alert('로그인에 실패하셨습니다!')
        return
      }

      const userData = res.data.member
      const { token } = res.data.member

      setItem('userData', userData)
      setItem('token', token)
      dispatch({ type: LOGIN_EMAIL, payload: { userData, token } })
      dispatch({ type: LOADING_OFF })
    } catch (e) {
      alert('아이디 혹은 비밀번호가 맞지 않습니다!')
    }
  }, [])

  const handleKakaoLogin = useCallback(async userInfo => {
    try {
    } catch (e) {}
  }, [])

  const handleSignup = useCallback(async userInfo => {
    try {
      dispatch({ type: LOADING_ON })
      const res = await authApi.signUp(userInfo)

      if (Number(res.code) !== 200) {
        alert('회원가입에 실패하셨습니다!')
        return
      }

      const userData = res.data.member
      const { token } = res.data.member

      setItem('userData', userData)
      setItem('token', token)
      dispatch({ type: SIGNUP, payload: { userData, token } })
      dispatch({ type: LOADING_OFF })
    } catch (e) {
      alert('회원가입에 실패하셨습니다!')
    }
  }, [])

  const handleWithDrawal = useCallback(async password => {
    try {
      dispatch({ type: LOADING_ON })
      const res = await authApi.withdrawal(password)

      if (Number(res.code) !== 200) {
        alert('회원탈퇴에 실패하셨습니다!')
        return
      }

      clear()
      dispatch({ type: WITHDRAWAL })
      dispatch({ type: LOADING_OFF })
    } catch (e) {
      alert('회원탈퇴에 실패하셨습니다!')
    }
  }, [])

  const handleLogout = useCallback(async () => {
    try {
      dispatch({ type: LOADING_ON })
      clear()
      dispatch({ type: LOGOUT })
      dispatch({ type: LOADING_OFF })
    } catch (e) {
      alert('로그아웃에 실패하셨습니다!')
    }
  }, [])

  const handleGetUserInfo = useCallback(async () => {
    try {
      dispatch({ type: LOADING_ON })
      const res = await authApi.getUserInfo()

      if (Number(res.code) !== 200) {
        alert('회원정보 조회에 실패하셨습니다!')
        return
      }

      const userData = res.data.member
      const { token } = res.data.member

      setItem('userData', userData)
      setItem('token', token)
      dispatch({ type: GET_USERINFO, payload: { userData, token } })
      dispatch({ type: LOADING_OFF })
    } catch (e) {
      alert('회원정보 조회에 실패하셨습니다!')
    }
  }, [])

  const handleModifyUserInfo = useCallback(async userInfo => {
    try {
      dispatch({ type: LOADING_ON })
      const res = await authApi.modifyUserInfo(userInfo)

      if (Number(res.code) !== 200) {
        alert('회원정보 수정에 실패하셨습니다!')
        return
      }

      const userData = res.data.member
      const { token } = res.data.member
      dispatch({ type: MODIFY_USERINFO, payload: { userData, token } })
      dispatch({ type: LOADING_OFF })
    } catch (e) {
      alert('회원정보 수정에 실패하셨습니다!')
    }
  }, [])

  const handleLoadingOn = useCallback(async () => {
    dispatch({ type: LOADING_ON })
  }, [])

  const handleLoadingOff = useCallback(async () => {
    dispatch({ type: LOADING_OFF })
  }, [])

  return {
    handleEmailLogin,
    handleKakaoLogin,
    handleSignup,
    handleWithDrawal,
    handleLogout,
    handleGetUserInfo,
    handleModifyUserInfo,
    handleLoadingOn,
    handleLoadingOff,
  }
}

export default useActions
