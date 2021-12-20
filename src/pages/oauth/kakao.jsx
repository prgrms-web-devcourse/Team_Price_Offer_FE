import { authApi } from '@api/apis'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useAuthContext } from '@hooks/useAuthContext'
import useStorage from '@hooks/useStorage'

const { getItem, setItem } = useStorage()

const KakaoLoginPage = () => {
  const { handleKakaoLogin } = useAuthContext()

  const router = useRouter()
  const { token } = router.query

  setItem('token', token)

  useEffect(async () => {
    if (getItem('token') !== 'undefined') {
      const res = await authApi.getUserInfo()
      handleKakaoLogin(token, res.data.member)
      if (
        getItem('token') !== 'undefined' &&
        getItem('userData') !== 'undefined'
      ) {
        router.push('/')
      }
    }
  })

  return ''
}

export default KakaoLoginPage
