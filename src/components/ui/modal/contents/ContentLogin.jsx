import React, { useState } from 'react'
import Router from "next/router";
import { useFormik } from 'formik'
import validate from '@utils/validation'
import useStorage from '@utils/storage.js'
import {authApi} from '@api/apis.js'
import Button from '@components/templates/Button'
import ModalSignup from '../ModalSignup'


const LoginContent = () => {
  const { setItem,getItem,removeItem,clear } = useStorage();

  const [visible, setVisible] = useState(false) // 모달의 초기값 false

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit:  (values) => {
      try {
        console.log(values)
        // data = authApi.loginEmail(values)
        // setItem('userToken',data.token)
        const userData = {
            id: 1,
            token: "jwt.token.here",
            email: "awesomeo184@gmail.com",
            appleLevel: 1,
            nickname: "awesomeo184",
            profileImage: "null",
            address: "동대문구 회기동"
        }
        setItem('userData',userData)
        setItem('userToken', 'testToken')
        Router.push("/")
      }
      catch (error) {
        console.log(error.response.data)
        alert('error.response.data')
        // if (error.response.data === 400) {
        alert('아이디 혹은 비밀번호가 맞지 않습니다.')
        return
      }          
    }
  })
  const onKaKaoLogin = () => {
    authApi.loginEmail(values)
  }
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
            <input
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
            <input
              type="text"
              id="password"
              name="password"
              placeholder="비밀번호"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          </div>
          <Button type="submit" className="modal-body_btn email">
            이메일로 로그인
          </Button>
        </form>
        <div className="modal-body_btn-wrapper">
          <Button className="modal-body_btn kakao" onClick={onKaKaoLogin}>카카오로 로그인</Button>
        </div>
      </div>
      <div className="modal-footer">
        <p>
          아직 회원이 아니신가요? <span style={{cursor:"pointer"}}onClick={() => setVisible(true)}>회원가입</span>
        </p>
        <ModalSignup visible={visible} onClose={() => setVisible(false)}/>
        <p>
          비밀번호를 잊으셨나요? <span>비밀번호 찾기</span>
        </p>
      </div>
    </>
  )

}

export default LoginContent
