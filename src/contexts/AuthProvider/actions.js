import React, { useCallback, useMemo } from 'react'
import useStorage from '@hooks/useStorage'
import { authApi } from '@api/apis'
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
  const { getItem, setItem, clear } = useStorage()

  useMemo(async () => {
    const userData = getItem('userData')
    const token = getItem('token')

    dispatch({ type: FETCH_USER, payload: { userData, token } })
  }, [])

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
      alert('로그인에 실패하셨습니다!')
    }
  }, [])

  const handleKakaoLogin = useCallback(async () => {
    try {
      const { KAKAO_API_HOST } = process.env
      const { KAKAO_API_KEY } = process.env
      const { KAKAO_REDIRECT_URI } = process.env

      const redirectUrl = `${KAKAO_API_HOST}/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`
      window.location.href = redirectUrl
    } catch (e) {
      alert('카카오 로그인에 실패하셨습니다!')
    }
  }, [])

  const handleSignup = useCallback(async userInfo => {
    try {
      dispatch({ type: LOADING_ON })
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
      alert('정상적으로 로그아웃 되었습니다!')
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

      setItem('userData', userData)
      dispatch({ type: GET_USERINFO, payload: { userData } })
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

      setItem('userData', userData)
      dispatch({ type: MODIFY_USERINFO, payload: { userData } })
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
