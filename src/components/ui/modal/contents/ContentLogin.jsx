import React from 'react'
import { useFormik } from 'formik'
import validate from '@utils/validation'
import { authApi } from '@api/apis.js'
import Button from '@components/templates/Button'
import Input from '@components/templates/Input'
import { useAuthContext } from '@hooks/useAuthContext'

const LoginContent = () => {
  const { handleEmailLogin, handleKakaoLogin } = useAuthContext()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: async userInfo => {
      await handleEmailLogin(userInfo)
    },
  })

  const onKaKaoLogin = async () => {
    await handleKakaoLogin()
  }

  return (
    <>
      <div className="modal-header">
        <h2>로그인</h2>
        <p className="login">구매자가 제안해요, Offer!</p>
      </div>
      <div className="modal-body">
        <form onSubmit={formik.handleSubmit} className="modal-body_form login">
          <div className="modal-body_form-input email">
            <h3>이메일</h3>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="이메일"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <div className="validation">{formik.errors.email}</div>
          </div>
          <div className="modal-body_form-input password">
            <h3>비밀번호</h3>
            <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div className="validation login-password">
              {formik.errors.password}
            </div>
          </div>
          <div className="modal-body_btn-wrapper">
            <Button type="submit" className="modal-body_btn email">
              이메일로 로그인
            </Button>
          </div>
        </form>
        <div className="modal-body_btn-wrapper">
          <Button className="modal-body_btn kakao" onClick={onKaKaoLogin}>
            카카오로 로그인
          </Button>
        </div>
      </div>
    </>
  )
}

export default LoginContent
