import React from 'react'
import Router from 'next/router'
import { useFormik } from 'formik'
import validate from '@utils/validation'
import useStorage from '@hooks/useStorage'
import { authApi } from '@api/apis.js'
import Button from '@components/templates/Button'
import Input from '@components/templates/Input'

const LoginContent = () => {
  const { setItem } = useStorage()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: async values => {
      try {
        console.log(JSON.stringify(values))
        const { data } = await authApi.loginEmail(values)
        setItem('userToken', data.member.token)
        setItem('userData', data.member)
        Router.push(0)
      } catch (error) {
        alert('아이디 혹은 비밀번호가 맞지 않습니다.')
        return
      }
    },
  })
  const onKaKaoLogin = () => {}
  return (
    <>
      <div className="modal-header">
        <h2>로그인</h2>
        <p className="login">구매자가 제안해요, Offer!</p>
      </div>
      <div className="modal-body">
        <form onSubmit={formik.handleSubmit} className="modal-body_form">
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
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
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
            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <Button type="submit" className="modal-body_btn email">
            이메일로 로그인
          </Button>
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
