import React, { useCallback, useMemo } from 'react'
import useStorage from '@hooks/useStorage'
import { authApi } from '@api/apis'
import { useAsyncContext } from '@hooks/useAsyncContext'
import {
  FETCH_USER,
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
  const { handleLoadingOn, handleLoadingOff } = useAsyncContext()
  const { getItem, setItem, clear } = useStorage()

  useMemo(async () => {
    const userData = getItem('userData')
    const token = getItem('token')

    dispatch({ type: FETCH_USER, payload: { userData, token } })
  }, [])

  const handleEmailLogin = useCallback(async userInfo => {
    try {
      handleLoadingOn()
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
      handleLoadingOff()
    } catch (e) {
      alert('로그인에 실패하셨습니다!')
    }
  }, [])

  const handleKakaoLogin = useCallback(async (token, userData) => {
    try {
      handleLoadingOn()

      setItem('userData', userData)
      setItem('token', token)
      dispatch({ type: LOGIN_KAKAO, payload: { userData, token } })

      handleLoadingOff()
    } catch (e) {
      alert('카카오 로그인에 실패하셨습니다!')
    }
  }, [])

  const handleSignup = useCallback(async userInfo => {
    try {
      handleLoadingOn()

      const signupRes = await authApi.signUp(userInfo)

      if (Number(signupRes.code) !== 200) {
        alert('회원가입에 실패하셨습니다!')
        return
      }

      const loginUserInfo = {
        email: signupRes.data.member.email,
        password: userInfo.password,
      }

      await handleEmailLogin(loginUserInfo)
      handleLoadingOff()
    } catch (e) {
      alert('회원가입에 실패하셨습니다!')
    }
  }, [])

  const handleWithDrawal = useCallback(async password => {
    try {
      handleLoadingOn()
      const res = await authApi.withdrawal(password)

      if (Number(res.code) !== 200) {
        alert('회원탈퇴에 실패하셨습니다!')
        return
      }

      clear()
      dispatch({ type: WITHDRAWAL })
      handleLoadingOff()
    } catch (e) {
      alert('회원탈퇴에 실패하셨습니다!')
    }
  }, [])

  const handleLogout = useCallback(async () => {
    try {
      handleLoadingOn()
      clear()
      dispatch({ type: LOGOUT })
      alert('정상적으로 로그아웃 되었습니다!')
      handleLoadingOff()
    } catch (e) {
      alert('로그아웃에 실패하셨습니다!')
    }
  }, [])

  const handleGetUserInfo = useCallback(async () => {
    try {
      handleLoadingOn()
      const res = await authApi.getUserInfo()

      if (Number(res.code) !== 200) {
        alert('회원정보 조회에 실패하셨습니다!')
        return
      }

      const userData = res.data.member

      setItem('userData', userData)
      dispatch({ type: GET_USERINFO, payload: { userData } })
      handleLoadingOff()
    } catch (e) {
      alert('회원정보 조회에 실패하셨습니다!')
    }
  }, [])

  const handleModifyUserInfo = useCallback(async userInfo => {
    try {
      handleLoadingOn()
      const res = await authApi.modifyUserInfo(userInfo)

      if (Number(res.code) !== 200) {
        alert('회원정보 수정에 실패하셨습니다!')
        return
      }

      const userData = res.data.member

      setItem('userData', userData)
      dispatch({ type: MODIFY_USERINFO, payload: { userData } })
      handleLoadingOff()
    } catch (e) {
      alert('회원정보 수정에 실패하셨습니다!')
    }
  }, [])

  return {
    handleEmailLogin,
    handleKakaoLogin,
    handleSignup,
    handleWithDrawal,
    handleLogout,
    handleGetUserInfo,
    handleModifyUserInfo,
  }
}

export default useActions
